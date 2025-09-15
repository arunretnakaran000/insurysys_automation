import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { faker } from '@faker-js/faker';
import { ifError } from "assert";


export default class ConfigDMPAutoPage {
    constructor(private page: Page) {
    }

    private Elements = {
        ConfigurationsMenu: "(//span[@class='mat-mdc-button-touch-target'])[4]",
        DMPAutomation: "//a[contains(text(),'DMP Automation')]",
        RadiobuttonEC: "(//div[@class='mdc-switch__ripple'])[1]",
        RadiobuttonPlano: "(//div[@class='mdc-switch__ripple'])[2]",
        PopupStop: "//span[text()='Stop']",
        PopupStart: "//span[text()='Start']",
        CurrentStatus1: "//tbody/tr[1]/td[4]",
        CurrentStatus2: "//tbody/tr[2]/td[4]",
        Toastmessage: "//div[contains(text(),'Successfully updated robot information ')]",
        ToastError: "//div[@role='alert']",
        FailureThreshold: "//span[text()='Failure Threshold']",
        SerialNumber: "(//td[@role='cell'])[1]/.",
        EditAction: "//i[contains(text(),'create')]",
        Valuefield: "//input[@placeholder='Value']",
        CommentBox: "//textarea[@placeholder='Comment']",
        PopupTitle: "//h2[text()='Edit Configuration']",
        SubmitButton: "//span[text()='Submit']",
        CancelButton: "//span[text()='Cancel']",
        EmailConfigEC: "//span[text()='Email Configurations - EC']",
        SearchEC: "//input[@placeholder='Search']",
        Createicon: "(//i[text()='create'])[1]",
        Valuebox: "//textarea[@placeholder='Value']",
        EditConfigText: "//h2[text()='Edit Configuration']",
        UpdatedToast: "//div[contains(text(),' Updated successfully ')]",
        EmailConfigPlano: "//span[text()='Email Configurations - Plano']",
        ProcessName: "//td[text()=' OracleFailOver_Notification_Cc ']",
        createicon4th: "(//i[text()='create'])[4]",
        createicon5th: "(//i[text()='create'])[5]"
    }


    async navigatetomenu() {
        await this.page.click(this.Elements.ConfigurationsMenu);
        await this.page.click(this.Elements.DMPAutomation);
    }

    async Automation_EC() {


        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.RadiobuttonEC);
        await fixture.page.waitForTimeout(5000);
        const Status = await this.page.locator(this.Elements.PopupStart)
        if (await Status.isVisible()) {

            await this.page.click(this.Elements.PopupStart);
            await fixture.page.waitForTimeout(5000);
            const Toast = await this.page.locator(this.Elements.Toastmessage);
            if (await Toast.isVisible()) {
                console.log("Testcase Passed : Toastmessage displayed as " + Toast)

            } else {
                console.log("Testcase Failed : Toastmessage is not displayed")

            }
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.CurrentStatus1);
            console.log("Automation EC current status is " + locator);

        }
        else {
            await this.page.click(this.Elements.PopupStop);
            await fixture.page.waitForTimeout(5000);
            const Toast = await this.page.locator(this.Elements.Toastmessage);
            if (await Toast.isVisible()) {
                console.log("Passed : Toastmessage displayed as " + Toast)

            } else {
                console.log("Failed : Toastmessage is not displayed")

            }
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.CurrentStatus1);
            console.log("Automation EC current status is " + locator);

        }

    }


    async Automation_Plano() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.RadiobuttonPlano);

        const Status = await this.page.locator(this.Elements.PopupStart)
        if (await Status.isVisible()) {

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStart);
            const Toast = await this.page.locator(this.Elements.Toastmessage);
            if (await Toast.isVisible()) {
                console.log("Passed : Toastmessage displayed as " + Toast)

            } else {
                console.log("Failed : Toastmessage is not displayed")

            }
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.CurrentStatus2);
            console.log("Automation Plano current status is " + locator);

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStop);
            const Toast = await this.page.locator(this.Elements.Toastmessage);
            if (await Toast.isVisible()) {
                console.log("Passed : Toastmessage displayed as " + Toast)

            } else {
                console.log("Failed : Toastmessage is not displayed")

            }
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.CurrentStatus2);
            console.log("Automation Plano current status is " + locator);

        }

    }

    async FailureThreshold() {

        await this.page.click(this.Elements.FailureThreshold);
        await fixture.page.waitForTimeout(5000);
        const Status = await this.page.locator(this.Elements.EditAction)
        if (await Status.isVisible()) {
            await this.page.click(this.Elements.EditAction);
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.Valuefield);
            await fixture.page.waitForTimeout(5000);
            await this.page.keyboard.press('Backspace');
            await this.page.type(this.Elements.Valuefield, "4")
            await this.page.locator(this.Elements.CommentBox).clear();
            await fixture.page.waitForTimeout(5000);
            const testcomments = faker.commerce.productDescription()
            await this.page.type(this.Elements.CommentBox, testcomments)
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.SubmitButton);

            const Update = await this.page.locator(this.Elements.ToastError);
            if (await Update.isVisible) {
                const Message = await this.page.innerText(this.Elements.ToastError);
                console.log("Toast message displayed is " + Message);

                await fixture.page.waitForTimeout(5000);
                await this.page.click(this.Elements.EditAction);
                await this.page.click(this.Elements.Valuefield);
                await fixture.page.waitForTimeout(5000);
                await this.page.keyboard.press('Backspace');
                await this.page.type(this.Elements.Valuefield, "5")
                await fixture.page.waitForTimeout(5000);
                await this.page.click(this.Elements.SubmitButton);
                await fixture.page.waitForTimeout(5000);

            } else {
                const Success = await this.page.innerText(this.Elements.Toastmessage);
                console.log("Toast message displayed is " + Success);

            }

        }
        else {
            console.log("Edit option is not available");

        }
    }

    async FieldValidations() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.FailureThreshold);
        await this.page.click(this.Elements.EditAction);
        await this.page.click(this.Elements.Valuefield);
        await fixture.page.waitForTimeout(5000);
        await this.page.keyboard.press('Backspace');
        await this.page.click(this.Elements.SubmitButton);

        const BoxText = await this.page.locator(this.Elements.PopupTitle);
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
        await this.page.click(this.Elements.EditAction);
        await this.page.click(this.Elements.Valuefield);
        await fixture.page.waitForTimeout(5000);
        await this.page.keyboard.press('Backspace');
        await this.page.type(this.Elements.Valuefield, "6")
        await this.page.click(this.Elements.SubmitButton);

        const BoxText = await this.page.locator(this.Elements.EditAction);
        if (await BoxText.isVisible()) {

            console.log("Max count of 5 exceeded field validation passed");

        } else {

            console.log("Max count of 5 exceeded : The Field validation is failed")

        }

        await this.page.click(this.Elements.CancelButton);


    }

    async DMP_EmailConfig_EC_Validation(userName: string) {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.EmailConfigEC);
        await this.page.click(this.Elements.SearchEC);
        await fixture.page.waitForTimeout(5000);
        await this.page.type(this.Elements.SearchEC, userName);

        const SerialNumber = await this.page.locator(this.Elements.Createicon);
        if (await SerialNumber.isVisible()) {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.Createicon);
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

    async DMP_EmailConfig_EC(userName: string) {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.SearchEC);
        await this.page.locator(this.Elements.SearchEC).clear();
        await this.page.type(this.Elements.SearchEC, userName);
        await fixture.page.waitForTimeout(5000);

        const Process = await this.page.locator(this.Elements.ProcessName);
        if (await Process.isVisible()) {
            await this.page.click(this.Elements.createicon4th);
            await fixture.page.waitForTimeout(3000);
            await this.page.locator(this.Elements.Valuebox).clear();
            await fixture.page.waitForTimeout(3000);
            await this.page.type(this.Elements.Valuebox, userName)
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.SubmitButton);
            await fixture.page.waitForTimeout(5000);
            const Update = await this.page.locator(this.Elements.UpdatedToast);


            if (await Update.isVisible) {
                const SuccessMessage = await this.page.innerText(this.Elements.UpdatedToast);
                console.log("Testcase passed: Toast message is " + SuccessMessage);
            }
            else {
                const ErrorMessage = await this.page.innerText(this.Elements.ToastError);
                console.log("Testcase failed: Toast message is " + ErrorMessage);
            }

        }
        else {
            console.log("No data availble for search keyword");
        }
    }

    async DMP_EmailConfig_Plano_Validation(userName: string) {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.EmailConfigPlano);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.SearchEC);
        await this.page.type(this.Elements.SearchEC, userName);
        await fixture.page.waitForTimeout(5000);
        const SerialNumber = await this.page.locator(this.Elements.Createicon);
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

    async DMP_EmailConfig_Plano(userName: string, UsersTwo: string) {

        await fixture.page.waitForTimeout(5000);
        await this.page.locator(this.Elements.SearchEC).clear();
        await this.page.type(this.Elements.SearchEC, userName);
        await fixture.page.waitForTimeout(5000);

        const Process = await this.page.locator(this.Elements.ProcessName);
        if (await Process.isVisible()) {
            await this.page.click(this.Elements.createicon5th);
            await fixture.page.waitForTimeout(3000);
            await this.page.locator(this.Elements.Valuebox).clear();
            await fixture.page.waitForTimeout(3000);
            await this.page.type(this.Elements.Valuebox, UsersTwo)
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.SubmitButton);
            const Update = await this.page.locator(this.Elements.ToastError);
            if (await Update.isVisible) {
                await fixture.page.waitForTimeout(5000);
                const ErrorMessage = await this.page.innerText(this.Elements.ToastError);
                console.log("Testcase failed: Toast message is " + ErrorMessage);
            }
            else {
                const SuccessMessage = await this.page.innerText(this.Elements.UpdatedToast);
                console.log("Testcase passed: Toast message is " + SuccessMessage);
            }
        }
        else {
            console.log("No data availble for search keyword");
        }
    }

    async DMP_EmailConfig_EC_Search(Invalid: string) {

        await this.page.click(this.Elements.EmailConfigEC);
        await this.page.click(this.Elements.SearchEC);
        await fixture.page.waitForTimeout(6000);
        await this.page.type(this.Elements.SearchEC, Invalid);

        const SerialNumber = await this.page.locator(this.Elements.SerialNumber);
        if (await SerialNumber.isVisible()) {
            console.log("Search result displayed for invalid keyword : Testcase failed");
        }
        else {
            console.log("No data availble for search keyword : Testcase passed");
        }
    }

    async DMP_EmailConfig_Plano_Search(Invalid: string) {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.EmailConfigPlano);
        await this.page.click(this.Elements.SearchEC);
        await fixture.page.waitForTimeout(5000);
        await this.page.type(this.Elements.SearchEC, Invalid);

        const SerialNumber = await this.page.locator(this.Elements.SerialNumber);
        if (await SerialNumber.isVisible()) {
            console.log("Search result displayed for invalid keyword : Testcase failed");
        }
        else {
            console.log("No data availble for search keyword : Testcase passed");
        }
    }
}