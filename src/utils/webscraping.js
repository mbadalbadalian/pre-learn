const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://academiccalendars.romcmaster.ca/content.php?catoid=47&navoid=9430');

  const keywordContent = await page.$eval("input[id=course_filter_keyword]", element => element.value);
  console.log(keywordContent.value);

  // example: get innerHTML of an element
  await page.focus("input[id=course_filter_keyword]");
  await page.keyboard.type("[value='COMPENG 4TN4']");
  await page.keyboard.press('Enter');
  await page.waitForNavigation();

  const newKeywordContent = await page.$eval("input[id=course_filter_keyword]", el => el.value);
  console.log(newKeywordContent);

  // close brower when we are done
  await browser.close();
})();