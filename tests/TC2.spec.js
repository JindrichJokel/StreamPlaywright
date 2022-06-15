
const { test, expect, chromium } = require('@playwright/test');

test('basic test', async () => {
   // await context.tracing.start({screenshots:true, snapshots: true}); 
    const browser = await chromium.launch()
    const context = await browser.newContext();
    const page = await context.newPage();
    await context.addCookies( [
        {
            name: "euconsent-v2", // TCF string v2
            value: "CPWQiJUPWQiJUD3ACBCSCHCsAP_AAEPAAATIIDoBhCokBSFCAGpYIIMAAAAHxxAAYCACABAAoAABABIAIAQAAAAQAAAgBAAAABQAIAIAAAAACEAAAAAAAAAAAQAAAAAAAAAAIQIAAAAAACBAAAAAAABAAAAAAABAQAAAggAAAAIAAAAAAAEAgAAAAAAAAAAAAAAAAAgAAAAAAAAAAAgd1AmAAWABUAC4AGQAQAAyABoADmAIgAigBMACeAFUAMQAfgBCQCIAIkARwAnABSgCxAGWAM0AdwA_QCEAEWALQAXUAwIBrAD5AJBATaAtQBeYDSgGpgO6AAAA.YAAAAAAAAAAA",
            domain: ".stream.cz",
            path: "/",
            expires: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60, // next month in secs
            secure: true,
            sameSite: "None",
            httpOnly: false,
        },
        {
            name: "cmppersisttestcookie", // unix timestamp of first visit, yup could be 1
            value: "1",
            domain: ".stream.cz",
            path: "/",
            expires: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
            secure: true,
            sameSite: "None",
            httpOnly: false,
        },
        {
            name: "szncmpone", // some helper to track purpose1 consent
            value: "1",
            domain: ".stream.cz",
            path: "/",
            expires: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
            secure: true,
            sameSite: "None",
            httpOnly: false,
        }
    ]);
    await page.goto('https://www.stream.cz/');
    await page.locator('[placeholder="Zadejte\\, co chcete hledat"]').fill('abcdsupernothing42');
    await page.locator('[aria-label="Vyhledat"]').click();
    await expect(page).toHaveURL('https://www.stream.cz/hledani?dotaz=abcdsupernothing42');
    await expect(page.locator(".h h--search-empty")).toHaveCount(0)
  
    //await context.tracing.stop({path:"trace.zip"})
});