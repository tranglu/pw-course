import { test } from '@playwright/test'; // nhập test từ thư viện test

test('Test 1: Điền to-do list', async ({ page }) => {

    await test.step("Step 1: Mở website và click vào to-do page ", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
        // điền todo list
        await test.step("Step 2: Điền todo list", async () => {
            for (let i = 1; i <= 100; i++) {
                // await page.locator('//input[@id="new-task"]').fill(`Todo ${i + 1}`);
                await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
                await page.locator('//button[@id="add-task"]').click();
            }
        });
        // xóa các todo số lẻ
        await test.step("Step 3: Xóa todo số lẻ", async () => {
            page.on('dialog', async dialog => dialog.accept());
            for (let i = 1; i <= 100; i += 2) {
                await page.locator(`#todo-${i}-delete`).click();
            }
        });
    });
})
