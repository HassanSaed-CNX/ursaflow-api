# UrsaFlow Hydraulics Platform Overview

This repository is the monorepo scaffold for the Hydraulics Production App. It includes:

- `apps/frontend`: Next.js App Router UI.
- `apps/backend`: NestJS Fastify API with global validation.
- `packages/schemas`: shared Zod schemas.
- `packages/ui`: shared UI components.

Key requirements implemented in this scaffold:

- Global `ValidationPipe` (transform + whitelist + forbidNonWhitelisted).
- Zod schemas for client and server actions.
- Event intake endpoint for JSONB event store.

Next steps:

- Add persistence for the event store with JSONB, partitions, and indexes.
- Build read models and notification/approval modules.
- Wire Server Actions to the shared schemas.
