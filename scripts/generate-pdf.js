const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("Navigating to resume builder...");
  await page.goto("https://pcarroll9500.github.io/resume-builder/", {
    waitUntil: "networkidle",
    timeout: 60000,
  });

  // Wait for the New Resume button (+ card) to appear
  await page.waitForSelector("button.resume-card", { timeout: 20000 });

  console.log("Creating new resume from default template...");
  await page.locator("button.resume-card").click();

  // Wait for navigation to editor
  await page.waitForURL("**/editor/**", { timeout: 15000 });
  console.log("Editor opened, waiting for resume to render...");

  // Wait for the resume page element to appear
  await page.waitForSelector('[data-scope="vue-smart-pages"][data-part="page"]', {
    timeout: 20000,
  });

  // Allow time for fonts and Iconify icons to load
  await page.waitForTimeout(5000);

  const outputPath = path.resolve(__dirname, "../resume/Patrick_Carroll_Resume.pdf");

  console.log(`Generating PDF at ${outputPath}...`);
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
  });

  console.log("PDF generated successfully!");
  await browser.close();
})().catch((err) => {
  console.error("Failed to generate PDF:", err);
  process.exit(1);
});
