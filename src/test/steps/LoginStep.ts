import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';


Given('user navigates to the APM application', async function () {
  // Implement navigation logic here
  await this.page.goto('https://your-apm-app-url.com');
});

When('user enter valid login credentials for APM', async function () {
  // Implement valid login logic here
  await this.page.fill('#username', 'validUser');
  await this.page.fill('#password', 'validPassword');
  await this.page.click('#loginButton');
});

Then('user should login successfully with valid login', async function () {
  // Implement successful login check here
  await expect(this.page).toHaveURL(/dashboard/);
  await expect(this.page.locator('.welcome-message')).toBeVisible();
});

When('user enter invalid login credentials for APM', async function () {
  // Implement invalid login logic here
  await this.page.fill('#username', 'invalidUser');
  await this.page.fill('#password', 'invalidPassword');
  await this.page.click('#loginButton');
});

Then('user should see an error message and remain on the login page', async function () {
  // Implement error message check here
  await expect(this.page.locator('.error-message')).toBeVisible();
  await expect(this.page).toHaveURL(/login/);
});

When('inactive user enter login credentials for APM', async function () {
  // Implement inactive user login logic here
  await this.page.fill('#username', 'inactiveUser');
  await this.page.fill('#password', 'inactivePassword');
  await this.page.click('#loginButton');
});

Then('user should see an inactive user error message', async function () {
  // Implement inactive user error message check here
  await expect(this.page.locator('.inactive-user-message')).toBeVisible();
});
