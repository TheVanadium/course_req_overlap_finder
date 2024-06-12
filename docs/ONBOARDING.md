# Getting Started

## Prerequisites

### Tools
- `git` For cloning
- `node` For installing relevant packages

### APIs
- UC Merced Badge API - https://github.com/TheVanadium/uc_merced_badge_api

## Installation
### Frontend
1. Clone the repository
2. Run `npm install` in the main directory
3. Run `npm start` to start running the development server

### Backend
If you're self-hosting the Badge API, ensure it's being run at the default proxy, `http://127.0.0.1:5000` (or change the proxy to your needs, see package.json)

## Making Changes

### Style/Linting
Use prettier, use eslint

### Testing
Make sure tests pass before pushing. There are going to be some "Cannot read
properties of undefined" errors for the mock fetch, but that's expected. All
tests should still pass.