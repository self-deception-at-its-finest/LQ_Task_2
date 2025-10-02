import { expect, type Locator, type Page } from '@playwright/test'
import BasePage from './base.page'
import endpoints from '../constants/endpoints.constants.json'


export class LoginPage extends BasePage{
    public loginInput: Locator
    public passwordInput: Locator
    public submitButton: Locator
    public successfulAccountCreationMessage: Locator

    constructor(page: Page) {
        super(page);
        this.endpoint = endpoints.login
        this.loginInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.submitButton = page.locator('#login-submit')
        this.successfulAccountCreationMessage = page.locator('#flash-notice')
    }

    async open(): Promise<void> {
        await super.open(this.endpoint);
    }
}