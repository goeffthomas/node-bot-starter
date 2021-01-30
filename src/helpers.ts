import { By, until, WebDriver, Locator, WebElement } from 'selenium-webdriver';

/**
 * Delays execution of code for a specified length of time
 * @param ms Number of milliseconds to delay (Optional, defaults to 1000)
 */
export const delay = async (ms = 1000) => {
    return new Promise(res => setTimeout(res, ms));
}

/**
 * Returns WebElement only after the element is located and visible on the page
 * @param driver The WebDriver the bot is running on
 * @param locator The Locator to target the element on the page
 */
export const safelyGetElementByLocator = async (driver: WebDriver, locator: Locator): Promise<WebElement> => {
    // Wait for element to be located on the page
    await driver.wait(until.elementLocated(locator));
    const element = driver.findElement(locator);
    // Wait to return the element until it's actually visible
    return driver.wait(until.elementIsVisible(element));
};
