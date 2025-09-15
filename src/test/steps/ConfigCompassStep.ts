import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import * as data from "../../helper/util/test-data/SMdata.json";
import { fixture } from "../../hooks/pageFixture";
import CompassTest from "../../pages/ConfigCompassPage";
import UserMenu from "../../pages/UserPage";

let ConfigCompassPage: CompassTest
let UserPage: UserMenu

Given('user navigates to the APM application to access configurations menu', async function () {
    UserPage = new UserMenu(fixture.page);
    ConfigCompassPage = new CompassTest(fixture.page);
    await UserPage.navigateToSite(data.Title);

})

When('user enter valid admin login credentials for APM', async () => {

    await UserPage.enterUsername(data.userName);
    await UserPage.enterPassword(data.password);

})

Then('user should login successfully as admin user', async () => {

    await UserPage.ClickLogin();

})

When('choose compass and manitou from configurations menu', async () => {

    await ConfigCompassPage.navigatetomenu();

})

Then('verify the bot actions active to inactive or inversely', async () => {

    await ConfigCompassPage.ECBot1();
    await ConfigCompassPage.ECBot2();
    await ConfigCompassPage.PlanoBot3();
    await ConfigCompassPage.ECVirtualBot();
    await ConfigCompassPage.PlanoVirtualBot();

})

Then('change and verify the primary role for the bots', async () => {

    await ConfigCompassPage.EC_Bot_1_PrimaryRole();
    await ConfigCompassPage.ECBot1();
    await ConfigCompassPage.EC_Bot_2_PrimaryRole();
    await ConfigCompassPage.ECBot2();

})

Then('verify the failue threshold edit actions', async () => {

    await ConfigCompassPage.FailureThreshold();

})

Then('verify the max count and blank field validations', async () => {

    await ConfigCompassPage.FieldValidations();
    await ConfigCompassPage.MaxlimitField();


})

Then('verify Email config - EC search and edit actions', async () => {

    await ConfigCompassPage.EmailConfig_EC_Validation(data.userName);
    await ConfigCompassPage.EmailConfig_EC(data.userName, data.UsersEC);


})

Then('verify Email config - Plano search and edit actions', async () => {

    await ConfigCompassPage.EmailConfig_Plano_Validation(data.userName);
    await ConfigCompassPage.EmailConfig_Plano(data.userName, data.UsersPlano);

})

Then('search for invalid keyword and verify the response', async () => {

    await ConfigCompassPage.EmailConfig_EC_Search(data.Invalid);
    await ConfigCompassPage.EmailConfig_Plano_Search(data.Invalid);

})