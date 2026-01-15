# Phase 1 Implementation Guide - Week 1-2

## Overview

Phase 1 focuses on foundational improvements that don't disrupt existing functionality but establish patterns for future scalability. This phase enables safer refactoring and clearer API contracts.

**Goals:**
- Establish shared contracts between frontend and backend
- Implement schema-based validation layer
- Refactor one controller endpoint as reference
- Clarify npm scripts for team clarity

**Time Estimate:** 3-5 days  
**Risk Level:** Low (all changes are additive)

---

## Task 1: Introduce Shared Contracts Package

### Objective
Create a `packages/contracts` directory with TypeScript interfaces that both frontend and backend can use.

### Structure
```
packages/
├── contracts/
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── index.ts
│   │   ├── api-response.contract.ts
│   │   ├── problem.contract.ts
│   │   ├── submission.contract.ts
│   │   └── execution.contract.ts
│   └── dist/
```

### Implementation Steps

#### Step 1a: Create packages directory
```bash
mkdir -p packages/contracts/src
```

#### Step 1b: Create package.json for contracts
```json
{
  "name": "@js-practice/contracts",
  "version": "1.0.0",
  "description": "Shared type contracts for JS Practice Platform",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc"
  },
  "devDependencies": {
    "typescript": "^5.3.3"
  }
}
```

#### Step 1c: Create tsconfig.json for contracts
```json
{
  "extends": "../../backend/tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "declaration": true,
    "declarationMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["dist", "node_modules"]
}
```

#### Step 1d: Create contract files

**api-response.contract.ts**
```typescript
/**
 * Standard API Response wrapper for all endpoints
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  message?: string;
  timestamp: string;
  details?: Record<string, any>;
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

/**
 * Paginated response
 */
export interface ApiPaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: PaginationMeta;
}
```

**problem.contract.ts**
```typescript
/**
 * Problem example test case
 */
export interface ProblemExample {
  input: string;
  output: string;
  explanation?: string;
}

/**
 * Problem test case for validation
 */
export interface ProblemTestCase {
  input: string;
  expectedOutput: string;
  isVisible: boolean;
}

/**
 * Core Problem definition
 */
export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  examples: ProblemExample[];
  constraints?: string[];
  hints?: string[];
  functionSignature?: string;
  defaultCode?: string;
  testCases?: ProblemTestCase[];
  topics?: string[];
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Problems list with filtering
 */
export interface ProblemFilter {
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  search?: string;
  page?: number;
  limit?: number;
}
```

**submission.contract.ts**
```typescript
/**
 * Code submission request
 */
export interface SubmissionRequest {
  code: string;
  problemId?: string;
  language?: 'javascript' | 'typescript';
  input?: string;
}

/**
 * Validation error details
 */
export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}

/**
 * Code execution result
 */
export interface ExecutionResult {
  success: boolean;
  output?: string;
  error?: string;
  errorType?: 'timeout' | 'syntax' | 'runtime' | 'validation';
  executionTime: number;
  memoryUsed?: number;
  stderr?: string;
}

/**
 * Submission evaluation result
 */
export interface SubmissionResult extends ExecutionResult {
  problemId: string;
  testsPassed?: number;
  totalTests?: number;
  status: 'pending' | 'accepted' | 'rejected' | 'error';
  feedback?: string;
}

/**
 * Submission record in database
 */
export interface Submission {
  id: string;
  userId?: string;
  problemId: string;
  code: string;
  language: string;
  status: 'pending' | 'accepted' | 'rejected' | 'error';
  output?: string;
  error?: string;
  executionTime: number;
  memoryUsed?: number;
  testsPassed?: number;
  totalTests?: number;
  createdAt: string;
  updatedAt: string;
}
```

**execution.contract.ts**
```typescript
/**
 * Sandbox configuration for execution
 */
export interface SandboxConfig {
  timeout: number;
  memoryLimit?: number;
  globals?: Record<string, any>;
}

/**
 * Code execution context
 */
export interface ExecutionContext {
  code: string;
  language: string;
  input?: string;
  sandbox?: SandboxConfig;
}

/**
 * Execution metrics for observability
 */
export interface ExecutionMetrics {
  executionTime: number;
  memoryUsed: number;
  outputLength: number;
  errorType?: string;
  infiniteLoopDetected: boolean;
  timestamp: string;
}
```

**index.ts**
```typescript
// Re-export all contracts
export * from './api-response.contract';
export * from './problem.contract';
export * from './submission.contract';
export * from './execution.contract';
```

### Usage in Backend
```typescript
// backend/src/controllers/submission.controller.ts
import { SubmissionRequest, ExecutionResult } from '@js-practice/contracts';

async handleRun(req: Request<{}, {}, SubmissionRequest>) {
  const validatedInput: SubmissionRequest = req.body;
  const result: ExecutionResult = await this.executionService.run(validatedInput.code);
  return result;
}
```

### Usage in Frontend (JSDoc)
```javascript
// frontend/src/services/api.js
import { SubmissionRequest, ExecutionResult } from '@js-practice/contracts';

/**
 * Execute user code
 * @param {SubmissionRequest} submission - Code to execute
 * @returns {Promise<ExecutionResult>} Execution result
 */
async function runCode(submission) {
  const response = await fetch('/api/submissions/run', {
    method: 'POST',
    body: JSON.stringify(submission)
  });
  return response.json();
}
```

---

## Task 2: Add Validation Schema Layer

### Objective
Create a validation middleware using Zod (or custom validator) that enforces contracts.

### Installation
```bash
npm install zod
npm install --save-dev @types/express
```

### Structure
```
backend/src/
├── validators/
│   ├── index.ts
│   ├── submission.schema.ts
│   ├── problem.schema.ts
│   └── middleware.ts
```

### Implementation Steps

#### Step 2a: Create validation schemas

**backend/src/validators/submission.schema.ts**
```typescript
import { z } from 'zod';
import { SubmissionRequest } from '@js-practice/contracts';

/**
 * Submission request validation schema
 */
export const submissionRequestSchema = z.object({
  code: z.string()
    .min(1, 'Code cannot be empty')
    .max(100000, 'Code exceeds maximum length'),
  
  problemId: z.string()
    .uuid('Invalid problem ID format')
    .optional(),
  
  language: z.enum(['javascript', 'typescript'])
    .default('javascript'),
  
  input: z.string()
    .max(10000, 'Input exceeds maximum length')
    .optional()
}) as z.ZodSchema<SubmissionRequest>;

/**
 * Problem filter validation schema
 */
export const problemFilterSchema = z.object({
  category: z.string().optional(),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
  search: z.string().optional(),
  page: z.number().min(1).default(1).optional(),
  limit: z.number().min(1).max(100).default(20).optional()
});
```

**backend/src/validators/problem.schema.ts**
```typescript
import { z } from 'zod';

export const problemExampleSchema = z.object({
  input: z.string(),
  output: z.string(),
  explanation: z.string().optional()
});

export const problemSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(200),
  description: z.string().min(1),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  category: z.string(),
  examples: z.array(problemExampleSchema),
  constraints: z.array(z.string()).optional(),
  hints: z.array(z.string()).optional(),
  functionSignature: z.string().optional(),
  defaultCode: z.string().optional(),
  topics: z.array(z.string()).optional()
});
```

#### Step 2b: Create validation middleware

**backend/src/validators/middleware.ts**
```typescript
import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { ApiResponse, ValidationError } from '@js-practice/contracts';

/**
 * Validation middleware factory
 * @param schema Zod schema to validate against
 * @param source Request property to validate (body, query, params)
 */
export function validate(schema: ZodSchema, source: 'body' | 'query' | 'params' = 'body') {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req[source];
      const validated = await schema.parseAsync(data);
      req[source] = validated;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const validationErrors: ValidationError[] = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
          value: err.code
        }));

        const response: ApiResponse<null> = {
          success: false,
          error: 'Validation failed',
          code: 'VALIDATION_ERROR',
          timestamp: new Date().toISOString(),
          details: {
            errors: validationErrors
          }
        };

        return res.status(400).json(response);
      }

      next(error);
    }
  };
}

/**
 * Extended Request type with validated data
 */
export type ValidatedRequest<T> = Request & { body: T };
```

#### Step 2c: Create index for easier imports

**backend/src/validators/index.ts**
```typescript
export { validate, ValidatedRequest } from './middleware';
export { submissionRequestSchema, problemFilterSchema } from './submission.schema';
export { problemSchema, problemExampleSchema } from './problem.schema';
```

---

## Task 3: Refactor One Controller Endpoint

### Objective
Refactor the `/api/submissions/run` endpoint as a reference implementation.

### Before (Current State)
```typescript
// backend/src/controllers/submission.controller.ts
async runCode(req: Request, res: Response) {
  try {
    const { code, problemId, input } = req.body;
    
    // Validation here
    if (!code) {
      return res.status(400).json({ error: 'Code required' });
    }
    
    // Business logic here
    const result = await this.codeRunner.run(code);
    
    res.json({ success: true, output: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

### After (Refactored)
```typescript
// backend/src/controllers/submission.controller.ts
import { Request, Response } from 'express';
import { SubmissionRequest, ExecutionResult, ApiResponse } from '@js-practice/contracts';
import { ValidatedRequest } from '../validators';

export class SubmissionController {
  constructor(
    private submissionService: SubmissionService,
    private logger: Logger
  ) {}

  /**
   * Run code without submission
   * Validation handled by middleware
   */
  async runCode(req: ValidatedRequest<SubmissionRequest>, res: Response): Promise<void> {
    this.logger.info('Running code', { 
      problemId: req.body.problemId, 
      language: req.body.language 
    });

    try {
      // Input is already validated by middleware
      const result = await this.submissionService.runCode(req.body);
      
      const response: ApiResponse<ExecutionResult> = {
        success: true,
        data: result,
        message: 'Code executed successfully',
        timestamp: new Date().toISOString()
      };

      res.status(200).json(response);
    } catch (error) {
      this.logger.error('Code execution failed', { error });
      
      const response: ApiResponse<null> = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        code: 'EXECUTION_ERROR',
        timestamp: new Date().toISOString()
      };

      res.status(500).json(response);
    }
  }
}
```

### Updated Service Layer
```typescript
// backend/src/services/submission.service.ts
import { SubmissionRequest, ExecutionResult } from '@js-practice/contracts';
import { ExecutionService } from './execution.service';

export class SubmissionService {
  constructor(
    private executionService: ExecutionService,
    private logger: Logger
  ) {}

  /**
   * Execute code and return result
   */
  async runCode(request: SubmissionRequest): Promise<ExecutionResult> {
    const startTime = Date.now();

    try {
      const result = await this.executionService.run(
        request.code,
        request.language || 'javascript',
        request.input
      );

      return {
        ...result,
        executionTime: Date.now() - startTime
      };
    } catch (error) {
      this.logger.error('Execution error', { error, request });
      throw error;
    }
  }
}
```

### Updated Routes
```typescript
// backend/src/routes/submissions.routes.ts
import { Router } from 'express';
import { submissionRequestSchema, validate } from '../validators';
import { SubmissionController } from '../controllers/submission.controller';

const router = Router();
const controller = new SubmissionController(submissionService, logger);

/**
 * POST /api/submissions/run
 * Execute code without persistent submission
 */
router.post('/run',
  validate(submissionRequestSchema, 'body'),  // Validation middleware
  (req, res) => controller.runCode(req, res)
);

export default router;
```

---

## Task 4: Update npm Scripts

### Objective
Make npm scripts clearer and more intentional.

### Current Scripts
```json
{
  "dev": "concurrently \"npm run build:ejs\" \"npm run dev --workspace=frontend\" \"npm run dev --workspace=backend\"",
  "dev:frontend": "npm run build:ejs && npm run dev --workspace=frontend",
  "dev:backend": "npm run dev --workspace=backend"
}
```

### Improved Scripts
```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:templates\" \"npm run dev:ui\" \"npm run dev:api\"",
    "dev:ui": "npm run dev --workspace=frontend",
    "dev:api": "npm run dev --workspace=backend",
    "dev:templates": "nodemon -e ejs --watch frontend/src/templates -x 'npm run build:templates'",
    
    "build": "npm run build:templates && npm run build:ui && npm run build:api",
    "build:templates": "node frontend/build.js",
    "build:ui": "npm run build --workspace=frontend",
    "build:api": "npm run build --workspace=backend",
    
    "test": "npm run test:api && npm run test:ui",
    "test:api": "npm run test --workspace=backend",
    "test:ui": "echo 'Frontend tests not yet configured'",
    
    "lint": "npm run lint --workspace=backend",
    "lint:fix": "npm run lint:fix --workspace=backend",
    
    "check": "npm run lint && npm run test",
    
    "start": "npm run start:api",
    "start:api": "npm run start --workspace=backend",
    
    "contracts:build": "npm run build --workspace=packages/contracts"
  }
}
```

### Script Grouping Legend
- `dev:*` - Development commands (hot reload)
- `build:*` - Build commands
- `test:*` - Test commands
- `lint:*` - Linting commands
- `start:*` - Production start commands
- `check` - Pre-commit verification

---

## Verification Checklist

### Contracts Package
- [ ] Created `packages/contracts/` directory
- [ ] Created `packages/contracts/package.json`
- [ ] Created all contract files (5 files)
- [ ] Contracts export from `index.ts`
- [ ] Root `package.json` includes contracts in workspaces

### Validation Layer
- [ ] Created `backend/src/validators/` directory
- [ ] Created validation schemas (2 files)
- [ ] Created middleware factory
- [ ] Middleware properly typed
- [ ] Index file exports all validators

### Controller Refactor
- [ ] Controller only calls service
- [ ] Service contains business logic
- [ ] Routes use validation middleware
- [ ] Proper error handling with ApiResponse
- [ ] Logging added to service layer

### npm Scripts
- [ ] Updated root `package.json`
- [ ] Scripts follow naming convention
- [ ] Help documentation included
- [ ] Tested locally: `npm run dev`
- [ ] Tested locally: `npm run build`
- [ ] Tested locally: `npm run check`

---

## Testing Instructions

### 1. Verify Contracts Package
```bash
cd packages/contracts
npm install
npm run build
# Should generate dist/ with .d.ts files
```

### 2. Verify Validation Middleware
```bash
npm run dev:api
# Make POST request to /api/submissions/run with invalid data
curl -X POST http://localhost:5000/api/submissions/run \
  -H "Content-Type: application/json" \
  -d '{"code": ""}'
# Should return 400 with validation errors
```

### 3. Verify Controller Refactor
```bash
# Valid request
curl -X POST http://localhost:5000/api/submissions/run \
  -H "Content-Type: application/json" \
  -d '{"code": "console.log(123)"}'
# Should return 200 with ApiResponse format
```

### 4. Verify npm Scripts
```bash
npm run dev          # Should run all 3 watchers
npm run build        # Should build everything
npm run test:api     # Should run backend tests
npm run check        # Should lint and test
```

---

## Integration Points

### Frontend Updates Needed (Next Phase)
```javascript
// frontend/src/services/api.js
import { SubmissionRequest, ExecutionResult } from '@js-practice/contracts';

// Update JSDoc type hints
/**
 * @type {(req: SubmissionRequest) => Promise<ExecutionResult>}
 */
async function runCode(code, language) {
  // Implementation
}
```

### Backend Updates Needed
- [ ] Update all existing routes to use validation middleware
- [ ] Update all controllers to follow refactored pattern
- [ ] Add ExecutionService if not exists
- [ ] Add Logger utility if not exists

---

## Rollback Plan

If issues arise:

1. **Revert contracts package**: `rm -rf packages/contracts`
2. **Revert validation layer**: `git checkout backend/src/validators/`
3. **Revert controller**: Keep old version, create new endpoint alongside
4. **Revert scripts**: Keep both old and new script names

---

## Success Criteria

✅ Phase 1 is complete when:
1. Contracts package builds without errors
2. Backend TypeScript compiles with contracts imported
3. Validation middleware catches invalid requests
4. Refactored endpoint follows ApiResponse format
5. All npm scripts work as documented
6. Zero breaking changes to existing API endpoints
7. Team agrees on patterns for future refactoring

---

## Next Steps (Phase 2)

After Phase 1 approval:
- Create execution subsystem folder structure
- Implement provider pattern for code execution
- Promote pages → feature modules
- Add state.dispatch() pattern to frontend
