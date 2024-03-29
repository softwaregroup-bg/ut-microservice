const {test, expect} = require('ut-portal/test');
const randomName = require('uuid').v4();

test('test', async({ portal: page }, testInfo) => {
    await page.locator('[data-testid="portal-menu_test"]').click();
    await Promise.all([
        page.waitForNavigation(),
        page.locator('[data-testid="portal-menu_microservice-bar-browse"]').click()
    ]);

    // Add item
    await page.locator('[data-testid="microservice-bar-addButton"]').click();
    await page.locator('input[name="bar.barName"]').click();
    expect.soft(await page.screenshot({animations: 'disabled'})).toMatchSnapshot('microservice-bar-new.png');
    await testInfo.attach('Bar new', {path: testInfo.snapshotPath('microservice-bar-new.png')});
    await page.locator('textarea[name="bar.barDescription"]').fill('description 1');
    await page.locator('input[name="bar.barName"]').fill(randomName);
    await page.locator('[data-testid="microserviceBar-saveButton"]').click();
    await expect(page.getByTestId('microserviceBar-saveButton').locator('.pi-check')).toBeVisible();
    expect.soft(await page.screenshot({
        animations: 'disabled',
        mask: [page.locator('input[name="bar.barName"]')]
    })).toMatchSnapshot('microservice.bar.new-filled.png');

    // Fetch item and select for edit
    // close tab
    await page.locator('#pr_id_1_header_1 i').click();
    await page.locator('input[name="bar.barNameFilter"]').fill(randomName);
    await page.locator(`td >> text=${randomName}`).click(); // this locator also ensures the fetch completed
    await expect(page.locator('textarea[name="bar.barDescription"]')).toHaveValue('description 1'); // wait for data load
    await page.locator('textarea[name="bar.barDescription"]').fill('description 2');
    await page.locator('[data-testid="microserviceBar-saveButton"]').click();
    await expect(page.getByTestId('microserviceBar-saveButton').locator('.pi-check')).toBeVisible();
    await page.locator('textarea[name="bar.barDescription"]').click();
    expect.soft(await page.screenshot({
        animations: 'disabled',
        mask: [page.locator('input[name="bar.barName"]')]
    })).toMatchSnapshot('microservice-bar-save.png');
    await testInfo.attach('Bar edit', {path: testInfo.snapshotPath('microservice-bar-save.png')});

    // Fetch item and select for edit
    // close tab
    await page.locator('#pr_id_1_header_1 i').click();
    await page.locator('input[name="bar.barNameFilter"]').fill(randomName);
    await page.locator(`td >> text=${randomName}`).click(); // this locator also ensures the fetch completed
    await expect(page.locator('textarea[name="bar.barDescription"]')).toHaveValue('description 2'); // wait for data load
    await page.locator('textarea[name="bar.barDescription"]').click();
    expect.soft(await page.screenshot({
        animations: 'disabled',
        mask: [page.locator('input[name="bar.barName"]')]
    })).toMatchSnapshot('microservice-bar-edit.png');
});
