import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import * as data from "../../helper/util/test-data/SMdata.json";
import { fixture } from "../../hooks/pageFixture";
import SMPage from "../../pages/DMPSMPage";
import UserMenu from "../../pages/UserPage";

let DMPSMPage: SMPage
let UserPage: UserMenu

Given('user navigates to the APM application to access reports menu - DMP SM', async function () {
    UserPage = new UserMenu(fixture.page);
    DMPSMPage = new SMPage(fixture.page);
    await UserPage.navigateToSite(data.Title);

})

When('user enter valid admin login credentials to access reports - DMP SM', async () => {

    await UserPage.enterUsername(data.userName);
    await UserPage.enterPassword(data.password);

})

Then('user should login successfully as admin user to access reports - DMP SM', async () => {

    await UserPage.ClickLogin();

})

When('user select compass and manitou from reports menu - DMP SM', async () => {

    await DMPSMPage.navigatetomenu();

})

Then('verify the apply filters for reports DMP SM', async () => {

    await DMPSMPage.Alldropdowns_Happyflow();

})

Then('click to export to excel and the validation message should displayed - DMP SM', async () => {

    await DMPSMPage.Alldropdowns_Happyflow();
    await DMPSMPage.Excelexportwithdata();

})

Then('click to export to excel and should successfully exported - DMP SM', async () => {

    await DMPSMPage.Alldropdowns_Happyflow();
    await DMPSMPage.Excelexportwithdata();

})