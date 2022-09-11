# Next.js Typescript Template

## Requirements

- Node: Runtime
- yarn: Package Manager
- Prettier: Code Formatter
- ESLint: Code Linter
- Husky: Git hooks

## Rules

- Response design with tailwindcss
- Unit testing required

## Directories

    ROOT
    ├── README.md # this
    ├── node_modules
    ├── package.json
    ├── packages # microservices. add new services here.
           ├── frontend # frontend service made by next.js
           └── backend # api service made by express
    ├── prettier.config.js
    └── yarn.lock

## Installation

    git clone git@github.com:alterworks/idolly.git
    yarn prepare

## Commands

Start dev servers:

    yarn workspaces run dev

Testing:

    yarn workspaces run test

Linting:

    yarn workspaces run lint

Formatting with prettier:

    yarn workspaces run format

Building:

    yarn workspaces run build

# nextjs-ts-template
