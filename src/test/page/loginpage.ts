import { BasePage } from "./basepage";

export class LoginPage extends BasePage{

    private readonly myacc = this.page.getByRole('button', { name: ' My account' });
    private readonly loginlink = this.page.getByRole('link', { name: 'Login' });
    private readonly email = this.page.locator("//input[@id='input-email']");
    private readonly password = this.page.getByRole('textbox', { name: 'Password' });
    private readonly logibtn = this.page.getByRole('button', { name: 'Login' });
    private readonly checklogin = this.page.locator("//h2[text()='My Account']");
    private readonly error = this.page.locator("//div[@class='alert alert-danger alert-dismissible']");

    async clickmyacc(){
        await this.myacc.hover();
    }
    async clicklogin(){
        await this.click(this.loginlink);
    }
    async enteremail(email:string){
        await this.fill(this.email,email)
    }
    async enterpassword(pass:string){
        await this.fill(this.password,pass)
    }
    async clickloginbtn(){
        await this.click(this.logibtn)
    }
    async loggedIn(){
        await this.IsVisible(this.checklogin);
    }
    async errorcheck(){
        await this.IsVisible(this.error)
    }
}