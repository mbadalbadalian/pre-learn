// const axios = require('axios')
// const jsdom = require("jsdom")

// async function getForum() {
// 	try {
// 		const response = await axios.get(
// 			'https://academiccalendars.romcmaster.ca/content.php?catoid=47&navoid=9430'
// 		)
// 		// console.log(response.data)

//     const dom = new jsdom.JSDOM(response.data, {
//       url: "http://localhost:3000/",
//       contentType: "text/html",
//       pretendToBeVisual: true,
//     });

//     const setKeyword = dom.window.document.querySelectorAll("input[id$=course_filter_keyword]");
//     setKeyword.values.innerHTML = "COMPENG 4TN4";
//     console.log(setKeyword.values.innerHTML);

//     // const b = dom.window.document.querySelectorAll("input[id$=search-with-filters]");
//     // b.values

//     const b = dom.window.document.querySelectorAll("input[id$=search-with-filters]");
//     b.values

//     return response.data
// 	} catch (error) {
// 		console.error(error)
// 	}
// }

// getForum();

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://academiccalendars.romcmaster.ca/content.php?catoid=47&navoid=9430');

  // const someContent = await page.$eval("input[id=course_filter_keyword]", el => el.value);
  // console.log(someContent);

  // example: get innerHTML of an element
  await page.focus("input[id=course_filter_keyword]");
  await page.keyboard.type("[value='COMPENG 4TN4']");
  await page.keyboard.press('Enter');
  await page.waitForNavigation();

  // const moreContent = await page.$eval("input[id=course_filter_keyword]", el => el.value);
  // console.log(moreContent);

  // const a1Tags = await page.$("[title^='ANTHROP 1AB3']");
  // console.log(a1Tags);  

  // const c = await page.$( "[title^='ANTHROP 1AB3']", element => element.click() );

  // await page.createPDFStream();

  // const bTags = await page.$(".coursepadding > div");
  // console.log(bTags.textContent);  

  // // Use Promise.all to wait for two actions (navigation and click)
  // await Promise.all([
  //   page.waitForNavigation(), // wait for navigation to happen
  //   page.click("td.coursepadding > div#text", {delay: 50}), // click link to cause navigation
  // ]);

  console.log("Nah");  

  // await Promise.all([
  //   page.$eval("input[id='search-with-filters']", element =>
  //     element.click()
  //   ),
  //   await page.waitForNavigation(),
  // ]);

  // const n = await page.$$("div");
  // let value = await page.$eval(el => el.textContent, n);

  // console.log(value);

  // const moreContent = await page.$$eval("a[title^='COMPENG 4TN4']", el => console.log(el.title));
  // await page.evaluate(() => document.body.innerText);
  // console.log(moreContent);


  // Use Promise.all to wait for two actions (navigation and click)
  // const [response] = await Promise.all([
  //   // page.focus("input[id='search-with-filters']"),
  //   // page.mouse.dragOver("input[id='search-with-filters']");
  //   page.waitForNavigation({waitUntil:'networkidle2'}), // wait for navigation to happen
  //   page.$eval( "input[id='search-with-filters']", form => form.click() )
  //   // page.click("input[id='search-with-filters']", {delay: 50}), // click link to cause navigation
  //   // let nav = page.waitForNavigation(); 	await page.click("button[type=submit]"); 	await nav;
  // ]); 

  console.log("Yes");

  // const someContent = await page.$eval("input[id=course_filter_keyword]", el => el.value);
  // console.log(someContent);

  // const moreContent = await page.$eval("input[id='search-with-filters']", el => el.value);
  // console.log(moreContent);

  // const moreContent = await page.$$eval("a");
  // console.log(moreContent);

  
  const a1Tags = await page.$("[title^='COMPENG 4TN4']");
  console.log(a1Tags); 
  
  // const moreContent = await page.$$eval("a[title^='COMPENG 4TN4']", el => console.log(el.title));
  // await page.evaluate(() => document.body.innerText);
  // console.log(moreContent);

  // const aTags = await page.$$("a[href^='preview_course']");

  // console.log(aTags);

  // await Promise.all([
  //   page.waitForNavigation(), // wait for navigation to happen
  //   page.click("tr ~ a[title^='COMPENG 4TN4']"), // click link to cause navigation
  // ]);

  console.log("Yessir");




  // // another example, this time using the evaluate function to return innerText of body
  // const moreContent = await page.evaluate(() => document.body.innerText);

  // // click another button
  // await page.click('#button');

  // close brower when we are done
  await browser.close();
})();