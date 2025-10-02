import { expect, type Locator, type Page } from '@playwright/test'
import BasePage from './base.page'
import endpoints from '../constants/endpoints.constants.json'

export class RegistrationPage extends BasePage{
    public loginInput: Locator
    public passwordInput: Locator
    public passwordConfirmationInput: Locator
    public firstnameInput: Locator
    public lastnameInput: Locator
    public mailInput: Locator

    constructor(page: Page) {
        super(page);
        this.endpoint = endpoints.registration

        this.loginInput = page.locator('#user_login')
        this.passwordInput = page.locator('#user_password')
        this.passwordConfirmationInput = page.locator('#user_password_confirmation')
        this.firstnameInput = page.locator('#user_firstname')
        this.lastnameInput = page.locator('#user_lastname')
        this.mailInput = page.locator('#user_mail')
    }

    async open(): Promise<void> {
        await super.open(this.endpoint);
    }
}