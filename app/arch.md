# JS Practice Platform - Architecture & Workflow

## Overview

JS Practice is a full-stack web application for learning and practicing Data Structures & Algorithms (DSA) in JavaScript. The platform features an interactive Monaco code editor, instant code execution, and a comprehensive problem library organized by topic.

**Architecture Type**: Monorepo (Workspaces) with Decoupled Frontend & Backend  
**Tech Stack**: Node.js/Express (Backend) + Vite/Vanilla JS (Frontend)  
**Language**: TypeScript (Backend), JavaScript (Frontend)

---

## High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    JS Practice Platform                      │
├──────────────────────────────┬──────────────────────────────┤
│         FRONTEND              │         BACKEND               │
│     (Vite + Vanilla JS)       │    (Express + TypeScript)    │
├──────────────────────────────┼──────────────────────────────┤
│ - Monaco Code Editor          │ - API Routes (Express)        │
│ - UI Components               │ - Controllers & Services      │
│ - Problem Data                │ - Code Execution Engine       │
│ - State Management            │ - Validation Logic            │
│ - Router & Pages              │ - Error Handling              │
└──────────────────────────────┴──────────────────────────────┘
                           ↓↑
                      HTTP/REST API
                     (JSON Exchange)
```

---

## Project Structure

### Root Level

```
js-practice/
├── package.json                 # Root workspace configuration
├── README.md                    # Project documentation
├── arch.md                      # This file - Architecture documentation
├── MIGRATION.md                 # Migration notes
├── frontend/                    # Frontend application
├── backend/                     # Backend API server
└── books/                       # Learning resources (ai/, dsa/, ml/, papers/)
```

---

## Backend Architecture

### Directory Structure

```
backend/
├── package.json                 # Backend dependencies
├── tsconfig.json                # TypeScript configuration
├── nodemon.json                 # Nodemon watch configuration
├── src/
│   ├── server.ts                # Entry point - starts Express server
│   ├── app.ts                   # Express app configuration
│   ├── config/                  # Configuration files (DB, env, etc.)
│   ├── controllers/             # Request handlers
│   │   ├── problem.controller.ts      # Problem CRUD operations
│   │   └── submission.controller.ts   # Code submission & execution
│   ├── services/                # Business logic
│   │   ├── problem.service.ts         # Problem data management
│   │   ├── codeRunner.service.ts      # Code execution engine
│   │   └── validator.service.ts       # Input validation
│   ├── routes/                  # API route definitions
│   │   ├── index.ts                   # Route aggregator
│   │   ├── problems.routes.ts         # Problem endpoints
│   │   └── submissions.routes.ts      # Submission endpoints
│   ├── middleware/              # Express middleware
│   │   └── errorHandler.middleware.ts # Global error handling
│   ├── models/                  # Database models (Mongoose schemas)
│   ├── types/                   # TypeScript type definitions
│   │   └── problem.types.ts           # Problem-related types
│   └── utils/
│       └── logger.ts            # Logging utility
└── tests/
    ├── unit/                    # Unit tests
    └── integration/             # Integration tests
```

### Backend Request Flow

```
HTTP Request
    ↓
Express Middleware (cors, helmet, body-parser)
    ↓
Request Logger
    ↓
Router (route matching)
    ↓
Controller (req/res handling)
    ↓
Service (business logic)
    ↓
Database/External Resources
    ↓
Response JSON
    ↓
Error Handler (if error occurs)
    ↓
HTTP Response
```

### Key Backend Components

#### 1. **Server Setup** (`server.ts`)
- Loads environment variables using dotenv
- Imports and starts the Express app
- Listens on configured PORT (default: 5000)
- Logs startup information

#### 2. **Express App** (`app.ts`)
- Configures view engine (EJS for server-side rendering)
- Applies security middleware (helmet, CORS)
- Parses JSON and URL-encoded request bodies
- Serves static files (compiled frontend assets)
- Mounts API routes at `/api`
- Sets up health check endpoint (`/health`)
- Defines page routes for SSR (server-side rendering)
- Implements global error handler

#### 3. **Controllers**

**problem.controller.ts**
- `getAllProblems()` - Fetch all problems
- `getProblemById()` - Get specific problem details
- Problem filtering by category/difficulty

**submission.controller.ts**
- `submitCode()` - Handle code submission
- `runCode()` - Execute code and return output
- `validateInput()` - Validate user input

#### 4. **Services**

**problem.service.ts**
- Manages problem data retrieval
- Filters and sorts problems
- Caches problem metadata

**codeRunner.service.ts**
- Executes submitted JavaScript code safely
- Uses vm2 for sandboxed execution
- Captures stdout/stderr
- Handles timeouts and errors

**validator.service.ts**
- Validates problem solutions
- Checks test cases
- Provides error feedback

#### 5. **Routes**

```
/api
├── /problems
│   ├── GET /         → Get all problems
│   ├── GET /:id      → Get problem by ID
│   └── GET /category/:name  → Get problems by category
└── /submissions
    ├── POST /run     → Execute code
    └── POST /submit  → Submit solution
```

#### 6. **Middleware**
- **Error Handler**: Catches and formats errors, sends standardized error responses
- **Security**: Helmet for HTTP headers, CORS for cross-origin requests
- **Logging**: Winston logger for server events

---

## Frontend Architecture

### Directory Structure

```
frontend/
├── package.json                 # Frontend dependencies (Vite, Monaco)
├── vite.config.js               # Vite bundler configuration
├── build.js                     # EJS template build script
├── public/                      # Static assets
│   ├── img/                     # Images
│   └── site.webmanifest         # PWA manifest
├── src/
│   ├── data/                    # Problem data & definitions
│   │   ├── two-pointer.json     # Problem metadata
│   │   ├── two-pointer.html     # Problem descriptions (HTML)
│   │   └── problems/            # Category-based problems
│   │       ├── arrays.js
│   │       ├── strings.js
│   │       ├── trees.js
│   │       ├── graphs.js
│   │       ├── dynamic-programming.js
│   │       ├── linked-lists.js
│   │       ├── stack-queue.js
│   │       └── search-*.js      # Search algorithms by type
│   ├── js/                      # JavaScript application logic
│   │   ├── app.js               # Main app controller
│   │   ├── page.js              # Page utilities
│   │   ├── resizer.js           # Sidebar resize handler
│   │   ├── common/
│   │   │   ├── app.js           # Common app utilities
│   │   │   └── router.js        # Client-side router
│   │   └── pages/               # Page-specific logic
│   │       ├── benchmark/       # Benchmark page
│   │       ├── practice/        # Practice mode
│   │       ├── learn/           # Learning resources
│   │       ├── notes/           # Notes page
│   │       ├── execution-flow/  # Flow visualization
│   │       └── index.js         # Page registry
│   ├── lib/                     # Utilities & libraries
│   │   ├── router.js            # Routing logic
│   │   └── state.js             # State management
│   ├── styles/                  # CSS styling
│   │   ├── app.css              # Main styles
│   │   ├── theme.css            # Theme definitions
│   │   ├── utilities.css        # Utility classes
│   │   └── pages/               # Page-specific styles
│   ├── components/              # Reusable UI components
│   │   ├── leftSidebar/         # Problem navigation sidebar
│   │   │   ├── leftSidebar.js
│   │   │   ├── leftSidebar.css
│   │   │   └── README.md
│   │   ├── modal/               # Modal dialogs
│   │   │   ├── modal.js
│   │   │   ├── modal.css
│   │   │   ├── modal.html
│   │   │   └── doc/
│   │   └── rightSidebar/        # Info sidebar
│   ├── services/                # Frontend services
│   │   ├── api.js               # HTTP client for API calls
│   │   └── problemService.js    # Problem data management
│   ├── pages/                   # Page templates & definitions
│   │   ├── index.html           # Main HTML template
│   │   ├── scripts.js           # Page script configuration
│   │   └── styles.js            # Page styles configuration
│   ├── templates/               # EJS template files
│   │   ├── layouts/             # Base layout templates
│   │   ├── pages/               # Page templates
│   │   └── partials/            # Reusable template partials
│   └── tools/                   # Utility tools
│       ├── benchmark/           # Performance benchmarking
│       ├── dsa-tree/            # DSA visualization
│       └── notes/               # Note-taking tools
```

### Frontend Data Flow

```
User Interaction (Click, Input)
    ↓
Router (Route detection)
    ↓
Page Component (Load page logic)
    ↓
API Service (HTTP requests)
    ↓
Backend API
    ↓
Response (JSON data)
    ↓
State Management (Update app state)
    ↓
Re-render Components
    ↓
DOM Update
    ↓
Visual Update
```

### Key Frontend Components

#### 1. **Entry Point** (`src/js/app.js`)
- Initializes the application
- Sets up event listeners
- Manages page transitions
- Loads problem data

#### 2. **Router** (`src/lib/router.js`)
- Client-side routing
- Handles navigation between pages
- Manages URL history
- Page-specific initialization

#### 3. **Monaco Code Editor**
- Integrated via npm dependency
- Supports syntax highlighting
- IntelliSense for JavaScript
- Keyboard shortcuts
- Multiple language support

#### 4. **Components**

**Left Sidebar** (`components/leftSidebar/`)
- Displays problem list organized by category
- Collapsible for better UX
- Problem filtering and search
- Click to load problem details

**Modal Component** (`components/modal/`)
- Generic modal dialog system
- Used for dialogs, confirmations, and forms

**Right Sidebar** (`components/rightSidebar/`)
- Displays additional information
- Problem hints/resources
- Solution references

#### 5. **Pages**
Each page represents a distinct view:

- **Practice Page**: Main interface with editor and problem description
- **Learn Page**: Educational resources and tutorials
- **Benchmark Page**: Performance analysis tools
- **Notes Page**: User notes and bookmarks
- **Execution Flow**: Visualize code execution step-by-step

#### 6. **Services**

**api.js**
```javascript
- fetch() wrapper for API calls
- Error handling
- Request/response interceptors
```

**problemService.js**
```javascript
- Load problem list
- Get problem details
- Cache management
- Problem filtering
```

#### 7. **State Management** (`src/lib/state.js`)
- Centralized state object
- State mutation methods
- Event emitters for state changes
- Prevents direct DOM manipulation

---

## Workflow: Problem-Solving Journey

### User Flow Diagram

```
1. User Opens App
    ↓
2. Frontend loads (Vite bundles assets)
    ↓
3. API Service fetches problem list from /api/problems
    ↓
4. Left Sidebar displays problems by category
    ↓
5. User selects a problem
    ↓
6. Problem details loaded (from frontend data or API)
    ↓
7. Problem description displayed in left panel
    ↓
8. Monaco Editor ready in right panel
    ↓
9. User writes code
    ↓
10. User clicks "Run" or presses Ctrl+Enter
    ↓
11. POST /api/submissions/run with code
    ↓
12. Backend validates code (codeRunner.service.ts)
    ↓
13. Code executed in sandboxed VM (vm2)
    ↓
14. Output returned as JSON
    ↓
15. Results displayed in output panel
    ↓
16. User refines code OR submits solution
    ↓
17. POST /api/submissions/submit (if provided)
    ↓
18. Solution validated against test cases
    ↓
19. Success/failure feedback displayed
```

---

## Data Models

### Problem Model
```typescript
interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  constraints?: string[];
  hints?: string[];
  functionSignature?: string;
  defaultCode?: string;
}
```

### Submission Model
```typescript
interface Submission {
  id: string;
  problemId: string;
  code: string;
  language: string;
  status: 'pending' | 'accepted' | 'rejected' | 'error';
  output: string;
  error?: string;
  executionTime: number;
  memoryUsed: number;
  timestamp: Date;
}
```

---

## Communication Protocol

### API Endpoints

#### Problems API
```
GET /api/problems
  - Response: Array of Problem objects

GET /api/problems/:id
  - Response: Single Problem object

GET /api/problems/category/:name
  - Response: Problems filtered by category
```

#### Submissions API
```
POST /api/submissions/run
  - Body: { code: string, problemId?: string, input?: string }
  - Response: { output: string, error?: string, executionTime: number }

POST /api/submissions/submit
  - Body: { code: string, problemId: string }
  - Response: { success: boolean, testsPassed: number, totalTests: number }
```

### Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful",
  "timestamp": "2024-01-05T10:30:00Z"
}
```

### Error Response Format
```json
{
  "success": false,
  "error": "Error description",
  "code": "ERROR_CODE",
  "details": {}
}
```

---

## Technology Stack

### Backend Technology Stack
| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Runtime** | Node.js (v18+) | JavaScript runtime |
| **Framework** | Express.js | HTTP server & routing |
| **Language** | TypeScript | Type safety & development |
| **Database** | MongoDB/Mongoose | Data persistence (optional) |
| **Code Execution** | vm2 | Sandboxed code execution |
| **Validation** | Custom middleware | Input validation |
| **Logging** | Winston | Server-side logging |
| **Security** | Helmet, CORS | HTTP security headers |
| **Auth** | JWT (prepared) | Authentication |
| **Hashing** | bcrypt | Password hashing |

### Frontend Technology Stack
| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Build Tool** | Vite | Module bundler & dev server |
| **Editor** | Monaco Editor | Code editor component |
| **Template Engine** | EJS | Server-side templating |
| **Styling** | Vanilla CSS | Styling & themes |
| **Router** | Custom Router | Client-side navigation |
| **API Client** | Fetch API | HTTP requests |

---

## Node Modules & Dependencies

### Backend Dependencies (`backend/package.json`)

#### Production Dependencies
```json
{
  "express": "^4.18.2",           // Web framework & HTTP routing
  "ejs": "^3.1.9",                // Server-side template engine
  "cors": "^2.8.5",               // Cross-origin resource sharing middleware
  "dotenv": "^16.3.1",            // Environment variable management
  "helmet": "^7.1.0",             // HTTP security headers middleware
  "express-rate-limit": "^7.1.5", // Rate limiting middleware
  "jsonwebtoken": "^9.0.2",       // JWT token generation & validation
  "bcrypt": "^5.1.1",             // Password hashing & comparison
  "mongoose": "^8.0.3",           // MongoDB object modeling
  "vm2": "^3.9.19",               // Sandboxed JavaScript execution
  "winston": "^3.11.0"            // Logging library
}
```

**Dependency Details:**

| Package | Version | Purpose | Key Features |
|---------|---------|---------|-------------|
| **express** | ^4.18.2 | Web framework | RESTful routing, middleware chain, static file serving |
| **ejs** | ^3.1.9 | Template engine | Server-side rendering, template inheritance, variable interpolation |
| **cors** | ^2.8.5 | CORS middleware | Cross-origin request handling, credential support |
| **dotenv** | ^16.3.1 | Config management | Load .env files, environment variable parsing |
| **helmet** | ^7.1.0 | Security headers | XSS protection, CSP, HSTS, clickjacking prevention |
| **express-rate-limit** | ^7.1.5 | Rate limiting | Request throttling, DDoS prevention |
| **jsonwebtoken** | ^9.0.2 | JWT handling | Token generation, verification, expiration |
| **bcrypt** | ^5.1.1 | Password hashing | Secure password storage, salt generation |
| **mongoose** | ^8.0.3 | MongoDB driver | Schema definition, validation, query builders |
| **vm2** | ^3.9.19 | Code sandbox | Isolated JS execution, timeout control, error capture |
| **winston** | ^3.11.0 | Logging | Structured logging, log levels, transports |

#### Development Dependencies
```json
{
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
  "@types/jest": "^29.5.11",
  "tsconfig-paths": "^4.2.0"
}
```

**DevDependency Details:**

| Package | Version | Purpose |
|---------|---------|---------|
| **@types/*** | Latest | TypeScript type definitions for packages |
| **typescript** | ^5.3.3 | TypeScript compiler & language support |
| **ts-node** | ^10.9.2 | Execute TypeScript directly without compilation |
| **eslint** | ^8.56.0 | JavaScript/TypeScript linter |
| **@typescript-eslint/*** | ^6.15.0 | TypeScript-specific ESLint rules and parser |
| **nodemon** | ^3.0.2 | Auto-restart server on file changes |
| **jest** | ^29.7.0 | Testing framework & test runner |
| **@types/jest** | ^29.5.11 | TypeScript definitions for Jest |
| **tsconfig-paths** | ^4.2.0 | Resolve TypeScript path mappings |

---

### Frontend Dependencies (`frontend/package.json`)

#### Production Dependencies
```json
{
  "monaco-editor": "^0.45.0",  // Code editor
  "ejs": "^3.1.9",             // Template engine
  "gray-matter": "^4.0.3",     // YAML/TOML front-matter parser
  "glob": "^10.3.10",          // File globbing utility
  "fs-extra": "^11.2.0"        // File system utilities
}
```

**Dependency Details:**

| Package | Version | Purpose | Key Features |
|---------|---------|---------|-------------|
| **monaco-editor** | ^0.45.0 | Code editor | Syntax highlighting, IntelliSense, themes, multiple languages |
| **ejs** | ^3.1.9 | Template rendering | Client-side template compilation |
| **gray-matter** | ^4.0.3 | Front-matter parsing | Extract YAML/TOML metadata from markdown |
| **glob** | ^10.3.10 | File matching | Find files by glob patterns |
| **fs-extra** | ^11.2.0 | File system | Promised-based file operations, directory utilities |

#### Development Dependencies
```json
{
  "vite": "^5.0.10"  // Module bundler & dev server
}
```

**DevDependency Details:**

| Package | Version | Purpose |
|---------|---------|---------|
| **vite** | ^5.0.10 | Build tool, dev server, module bundler |

---

### Root Workspace Dependencies (`package.json`)

#### Shared DevDependencies
```json
{
  "concurrently": "^8.2.2",  // Run multiple commands concurrently
  "nodemon": "^3.0.2",       // File change watcher
  "ejs": "^3.1.9",           // Template engine
  "gray-matter": "^4.0.3",   // Front-matter parser
  "fs-extra": "^11.2.0"      // File system utilities
}
```

**Dependency Details:**

| Package | Version | Purpose |
|---------|---------|---------|
| **concurrently** | ^8.2.2 | Run frontend, backend, and watchers simultaneously |
| **nodemon** | ^3.0.2 | Watch EJS templates for changes |
| **ejs** | ^3.1.9 | Template building during dev |
| **gray-matter** | ^4.0.3 | Parse problem metadata |
| **fs-extra** | ^11.2.0 | File operations for build process |

---

### Dependency Tree Overview

```
js-practice (Root Workspace)
├── Root DevDeps
│   ├── concurrently (parallel task execution)
│   ├── nodemon (file watching)
│   ├── ejs (templating)
│   ├── gray-matter (markdown parsing)
│   └── fs-extra (file operations)
├── frontend/
│   ├── Production Deps
│   │   ├── monaco-editor (editor)
│   │   ├── ejs (templating)
│   │   ├── gray-matter (metadata parsing)
│   │   ├── glob (file globbing)
│   │   └── fs-extra (file utils)
│   └── DevDeps
│       └── vite (bundler)
└── backend/
    ├── Production Deps
    │   ├── express (web framework)
    │   ├── ejs (templating)
    │   ├── cors (cross-origin)
    │   ├── dotenv (config)
    │   ├── helmet (security)
    │   ├── express-rate-limit (rate limiting)
    │   ├── jsonwebtoken (auth)
    │   ├── bcrypt (hashing)
    │   ├── mongoose (database)
    │   ├── vm2 (code sandbox)
    │   └── winston (logging)
    └── DevDeps
        ├── TypeScript (@types/*, typescript, ts-node)
        ├── ESLint (@typescript-eslint/*, eslint)
        ├── Testing (jest, @types/jest)
        ├── Development (nodemon, tsconfig-paths)
        └── Type Definitions (all @types packages)
```

---

### Version Requirements

```
Node.js:  >= 18.0.0  (ES2021+ support, native async/await)
npm:      >= 9.0.0   (Workspace support, better dependency resolution)
```

---

### Key Dependencies Explained

#### 1. **Express.js** (Web Framework)
```typescript
// Used in: backend/src/app.ts, backend/src/server.ts
import express from 'express';
const app = express();

// Features utilized:
- Request/Response handling
- Middleware support
- Routing system
- Static file serving
- Error handling
```

#### 2. **TypeScript** (Type Safety)
```typescript
// Configuration: backend/tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
// Provides: Type checking, IntelliSense, compile-time error detection
```

#### 3. **vm2** (Sandboxed Execution)
```typescript
// Used in: backend/src/services/codeRunner.service.ts
import { VM } from 'vm2';

const vm = new VM({
  timeout: 1000,
  sandbox: { /* custom globals */ }
});

// Features:
- Isolated execution environment
- Timeout protection
- Custom sandbox globals
- Error capture
```

#### 4. **MongoDB & Mongoose** (Data Persistence)
```typescript
// Used in: backend/src/models/ (prepared)
import mongoose from 'mongoose';

// Features:
- Schema definition & validation
- Query builders (find, update, delete)
- Hooks & middleware
- Population & references
```

#### 5. **Vite** (Frontend Build Tool)
```javascript
// Used in: frontend/vite.config.js
export default defineConfig({
  // Configuration for:
  - Module bundling
  - Dev server with HMR
  - Code splitting
  - Asset optimization
});
```

#### 6. **Monaco Editor** (Code Editor)
```javascript
// Used in: frontend/src/components/monaco-editor
// Features:
- Syntax highlighting for 50+ languages
- IntelliSense & autocomplete
- Keyboard shortcuts
- Theme support
- Multiple editor instances
```

#### 7. **Winston** (Logging)
```typescript
// Used in: backend/src/utils/logger.ts
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [/* console, file, etc */]
});

// Features:
- Log levels (error, warn, info, debug)
- Multiple transports (console, file)
- Structured logging (JSON)
- Custom formatters
```

#### 8. **JWT** (Authentication)
```typescript
// Used in: backend (prepared for auth routes)
import jwt from 'jsonwebtoken';

// Features:
- Token generation
- Signature verification
- Expiration handling
- Payload encoding
```

#### 9. **bcrypt** (Password Hashing)
```typescript
// Used in: backend (prepared for user auth)
import bcrypt from 'bcrypt';

const hash = await bcrypt.hash(password, 10);
const match = await bcrypt.compare(password, hash);

// Features:
- Salt generation
- Async hashing
- Constant-time comparison
```

#### 10. **EJS** (Template Engine)
```javascript
// Used in: frontend & backend for templating
<%= variable %>
<% code %>
<%- unescaped_html %>
<%# comment %>

// Features:
- Variable interpolation
- Control flow (if/else, loops)
- Template inheritance
- Partials & includes
```

---

### Vulnerability & Security Considerations

| Package | Security Features |
|---------|------------------|
| **helmet** | Protects against common web vulnerabilities |
| **bcrypt** | Protects against rainbow table & brute force attacks |
| **express-rate-limit** | DDoS & brute force protection |
| **cors** | Prevents unauthorized cross-origin requests |
| **jsonwebtoken** | Secure token-based authentication |
| **vm2** | Isolates untrusted code execution |

---

### Installation & Update

```bash
# Install all dependencies
npm install

# Update all packages
npm update

# Check for outdated packages
npm outdated

# Install specific version
npm install package-name@version

# Remove package
npm uninstall package-name

# Clean install (remove node_modules)
npm ci
```

---

## Architectural Improvements & Recommendations

This section outlines strategic improvements to level up the platform from solid to production-grade, organized by impact and implementation complexity.

### 🔴 High-Impact Improvements

#### 1. Separate Execution into a First-Class Subsystem

**Current State**
```
submission.controller → codeRunner.service → vm2
```

**Problem**
- Code execution is the most dangerous, slowest, and failure-prone component
- Currently lives as a regular service, limiting scalability and observability
- Tight coupling to vm2 makes future migration difficult (worker threads, Docker, microservice)

**Recommended Structure**
```
backend/src/
├── execution/
│   ├── runner/
│   │   ├── jsRunner.ts              // Core execution logic
│   │   ├── sandbox.ts               // Sandbox configuration
│   │   └── runner.types.ts
│   ├── limits/
│   │   ├── time.ts                  // Timeout enforcement
│   │   └── memory.ts                // Memory limits
│   ├── providers/
│   │   ├── vm2Provider.ts           // Current implementation
│   │   ├── workerProvider.ts        // Future: Worker threads
│   │   └── provider.interface.ts
│   └── execution.service.ts         // Orchestration
```

**Implementation Benefits**
- Clear isolation of risky code
- Easy security audits
- Simple future migration paths
- Easier testing and monitoring

**Key Rule**: *No other backend module should know vm2 exists — they only interact with `ExecutionService`*

---

#### 2. Introduce a Shared Contract Layer

**Current State**
- API contracts documented but not enforced
- Risk of silent frontend/backend drift

**Recommended Structure**
```
packages/
├── contracts/
│   ├── problem.contract.ts
│   │   └── export interface Problem { ... }
│   ├── submission.contract.ts
│   │   └── export interface SubmissionRequest/Response { ... }
│   ├── api-response.contract.ts
│   │   └── export interface ApiResponse<T> { ... }
│   ├── execution.contract.ts
│   │   └── export interface ExecutionResult { ... }
│   └── index.ts                     // Single export point
```

**Usage**
```typescript
// backend/src/controllers/submission.controller.ts
import { SubmissionRequest, ExecutionResult } from '@js-practice/contracts';

async handleRun(req: SubmissionRequest): Promise<ExecutionResult> { ... }
```

```javascript
// frontend/src/services/api.js
import { SubmissionRequest, ExecutionResult } from '@js-practice/contracts';

/** @type {(req: SubmissionRequest) => Promise<ExecutionResult>} */
async runCode(code, input) { ... }
```

**Benefits**
- Prevents "stringly-typed APIs"
- Makes refactors safe and visible
- Foundation for auto-generated API docs
- Enables future type-checking on frontend (TypeScript migration)

---

#### 3. Clarify SSR vs SPA Responsibility Boundary

**Current State**
- System does both SSR (server-side rendering) and SPA (single-page app)
- Risk of duplicate logic and hydration bugs

**Recommended Rule**

```
SSR (EJS) = Layout + Shell
SPA (JS)  = Data + Interaction
```

**Explicit Separation**

*Server-Side (EJS Templates)*
```html
<!-- Renders once per request -->
<div id="app">
  <div id="sidebar-container"></div>
  <div id="editor-container"></div>
  <div id="output-container"></div>
</div>
```

*Client-Side (JavaScript)*
```javascript
// Initializes and manages containers
app.init()
  .loadProblem(id)
  .renderEditor()
  .attachListeners()
```

**Implementation Benefits**
- Clear mental model for developers
- Prevents double-rendering bugs
- Easier performance optimization
- Simpler testing strategies

---

#### 4. Validation as a First-Class Layer

**Current State**
```
controller → validator.service → service
```

**Recommended State**
```
route → validate(schema) → controller → service
```

**Example Implementation**
```typescript
// backend/src/validators/submission.schema.ts
const submitCodeSchema = z.object({
  code: z.string().min(1).max(100000),
  problemId: z.string().uuid(),
  language: z.enum(['js', 'ts']).default('js')
});

// backend/src/routes/submissions.routes.ts
router.post('/run', 
  validate(submitCodeSchema),  // Validation middleware
  submissionController.run
);

// controller now only receives validated data
async run(req: ValidatedRequest<SubmissionRequest>) {
  // Safe to assume input is valid
  const result = await this.executionService.run(req.body);
  return res.json(result);
}
```

**Benefits**
- Fewer runtime errors
- Cleaner controllers (no validation logic)
- Better error messages for clients
- Foundation for API documentation (OpenAPI generation)

---

### 🟡 Medium-Impact Improvements

#### 5. Promote Pages → Feature Modules

**Current State**
```
src/js/pages/
├── benchmark/
├── practice/
├── learn/
└── index.js
```

**Recommended State**
```
src/features/
├── practice/
│   ├── practice.page.js           // Page entry point
│   ├── practice.state.js          // Feature state
│   ├── practice.service.js        // Business logic
│   ├── practice.ui.js             // UI components
│   ├── practice.module.js         // Export module
│   └── README.md                  // Feature docs
├── benchmark/
├── learn/
└── notes/
```

**Implementation Pattern**
```javascript
// src/features/practice/practice.module.js
export const practiceFeature = {
  name: 'practice',
  routes: ['/practice/:id'],
  init: practiceInit,
  state: practiceState,
  cleanup: practiceCleanup
};

// src/js/app.js (Feature Registry)
const features = [
  practiceFeature,
  benchmarkFeature,
  learnFeature
];

features.forEach(f => app.registerFeature(f));
```

**Benefits**
- Features are independently testable
- Easier to add/remove features
- State is co-located with logic
- Foundation for dynamic loading or plugins

---

#### 6. Make State Transitions Explicit (Mini Flux)

**Current State**
```javascript
state.problem = data;
state.editorValue = code;
```

**Recommended State**
```javascript
// Dispatch actions instead of direct mutations
state.dispatch('PROBLEM_LOADED', { problem: data });
state.dispatch('CODE_CHANGED', { code: newCode });
state.dispatch('EXECUTION_START');
state.dispatch('EXECUTION_COMPLETE', { output });
```

**Implementation**
```typescript
// src/lib/state.ts
interface StateAction {
  type: string;
  payload: any;
}

const reducers = {
  PROBLEM_LOADED: (state, { problem }) => ({ 
    ...state, 
    currentProblem: problem 
  }),
  CODE_CHANGED: (state, { code }) => ({ 
    ...state, 
    editorValue: code 
  }),
  EXECUTION_START: (state) => ({ 
    ...state, 
    isExecuting: true, 
    output: null 
  }),
  EXECUTION_COMPLETE: (state, { output }) => ({ 
    ...state, 
    isExecuting: false, 
    output 
  })
};

state.dispatch = (type, payload) => {
  const reducer = reducers[type];
  if (!reducer) throw new Error(`Unknown action: ${type}`);
  state._current = reducer(state._current, payload);
  state.emit(type, payload);
};
```

**Benefits**
- Debuggable state flow (replay actions)
- Replayable execution (great for platform learning)
- Powers "execution-flow visualization" feature
- Easier testing with snapshot tests
- Foundation for time-travel debugging

---

#### 7. Controller Layer Should Be "Stupid"

**Current Pattern to Avoid**
```typescript
// ❌ Too much logic in controller
async submitCode(req, res) {
  const { code, problemId } = req.body;
  
  // Validation
  if (!code) return res.status(400).json(...);
  
  // Mapping/transformation
  const problem = await db.problems.findById(problemId);
  const normalizedCode = code.trim();
  
  // Processing
  const result = await execution.run(normalizedCode);
  
  // Business logic
  if (result.success) {
    await db.submissions.create({ code, problemId, result });
  }
  
  res.json(result);
}
```

**Recommended Pattern**
```typescript
// ✅ Stupid controller, smart service
async submitCode(req: ValidatedRequest, res) {
  const result = await submissionService.submitCode(
    req.body.code,
    req.body.problemId
  );
  res.json(result);
}

// Business logic lives in service
async submitCode(code: string, problemId: string): Promise<SubmissionResult> {
  const problem = await problemService.getProblem(problemId);
  const executionResult = await executionService.run(code);
  
  if (executionResult.success) {
    await submissionRepository.save(new Submission(code, problemId, executionResult));
  }
  
  return executionResult;
}
```

**Benefits**
- Controllers testable via HTTP integration tests only
- Services reusable via CLI, workers, scheduled jobs
- Easier to understand control flow
- Cleaner error handling

---

#### 8. One Command = One Intent (Unified npm Scripts)

**Recommended Scripts Configuration**
```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:ui\" \"npm run dev:api\" \"npm run dev:templates\"",
    "dev:ui": "vite --workspace=frontend",
    "dev:api": "nodemon --workspace=backend",
    "dev:templates": "nodemon -e ejs --watch frontend/src/templates -x 'npm run build:templates'",
    "build": "npm run build:templates && npm run build:ui && npm run build:api",
    "build:templates": "node frontend/build.js",
    "build:ui": "vite build --workspace=frontend",
    "build:api": "tsc --workspace=backend",
    "test": "npm run test:api && npm run test:ui",
    "test:api": "jest --workspace=backend",
    "test:ui": "vitest --workspace=frontend",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "check": "npm run lint && npm run test",
    "start": "npm run start:api",
    "start:api": "node backend/dist/server.js"
  }
}
```

**Benefits**
- Clear intent for each command
- Easy for CI/CD integration
- Scalable as project grows
- Self-documenting

---

### 🟢 Strategic Long-Term Improvements

#### 9. Treat "Books" as a Content Pipeline

**Current State**
- `/books` folder contains learning resources
- Not integrated into platform

**Recommended: Content Pipeline**
```
books/dsa/
├── arrays.md              (metadata + content)
├── strings.md
└── trees.md

↓ Pipeline ↓

Extract via gray-matter
↓
Validates structure
↓
Generates:
- Problem entities
- Learn page content
- Hints
- Test cases
- Examples
```

**Implementation Path**
```typescript
// backend/src/content/contentPipeline.ts
interface ContentSource {
  path: string;
  type: 'problem' | 'learn' | 'hint';
}

async function processMarkdown(filePath: string): Promise<Problem> {
  const { data, content } = matter.read(filePath);
  
  return {
    id: data.id || slugify(data.title),
    title: data.title,
    description: content,
    difficulty: data.difficulty,
    category: data.category,
    examples: data.examples,
    testCases: data.testCases
  };
}
```

**Benefits**
- Scalable content (add MD files, get problems)
- Version control for problems
- Foundation for AI-augmented content
- Enables content migrations
- Supports curriculum tracking

---

#### 10. Prepare for Worker-Based Execution (Without Doing It Now)

**Current Tight Coupling**
```typescript
// ❌ Hard to swap implementations
import { VM } from 'vm2';

async execute(code) {
  const vm = new VM({ timeout: 1000 });
  return vm.run(code);
}
```

**Recommended: Provider Pattern**
```typescript
// backend/src/execution/providers/provider.interface.ts
interface ExecutionProvider {
  run(code: string, sandbox?: object): Promise<ExecutionResult>;
  supports(language: string): boolean;
}

// backend/src/execution/providers/vm2Provider.ts
class Vm2ExecutionProvider implements ExecutionProvider {
  async run(code: string, sandbox?: object): Promise<ExecutionResult> {
    try {
      const vm = new VM({ timeout: 1000, sandbox });
      const output = vm.run(code);
      return { success: true, output, error: null };
    } catch (error) {
      return { success: false, output: null, error: error.message };
    }
  }
  
  supports(language: string): boolean {
    return language === 'javascript';
  }
}

// future: WorkerThreadProvider, DockerProvider, etc.

// backend/src/execution/execution.service.ts
class ExecutionService {
  constructor(private provider: ExecutionProvider) {}
  
  async run(code: string, language: string): Promise<ExecutionResult> {
    if (!this.provider.supports(language)) {
      throw new Error(`Language not supported: ${language}`);
    }
    return this.provider.run(code);
  }
}
```

**Benefits**
- Zero architectural changes later when adding workers
- Easy to test with mock providers
- Enables polyglot execution
- Prevents vendor lock-in

---

#### 11. Observability Hooks (Not Just Logs)

**Current State**
- Logging for debugging
- No metrics collection

**Recommended: Observability Layer**
```typescript
// backend/src/observability/metrics.ts
interface ExecutionMetrics {
  executionTime: number;
  memoryUsed: number;
  outputLength: number;
  errorType?: string;
  infiniteLoopDetected: boolean;
}

// Emit metrics
executionService.on('execution:complete', (metrics: ExecutionMetrics) => {
  metricsCollector.record('code_execution', metrics);
});

// Expose metrics endpoint
app.get('/internal/metrics', (req, res) => {
  res.json(metricsCollector.getSummary());
});
```

**Powers**
- Benchmark page insights
- Platform statistics
- Performance optimization suggestions
- Anomaly detection (infinite loops, memory leaks)
- User learning analytics

**Benefits**
- Actionable data for platform improvements
- Foundation for AI-powered suggestions
- Enables capacity planning

---

### 📊 Implementation Roadmap

**Phase 1 (Immediate - Week 1-2)**
- [ ] Introduce shared contracts package
- [ ] Add validation schema layer
- [ ] Make controllers "stupid" (refactor 1 endpoint)
- [ ] Update npm scripts

**Phase 2 (Short-term - Week 3-4)**
- [ ] Create execution subsystem folder structure
- [ ] Implement provider pattern (no functional change yet)
- [ ] Promote pages → feature modules
- [ ] Add state.dispatch() pattern

**Phase 3 (Medium-term - Month 2)**
- [ ] Clarify SSR/SPA boundary in templates
- [ ] Build content pipeline for books/
- [ ] Add basic observability hooks
- [ ] Write architecture decision records (ADRs)

**Phase 4 (Long-term - Month 3+)**
- [ ] Worker thread provider implementation
- [ ] Docker sandbox provider
- [ ] GraphQL API layer (optional)
- [ ] Open-source architecture documentation

---

## Conclusion

The JS Practice Platform is built with a clean, modular architecture that separates concerns between frontend and backend. The Express backend handles API requests and code execution, while the Vite frontend provides an interactive user interface with Monaco code editor. The architecture scales from single-developer setup to production deployment with proper error handling, security, and extensibility.

### Current Architectural Strengths
- ✅ Clear separation of frontend and backend
- ✅ Type-safe backend with TypeScript
- ✅ Modular component-based frontend
- ✅ Service-oriented architecture
- ✅ Comprehensive error handling
- ✅ Security-first design
- ✅ Scalable and maintainable structure
- ✅ Monorepo done correctly
- ✅ Execution safety awareness
- ✅ Scalability thinking baked in early

### Recommended Path to Platform-Grade Quality
- 🔧 **Execution isolation** - Separate into first-class subsystem
- 🔧 **Contract enforcement** - Shared validation layer
- 🔧 **Explicit state transitions** - Mini Flux pattern
- 🔧 **Content as data** - Pipeline for books/
- 🔧 **Observability-first** - Metrics for insights
- 🔧 **Provider pattern** - Preparation for scaling

This architecture is **production-ready today** and has **clear paths to handle 10x growth** without major refactors.
