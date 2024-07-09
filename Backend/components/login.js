const puppeteer = require('puppeteer');

async function login(UserName, Password) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto('https://tdgweborder.ca/WebOrder');

        // Fill and submit login form
        await page.type('#UserName', UserName);
        await page.type('#Password', Password);
        await page.click('#Login');

        // Wait for navigation to complete
        await page.waitForNavigation();

        // Check if login was successful
        const title = await page.title();
        if (title === 'Expected Title After Login') { // Replace with the expected title after successful login
            const cookies = await page.cookies();
            await browser.close();
            return { success: true, cookies };
        } else {
            await browser.close();
            throw new Error('Login failed. Unexpected title.');
        }
    } catch (error) {
        await browser.close();
        throw new Error(`Login failed. ${error.message}`);
    }
}

async function searchProducts(UserName, Password, searchTerm) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    // console.log(UserName,Password)
    try {
        // Navigate to the login page
        console.log('Navigating to login page...');
        await page.goto('https://tdgweborder.ca/WebOrder');
        console.log('Navigated to login page.');

        // Fill and submit login form
        console.log('Filling login form...');
        await page.type('#UserName', UserName);
        await page.type('#Password', Password);
        await page.click('#Login');

        console.log('Login form submitted.');

        // Wait for navigation to complete after login
        console.log('Waiting for navigation after login...');
        // await page.waitForNavigation({ waitUntil: 'networkidle2' });
        // await page.waitForNavigation();
        console.log('Navigation after login completed.');

        // Navigate to search page
        console.log('Navigating to search page...');
        await page.goto('https://tdgweborder.ca/WebOrder/Product/Search');
        console.log('Navigated to search page.');

        // Wait for the button to appear and click it
        console.log('Waiting for productSearchTires button...');
        await page.waitForSelector('button[ng-click="mainMenu.toolbar.click(\'productSearchTires\')"]');
        await page.click('button[ng-click="mainMenu.toolbar.click(\'productSearchTires\')"]');
        console.log('Clicked productSearchTires button.');

        // Wait for navigation or any other asynchronous operations to complete
        console.log('Waiting for navigation after clicking button...');
        // await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 90000 });
        // await page.waitForNavigation();

        console.log('Navigation after clicking button completed.');
        await page.waitForSelector('#simpleSearchText', { visible: true });
        // Enter search term and click search button
        console.log(`Entering search term "${searchTerm}"...`);
        await page.type('#simpleSearchText', searchTerm);
        await page.click('#submit');
        console.log(`Search term "${searchTerm}" submitted.`);

        // Wait for navigation after search
        console.log('Waiting for navigation after search...');
        // await page.waitForNavigation({ waitUntil: 'networkidle2' });
        // Scroll the page to load all content
        // let previousHeight;
        // while (true) {
        //     const currentHeight = await page.evaluate('document.body.scrollHeight');
        //     if (previousHeight === currentHeight) break; // Exit if no more content is loaded
        //     previousHeight = currentHeight;
        //     await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
        //     await page.waitForTimeout(2000); // Wait for new content to load
        // }
        // console.log('Navigation after search completed.');

        // Example: Wait for search results (adjust selector based on actual search results)
        // await page.waitForSelector('.col-xs-100 .grid-row .ng-scope .costar');
        // Example of waiting for specific data to load
        await page.waitForSelector('.product-data-list');

        const searchResults = await page.evaluate(() => {
            const results = [];
            const rows = document.querySelectorAll('.product-data-list');
    
            rows.forEach(row => {
                let result = {};
    
                // Extract SKU
                const skuElement = row.querySelector('.color-default-gray span.ng-binding');
                result.sku = skuElement ? skuElement.textContent.trim() : '';
    
                // Extract Product Description
                const descriptionElement = row.querySelector('.height-line-height22px > .truncate-no-ellipsis');
                result.description = descriptionElement ? descriptionElement.textContent.trim() : '';
    
                // Extract Price
                const priceElement = row.querySelector('.align-right.font18px');
                result.price = priceElement ? priceElement.textContent.trim() : '';
    
                // Extract Brand
                const brandElement = row.querySelector('.productList-TileHeader .ng-binding');
                result.brand = brandElement ? brandElement.textContent.trim() : '';
    
                // Extract Size
                const sizeElement = row.querySelector('.padding-top-right-left5px .bold');
                result.size = sizeElement ? sizeElement.textContent.trim() : '';
    
                // Extract Season (assuming it's part of the specifications or another element)
                const seasonElement = row.querySelector('.padding-top-right-left5px .font8 span.ng-binding');
                result.season = seasonElement ? seasonElement.textContent.trim() : '';

                const productNameElement = row.querySelector('.col-xs-15 .height-line-height22px .padding-left5px .truncate-no-ellipsis .ng-binding');
                result.productName = productNameElement ? productNameElement.textContent.trim() : '';
                
                results.push(result);
            });
    
            return results;
        });
    

        console.log(searchResults); // Debugging log to see the extracted data


        // Wait for the content to load
        // await page.waitForSelector('.grid-row');

        // // Extract the data
        // const data = await page.evaluate(() => {
        //     const rows = Array.from(document.querySelectorAll('.grid-row'));
        //     return rows.map(row => {
        //         const size = row.querySelector('.col-xs-15').innerText.trim();
        //         const description = row.querySelector('.col-xs-51 span').innerText.trim();
        //         const price = row.querySelector('.col-xs-11').innerText.trim();
        //         const onHand = row.querySelector('.col-xs-3 button:nth-child(1)').innerText.trim();
        //         const ordered = row.querySelector('.col-xs-9 button').innerText.trim();

        //         return { size, description, price, onHand, ordered };
        //     });
        // });
        console.log('Search results:', searchResults);

        await browser.close();
        return { success: true, results: searchResults };
    } catch (error) {
        console.error('Error occurred:', error);
        await browser.close();
        throw new Error(`Search failed. ${error.message}`);
    }
}

module.exports = {
    login,
    searchProducts
};
