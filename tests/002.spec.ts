import { expect, test} from '../fixtures/fixtures'


test.describe('Login', () => {
    test('Login with Valid Credentials', async ({ loginPage, page }) => {
        await loginPage.open()
        await expect(page).toHaveURL("https://www.redmine.org/login")
        await loginPage.login({username: "test_user_01", password: "test_password_1"})
        await expect(page).toHaveURL("https://www.redmine.org/my/page")
    })
})

