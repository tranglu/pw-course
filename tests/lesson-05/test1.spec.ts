import { test } from '@playwright/test'; // nhập test từ thư viện test

test('Test 1: Điền vào trang register page', async ({ page }) => {

    await test.step("Step 1: Mở website và click vào register page ", async () => {

        await page.goto('https://material.playwrightvn.com/');
        // Click the get started link.
        await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

    });

    await test.step("Step 2: Điền thông tin form", async () => {
        await page.locator("//input[@id='username']").pressSequentially("tranglu", { delay: 200 });
        await page.locator("//input[@id='email']").pressSequentially("tester@yopmail.com", { delay: 200 });
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='reading']").setChecked(true);
        await page.locator("//input[@id='traveling']").setChecked(true);
        await page.locator("//select[@id='interests']").selectOption(['technology', 'Art']);
        await page.locator("//select[@id='country']").selectOption(['United States']);
        await page.locator("//input[@id='dob']").fill("1999-01-20");
        await page.locator("//input[@id='profile']").setInputFiles("data/avatar-don-gian.jpg");
        await page.locator("//textarea[@id='bio']").fill('Lorem');
    });
    //step 3: click button đăng ký
    await test.step("Step 2:Click chuột", async () => {
        //await page.locator('//*[@id="registrationForm"]/div[16]/button').click();
        await page.locator("//button[@type='submit']").click();
    });

});