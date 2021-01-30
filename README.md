## How to use this thing

1. Download and install NodeJS >=14.15.0
- Either get [NodeJS directly](https://nodejs.org/en/) or via NVM on [Windows](https://github.com/coreybutler/nvm-windows) or [Mac](https://github.com/nvm-sh/nvm)
2. Install dependencies by running `npm i`
3. Setup the web drivers for Selenium
- Download the latest [Firefox driver](https://github.com/mozilla/geckodriver/releases) and/or [Chrome driver](https://chromedriver.chromium.org/)
- Place them in the `bin` directory within this repo locally
- Add the `bin` directory of this repo to PATH on [Windows](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/) or [Mac](https://www.architectryan.com/2012/10/02/add-to-the-path-on-mac-os-x-mountain-lion/)
4. Write the bot code in `src/index.ts` (a basic one has been provided as a sample)
5. Setup environment variables
- If any secrets (usernames, passwords, etc.) are used in the bot, **DO NOT COMMIT THEM**
- Instead, setup environment variables on [Windows](https://support.shotgunsoftware.com/hc/en-us/articles/114094235653-Setting-global-environment-variables-on-Windows) or [Mac](https://medium.com/@youngstone89/setting-up-environment-variables-in-mac-os-28e5941c771c)
6. Run the bot with `npm run bot`
