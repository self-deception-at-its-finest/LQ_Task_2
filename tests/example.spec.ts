import { expect, test} from '../fixtures/fixtures'
import {createRandomUser} from '../helpers/randomUser.helper'

test.describe('Registration', () => {
    test('Successful registration of a new user', async ({ registrationPage, page }) => {
        await registrationPage.open()
        await registrationPage.newUserRegistration(createRandomUser())
        await registrationPage.submitButton.click()
        await expect(page).toHaveURL("https://www.redmine.org/login")

    })
})

