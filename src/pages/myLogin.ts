import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";



export default class myLogin {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        Username: "(//input[@class='form-control'])[1]",
        Password: "(//input[@class='form-control'])[2]",
        loginBtn: "//input[@value='Login']",
        errorMessage: "//p[@class='label']/following-sibling::p[1]",
        signoutDropdown: "//h6[@class='profile-name']//img[1]",
        signoutBtn: "//a[normalize-space(text())='Sign-out']"
    }

    async navigateToSite(Title: string) {
        await this.base.goto(process.env.BASEURL);
        await expect(this.page).toHaveTitle(Title);
    }


    async enterUsername(userName: string) {
        await this.page.type(this.Elements.Username, userName);

    }


    async enterPassword(passWord: string) {
        await this.page.type(this.Elements.Password, passWord);

    }
    async enterCaseInsensitivePassword(userPass3: string) {
        await this.page.type(this.Elements.Password, userPass3);
    }

    async ClickLogin() {
        //await this.page.click(this.Elements.loginBtn);
        await this.page.click(this.Elements.loginBtn)

    }
    async ClickSignOut() {
        await this.page.click(this.Elements.signoutDropdown);
        await this.page.click(this.Elements.signoutBtn);
        await this.page.waitForTimeout(2000);
    }   

    async verifyErrorMessage(invalidLoginErrorMessage: string) {
        const errorMessageLocator = this.page.locator(this.Elements.errorMessage);
        await expect(errorMessageLocator).toHaveText(invalidLoginErrorMessage);
    }
    async verifyerrorMessage2(InvalidMessage2: string) {
        await this.page.waitForTimeout(5000);
        const errorMessageLocator = this.page.locator(this.Elements.errorMessage);
        await expect(errorMessageLocator).toHaveText(InvalidMessage2);
    }
}
