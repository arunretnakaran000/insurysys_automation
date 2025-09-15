import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import * as data from "../../helper/util/test-data/SMdata.json";
import { fixture } from "../../hooks/pageFixture";
import Auditlog from "../../pages/AuditPage";
import UserMenu from "../../pages/UserPage";

let AuditPage: Auditlog
let UserPage: UserMenu

Given('user navigates to the APM application for Audit log', async function () {
    UserPage = new UserMenu(fixture.page);
    AuditPage = new Auditlog(fixture.page);
    await UserPage.navigateToSite(data.Title);

})

When('user enter valid login credentials for APM for Audit log', async () => {

    await UserPage.enterUsername(data.userName);
    await UserPage.enterPassword(data.password);

})

Then('user should login successfully with valid login for Audit log', async () => {

    await UserPage.ClickLogin();

})

When('search for an user to change the user role actions and update the user for Audit log', async () => {

    await UserPage.UserMenuFunctionality(data.userRole);

})


Then('go to audit menu and search for the user', async () => {
    await AuditPage.navigatetomenu();
    await AuditPage.chooseloginuser();

})

Then('verify the audit log for the respective user', async () => {
    await AuditPage.verifyauditlog();
})

When('the user do the filter search for audit', async () => {
    await AuditPage.navigatetomenu();
    await AuditPage.AuditFilterSearch();
    await AuditPage.chooseloginuser();
})

Then('user clear the filter search for audit', async () => {
    await AuditPage.AuditClearFilterSearch();
})

Then('verify the search result for audit log', async () => {
    await AuditPage.VerifyFilterSearch();
})


