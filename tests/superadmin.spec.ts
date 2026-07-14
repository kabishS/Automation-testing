import { test, expect } from '@playwright/test';

test('Verify Monthly Revenue Card on Superadmin Dashboard', async ({ page }) => {
  // 1. Navigate to the login page (adjust the URL if the login path differs)
  await page.goto('https://fitflow.raphaseven.com/superadmin/login');

  // 2. Fill in the login credentials
  await page.getByPlaceholder('superadmin@raphaseven').fill('superadmin@gymnation.com'); 
  console.log('superadmin credentials filled');
await page.locator('input[name="password"]').fill('SuperAdmin@123');
  console.log('superadmin credentials filled');

  // 3. Click the login/submit button
  await page.click('button[type="submit"]');
  console.log('Login button clicked');
  // 4. Wait for navigation to the dashboard
  await page.waitForURL('https://fitflow.raphaseven.com/superadmin/dashboard');

  // 5. Locate the "Monthly Revenue" card and assert its visibility and value
  const monthlyRevenueCard = page.locator('text=Monthly Revenue');
  await expect(monthlyRevenueCard).toBeVisible();

  // Optionally, locate and log the specific amount (e.g., ₹2,000)
  // This looks for the element containing the currency symbol relative to the Monthly Revenue card
  const revenueAmount = page.locator('div').filter({ hasText: /^₹\d{1,3}(,\d{3})*$/ }).first(); 
  console.log(`Monthly Revenue Displayed: ${await revenueAmount.innerText()}`);
});