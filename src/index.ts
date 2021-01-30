import { By, Builder, until } from 'selenium-webdriver';
import { safelyGetElementByLocator } from './helpers';
const driver = new Builder().forBrowser('firefox').build();

const PAGE_URL = 'https://www.google.com';
const SEARCH_TERM = 'node-bot-starter';

async function searchForNodeBotStarter() {
    // Navigate to Google
    await driver.get(PAGE_URL);

    // Find the search bar
    const searchBar = await safelyGetElementByLocator(driver, By.css('input[title="Search"]'));

    // Input search term
    await searchBar.sendKeys(SEARCH_TERM);

    // Find and click the search button
    const searchBtns = await driver.findElements(By.css('input[value="Google Search"]'));
    for (const btn of searchBtns) {
        // Try/catch here because there's an identical "shadow" button on the DOM that's unclickable for some reason
        try {
            await btn.click();
        } catch (err) {
            console.log('Button error:', err.message);
        }
    }

    // Wait for title to change before taking action
    await driver.wait(until.titleContains(SEARCH_TERM));

    // Find all clickable links
    const aTags = await driver.findElements(By.css('a'));
    const clickableLinks = await Promise.all(aTags.map(a => a.getAttribute('href')));

    // Determine if this repo is famous
    const foundTheRepo = clickableLinks.some(l => {
        console.log('Clickable link: ', l);
        return l?.includes('goeffthomas/node-bot-starter')
    });
    if (foundTheRepo) {
        console.log('We made it!');
    } else {
        console.log('Maybe some day...');
    }

    await driver.quit();
}

searchForNodeBotStarter();
