import { test } from '@playwright/test'; // nhập test từ thư viện test

test('Test 1: thêm giỏ hàng', async ({ page }) => {

    await test.step("Step 1: Mở website và click vào Product page ", async () => {

        await page.goto('https://material.playwrightvn.com/');
        // Click the product page.
        await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    });
    // thêm sản phẩm vào giỏ hàng
    await test.step("Step 2: thêm vào giỏ hàng", async () => {
        //product 1
        await page.locator('//button[@class="add-to-cart"]').first().click({
            clickCount: 2
        });
        await page.locator('//button[@class="add-to-cart"]').nth(1).click();
        await page.locator('//button[@class="add-to-cart"]').nth(2).click({
            clickCount: 3
        });
    });

})