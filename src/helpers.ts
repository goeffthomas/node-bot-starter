import { until, WebDriver, Locator, WebElement } from "selenium-webdriver";

/**
 * Delays execution of code for a specified length of time
 * @param {number} ms Number of milliseconds to delay (Optional, defaults to 1000)
 * @returns {Promise<unknown>} A resolved Promise after the specified number of milliseconds
 */
export const delay = async (ms = 1000) => {
  return new Promise((res) => setTimeout(res, ms));
};

/**
 * Returns WebElement only after the element is located and visible on the page
 * @param {WebDriver} driver The WebDriver the bot is running on
 * @param {Locator} locator The Locator to target the element on the page
 * @returns {Promise<WebElement>} A Promise that resolves to the targeted WebElement
 */
export const safelyGetElementByLocator = async (
  driver: WebDriver,
  locator: Locator,
): Promise<WebElement> => {
  // Wait for element to be located on the page
  await driver.wait(until.elementLocated(locator));
  const element = driver.findElement(locator);
  // Wait to return the element until it's actually visible
  return driver.wait(until.elementIsVisible(element));
};
