import { expect, test} from '@playwright/test'
import { RegistrationPage } from '../pages/registration.page'



test.describe('Registration', () => {
    test('Successful registration of a new user', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.open()







    })
})
