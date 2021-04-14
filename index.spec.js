const puppeteer = require('puppeteer');
require('dotenv').config();

let browser, page;
let user = process.env.EMAIL;
let password = process.env.PASSWORD;

beforeEach(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('https://github.com/login');
});

describe('Login test cases', () => {
  it('should login with sucess', async () => {
    await page.$eval('input[id=login_field]', (el, user) => {el.value = user}, user);
    await page.$eval('input[id=password]', (el, password) => {el.value = password}, password);
    await page.$eval('input[name=commit]', btn => btn.click());
    try {
      await page.waitForSelector('.avatar-user', { timeout: 10000 });     
    } catch (error) {
        throw 'Autenticação falhou';
    }
    const content = await page.$$('.avatar-user');
    expect(content).not.toHaveLength(0);
  }, 12000);
});

afterEach( () => {
  browser.close();
});
