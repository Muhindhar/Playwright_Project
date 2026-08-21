import { Before,After,BeforeAll,AfterAll, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { Browser,chromium } from "playwright/test";
import { logger } from "../../utilities/logger"
import { muhiworld } from "../world/world";
import { LoginPage } from "../page/loginpage";

setDefaultTimeout(90*1000)

let browser:Browser

BeforeAll(async()=>{
    browser = await chromium.launch({headless:true})
    logger.info("Browser launched")
});

Before(async function(this:muhiworld){
    this.browser = browser;
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage();
    this.login = new LoginPage(this.page)
});

After(async function(this:muhiworld,scenario){
    if(scenario.result?.status==Status.FAILED){
        if(this.page && !this.page.isClosed()){
            const path =  `reports/screenshots/${scenario.pickle.name}-${Date.now()}.png`;
            await this.page.screenshot({path});
        }
        logger.error(`scenario failed ${scenario.pickle.name}`);
    }
    if(this.page && !this.page.isClosed()){
        await this.page.close();
    }
    if(this.context){
        await this.context.close();
    }
});

AfterAll(async()=>{
    await browser.close();
})
