import { expect, test} from '../fixtures/fixtures'
import {createRandomUser} from '../helpers/randomUser.helper'

test.describe('Registration', () => {
    test('Successful registration of a new user', async ({ registrationPage, loginPage, page }) => {
        await registrationPage.open()
        await registrationPage.newUserRegistration(createRandomUser())
        await registrationPage.submitButton.click()
        await expect(page).toHaveURL("https://www.redmine.org/login")
        await expect(loginPage.successfulAccountCreationMessage).toBeVisible()
        await expect(loginPage.successfulAccountCreationMessage).toHaveText("")
    })
})

