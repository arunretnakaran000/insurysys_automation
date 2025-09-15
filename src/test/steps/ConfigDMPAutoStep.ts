import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import * as data from "../../helper/util/test-data/SMdata.json";
import { fixture } from "../../hooks/pageFixture";
import DMPTest from "../../pages/ConfigDMPAutoPage";
import UserMenu from "../../pages/UserPage";

let ConfigDMPAutoPage: DMPTest
let UserPage: UserMenu

Given('user navigates to the APM application to access configurations menu - DMP Automation', async function () {
    UserPage = new UserMenu(fixture.page);
    ConfigDMPAutoPage = new DMPTest(fixture.page);
    await UserPage.navigateToSite(data.Title);

})

When('user enter valid admin login credentials - DMP Automation', async () => {

    await UserPage.enterUsername(data.userName);
    await UserPage.enterPassword(data.password);

})

Then('user should login successfully as admin user - DMP Automation', async () => {

    await UserPage.ClickLogin();

})

When('choose DMP Automation from configurations menu - DMP Automation', async () => {

    await ConfigDMPAutoPage.navigatetomenu();

})

Then('verify the EC and Plano actions active to inactive or inversely', async () => {

    await ConfigDMPAutoPage.Automation_EC();
    await ConfigDMPAutoPage.Automation_Plano();

})

Then('verify the max count and blank field validations - DMP Automation', async () => {

    await ConfigDMPAutoPage.FieldValidations();
    await ConfigDMPAutoPage.MaxlimitField();

})

Then('verify the failue threshold edit actions - DMP Automation', async () => {

    await ConfigDMPAutoPage.FailureThreshold();

})

Then('verify Email config - EC search and edit actions - DMP Automation', async () => {

    await ConfigDMPAutoPage.DMP_EmailConfig_EC_Validation(data.userName);
    await ConfigDMPAutoPage.DMP_EmailConfig_EC(data.userName)

})

Then('verify Email config - Plano search and edit actions - DMP Automation', async () => {

    await ConfigDMPAutoPage.DMP_EmailConfig_Plano_Validation(data.userName);
    await ConfigDMPAutoPage.DMP_EmailConfig_Plano(data.userName, data.UsersTwo);

})

Then('search for invalid keyword and verify the response - DMP Automation', async () => {

    await ConfigDMPAutoPage.DMP_EmailConfig_EC_Search(data.Invalid);
    await ConfigDMPAutoPage.DMP_EmailConfig_Plano_Search(data.Invalid);

})