# 🎭 "Playwright Contact Form Automation".

A simple automation testing project built using **Playwright with TypeScript** to automate a contact form submission process. This project simulates real user interactions by filling form fields, submitting the form, and validating the workflow.

## ✨ Features

- 🚀 Automated contact form submission
- ✍️ Auto fills Name, Email, Subject, and Message fields
- 🖱️ Performs form submission automatically
- ✅ Uses Playwright assertions for validation
- ⏱️ Includes execution delays for demonstration videos
- 🌐 End-to-End browser automation testing

## 🛠️ Technologies Used

- **Playwright** – Browser Automation Framework
- **TypeScript** – Programming Language
- **Node.js** – Runtime Environment
- **Playwright Test Runner** – Test Execution and Assertions

## 📂 Project Structure

```text
TESTING/
│
├── .github/
├── .vscode/
├── tests/
│   ├── example.spec.ts
│   ├── mysite.spec.ts
│   ├── superadmin.spec.ts
│   └── superadminbug.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.ts
```

## ▶️ Run the Test

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run only the contact form test:

```bash
npx playwright test tests/mysite.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

## 🎯 Learning Outcomes

This project helped in understanding:

- Playwright installation and setup
- Locators and element interactions
- Form automation testing
- Assertions using Playwright Test
- End-to-End testing workflow
- Browser automation using TypeScript

## 👨‍💻 Author

**Kabish S**

- B.Tech Information Technology Student
- Aspiring Java Full Stack Developer and QA Engineer

---

⭐ If you found this project useful, consider giving it a star on GitHub.
