- NHỚ trước test.step phải có await nếu không nó bị lỗi
- fill date phải dạng yyyy-mm-dd
- selectOption(['technology', 'Art']); -> select nhiều option -> truyền vào mảng
- khi có nhiều element cùng class có thể dùng:
    + await page.locator('(//button[@class="add-to-cart"])[1]').click();
    + await page.locator('//button[@class="add-to-cart"]').first()

- mở heyperlink: 
    + await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
    + await page.click("//a[@href='04-xpath-personal-notes.html']");
- Sau getByRole không dùng [1] được, chỉ dùng cho locator
    + await page.getByRole('button', { name: 'Delete' }).first().click();
    + await page.getByRole('button', { name: 'Delete' }).nth(i).click();
- cách truyền biến vào xpath: locator(`#todo-${i}-delete`)