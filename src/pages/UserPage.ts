import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { url } from "inspector";


export default class UserPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        Username: "//input[@email='true']",
        Password: "//input[@type='password']",
        loginBtn: "//span[text()=' Login ']",
        logoutBtn: "(//span[@class='mat-mdc-button-touch-target'])[2]",
        logout: "//span[text()='Logout']",
        UserMenu: "//a[contains(text(),'Users')]",
        SearchUser: "//mat-label[text()='Search']",
        EditUser: "//i[text()='create']",
        UserRole: "//input[@value='User']",
        AdminUser: "(//input[@name='mat-radio-group-0'])[1]",
        SubmitUser: "//span[text()='Submit']",
        CodeDropOption: "(//span[@class='mdc-list-item__primary-text'])[1]",
        Toastmessage: "//table[contains(@class,'mat-mdc-table mdc-data-table__table')]",
        Verityuserrole: "//table[contains(@class,'mat-mdc-table mdc-data-table__table')]/tbody[1]/tr[1]/td[4]",
        AddUser: "//span[text()=' Add User ']",
        Searchbyemail: "//input[@placeholder='Search by email']",
        SearchEmailButton: "//span[text()=' Search Email ']",
        ErrorValidation: "//mat-error[text()='Email is required']",
        SubmitButton: "//span[text()='Cancel']",
        ToastManager: "//div[@class='toast-bottom-right toast-container']",
        InactiveUser: "//label[text()='Inactive']",
        ActiveUser: "//label[text()='Active']",
        InactiveLoginToast: "//div[@class='toast-bottom-right toast-container']"




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

    async ClickLogin() {
        await this.page.click(this.Elements.loginBtn);

    }

    async ClickLogout() {
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.logoutBtn);
        await this.page.click(this.Elements.logout);

    }

    async UserMenuFunctionality(userRole: string) {
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.UserMenu);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.SearchUser)
        await this.page.type(this.Elements.SearchUser, userRole);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.EditUser);
        await fixture.page.waitForTimeout(5000);

        // If the user is already a normal user it will select admin role else vice versa
        const myElement = this.page.locator(this.Elements.UserRole)
        if (await myElement.isChecked()) {
            await this.page.click(this.Elements.AdminUser);
        }
        else {

            await myElement.click();

        }

        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.SubmitUser);
        await fixture.page.waitForTimeout(3000);
        const total = await this.Elements.Toastmessage;
        console.log(total);

    }

    async VerifyUserRole(userRole: string) {
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.UserMenu);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.SearchUser)
        await this.page.type(this.Elements.SearchUser, userRole);
        await fixture.page.waitForTimeout(5000);
        const VerifyUserRole = await this.page.innerText(this.Elements.Verityuserrole);
        console.log(VerifyUserRole);
        await this.page.dblclick(this.Elements.Verityuserrole);

    }

    async UsernameVerifyRole(userRole: string) {
        await this.page.type(this.Elements.Username, userRole);

    }


    async PasswordVerifyRole(userPass: string) {
        await this.page.type(this.Elements.Password, userPass);

    }

    async AddNewUser(userName: string) {
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.UserMenu);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.AddUser);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.SearchEmailButton);
        await fixture.page.waitForTimeout(5000);
        const Error = await this.page.innerText(this.Elements.ErrorValidation);
        console.log(Error);
        //const Toast = await expect(this.page.locator(this.Elements.ErrorValidation)).toHaveText('Email is required');
        //console.log(Toast);
        await this.page.type(this.Elements.Searchbyemail, userName);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.SearchEmailButton);
        await this.page.click(this.Elements.SubmitButton)
        await fixture.page.waitForTimeout(5000);


    }

    async Toastmessageverify() {
        const toastmessage = await this.page.innerText(this.Elements.ToastManager);
        console.log(toastmessage);
    }

    async AddInvalidUser(Invalid: string) {
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.UserMenu);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.AddUser);
        await fixture.page.waitForTimeout(3000);
        await this.page.type(this.Elements.Searchbyemail, Invalid);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.SearchEmailButton);
        await this.page.click(this.Elements.SubmitButton)
    }

    async AddValidUser(Valid: string) {
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.UserMenu);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.AddUser);
        await fixture.page.waitForTimeout(3000);
        await this.page.type(this.Elements.Searchbyemail, Valid);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.SearchEmailButton);
        await this.page.click(this.Elements.SubmitButton)
    }

    async ActiveandInactive(userRole: string) {
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.UserMenu);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.SearchUser)
        await this.page.type(this.Elements.SearchUser, userRole);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.EditUser);
        await fixture.page.waitForTimeout(5000);

        // If the user is already a normal user it will select admin role else vice versa
        const myElement = this.page.locator(this.Elements.InactiveUser)
        if (await myElement.isChecked()) {
            await this.page.click(this.Elements.ActiveUser);
        }
        else {

            await myElement.click();

        }

        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.SubmitUser);
        await fixture.page.waitForTimeout(3000);
        const total = await this.Elements.Toastmessage;
        console.log(total);

    }

    async InactiveToastmessage() {
        await fixture.page.waitForTimeout(3000);
        const toastmessage = await this.page.innerText(this.Elements.InactiveLoginToast);
        console.log(toastmessage);


    }


    async MakeInactiveUser(userRole: string) {
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.UserMenu);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.SearchUser)
        await this.page.type(this.Elements.SearchUser, userRole);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.EditUser);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.InactiveUser);
        await fixture.page.waitForTimeout(3000);
        await this.page.click(this.Elements.SubmitUser);
        await fixture.page.waitForTimeout(3000);
        const total = await this.Elements.Toastmessage;
        console.log(total);

    }
}
