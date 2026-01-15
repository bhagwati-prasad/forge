# Migration Guide: JS Practice Platform Restructure

## Overview
This guide walks you through migrating the current flat project structure to a professional, scalable architecture with separated frontend and Node.js/TypeScript backend.

## New Project Structure

```
js-practice/
├── README.md                          # Root documentation
├── .gitignore                         # Git ignore patterns
├── package.json                       # Root package.json (workspace)
│
├── frontend/                          # Client application
│   ├── public/                        # Static assets
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── favicon-96x96.png
│   │   ├── apple-touch-icon.png
│   │   ├── site.webmanifest
│   │   └── img/                       # Images folder
│   │
│   ├── src/                           # Source code
│   │   ├── pages/                     # Complete web pages
│   │   │   ├── index.html             # Main practice page
│   │   │   ├── playground.html        # Playground page
│   │   │   └── benchmark.html         # Benchmark tool page
│   │   │
│   │   ├── components/                # Reusable UI components
│   │   │   ├── leftSidebar/
│   │   │   │   ├── leftSidebar.js
│   │   │   │   ├── leftSidebar.css
│   │   │   │   └── README.md
│   │   │   ├── rightSidebar/
│   │   │   └── modal/
│   │   │       ├── modal.js
│   │   │       ├── modal.css
│   │   │       ├── modal.html
│   │   │       └── doc/
│   │   │
│   │   ├── services/                  # API clients & external services
│   │   │   ├── api.js                 # Backend API client
│   │   │   ├── auth.js                # Authentication service
│   │   │   ├── problemService.js      # Problem-related API calls
│   │   │   └── storage.js             # Local storage utilities
│   │   │
│   │   ├── lib/                       # Core utilities
│   │   │   ├── router.js
│   │   │   ├── state.js
│   │   │   └── utils.js
│   │   │
│   │   ├── styles/                    # CSS files
│   │   │   ├── app.css
│   │   │   ├── theme.css
│   │   │   ├── styles.css
│   │   │   └── utilities.css
│   │   │
│   │   ├── js/                        # Application JavaScript
│   │   │   ├── app.js
│   │   │   ├── page.js
│   │   │   └── resizer.js
│   │   │
│   │   ├── data/                      # Static problem definitions (temporary)
│   │   │   ├── problems/
│   │   │   │   ├── index.js
│   │   │   │   ├── arrays.js
│   │   │   │   ├── strings.js
│   │   │   │   ├── linked-lists.js
│   │   │   │   ├── stack-queue.js
│   │   │   │   ├── trees.js
│   │   │   │   ├── graphs.js
│   │   │   │   ├── dynamic-programming.js
│   │   │   │   └── (all search-*.js files)
│   │   │   └── two-pointer.json
│   │   │
│   │   └── config.js                  # Frontend configuration
│   │
│   ├── tools/                         # Development tools
│   │   ├── benchmark/
│   │   ├── dsa-tree/
│   │   └── notes/
│   │
│   ├── package.json                   # Frontend dependencies
│   ├── vite.config.js                 # Build tool config (optional)
│   └── README.md                      # Frontend documentation
│
├── backend/                           # Node.js + TypeScript backend
│   ├── src/
│   │   ├── routes/                    # API route handlers
│   │   │   ├── index.ts               # Route aggregator
│   │   │   ├── auth.routes.ts
│   │   │   ├── problems.routes.ts
│   │   │   ├── submissions.routes.ts
│   │   │   └── users.routes.ts
│   │   │
│   │   ├── controllers/               # Business logic
│   │   │   ├── auth.controller.ts
│   │   │   ├── problem.controller.ts
│   │   │   ├── submission.controller.ts
│   │   │   └── user.controller.ts
│   │   │
│   │   ├── services/                  # Core services
│   │   │   ├── codeRunner.service.ts  # Execute user code safely (VM2)
│   │   │   ├── validator.service.ts   # Test case validation
│   │   │   ├── problem.service.ts     # Problem business logic
│   │   │   └── auth.service.ts        # Authentication logic
│   │   │
│   │   ├── models/                    # Data models (MongoDB/PostgreSQL)
│   │   │   ├── User.model.ts
│   │   │   ├── Problem.model.ts
│   │   │   └── Submission.model.ts
│   │   │
│   │   ├── middleware/                # Express middleware
│   │   │   ├── auth.middleware.ts
│   │   │   ├── errorHandler.middleware.ts
│   │   │   ├── validation.middleware.ts
│   │   │   └── rateLimit.middleware.ts
│   │   │
│   │   ├── utils/                     # Utilities
│   │   │   ├── logger.ts
│   │   │   ├── helpers.ts
│   │   │   └── constants.ts
│   │   │
│   │   ├── config/                    # Configuration
│   │   │   ├── database.config.ts
│   │   │   ├── env.config.ts
│   │   │   └── app.config.ts
│   │   │
│   │   ├── types/                     # TypeScript types/interfaces
│   │   │   ├── problem.types.ts
│   │   │   ├── user.types.ts
│   │   │   └── common.types.ts
│   │   │
│   │   ├── app.ts                     # Express app setup
│   │   └── server.ts                  # Server entry point
│   │
│   ├── tests/                         # Backend tests
│   │   ├── unit/
│   │   └── integration/
│   │
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   ├── nodemon.json
│   └── README.md
│
├── shared/                            # Shared resources
│   ├── data/                          # Problem definitions (JSON)
│   │   ├── problems/
│   │   │   ├── arrays/
│   │   │   ├── strings/
│   │   │   ├── trees/
│   │   │   └── ...
│   │   └── seed/                      # Database seed data
│   │
│   ├── types/                         # Shared TypeScript types
│   │   └── problem.types.ts
│   │
│   └── constants/                     # Shared constants
│       └── topics.ts
│
└── docs/                              # Project documentation
    ├── API.md                         # API documentation
    ├── ARCHITECTURE.md                # Architecture overview
    ├── DEPLOYMENT.md                  # Deployment guide
    └── DEVELOPMENT.md                 # Development setup
```

---

## Important Notes

### Security & Dependencies Note (2024)

This guide uses `vm2` for sandboxed code execution. `vm2` is deprecated upstream, so review its risk profile for your deployment. If you prefer a maintained alternative, consider swapping in `isolated-vm` (requires native build tools) following your security policy.

---

## Migration Steps

### Phase 1: Preparation (30 minutes)

#### Step 1.1: Backup Current Project
```bash
# Create a backup branch
git checkout -b backup-before-migration
git add .
git commit -m "Backup before migration"
git push origin backup-before-migration

# Return to main branch
git checkout main
```

#### Step 1.2: Update Root .gitignore
```bash
# Create/update .gitignore
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.*.local

# Build outputs
dist/
build/
*.tsbuildinfo

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log

# Testing
coverage/

# Temporary files
*.tmp
.cache/
EOF
```

#### Step 1.3: Create Root package.json (Workspace)
```bash
cat > package.json << 'EOF'
{
  "name": "js-practice-platform",
  "version": "1.0.0",
  "description": "Professional Data Structures & Algorithms Practice Platform",
  "private": true,
  "workspaces": [
    "frontend",
    "backend"
  ],
  "scripts": {
    "dev:frontend": "npm run dev --workspace=frontend",
    "dev:backend": "npm run dev --workspace=backend",
    "dev": "concurrently \"npm run dev:frontend\" \"npm run dev:backend\"",
    "build:frontend": "npm run build --workspace=frontend",
    "build:backend": "npm run build --workspace=backend",
    "build": "npm run build:frontend && npm run build:backend",
    "start:backend": "npm run start --workspace=backend",
    "test": "npm run test --workspace=backend"
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
EOF
```

#### Step 1.4 : Save the branch in github
```
# Check current status
git status

# Add all changes
git add -A

# Commit to backup branch
git commit -m "Backup before migration - Phase 1 complete (added migration guide, gitignore, and root package.json)"

# Push backup branch to remote
git push origin backup-before-migration

# Switch back to main branch
git checkout main

# Create a pull request and merge with main so that package.json and migration.md are available on main as well.

# Pull the merged main branch
git pull
```

---

### Phase 2: Frontend Migration (1-2 hours)

#### Step 2.1: Create Frontend Directory Structure
```bash
# Create directories
mkdir -p frontend/public/img
mkdir -p frontend/src/{pages,components,services,lib,styles,js,data}
mkdir -p frontend/tools
```

#### Step 2.2: Move Static Assets to public/
```bash
# Move static files
mv favicon*.* frontend/public/ 2>/dev/null || true
mv apple-touch-icon.png frontend/public/ 2>/dev/null || true
mv site.webmanifest frontend/public/
mv img/* frontend/public/img/ 2>/dev/null || true
rmdir img 2>/dev/null || true
```

#### Step 2.3: Move HTML Files to pages/
```bash
# Move HTML pages
mv index.html frontend/src/pages/
# If you have other HTML files, move them too
find . -maxdepth 1 -name "*.html" -exec mv {} frontend/src/pages/ \;
```

#### Step 2.4: Move Components
```bash
# Move entire components folder
mv components/* frontend/src/components/
rmdir components
```

#### Step 2.5: Move Styles
```bash
# Move CSS files
mv css/* frontend/src/styles/ 2>/dev/null || true
rmdir css 2>/dev/null || true
```

#### Step 2.6: Move JavaScript
```bash
# Move js folder
mv js/* frontend/src/js/ 2>/dev/null || true
rmdir js 2>/dev/null || true
```

#### Step 2.7: Move Data and Problems
```bash
# Move data files
mv data/* frontend/src/data/ 2>/dev/null || true
rmdir data 2>/dev/null || true
```

#### Step 2.8: Move Tools
```bash
# Move tools folder
mv tools/* frontend/tools/ 2>/dev/null || true
rmdir tools 2>/dev/null || true
```

#### Step 2.9: Create Frontend package.json
```bash
cat > frontend/package.json << 'EOF'
{
  "name": "js-practice-frontend",
  "version": "1.0.0",
  "description": "Frontend for JS Practice Platform",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "serve": "npx serve dist"
  },
  "dependencies": {
    "monaco-editor": "^0.45.0"
  },
  "devDependencies": {
    "vite": "^5.0.10"
  }
}
EOF
```

#### Step 2.10: Create Vite Configuration
```bash
cat > frontend/vite.config.js << 'EOF'
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src/pages',
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        // Add other HTML pages here
        // playground: resolve(__dirname, 'src/pages/playground.html'),
      }
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@services': resolve(__dirname, 'src/services'),
      '@lib': resolve(__dirname, 'src/lib'),
      '@styles': resolve(__dirname, 'src/styles')
    }
  }
});
EOF
```

#### Step 2.11: Create API Service Layer
```bash
cat > frontend/src/services/api.js << 'EOF'
/**
 * Base API client for backend communication
 */
class ApiClient {
  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    this.token = localStorage.getItem('auth_token');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

  async request(endpoint, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const config = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  }

  post(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  put(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();
EOF
```

```bash
cat > frontend/src/services/problemService.js << 'EOF'
import { apiClient } from './api.js';

/**
 * Problem-related API calls
 */
export const problemService = {
  // Get all problems
  async getProblems() {
    return apiClient.get('/problems');
  },

  // Get single problem by ID
  async getProblem(id) {
    return apiClient.get(`/problems/${id}`);
  },

  // Submit solution
  async submitSolution(problemId, code, language = 'javascript') {
    return apiClient.post('/submissions', {
      problemId,
      code,
      language,
    });
  },

  // Run code without submitting
  async runCode(problemId, code, input) {
    return apiClient.post('/submissions/run', {
      problemId,
      code,
      input,
    });
  },

  // Get user submissions
  async getSubmissions(problemId = null) {
    const endpoint = problemId 
      ? `/submissions?problemId=${problemId}`
      : '/submissions';
    return apiClient.get(endpoint);
  },
};
EOF
```

#### Step 2.12: Update HTML File Paths
Update the paths in `frontend/src/pages/index.html`:
```html
<!-- Old paths -->
<link rel="stylesheet" href="css/theme.css">

<!-- New paths (will be resolved by Vite) -->
<link rel="stylesheet" href="../styles/theme.css">
<script type="module" src="../js/app.js"></script>
```

#### Step 2.13: Create Frontend README
```bash
cat > frontend/README.md << 'EOF'
# JS Practice Platform - Frontend

## Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build

```bash
npm run build
```

Output will be in `dist/` folder.

## Project Structure

- `src/pages/` - Complete web pages (HTML)
- `src/components/` - Reusable UI components
- `src/services/` - API clients
- `src/lib/` - Core utilities
- `src/styles/` - CSS files
- `public/` - Static assets
EOF
```

---

### Phase 3: Backend Setup (1-2 hours)

#### Step 3.1: Create Backend Directory Structure
```bash
mkdir -p backend/src/{routes,controllers,services,models,middleware,utils,config,types}
mkdir -p backend/tests/{unit,integration}
```

#### Step 3.2: Create Backend package.json
```bash
cat > backend/package.json << 'EOF'
{
  "name": "js-practice-backend",
  "version": "1.0.0",
  "description": "Backend API for JS Practice Platform",
  "main": "dist/server.js",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc",
    "start": "node dist/server.js",
    "test": "jest",
    "lint": "eslint src --ext .ts"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "helmet": "^7.1.0",
    "express-rate-limit": "^7.1.5",
    "jsonwebtoken": "^9.0.2",
    "bcrypt": "^5.1.1",
    "mongoose": "^8.0.3",
    "vm2": "^3.9.19",
    "winston": "^3.11.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/cors": "^2.8.17",
    "@types/node": "^20.10.6",
    "@types/bcrypt": "^5.0.2",
    "@types/jsonwebtoken": "^9.0.5",
    "@typescript-eslint/eslint-plugin": "^6.15.0",
    "@typescript-eslint/parser": "^6.15.0",
    "eslint": "^8.56.0",
    "nodemon": "^3.0.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3",
    "jest": "^29.7.0",
    "@types/jest": "^29.5.11"
  }
}
EOF
```

## Note:

`vm2` is used for sandboxing. Be aware it is deprecated upstream; assess suitability for production. It does **not** require native compilation, so installation is straightforward (`npm install`).

#### Step 3.3: Create TypeScript Configuration
```bash
cat > backend/tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "types": ["node"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@controllers/*": ["src/controllers/*"],
      "@services/*": ["src/services/*"],
      "@models/*": ["src/models/*"],
      "@middleware/*": ["src/middleware/*"],
      "@utils/*": ["src/utils/*"],
      "@config/*": ["src/config/*"],
      "@types/*": ["src/types/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}
EOF
```

#### Step 3.4: Create Nodemon Configuration
```bash
cat > backend/nodemon.json << 'EOF'
{
  "watch": ["src"],
  "ext": "ts,json",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node -r tsconfig-paths/register src/server.ts"
}
EOF
```

#### Step 3.5: Create Environment Example
```bash
cat > backend/.env.example << 'EOF'
# Server Configuration
NODE_ENV=development
PORT=5000
HOST=localhost

# Database (MongoDB)
MONGODB_URI=mongodb://localhost:27017/js-practice
# Or for PostgreSQL
# DATABASE_URL=postgresql://user:password@localhost:5432/js_practice

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# Code Execution
CODE_TIMEOUT=5000
CODE_MEMORY_LIMIT=128

# CORS
CORS_ORIGIN=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
EOF
```

#### Step 3.6: Create Server Entry Point
```bash
cat > backend/src/server.ts << 'EOF'
import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { logger } from './utils/logger';

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {
  logger.info(`🚀 Server running on http://${HOST}:${PORT}`);
  logger.info(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});
EOF
```

#### Step 3.7: Create Express App Setup
```bash
cat > backend/src/app.ts << 'EOF'
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler.middleware';
import { logger } from './utils/logger';

const app: Application = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging
app.use((req: Request, res: Response, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api', routes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;
EOF
```

#### Step 3.8: Create Route Index
```bash
cat > backend/src/routes/index.ts << 'EOF'
import { Router } from 'express';
import problemRoutes from './problems.routes';
import submissionRoutes from './submissions.routes';
// import authRoutes from './auth.routes';
// import userRoutes from './users.routes';

const router = Router();

// Mount routes
router.use('/problems', problemRoutes);
router.use('/submissions', submissionRoutes);
// router.use('/auth', authRoutes);
// router.use('/users', userRoutes);

export default router;
EOF
```

#### Step 3.9: Create Problem Routes
```bash
cat > backend/src/routes/problems.routes.ts << 'EOF'
import { Router } from 'express';
import { ProblemController } from '../controllers/problem.controller';

const router = Router();
const problemController = new ProblemController();

// GET /api/problems - Get all problems
router.get('/', problemController.getAll);

// GET /api/problems/:id - Get single problem
router.get('/:id', problemController.getById);

// POST /api/problems - Create problem (admin only, add auth later)
// router.post('/', authMiddleware, adminMiddleware, problemController.create);

export default router;
EOF
```

#### Step 3.10: Create Submission Routes
```bash
cat > backend/src/routes/submissions.routes.ts << 'EOF'
import { Router } from 'express';
import { SubmissionController } from '../controllers/submission.controller';

const router = Router();
const submissionController = new SubmissionController();

// POST /api/submissions/run - Run code without saving
router.post('/run', submissionController.runCode);

// POST /api/submissions - Submit solution
// router.post('/', authMiddleware, submissionController.submit);

// GET /api/submissions - Get user submissions
// router.get('/', authMiddleware, submissionController.getUserSubmissions);

export default router;
EOF
```

#### Step 3.11: Create Problem Controller
```bash
cat > backend/src/controllers/problem.controller.ts << 'EOF'
import { Request, Response, NextFunction } from 'express';
import { ProblemService } from '../services/problem.service';

export class ProblemController {
  private problemService: ProblemService;

  constructor() {
    this.problemService = new ProblemService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const problems = await this.problemService.getAllProblems();
      res.json({ success: true, data: problems });
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const problem = await this.problemService.getProblemById(id);
      
      if (!problem) {
        return res.status(404).json({ 
          success: false, 
          message: 'Problem not found' 
        });
      }

      res.json({ success: true, data: problem });
    } catch (error) {
      next(error);
    }
  };
}
EOF
```

#### Step 3.12: Create Submission Controller
```bash
cat > backend/src/controllers/submission.controller.ts << 'EOF'
import { Request, Response, NextFunction } from 'express';
import { CodeRunnerService } from '../services/codeRunner.service';
import { ValidatorService } from '../services/validator.service';

export class SubmissionController {
  private codeRunner: CodeRunnerService;
  private validator: ValidatorService;

  constructor() {
    this.codeRunner = new CodeRunnerService();
    this.validator = new ValidatorService();
  }

  runCode = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { code, input, problemId } = req.body;

      // Validate input
      if (!code) {
        return res.status(400).json({
          success: false,
          message: 'Code is required',
        });
      }

      // Run the code
      const result = await this.codeRunner.execute(code, input);

      // If problemId provided, validate against test cases
      let validation = null;
      if (problemId) {
        validation = await this.validator.validateSolution(
          problemId,
          code,
          result
        );
      }

      res.json({
        success: true,
        data: {
          output: result.output,
          error: result.error,
          executionTime: result.executionTime,
          validation,
        },
      });
    } catch (error) {
      next(error);
    }
  };
}
EOF
```

#### Step 3.13: Create Problem Service
```bash
cat > backend/src/services/problem.service.ts << 'EOF'
import { Problem } from '../types/problem.types';
// For now, import from static files
// Later, this will query the database

export class ProblemService {
  async getAllProblems(): Promise<Problem[]> {
    // TODO: Replace with database query
    // For now, return mock data or load from JSON files
    return [];
  }

  async getProblemById(id: string): Promise<Problem | null> {
    // TODO: Replace with database query
    return null;
  }

  async createProblem(data: Partial<Problem>): Promise<Problem> {
    // TODO: Implement database insertion
    throw new Error('Not implemented');
  }
}
EOF
```

#### Step 3.14: Create Code Runner Service
```bash
cat > backend/src/services/codeRunner.service.ts << 'EOF'
import { VM } from 'vm2';

interface ExecutionResult {
  output: string;
  error: string | null;
  executionTime: number;
}

export class CodeRunnerService {
  private timeout: number;
  private memoryLimit: number;

  constructor() {
    this.timeout = parseInt(process.env.CODE_TIMEOUT || '5000');
    this.memoryLimit = parseInt(process.env.CODE_MEMORY_LIMIT || '128');
  }

  async execute(code: string, input?: string): Promise<ExecutionResult> {
    const startTime = Date.now();
    let output = '';
    let error = null;

    try {
      const vm = new VM({
        timeout: this.timeout,
        sandbox: {
          console: {
            log: (...args: any[]) => {
              output += args.join(' ') + '\n';
            },
          },
          input: input || '',
        },
      });

      // Wrap code execution
      const result = vm.run(code);
      
      if (result !== undefined) {
        output += String(result);
      }
    } catch (err: any) {
      error = err.message || 'Execution error';
    }

    const executionTime = Date.now() - startTime;

    return {
      output: output.trim(),
      error,
      executionTime,
    };
  }
}
EOF
```

#### Step 3.15: Create Validator Service
```bash
cat > backend/src/services/validator.service.ts << 'EOF'
export class ValidatorService {
  async validateSolution(
    problemId: string,
    code: string,
    result: any
  ): Promise<any> {
    // TODO: Load test cases from database
    // Run code against each test case
    // Return validation results
    return {
      passed: false,
      totalTests: 0,
      passedTests: 0,
    };
  }
}
EOF
```

#### Step 3.16: Create Error Handler Middleware
```bash
cat > backend/src/middleware/errorHandler.middleware.ts << 'EOF'
import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`Error: ${err.message}`, { stack: err.stack });

  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
};
EOF
```

#### Step 3.17: Create Logger Utility
```bash
cat > backend/src/utils/logger.ts << 'EOF'
import winston from 'winston';

export const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});
EOF
```

#### Step 3.18: Create Type Definitions
```bash
cat > backend/src/types/problem.types.ts << 'EOF'
export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  starterCode: string;
  testCases: TestCase[];
  constraints?: string[];
  examples?: Example[];
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TestCase {
  input: any;
  expectedOutput: any;
  isHidden?: boolean;
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface Submission {
  id: string;
  userId: string;
  problemId: string;
  code: string;
  language: string;
  status: 'pending' | 'accepted' | 'wrong_answer' | 'error';
  executionTime?: number;
  memory?: number;
  createdAt: Date;
}
EOF
```

#### Step 3.19: Create Backend README
```bash
cat > backend/README.md << 'EOF'
# JS Practice Platform - Backend

Node.js + TypeScript + Express backend API.

## Setup

```bash
npm install
cp .env.example .env
# Edit .env with your configuration
```

## Development

```bash
npm run dev
```

Server runs on http://localhost:5000

## Build

```bash
npm run build
npm start
```

## API Endpoints

- `GET /health` - Health check
- `GET /api/problems` - Get all problems
- `GET /api/problems/:id` - Get problem by ID
- `POST /api/submissions/run` - Run code

## Tech Stack

- Express.js - Web framework
- TypeScript - Type safety
- VM2 - Safe code execution
- Winston - Logging
- MongoDB/Mongoose - Database (to be added)
- JWT - Authentication (to be added)
EOF
```

---

### Phase 4: Shared Resources (30 minutes)

#### Step 4.1: Create Shared Directory
```bash
mkdir -p shared/{data/problems,types,constants}
```

#### Step 4.2: Move Existing Problems to Shared (Optional)
```bash
# This step is optional - you can keep problems in frontend for now
# and migrate to shared/backend database later
```

---

### Phase 5: Documentation (30 minutes)

#### Step 5.1: Create Documentation Directory
```bash
mkdir -p docs
```

#### Step 5.2: Create API Documentation
```bash
cat > docs/API.md << 'EOF'
# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### Problems

#### Get All Problems
```
GET /problems
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "two-sum",
      "title": "Two Sum",
      "difficulty": "easy",
      "topic": "arrays"
    }
  ]
}
```

#### Get Problem by ID
```
GET /problems/:id
```

### Submissions

#### Run Code
```
POST /submissions/run
```

Body:
```json
{
  "code": "console.log('Hello');",
  "input": "",
  "problemId": "two-sum"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "output": "Hello",
    "error": null,
    "executionTime": 45
  }
}
```
EOF
```

#### Step 5.3: Update Root README
```bash
cat > README.md << 'EOF'
# JS Practice Platform

A professional, scalable platform for practicing Data Structures and Algorithms.

## Architecture

- **Frontend**: Vanilla JS + Vite (port 3000)
- **Backend**: Node.js + TypeScript + Express (port 5000)
- **Database**: MongoDB (to be added)

## Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation
```bash
# Install all dependencies
npm install
```

### Development
```bash
# Run both frontend and backend
npm run dev

# Or run separately:
npm run dev:frontend  # http://localhost:3000
npm run dev:backend   # http://localhost:5000
```

### Production Build
```bash
npm run build
npm run start:backend
```

## Project Structure

See [MIGRATION.md](MIGRATION.md) for detailed structure.

## Documentation

- [API Documentation](docs/API.md)
- [Migration Guide](MIGRATION.md)
- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)

## Features

- Monaco code editor
- Real-time code execution
- Problem categorization
- Test case validation
- User authentication (coming soon)
- Progress tracking (coming soon)

## License

MIT
EOF
```

---

### Phase 6: Testing & Verification (30 minutes)

#### Step 6.1: Install Root Dependencies
```bash
npm install
```

#### Step 6.2: Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

#### Step 6.3: Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

#### Step 6.4: Test Frontend
```bash
npm run dev:frontend
# Visit http://localhost:3000
# Verify pages load correctly
```

#### Step 6.5: Test Backend
```bash
npm run dev:backend
# Visit http://localhost:5000/health
# Should return {"status":"ok"}
```

#### Step 6.6: Test API Integration
```bash
# Test problem endpoint
curl http://localhost:5000/api/problems

# Test code execution
curl -X POST http://localhost:5000/api/submissions/run \
  -H "Content-Type: application/json" \
  -d '{"code":"console.log(\"Hello\");"}'
```

---

### Phase 7: Cleanup (15 minutes)

#### Step 7.1: Remove Old Files
```bash
# Remove old files that have been moved
# Be careful with this step - verify everything is moved first
rm -f remove-data-problem.js
```

#### Step 7.2: Commit Changes
```bash
git add .
git commit -m "Migrate to professional project structure with frontend/backend separation"
git push origin main
```

---

## Post-Migration Tasks

### Immediate (Next 1-2 days)
1. ✅ Update all import paths in HTML/JS files
2. ✅ Test all pages work correctly
3. ✅ Verify API endpoints work
4. ✅ Update documentation

### Short-term (Next 1-2 weeks)
1. ⬜ Set up MongoDB and create data models
2. ⬜ Migrate problem data to database
3. ⬜ Implement user authentication
4. ⬜ Add user registration/login pages
5. ⬜ Implement submission saving

### Medium-term (Next 1-2 months)
1. ⬜ Add progress tracking
2. ⬜ Implement leaderboards
3. ⬜ Add code sharing features
4. ⬜ Implement admin panel
5. ⬜ Add analytics

### Long-term (3+ months)
1. ⬜ Deploy to production
2. ⬜ Set up CI/CD pipeline
3. ⬜ Add monitoring and logging
4. ⬜ Implement caching (Redis)
5. ⬜ Scale backend services

---

## Troubleshooting

### Frontend not loading
- Check paths in HTML files
- Verify Vite config
- Check browser console for errors

### Backend errors
- Check .env file exists
- Verify TypeScript compilation
- Check port 5000 is not in use

### API connection issues
- Verify CORS settings
- Check proxy configuration in Vite
- Ensure backend is running

### Module resolution errors
- Run `npm install` in both frontend and backend
- Check tsconfig.json paths
- Verify package.json is correct

---

## Need Help?

- Check existing documentation in `/docs`
- Review error logs
- Test endpoints with curl or Postman
- Check browser developer console

---

## Success Criteria

✅ Frontend runs on port 3000
✅ Backend runs on port 5000
✅ Health check returns OK
✅ Can load problem list
✅ Can execute code
✅ All existing functionality works
EOF
```

---

## Summary

This migration transforms your project from a flat structure to a professional, scalable architecture with:

- **Frontend**: Modern build setup with Vite
- **Backend**: TypeScript-based Node.js API
- **Services**: Proper separation of concerns
- **API Layer**: Clean REST API
- **Type Safety**: TypeScript throughout backend
- **Scalability**: Ready for database integration, authentication, and more

Estimated total time: **4-6 hours** depending on your familiarity with the tools.

Follow the phases in order, test after each phase, and commit frequently!
