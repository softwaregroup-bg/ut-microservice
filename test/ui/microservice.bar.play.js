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
    expect.soft(await page.screenshot({
        animations: 'disabled',
        mask: [page.locator('input[name="bar.barName"]')]
    })).toMatchSnapshot('microservice.bar.new-filled.png');

    // Fetch item and select for edit
    // close tab
    await page.locator('#pr_id_1_header_1 i').click();
    await page.locator('input[name="bar.barNameFilter"]').fill(randomName);
    await page.locator(`td >> text=${randomName}`).click();
    await page.locator('textarea[name="bar.barDescription"]').fill('description 2');
    await page.locator('[data-testid="microserviceBar-saveButton"]').click();
    expect(page.locator('[data-testid="microserviceBar-saveButton"]')).toBeDisabled();
    await page.locator('textarea[name="bar.barDescription"]').click();
    expect.soft(await page.screenshot({
        animations: 'disabled',
        mask: [page.locator('input[name="bar.barName"]')]
    })).toMatchSnapshot('microservice-bar-edit.png');
    await testInfo.attach('Bar edit', {path: testInfo.snapshotPath('microservice-bar-edit.png')});

    // Fetch item and select for edit
    // close tab
    await page.locator('#pr_id_1_header_1 i').click();
    await page.locator('input[name="bar.barNameFilter"]').fill(randomName);
    await page.locator(`td >> text=${randomName}`).click();
    await page.locator('textarea[name="bar.barDescription"]').click();
    expect.soft(await page.screenshot({
        animations: 'disabled',
        mask: [page.locator('input[name="bar.barName"]')]
    })).toMatchSnapshot('microservice-bar-edit.png');
});
