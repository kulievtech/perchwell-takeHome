# 🚀 Perchwell Automation Framework

## Description

A modern, reliable automation testing framework built with Playwright for testing Perchwell web application.

## Features

-   Cross-browser testing (Chromium, Firefox, WebKit)
-   Parallel test execution
-   Automatic waiting and assertions
-   Screenshot and video capture
-   HTML test reports
-   GitHub Actions integration for CI/CD
-   Page Object Model pattern for maintainable tests

## 🛠 Setup Instructions

### Prerequisites

-   Node.js (v16 or higher recommended)
-   npm (comes with Node.js) or yarn

### Installation

1. Clone this repository:

```bash
git clone https://github.com/kulievtech/perchwell-takeHome.git
```

2. Install dependencies:

```bash
npm install
```

#### or

```bash
yarn install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## 🗂 Project Structure

```
├── pages/ # Page Object classes
│ ├── basePage.ts
│ └── brokersPage.ts
│ └── homePage.ts
│ └── mlsPage.ts
│ └── pageManager.ts
├── tests/ # Test specifications
│ ├── brokerPageTest.spec.ts
│ └── mlsPageTest.spec.ts
├── playwright-report/ # Test reports (generated)
├── test-results/ # Test results (generated)
├── playwright.config.ts # Playwright configuration
├── package.json
└── README.md
```

## 📊 Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in a specific browser

```bash
npx playwright test --project=chromium
```

#### or

```bash
npx playwright test --project=firefox
```

#### or

```bash
npx playwright test --project=webkit
```

### Run tests in headed mode (visible browser)

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/brokerPageTest.spec.ts
```

#### or

```bash
npx playwright test tests/mlsPageTest.spec.ts
```

### Run tests with debug

```bash
npx playwright test --debug
```

## ✅ Test Results

### HTML Report

After test execution, an HTML report is automatically generated. To view it:

```bash
npx playwright show-report
```

The report includes:

-   Test execution status (passed/failed/skipped)
-   Execution time
-   Screenshots for failed tests
-   Video recordings
-   Trace viewer links for debugging

The report files are stored in the playwright-report directory by default.

## ⚙️ GitHub Actions

This repository includes a GitHub Actions workflow (.github/workflows/playwright.yml) that automatically runs the test suite on every push to the branch. The workflow:

1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Runs Playwright tests
5. Uploads test artifacts (including HTML report) if tests fail

You can view the test results in the "Actions" tab of the GitHub repository.

## 📋 Configuration

The main configuration files are:

playwright.config.ts - Main Playwright configuration (browsers, parallelization, etc.)

package.json - Project dependencies and scripts

## 🔧 Useful Commands

### Update snapshots

```bash
npx playwright test --update-snapshots
```

### Record new tests

```bash
npx playwright codegen https://www.perchwell.com/
```

## ❓ Troubleshooting

If you encounter issues:

1. Make sure all dependencies are installed correctly
2. Verify your Node.js version meets the requirements
3. Check the Playwright documentation for common issues
4. Examine the test reports for specific failure details
5. For more information about Playwright, visit the official documentation.
