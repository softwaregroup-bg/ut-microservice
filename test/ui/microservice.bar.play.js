const {test, expect} = require('ut-portal/test');
const randomName = require('uuid').v4();
const testName = 'bar 1';

test('test', async({ portal: page }) => {
    await page.locator('[data-testid="portal-menu_test"]').click();
    await Promise.all([
        page.waitForNavigation(),
        page.locator('[data-testid="portal-menu_microservice-bar-browse"]').click()
    ]);

    // Add item
    await page.locator('[data-testid="microservice-bar-addButton"]').click();
    await page.locator('input[name="bar.barName"]').click();
    expect(await page.screenshot({animations: 'disabled'})).toMatchSnapshot('microservice.bar.new.png');

    await page.locator('input[name="bar.barName"]').click();
    await page.locator('input[name="bar.barName"]').fill(testName);
    await page.locator('textarea[name="bar.barDescription"]').click();
    await page.locator('textarea[name="bar.barDescription"]').fill('description 1');

    expect(await page.screenshot({animations: 'disabled'})).toMatchSnapshot('microservice.bar.new-filled.png');

    await page.locator('input[name="bar.barName"]').click();
    await page.locator('input[name="bar.barName"]').fill(randomName);

    await page.locator('[data-testid="microserviceBar-saveButton"]').click();

    // close tab
    await page.locator('#pr_id_1_header_1 i').click();

    // Fetch item and select for edit
    await page.locator('input[name="bar.barNameFilter"]').click();
    await page.locator('input[name="bar.barNameFilter"]').fill(randomName);
    await page.locator(`td >> text=${randomName}`).click();

    // Edit item
    await page.locator('input[name="bar.barName"]').click();
    await page.locator('input[name="bar.barName"]').fill(testName);
    expect(await page.screenshot({animations: 'disabled'})).toMatchSnapshot('microservice.bar.edit.png');

    await page.locator('textarea[name="bar.barDescription"]').click();
    await page.locator('textarea[name="bar.barDescription"]').fill('description 2');
    await page.locator('input[name="bar.barName"]').click();
    expect(await page.screenshot({animations: 'disabled'})).toMatchSnapshot('microservice.bar.edit-changed.png');

    await page.locator('input[name="bar.barName"]').click();
    await page.locator('input[name="bar.barName"]').fill(randomName);
    await page.locator('[data-testid="microserviceBar-saveButton"]').click();

    // close tab
    await page.locator('#pr_id_1_header_1 i').click();

    // Fetch item and select for edit
    await page.locator('input[name="bar.barNameFilter"]').click();
    await page.locator('input[name="bar.barNameFilter"]').fill(randomName);
    await page.locator(`td >> text=${randomName}`).click();

    await page.locator('input[name="bar.barName"]').click();
    await page.locator('input[name="bar.barName"]').fill(testName);
    expect(await page.screenshot({animations: 'disabled'})).toMatchSnapshot('microservice.bar.edit-changed.png');
});
