import { expect, type Locator, type Page } from '@playwright/test'
import BasePage from "./base.page";

export class RegistrationPage extends BasePage{


    constructor(page: Page) {
        super(page);
        this.endpoint = registration
    }

}