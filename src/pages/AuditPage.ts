import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { url } from "inspector";


export default class AuditPage {
    constructor(private page: Page) {

    }

    private Elements = {
        AuditMenu: "//a[contains(text(),'Audit')]",
        UserDropdown: "//mat-label[text()='User']",
        UserID: "//span[text()=' akhil.krishnan ']",
        ApplyButton: "//span[text()='Apply Filter']",
        ActivityField: "(//td[text()=' User Role of sajitha.kunnath'])[1]",
        RobotDropdown: "//mat-label[text()='Robot']",
        OptionAll: "(//mat-option[@role='option'])[1]",
        FromDatePick: "(//button[@aria-label='Open calendar'])[1]",
        FromDatePickOption: "//span[text()=' 1 ']",
        ToDatePick: "(//button[@aria-label='Open calendar'])[2]",
        OptionRobot: "(//span[@class='mdc-list-item__primary-text'])[2]",
        ToDatePickOption: "//button[@class='mat-calendar-body-cell mat-calendar-body-active']//span[1]",
        DisplayMessage: "//p[text()='No data available for applied filter']",
        TitleNewValue: "//th[text()=' New Value ']",
        ClearSearch: "//span[text()='Clear Filter']"




    }

    async navigatetomenu() {
        await this.page.click(this.Elements.AuditMenu);

    }

    async chooseloginuser() {
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.UserDropdown);
        await this.page.click(this.Elements.UserID);
        await this.page.click(this.Elements.ApplyButton);

    }

    async verifyauditlog() {
        await fixture.page.waitForTimeout(5000);
        const locator = await this.page.innerText(this.Elements.ActivityField);
        await expect(locator).toMatch("User Role of sajitha.kunnath");
        const VerifyUserRole = await this.page.innerText(this.Elements.ActivityField);
        console.log(VerifyUserRole);
        await this.page.dblclick(this.Elements.ActivityField);
        await fixture.page.waitForTimeout(3000);

    }


    async AuditFilterSearch() {
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.FromDatePick);
        await this.page.click(this.Elements.FromDatePickOption);
        await this.page.click(this.Elements.ToDatePick);
        await this.page.click(this.Elements.ToDatePickOption);
        await this.page.click(this.Elements.RobotDropdown);
        await this.page.click(this.Elements.OptionRobot);
    }

    async AuditClearFilterSearch() {
        await this.page.click(this.Elements.ClearSearch);
    }

    async VerifyFilterSearch() {
        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.DisplayMessage)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.DisplayMessage);
            console.log(SearchResult);
        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.TitleNewValue);
            await expect(locator).toMatch("New Value");
            const TitleTable = await this.page.innerText(this.Elements.TitleNewValue);
            console.log(TitleTable);

        }
    }


}