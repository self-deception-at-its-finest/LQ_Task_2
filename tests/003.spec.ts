import { expect, test} from '../fixtures/fixtures'
import { faker } from '@faker-js/faker';
import errorMessages from '../constants/errors.constants.json'


test.describe('Login', () => {
    test('Login with invalid password', async ({ loginPage, page }) => {
        await loginPage.open()
        await expect(page).toHaveURL("https://www.redmine.org/login")
        await loginPage.login({username: "test_user_01", password: faker.internet.password()})
        await expect(page).toHaveURL("https://www.redmine.org/login")
        await expect(loginPage.errorMessage).toBeVisible()
        await expect(loginPage.errorMessage).toHaveText(errorMessages.loginErrorMessage)

    })
})

