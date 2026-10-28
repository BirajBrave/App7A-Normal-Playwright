import{test, expect} from '@playwright/test';

test("User Register Successfully", async({page})=>{

    await page.goto("https://www.playwrightautomation.com/");

    await page.locator('[data-testid="pw-header-login"]').click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/login.html");

    await page.locator('[data-testid="login-register-link"]').click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/register.html");

    await expect(page.locator('[data-testid="register-heading"]')).toHaveText("Create an account");

    const firstName = page.getByPlaceholder("Jane", { exact: true });
    const lastName = page.getByPlaceholder("Doe", { exact: true });
    const email = page.getByPlaceholder("jane.doe@example.com", { exact: true });

    await page.getByTestId("register-phone-country").selectOption("IN");
    await expect(page.getByTestId("register-phone-country")).toHaveValue("IN");

    const phoneNumber = page.getByPlaceholder("##########", { exact: true });
    await page.getByTestId("register-occupation-select").selectOption("qa-engineer");
    await expect(page.getByTestId("register-occupation-select")).toHaveValue("qa-engineer");

    const genderMale = page.locator('#genderMale');
    await genderMale.check();
    await expect(genderMale).toBeChecked();

    const password = page.locator('[data-testid="register-password-input"]');
    const confirmPassword = page.locator('[data-testid="register-confirm-password-input"]');

    await firstName.fill("Biraj");
    await lastName.fill("Pradhan");
    await email.fill("bravebiraj@yahoo.com");
    await phoneNumber.fill("8010325321");
    await password.fill("puTu@2022");
    await confirmPassword.fill("puTu@2022");

    await expect(firstName).toHaveValue("Biraj");
    await expect(lastName).toHaveValue("Pradhan");
    await expect(email).toHaveValue("bravebiraj@yahoo.com");
    await expect(phoneNumber).toHaveValue("8010325321");
    await expect(password).toHaveValue("puTu@2022");
    await expect(confirmPassword).toHaveValue("puTu@2022");

    const ageGroup = page.getByTestId("register-age-checkbox");
    await ageGroup.check();
    await expect(ageGroup).toBeChecked();

    const detailRequirement = page.getByTestId("register-marketing-opt-in-checkbox");
    await detailRequirement.check();
    await expect(detailRequirement).toBeChecked();

    await page.getByRole("button", {name: "Register"}).click();

    await expect(page).toHaveURL("https://www.playwrightautomation.com/register.html");
}); 

//Login 
test("User Login Successfully", async({ page })=>{

    await page.goto("https://www.playwrightautomation.com/");
    await page.getByTestId("pw-header-login").click();

    await expect(page).toHaveURL("https://www.playwrightautomation.com/login.html");

    await expect(page.getByTestId("login-heading")).toHaveText("Sign in");

    await expect(page.getByTestId("login-username-input")).toBeVisible();
    await expect(page.getByTestId("login-password-input")).toBeVisible();
    await expect(page.getByTestId("login-remember-checkbox")).toBeVisible();
    await expect(page.getByTestId("login-submit-button")).toBeVisible();

    const email = page.getByTestId("login-username-input");
    const password = page.getByTestId("login-password-input");

    await email.fill("student");
    await password.fill("Password123");

    await page.getByTestId("login-remember-checkbox").check();
    await expect(page.getByTestId("login-remember-checkbox")).toBeChecked();

    await page.getByTestId("login-submit-button").click();

    await expect(page).toHaveURL("https://www.playwrightautomation.com/");

    await expect(page.getByText("student", {exact: true})).toBeVisible();

    await page.locator('[data-dropdown="pw-account-menu"]').click();

    await page.getByRole("button", {name: "Log out", exact: true}).click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/");
})

