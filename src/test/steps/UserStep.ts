import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import * as data from "../../helper/util/test-data/SMdata.json";
import { fixture } from "../../hooks/pageFixture";
import UserMenu from "../../pages/UserPage";

let UserPage: UserMenu

Given('user navigates to the APM application', async function () {
    UserPage = new UserMenu(fixture.page);
    await UserPage.navigateToSite(data.Title);

})

When('user enter valid login credentials for APM', async () => {

    await UserPage.enterUsername(data.userName);
    await UserPage.enterPassword(data.password);

})

Then('user should login successfully with valid login', async () => {

    await UserPage.ClickLogin();

})

When('search for an user to change the user role actions and update the user', async () => {

    await UserPage.UserMenuFunctionality(data.userRole);

})


Then('user click on logout button and should successfully logout from the application', async () => {

    await UserPage.ClickLogout();

})

Then('user login to the application with new role and verify', async () => {
    await UserPage.UsernameVerifyRole(data.userRole);
    await UserPage.PasswordVerifyRole(data.userPass);
    await UserPage.ClickLogin();
    await UserPage.VerifyUserRole(data.userRole);

})

When('admin user add an already existing user', async () => {
    await UserPage.AddNewUser(data.userName);
})

Then('user validation toast message should displayed', async () => {
    await UserPage.Toastmessageverify();

})

When('admin user add an invalid email user', async () => {
    await UserPage.AddInvalidUser(data.Invalid);

})

When('admin user add an valid interface user', async () => {
    await UserPage.AddValidUser(data.Valid);

})

When('admin user edit and change to active or inactive an user', async () => {

    await UserPage.ActiveandInactive(data.userRole);

})

When('admin user edit and change the active user to inactive user', async () => {

    await UserPage.MakeInactiveUser(data.userRole)


})

Then('inactive user login to the application', async () => {

    await UserPage.UsernameVerifyRole(data.userRole);
    await UserPage.PasswordVerifyRole(data.userPass);
    await UserPage.ClickLogin();
    await UserPage.InactiveToastmessage();


})