# Run Guide

## Architecture
- **`packages/contracts`** - Shared TypeScript types
- **`frontend`** - Vite + EJS + vanilla JS
- **`backend`** - Express.js + TypeScript + validation

## Prerequisites
- Node.js >= 18, npm >= 9
- Ports: 3000 (Vite), 5000 (backend)

## Setup
```bash
npm install               # Install all workspaces
npm run build:contracts   # Build contracts (required first)
cd backend && cp .env.example .env && cd ..
```

## Development

**Full stack:**
```bash
npm run dev   # Runs EJS watch, Vite (3000), backend (5000), template compiler
```
Visit http://localhost:5000

**Individual services:**
```bash
npm run dev:ui         # Vite only
npm run dev:api        # Backend only
npm run dev:templates  # Template watcher
```

## Build

```bash
npm run build           # Full build
npm run build:ui        # Frontend bundle
npm run build:api       # Backend compile
npm run build:templates # EJS compile
npm run start           # Run production server
```

Outputs: `packages/contracts/dist/`, `.build/html/`, `backend/dist/`, `backend/public/assets/`

## Project Structure

```
packages/contracts/src/
├── api-response.contract.ts
├── problem.contract.ts
├── submission.contract.ts
└── execution.contract.ts
frontend/src/
├── templates/ (EJS → HTML)
│   ├── layouts/
│   ├── partials/
│   └── pages/
├── js/
│   ├── common/ (bundled as common.js)
│   └── pages/ (page-specific)
├── styles/pages/ (page-specific CSS)
├── components/ (Web Components)
└── data/ (problems, etc.)
backend/src/
├── validators/ (Zod schemas)
├── controllers/
├── routes/
├── services/
└── models/
```

**Build Outputs:**
- Dev: `.build/html/`, Vite on 3000, backend on 5000
- Prod: `backend/public/assets/` (minified), `backend/views/` (compiled)

## Quality Checks

```bash
npm run check       # Lint + test
npm run lint        # Check style
npm run lint:fix    # Auto-fix
npm run test        # All tests
```

## Creating API Endpoints

1. **Contract** (`packages/contracts/src/myfeature.contract.ts`):
```typescript
export interface MyRequest { id: string; value: number; }
export interface MyResponse { success: boolean; message: string; }
```

2. **Validation** (`backend/src/validators/myfeature.schema.ts`):
```typescript
export const myRequestSchema = z.object({
  id: z.string().min(1),
  value: z.number().positive()
});
```

3. **Route** (`backend/src/routes/myfeature.routes.ts`):
```typescript
router.post('/myfeature', 
  validate(myRequestSchema, 'body'),
  controller.handle
);
```

4. **Controller** (`backend/src/controllers/myfeature.controller.ts`):
```typescript
export const controller = {
  handle: async (req: ValidatedRequest<MyRequest>, res: Response) => {
    try {
      const result = await service.process(req.body);
      res.json({
        success: true,
        data: result,
        message: 'Success',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
        code: 'PROCESSING_ERROR',
        timestamp: new Date().toISOString()
      });
    }
  }
};
```

## Creating Pages

1. **Template** (`frontend/src/templates/pages/mypage.ejs`):
```ejs
---
layout: layouts/base.ejs
pageTitle: My Page
pageCSS: mypage.css
pageJS: mypage.js
---
<main><!-- Content --></main>
```

2. **Page JS** (`frontend/src/js/pages/mypage.js`):
```javascript
import { MyResponse } from '@js-practice/contracts';
console.log('Loaded');
```

3. **Page CSS** (`frontend/src/styles/pages/mypage.css`)

4. **Backend route** (`backend/src/app.ts`):
```typescript
app.get('/mypage', (req, res) => {
  res.render('mypage', { pageTitle: 'My Page' });
});
```

5. **Build and test:**
```bash
npm run build:templates && npm run dev
```

## Troubleshooting

**Contracts/TypeScript errors:**
```bash
npm run build:contracts && npm install
```

**Templates not updating:**
```bash
npm run build:templates
```

**Assets not loading:** Check `backend/public/assets/` exists after build

**Port in use:** Change in `frontend/vite.config.js` or `backend/.env`

**Validation errors:** Check schema in `backend/src/validators/`

## Workflow

**Initial setup:**
```bash
npm install
npm run build:contracts
cd backend && cp .env.example .env && cd ..
```

**Development loop:**
```bash
npm run dev                    # Full stack dev
# or individual services:
npm run dev:ui                 # Vite frontend
npm run dev:api                # Express backend
npm run dev:templates          # EJS watch
```

**Before commit:**
```bash
npm run lint:fix               # Fix code style
npm run check                  # Lint + test
```

**Compile contracts (after changes):**
```bash
npm run build:contracts
npm install                    # Reinstall deps
```

**Compile templates (after template changes):**
```bash
npm run build:templates
```

**Build for production:**
```bash
npm run build                  # Full build
# Individual builds:
npm run build:contracts
npm run build:templates
npm run build:ui
npm run build:api
```

**Run production:**
```bash
npm run build
npm run start
```

**Other commands:**
```bash
npm run build:ui               # Frontend bundle only
npm run build:api              # Backend compile only
npm run lint                   # Check style
npm run test                   # Run tests
```