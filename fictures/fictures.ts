import {test as base} from '@playwright/test'

import {RegistrationPage} from "../pages/registration.page";

export const test = base.extend<{
    registrationPage: RegistrationPage
}>({
    registrationPage: async({ page }, use) => {
        await use(new RegistrationPage(page));
    }
});

export {expect, type Page, type Download, type Locator, type TestInfo} from '@playwright/test'