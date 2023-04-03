import { launch, Browser } from "puppeteer";
import path from "path";

async function configurePuppeteer() {
  const browser = await launch({
    defaultViewport: null,
    handleSIGINT: false,
    handleSIGTERM: false,
    handleSIGHUP: false,
    headless: true,
    timeout: 100000,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  const client = await page.target().createCDPSession();
  await client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: process.cwd(),
  });
  return { page, closeFunction: close(browser) };
}

function close(browser: Browser) {
  return async function (): Promise<void> {
    await browser.close();
  };
}

export async function getImagePath(url: string) {
  const imgPath = path.join(process.cwd(), "carbon_sh.png");
  const { page, closeFunction } = await configurePuppeteer();
  await page.goto(url, { timeout: 100000 });
  const element = await page.$("#export-container .container-bg");
  await element?.screenshot({ path: imgPath });
  await closeFunction();
  return imgPath;
}
