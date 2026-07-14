🤖 Playwright Contact Form Automation

A simple automation testing project built using Playwright with TypeScript to automate a contact form submission process. This test simulates real user interactions by entering form details, submitting the form, and validating the workflow.

✨ Features

✅ Automated form input handling
✅ Real user interaction simulation
✅ Form submission automation
✅ Playwright locators and assertions
✅ Console logs for execution tracking
✅ TypeScript-based test script
✅ Fast and reliable browser automation

🛠️ Technologies Used
Playwright – End-to-End Automation Testing
TypeScript – Test Script Development
Node.js – Runtime Environment

📂 Project Structure
TESTING/
│
├── tests/
│   ├── mysite.spec.ts
│   ├── example.spec.ts
│   ├── superadmin.spec.ts
│   └── superadminbug.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── .gitignore
🚀 Test Scenario

The automation script performs the following actions:

1)Opens the contact form website.
2)Enters the user's name.
3)Enters the email address.
4)Enters the subject.
5)Enters the message.
6)Clicks the submit button.
7)Verifies successful execution using Playwright assertions.

🌐 Test Website
https://kabishs.github.io/contact-form/
▶️ Run the Test

Install dependencies:

npm install

Run the Playwright test:

npx playwright test tests/mysite.spec.ts

Run tests with UI mode:

npx playwright test --ui
🎯 Learning Outcomes

This project helped in understanding:

Playwright Test Framework
Element Locators and Selectors
Assertions and Validations
Browser Automation
End-to-End Testing
TypeScript in Automation Testing
👨‍💻 Author

Kabish S

Aspiring QA Engineer | Automation Testing Enthusiast | Java Full Stack Developer
