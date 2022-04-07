const puppeteer = require('puppeteer')

async function scrape() {
   const browser = await puppeteer.launch({})
   const page = await browser.newPage()

   await page.goto('https://www.exito.com/tecnologia/televisores')
   const element = await page.waitForSelector(".exito-product-summary-3-x-nameContainer > div")
   const text = await page.evaluate(() => {
       let data = [];
       let elements = document.querySelectorAll(".exito-product-summary-3-x-nameContainer > div");
       for(var element of elements) {
           data.push(element.textContent)
       }
       return data;
   })
   console.log(text)
   browser.close()
}
scrape()