import { test, expect } from '@playwright/test';

test('Fill and submit contact form', async ({ page }) => {
  console.log('🚀 Starting automation test...');

  await page.goto('https://kabishs.github.io/contact-form/');

  const pause = async () => await page.waitForTimeout(1000);

  await page.locator('input[name="name"]').fill('Kabish S');
  await pause();

  await page.locator('input[name="email"]').fill('kabishvimala@gmail.com');
  await pause();

  await page.locator('input[name="subject"]').fill('Testing Contact Form');
  await pause();

  await page.locator('textarea[name="message"]').fill(
    'This is my first automation test using Playwright with TypeScript.'
  );
  await pause();

  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL(/.*/);

  console.log('✅ Automation testing successfully completed.');
  await page.waitForTimeout(5000); 
});