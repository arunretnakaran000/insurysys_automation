import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { url } from "inspector";


export default class QueuePage {
    constructor(private page: Page) {

    }

    private Elements = {

        QueueMenu: "//a[contains(text(),'Queue')]",
        Dropdown1: "//mat-label[text()='Case Origin']",
        Option1: "//span[text()=' Security Manager ']",
        Option2: "//span[text()=' DG Alarm Portal ']",
        Option3: "//span[text()=' DG Security Manager ']",
        Dropdown2: "//mat-label[text()='Status']",
        DropOption1: "//span[text()=' To be processed ']",
        ApplyFilter: "//span[text()='Apply Filter']",
        Statusupdate: "(//i[text()='update'])[1]",
        CaseOrginText: "(//td[@role='cell'])[2]",
        NodataText: "//p[text()='No data available for applied filter']",
        KeywordFilter: "//mat-label[text()='Keyword Filter']",
        AuditMenu: "//a[contains(text(),'Audit')]",
        Viewhistory: "(//button[@type='button']//div)[1]",
        StatusHistory: "(//td[@role='cell']//i)[1]",
        StatusSort: "//div[text()=' Status ']",
        CreatedBy: "//table[contains(@class,'mat-mdc-table mdc-data-table__table')]",
        CaseQueueNo: "(//div[@class='infoWrapper infoLeftWrapper']//span)[2]",
        PopupClose: "(//span[@class='mat-mdc-button-touch-target'])[10]",
        Excel: "//span[text()='Export to Excel']",
        ValidationExcel: "//div[contains(text(), ' No data available to export ')]"


    }



    async navigatetomenu() {
        await this.page.click(this.Elements.QueueMenu);

    }

    async securitymanagerfilter() {
        await this.page.click(this.Elements.Dropdown1);
        await this.page.click(this.Elements.Option1);
        await this.page.click(this.Elements.Dropdown2);
        await this.page.click(this.Elements.DropOption1);
        await this.page.click(this.Elements.ApplyFilter);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.Statusupdate)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.CaseOrginText);
            console.log(SearchResult);
        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);

        }

    }

    async DGalarmportalfilter() {
        await this.page.click(this.Elements.Dropdown1);
        await this.page.click(this.Elements.Option2);
        //await this.page.click(this.Elements.Dropdown2);
        //await this.page.click(this.Elements.DropOption1);
        await this.page.click(this.Elements.ApplyFilter);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.Statusupdate)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.CaseOrginText);
            console.log(SearchResult);
        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);

        }

    }

    async DGSecurityManagerfilter() {
        await this.page.click(this.Elements.Dropdown1);
        await this.page.click(this.Elements.Option3);
        //await this.page.click(this.Elements.Dropdown2);
        //await this.page.click(this.Elements.DropOption1);
        await this.page.click(this.Elements.ApplyFilter);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.Statusupdate)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.CaseOrginText);
            console.log(SearchResult);
        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);

        }
    }

    async Keywordfilter(Keyword: string) {
        await this.page.click(this.Elements.KeywordFilter);
        await fixture.page.waitForTimeout(5000);
        await this.page.type(this.Elements.KeywordFilter, Keyword);
        await this.page.click(this.Elements.ApplyFilter);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.Statusupdate)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.CaseOrginText);
            console.log(SearchResult);
        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);

        }

    }

    async RandomKeywordfilter(userPass: string) {
        await this.page.click(this.Elements.KeywordFilter);
        await this.page.type(this.Elements.KeywordFilter, userPass);

        await this.page.click(this.Elements.ApplyFilter);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.Statusupdate)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.CaseOrginText);
            console.log(SearchResult);
        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);

        }

    }

    async filtersearchclear(userPass: string) {
        await this.page.click(this.Elements.Dropdown1);
        await this.page.click(this.Elements.Option3);
        await this.page.click(this.Elements.Dropdown2);
        await this.page.click(this.Elements.DropOption1);
        await this.page.click(this.Elements.KeywordFilter);
        await this.page.type(this.Elements.KeywordFilter, userPass);
        await this.page.click(this.Elements.ApplyFilter);
        await fixture.page.waitForTimeout(3000);

        await this.page.click(this.Elements.AuditMenu);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.QueueMenu);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.Statusupdate)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.CaseOrginText);
            console.log(SearchResult);
            console.log("Search filter is cleared as expected");

        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);
            console.log("BUG: Filter search is not cleared when user switch the pages");

        }

    }

    async viewhistory() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Viewhistory);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.StatusHistory)
        if (await myElement.isVisible()) {
            await this.page.click(this.Elements.StatusHistory);
            const SearchResult = await this.page.innerText(this.Elements.CaseQueueNo);
            console.log("Case queue number is" + SearchResult);

        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);

        }
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.PopupClose);

    }

    async viewhistorystort() {

        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.StatusSort);
        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.StatusHistory)
        if (await myElement.isVisible()) {
            await this.page.click(this.Elements.StatusHistory);
            const SearchResult = await this.page.innerText(this.Elements.CaseQueueNo);
            console.log("Case queue number is" + SearchResult);

        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);

        }




    }

    async viewhistorydisabled() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Viewhistory);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Viewhistory);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.Statusupdate)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.CaseOrginText);
            console.log("Case orgin is " + SearchResult);

        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);


        }
    }

    async nodataexporttoexcel(userPass: string) {
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.KeywordFilter);
        await this.page.type(this.Elements.KeywordFilter, userPass);
        await this.page.click(this.Elements.ApplyFilter);

        await this.page.click(this.Elements.Excel);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.ValidationExcel)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.ValidationExcel);
            console.log(SearchResult);
        }
        else {
            await fixture.page.waitForTimeout(5000);
            const myElement = this.page.locator(this.Elements.ValidationExcel)
            await myElement.isDisabled();
        }
    }

    async dataexporttoexcel(Keyword: string) {

        await this.page.click(this.Elements.Dropdown1);
        await this.page.click(this.Elements.Option1);
        await this.page.click(this.Elements.Dropdown2);
        await this.page.click(this.Elements.DropOption1);
        await this.page.click(this.Elements.KeywordFilter);
        await this.page.type(this.Elements.KeywordFilter, Keyword);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ApplyFilter);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Excel);
        await fixture.page.waitForTimeout(5000);


    }

}