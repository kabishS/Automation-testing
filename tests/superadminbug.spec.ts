import { test, expect } from '@playwright/test';

test('superadminbug', async ({ page }) => {
await page.getByPlaceholder('superadmin@raphaseven').fill('superadmin@gymnation.com'); 
  console.log('superadmin credentials filled');
  await page.getByPlaceholder('••••••••••••').fill('SuperAdmin@123');
  console.log('superadmin credentials filled');
  await page.getByRole('button', { name: 'Sign In' }).click();
});