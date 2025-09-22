import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import * as data from "../../helper/util/test-data/SMdata.json";
import {fixture} from '../../hooks/pageFixture';
import myLogin from '../../pages/myLogin';
setDefaultTimeout(60 * 1000 * 2);



let TestLogin: myLogin

Given('user navigates to the INSURSYS application', async function () {
TestLogin = new myLogin(fixture.page);
await TestLogin.navigateToSite(data.Title);
});

When('user enter valid login credentials for INSURSYS', async function () {
await TestLogin.enterUsername(data.userName);
await TestLogin.enterPassword(data.userPass);

});

Then('user should login successfully with valid login', async function () {
 
  await TestLogin.ClickLogin();
});

When('user enter invalid login credentials for INSURSYS', async function () {

    await TestLogin.enterUsername(data.invalidUserName);
    await TestLogin.enterPassword(data.invalidPassword);
});

Then('user sign out from the application', async function () {
    await TestLogin.ClickSignOut();
});

Then('user should see an error message for invalid login', async function () {

    await TestLogin.ClickLogin();
    await TestLogin.verifyErrorMessage(data.InvalidMessage);
});

When('user enter case insensitive credentials for INSURSYS', async function () {

    await TestLogin.enterUsername(data.userName);
    await TestLogin.enterPassword(data.userPass3);
});
Then('user should see an error message for case insensitive credentials', async function () {

    await TestLogin.ClickLogin();
    await TestLogin.verifyerrorMessage2(data.InvalidMessage2);
});
