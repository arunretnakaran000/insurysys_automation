import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import * as data from "../../helper/util/test-data/SMdata.json";
import { fixture } from "../../hooks/pageFixture";
import ReportsPage from "../../pages/ReportsCompassPage";
import UserMenu from "../../pages/UserPage";

let ReportsCompassPage: ReportsPage
let UserPage: UserMenu

Given('user navigates to the APM application to access reports menu', async function () {
    UserPage = new UserMenu(fixture.page);
    ReportsCompassPage = new ReportsPage(fixture.page);
    await UserPage.navigateToSite(data.Title);

})

When('user enter valid admin login credentials to access reports', async () => {

    await UserPage.enterUsername(data.userName);
    await UserPage.enterPassword(data.password);

})

Then('user should login successfully as admin user to access reports', async () => {

    await UserPage.ClickLogin();

})

When('user select compass and manitou from reports menu', async () => {

    await ReportsCompassPage.navigatetomenu();

})

Then('verify the apply filters for reports compass and manituo', async () => {

    await ReportsCompassPage.Alldropdowns_Happyflow();

})

Then('click to export to excel and the validation message should displayed', async () => {

    await ReportsCompassPage.Alldropdowns_Happyflow();
    await ReportsCompassPage.Excelexportwithdata();

})

Then('click to export to excel without click on Apply filter button', async () => {

    await ReportsCompassPage.Alldropdowns_Negative();

})

Then('choose values from each filters and check if the search is working for respective filters or not', async () => {

    await ReportsCompassPage.Reportbaseddropdown();
    await ReportsCompassPage.Caseorgindropdown();
    await ReportsCompassPage.Statusdropdown();
    await ReportsCompassPage.Robotdropdown();
    await ReportsCompassPage.Processeddatedropdown();

})

Then('user fill from date and to date and it should work for valid date search', async () => {

    await ReportsCompassPage.CustomProcesseddate();

})

Then('user select custom and without fill dates should displayed validation error message', async () => {

    await ReportsCompassPage.CustomNodateselected();

})

Then('click to export to excel and should successfully exported', async () => {

    await ReportsCompassPage.KeywordFilter(data.Keyword);
    await ReportsCompassPage.Excelexportwithdata();

})

Then('verify user search for keyword with weekly processed date', async () => {

    await ReportsCompassPage.KeywordFilter(data.Keyword);

})