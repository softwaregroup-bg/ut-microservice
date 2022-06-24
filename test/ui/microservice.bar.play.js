/* eslint-disable no-console */
/** @type {import('@playwright/test')} */
const playwright = require('ut-portal/test');
const {test, expect} = playwright;
const randomName = 'autoTest' + (Date.now() - 1463200000000) * 10000;
const testName = 'bar 1';

test.extend({
    username: ['', {scope: 'worker', option: true}],
    password: ['', {scope: 'worker', option: true}]
})('test', async({ page, username, password }) => {
    page.on('console', msg => {
        if (msg.type() === 'error') console.log(msg.text());
    });
    // Login
    await page.goto('/a/browser/adminPortal#/login');
    await page.click('input[name="username"]');
    await page.fill('input[name="username"]', username);
    await page.click('input[name="password"]');
    await page.fill('input[name="password"]', password);
    await Promise.all([
        page.waitForNavigation(),
        page.click('button:has-text("Login")')
    ]);
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
