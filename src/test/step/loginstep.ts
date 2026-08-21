import { Given,When,Then } from "@cucumber/cucumber";
import { muhiworld } from "../world/world";
import { expect } from "playwright/test";

Given('user is on the LambdaTest site', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.goto();
});

Given('user navigates to the My Account link', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.clickmyacc()
});

Given('user clicks on the Login link', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.clicklogin()
});

Given('user enters the email {string}', async function (this:muhiworld,string) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.enteremail(string);
});

Given('user enters the password {string}', async function (this:muhiworld,string) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.enterpassword(string);
});

When('user clicks on the Login button', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.clickloginbtn();
});

Then('user should receive the {string}',async function (this: muhiworld, result: string) {
    if (result === "success") {
      await this.login.loggedIn();
    } else {
      await this.login.errorcheck();
    }
  }
);