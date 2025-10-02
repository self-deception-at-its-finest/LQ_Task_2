import {test as base} from '@playwright/test'

import {RegistrationPage} from "../pages/registration.page";
import {LoginPage} from "../pages/login.page";

export const test = base.extend<{
    registrationPage: RegistrationPage
    loginPage: LoginPage
}>({
    registrationPage: async({ page }, use) => {
        await use(new RegistrationPage(page));
    },
    loginPage: async({ page }, use) => {
        await use(new LoginPage(page));
    }
});

export {expect, type Page, type Download, type Locator, type TestInfo} from '@playwright/test'