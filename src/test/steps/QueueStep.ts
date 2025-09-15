import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import * as data from "../../helper/util/test-data/SMdata.json";
import { fixture } from "../../hooks/pageFixture";
import QueueMenu from "../../pages/QueuePage";
import UserMenu from "../../pages/UserPage";

let QueuePage: QueueMenu
let UserPage: UserMenu

Given('user navigates to the application to access Queue', async function () {
    UserPage = new UserMenu(fixture.page);
    QueuePage = new QueueMenu(fixture.page);
    await UserPage.navigateToSite(data.Title);

})

When('user enter valid login credentials to access Queue', async () => {

    await UserPage.enterUsername(data.userName);
    await UserPage.enterPassword(data.password);

})

Then('user should login successfully with valid login to access Queue', async () => {

    await UserPage.ClickLogin();

})

When('go to the Queue menu in the application', async () => {

    await QueuePage.navigatetomenu();

})

Then('apply filter and verify the search result for queue', async () => {

    await QueuePage.securitymanagerfilter();
    await QueuePage.DGalarmportalfilter();
    await QueuePage.DGSecurityManagerfilter();

})

Then('apply filter with valid keyword and verify the result', async () => {

    await QueuePage.Keywordfilter(data.Keyword);

})


Then('apply filter with random keyword and verify the result', async () => {

    await QueuePage.RandomKeywordfilter(data.userPass);

})

Then('user apply the filter with keyword and go to other page and back to Queue page', async () => {

    await QueuePage.filtersearchclear(data.userPass);

})

Then('user click on view history and sort all the old data', async () => {

    await QueuePage.viewhistory();
    await QueuePage.viewhistorystort();

})

Then('user click on view history to disable the feature', async () => {

    await QueuePage.viewhistorydisabled();
})

Then('user click on export to excel and excel should downloaded successfully', async () => {

    await QueuePage.dataexporttoexcel(data.Keyword);
})

Then('user click on export to excel with no data and validation error should displayed', async () => {

    await QueuePage.nodataexporttoexcel(data.userPass);
})



