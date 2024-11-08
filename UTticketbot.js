let attempt = 0;  // Counter to limit retries
const maxAttempts = 10000;  // Maximum number of retries

while (attempt < maxAttempts) {
    attempt++;  // Increment the attempt counter

    await WaitForLoading();

    // Attempt to click the initial elements
    await ClickByXpath('//*[@id="ev_QtyTable"]/tbody/tr/td[3]/div/span[2]/button');
    await ClickByXpath('//*[@id="ev_AddToCart"]');

    // Click the retry button (XPath for the error container)
    await ClickByXpath('//*[@id="se-error-container"]/div/a');  // Click retry button

}
