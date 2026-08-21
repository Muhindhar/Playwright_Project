import { setWorldConstructor,World } from "@cucumber/cucumber";
import { Browser,BrowserContext,Page } from "playwright/test";
import { LoginPage } from "../page/loginpage";

export class muhiworld extends World{
    browser!:Browser
    context!:BrowserContext
    page!:Page
    login!:LoginPage

}

setWorldConstructor(muhiworld)