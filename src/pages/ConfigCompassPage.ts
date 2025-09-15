import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { faker } from '@faker-js/faker';


export default class ConfigCompassPage {
    constructor(private page: Page) {

    }

    private Elements = {
        ConfigurationsMenu: "(//span[@class='mat-mdc-button-touch-target'])[4]",
        CompassManitou: "//a[contains(text(),'Compass & Manitou')]",
        Radiobutton1: "(//div[@class='mdc-form-field'])[1]",
        Radiobutton2: "(//div[@class='mdc-switch__ripple'])[2]",
        Radiobutton3: "(//div[@class='mdc-switch__ripple'])[3]",
        Radiobutton4: "(//div[@class='mdc-switch__ripple'])[4]",
        Radiobutton5: "(//div[@class='mdc-switch__ripple'])[5]",
        PopupStop: "//span[text()='Stop']",
        PopupDntStop: "(//span[@class='mdc-button__label'])[2]",
        PopupStart: "//span[text()='Start']",
        PopupDntStart: "(//span[@class='mdc-button__label'])[2]",
        CurrentStatus1: "//tbody/tr[1]/td[4]",
        CurrentStatus2: "//tbody/tr[2]/td[4]",
        CurrentStatus3: "//tbody/tr[3]/td[4]",
        CurrentStatus4: "//tbody/tr[4]/td[4]",
        CurrentStatus5: "//tbody/tr[5]/td[4]",
        Toastmessage: " //div[contains(text(),'Successfully updated robot information ')]",
        ProcessDropdown: "//span[text()='Process Case']",
        BotName: "//td[text()=' EC Bot 1 ']",
        ExcelDropdown: "(//span[text()='Process Excel'])[2]",
        PrimaryRole: "//tbody/tr[1]/td[6]",
        PrimaryRole1: "//tbody/tr[2]/td[6]",
        PopYes: "//span[contains(text(),'Yes')]",
        PopNo: "//span[contains(text(),'No')]",
        DefaultValue: "(//span[@class='mdc-list-item__primary-text'])[1]",
        FailureThreshold: "//span[text()='Failure Threshold']",
        Createicon: "//i[text()='create']",
        Valuefield: "//input[@placeholder='Value']",
        CommentBox: "//mat-label[text()='Comments']",
        SubmitButton: "//span[text()='Submit']",
        UpdatedToast: "//div[contains(text(),' Updated successfully ')]",
        CountValue: "(//td[@role='cell'])[3]",
        EditConfigText: "//h2[text()='Edit Configuration']",
        CancelButton: "//span[text()='Cancel']",

        EmailConfigEC: "//span[text()='Email Configurations - EC']",
        EmailConfigPlano: "//span[text()='Email Configurations - Plano']",
        SearchEC: "//input[@placeholder='Search']",
        SerialNo: "(//td[@role='cell'])[1]",
        EditConfigEmail: "(//i[text()='create'])[1]",
        Valuebox: "//textarea[@placeholder='Value']",

}

    async navigatetomenu() {
        await this.page.click(this.Elements.ConfigurationsMenu);
        await this.page.click(this.Elements.CompassManitou);

    }

    async ECBot1() {


        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Radiobutton1);

        const Status = await this.page.locator(this.Elements.PopupStart)
        if (await Status.isVisible()) {

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStart);
            const Toast = await this.page.innerText(this.Elements.Toastmessage);
            console.log(Toast);
            const locator = await this.page.innerText(this.Elements.CurrentStatus1);
            console.log("EC Bot 1 current status is " + locator);

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStop);
            const Toast = await this.page.innerText(this.Elements.Toastmessage);
            console.log(Toast);
            const locator = await this.page.innerText(this.Elements.CurrentStatus1);
            console.log("EC Bot 1 current status is " + locator);

        }

    }

    async ECBot2() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Radiobutton2);

        const Status = await this.page.locator(this.Elements.PopupStart)
        if (await Status.isVisible()) {

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStart);
            const Toast = await this.page.innerText(this.Elements.Toastmessage);
            console.log(Toast);
            const locator = await this.page.innerText(this.Elements.CurrentStatus2);
            console.log("EC Bot 2 current status is " + locator);

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStop);
            const Toast = await this.page.innerText(this.Elements.Toastmessage);
            console.log(Toast);
            const locator = await this.page.innerText(this.Elements.CurrentStatus2);
            console.log("EC Bot 2 current status is " + locator);

        }

    }

    async PlanoBot3() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Radiobutton3);

        const Status = await this.page.locator(this.Elements.PopupStart)
        if (await Status.isVisible()) {

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStart);
            const Toast = await this.page.innerText(this.Elements.Toastmessage);
            console.log(Toast);
            const locator = await this.page.innerText(this.Elements.CurrentStatus3);
            console.log("Plano Bot 3 current status is " + locator);

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStop);
            const Toast = await this.page.innerText(this.Elements.Toastmessage);
            console.log(Toast);
            const locator = await this.page.innerText(this.Elements.CurrentStatus3);
            console.log("Plano Bot 3 current status is " + locator);

        }

    }

    async ECVirtualBot() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Radiobutton4);

        const Status = await this.page.locator(this.Elements.PopupStart)
        if (await Status.isVisible()) {

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStart);
            const Toast = await this.page.innerText(this.Elements.Toastmessage);
            console.log(Toast);
            const locator = await this.page.innerText(this.Elements.CurrentStatus4);
            console.log("EC Virtual Bot current status is " + locator);

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStop);
            const Toast = await this.page.innerText(this.Elements.Toastmessage);
            console.log(Toast);
            const locator = await this.page.innerText(this.Elements.CurrentStatus4);
            console.log("EC Virtual Bot current status is " + locator);

        }

    }

    async PlanoVirtualBot() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Radiobutton5);

        const Status = await this.page.locator(this.Elements.PopupStart)
        if (await Status.isVisible()) {

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStart);
            const Toast = await this.page.innerText(this.Elements.Toastmessage);
            console.log(Toast);
            const locator = await this.page.innerText(this.Elements.CurrentStatus5);
            console.log("Plano Virtual Bot current status is " + locator);

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStop);
            const Toast = await this.page.innerText(this.Elements.Toastmessage);
            console.log(Toast);
            const locator = await this.page.innerText(this.Elements.CurrentStatus5);
            console.log("Plano Virtual Bot current status is " + locator);

        }
    }

    async EC_Bot_1_PrimaryRole() {


        await fixture.page.waitForTimeout(5000);

        const Status = await this.page.locator(this.Elements.ProcessDropdown)
        if (await Status.isVisible()) {

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PrimaryRole);
            await this.page.click(this.Elements.ExcelDropdown);
            const Status = await this.page.locator(this.Elements.PopYes)
            if (await Status.isVisible()) {
                await this.page.click(this.Elements.PopYes);

            } else {
                const Toast = await this.page.innerText(this.Elements.PrimaryRole);
                console.log("Primary Role of EC Bot 1 is " + Toast);

            }



        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PrimaryRole);
            await this.page.click(this.Elements.ProcessDropdown);
            await this.page.click(this.Elements.PopYes);
            const locator = await this.page.innerText(this.Elements.Toastmessage);
            console.log("Primary Role EC Bot 1 is " + locator);

        }
    }

    async EC_Bot_2_PrimaryRole() {

        await fixture.page.waitForTimeout(5000);
        const Status = await this.page.locator(this.Elements.ProcessDropdown)
        if (await Status.isVisible()) {

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PrimaryRole1);
            await this.page.click(this.Elements.ExcelDropdown);
            const Status = await this.page.locator(this.Elements.PopYes)
            if (await Status.isVisible()) {
                await this.page.click(this.Elements.PopYes);

            } else {
                const Toast = await this.page.innerText(this.Elements.PrimaryRole);
                console.log("Primary Role EC Bot 2 is " + Toast);

            }

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PrimaryRole1);
            await this.page.click(this.Elements.ProcessDropdown);
            await this.page.click(this.Elements.PopYes);
            const locator = await this.page.innerText(this.Elements.Toastmessage);
            console.log("Primary Role is " + locator);

        }
    }

    async FailureThreshold() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.FailureThreshold);
        const Status = await this.page.locator(this.Elements.Createicon)
        await fixture.page.waitForTimeout(5000);
        if (await Status.isVisible()) {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.Createicon);
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.Valuefield);
            await fixture.page.waitForTimeout(5000);
            await this.page.keyboard.press('Backspace');
            await this.page.fill(this.Elements.Valuefield, "5")
            await this.page.click(this.Elements.CommentBox);
            await fixture.page.waitForTimeout(5000);
            const testcomments = faker.commerce.productDescription()
            await this.page.fill(this.Elements.CommentBox, testcomments)
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.SubmitButton);

            const Update = await this.page.innerText(this.Elements.UpdatedToast);
            console.log(Update);
            const CountValue = await this.page.innerText(this.Elements.CountValue);
            console.log(CountValue);

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.Createicon);
            await this.page.click(this.Elements.Valuefield);
            await fixture.page.waitForTimeout(5000);
            await this.page.keyboard.press('Backspace');
            await this.page.type(this.Elements.Valuefield, "4")
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.CommentBox);
            await this.page.locator(this.Elements.CommentBox).clear();
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.SubmitButton);

        }
        else {
            console.log("Edit option is not available");

        }
    }

    async FieldValidations() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.FailureThreshold);
        await this.page.click(this.Elements.Createicon);
        await this.page.click(this.Elements.Valuefield);
        await fixture.page.waitForTimeout(5000);
        await this.page.keyboard.press('Backspace');
        await this.page.click(this.Elements.SubmitButton);

        const BoxText = await this.page.locator(this.Elements.EditConfigText);
        if (await BoxText.isVisible()) {

            console.log("Empty value validation passed");

        } else {

            console.log("Empty value accepted : The Field validation is failed")

        }

        await this.page.click(this.Elements.CancelButton);


    }

    async MaxlimitField() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.FailureThreshold);
        await this.page.click(this.Elements.Createicon);
        await this.page.click(this.Elements.Valuefield);
        await fixture.page.waitForTimeout(5000);
        await this.page.keyboard.press('Backspace');
        await this.page.type(this.Elements.Valuefield, "6")
        await this.page.click(this.Elements.SubmitButton);

        const BoxText = await this.page.locator(this.Elements.EditConfigText);
        if (await BoxText.isVisible()) {

            console.log("Max count of 5 exceeded field validation passed");

        } else {

            console.log("Max count of 5 exceeded : The Field validation is failed")

        }

        await this.page.click(this.Elements.CancelButton);


    }

    async EmailConfig_EC_Validation(userName: string) {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.EmailConfigEC);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.SearchEC);
        await fixture.page.waitForTimeout(5000);
        await this.page.type(this.Elements.SearchEC, userName);

        const SerialNumber = await this.page.locator(this.Elements.SerialNo);
        if (await SerialNumber.isVisible()) {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.Createicon);
            await fixture.page.waitForTimeout(5000);
            await this.page.locator(this.Elements.Valuebox).clear();
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.SubmitButton);
            await fixture.page.waitForTimeout(5000);

            const BoxText = await this.page.locator(this.Elements.EditConfigText);
            if (await BoxText.isVisible()) {

                console.log("Email Configuration - EC : Empty value validation passed");

            } else {

                console.log("Email Configuration - EC | Empty value accepted : The Field validation is failed")

            }

            await this.page.click(this.Elements.CancelButton);
        }
        else {
            console.log("No data availble for search keyword");

        }
    }

    async EmailConfig_EC(userName: string, UsersEC: string) {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.SearchEC);
        await fixture.page.waitForTimeout(5000);
        await this.page.locator(this.Elements.SearchEC).clear();
        await fixture.page.waitForTimeout(5000);
        await this.page.type(this.Elements.SearchEC, userName);
        await fixture.page.waitForTimeout(5000);

        const SerialNumber = await this.page.locator(this.Elements.SerialNo);
        if (await SerialNumber.isVisible()) {
            await this.page.click(this.Elements.Createicon);
            await fixture.page.waitForTimeout(5000);
            await this.page.locator(this.Elements.Valuebox).clear();
            await fixture.page.waitForTimeout(5000);
            await this.page.type(this.Elements.Valuebox, UsersEC)
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.SubmitButton);
            await fixture.page.waitForTimeout(5000);
            const Update = await this.page.innerText(this.Elements.UpdatedToast);
            console.log(Update);
        }
        else {
            console.log("No data availble for search keyword");
        }
    }

    async EmailConfig_Plano_Validation(userName: string) {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.EmailConfigPlano);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.SearchEC);
        await fixture.page.waitForTimeout(5000);
        await this.page.type(this.Elements.SearchEC, userName);
        await fixture.page.waitForTimeout(5000);
        const SerialNumber = await this.page.locator(this.Elements.SerialNo);
        if (await SerialNumber.isVisible()) {
            await this.page.click(this.Elements.Createicon);
            await fixture.page.waitForTimeout(5000);
            await this.page.locator(this.Elements.Valuebox).clear();
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.SubmitButton);
            await fixture.page.waitForTimeout(5000);

            const BoxText = await this.page.locator(this.Elements.EditConfigText);
            if (await BoxText.isVisible()) {

                console.log("Email Configuration - Plano : Empty value validation passed");

            } else {

                console.log("Email Configuration - EC | Empty value accepted : The Field validation is failed")

            }

            await this.page.click(this.Elements.CancelButton);
        }
        else {
            console.log("No data availble for search keyword");

        }
    }

    async EmailConfig_Plano(userName: string, UsersPlano: string) {

        await fixture.page.waitForTimeout(5000);
        await this.page.locator(this.Elements.SearchEC).clear();
        await fixture.page.waitForTimeout(5000);
        await this.page.type(this.Elements.SearchEC, userName);
        await fixture.page.waitForTimeout(5000);

        const SerialNumber = await this.page.locator(this.Elements.SerialNo);
        if (await SerialNumber.isVisible()) {
            await this.page.click(this.Elements.Createicon);
            await this.page.locator(this.Elements.Valuebox).clear();
            await fixture.page.waitForTimeout(5000);
            await this.page.type(this.Elements.Valuebox, UsersPlano)
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.SubmitButton);
            await fixture.page.waitForTimeout(5000);
            const Update = await this.page.innerText(this.Elements.UpdatedToast);
            console.log(Update);
        }
        else {
            console.log("No data availble for search keyword");
        }
    }

    async EmailConfig_EC_Search(Invalid: string) {

        await this.page.click(this.Elements.EmailConfigEC);
        await this.page.click(this.Elements.SearchEC);
        await fixture.page.waitForTimeout(5000);
        await this.page.type(this.Elements.SearchEC, Invalid);

        const SerialNumber = await this.page.locator(this.Elements.SerialNo);
        if (await SerialNumber.isVisible()) {
            console.log("Search result displayed for invalid keyword : Testcase failed");
        }
        else {
            console.log("No data availble for search keyword : Testcase passed");
        }
    }

    async EmailConfig_Plano_Search(Invalid: string) {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.EmailConfigPlano);
        await this.page.click(this.Elements.SearchEC);
        await fixture.page.waitForTimeout(5000);
        await this.page.type(this.Elements.SearchEC, Invalid);

        const SerialNumber = await this.page.locator(this.Elements.SerialNo);
        if (await SerialNumber.isVisible()) {
            console.log("Search result displayed for invalid keyword : Testcase failed");
        }
        else {
            console.log("No data availble for search keyword : Testcase passed");
        }
    }
}
