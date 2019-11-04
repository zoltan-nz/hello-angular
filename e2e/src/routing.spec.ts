describe('Hello World', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4200', {
      waitUntil: 'networkidle0',
    });
    await page.waitForSelector('app-main-navigation-bar');
  });

  it('should navigate to Store Page', async () => {
    await page.click('[routerlink="store"]');
    await expect(page).toMatch('Store App');

    await page.click('[routerlink]');
    await expect(page).toMatch('Home Page');
  });
});
