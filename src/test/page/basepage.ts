import { Locator,Page } from "playwright/test";
import { logger } from "../../utilities/logger";
import { EnvReader } from "../../utilities/envreader";

export class BasePage{
    readonly page!:Page
    constructor(page:Page){
        this.page = page
    }

  async click(Locator: Locator) {
    try {
        await Locator.click();
    } catch (error) {
        logger.error(`Failed to click the element: ${error}`);
        throw error;
    }
}

    async fill(Locator:Locator,value:string){
        try {
            await Locator.fill(value)
        } catch (error) {
            logger.error(`Unable to write ${error}`)
        }
    }

    async IsVisible(Locator:Locator){
        try {
            await Locator.isVisible();
        } catch (error) {
            logger.error(`Element not visible ${error}`)
        }
    }
    

    async goto(){
        try{
            await this.page.goto(EnvReader.getBaseUrl())
        }
        catch(error){
            logger.error(`Unable to launch the site ${error}`)
        }
    }
}