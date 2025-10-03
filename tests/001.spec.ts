import { expect, test} from '../fixtures/fixtures'
import {createRandomUser} from '../helpers/randomUser.helper'
import successMessages from '../constants/successMessages.constants.json'

test.describe('Registration', () => {
    test('Successful registration of a new user', async ({ registrationPage, loginPage, page }) => {
        await registrationPage.open()
        const newUser = createRandomUser()
        await registrationPage.newUserRegistration(newUser)
        await registrationPage.submitButton.click()
        await expect(page).toHaveURL("https://www.redmine.org/login")
        await expect(loginPage.successfulAccountCreationMessage).toBeVisible()
        await expect(loginPage.successfulAccountCreationMessage).toHaveText(successMessages.successfulAccountCreationMessage + `${newUser.email}` + '.')
    })
})

