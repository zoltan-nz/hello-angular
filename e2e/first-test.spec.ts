describe('Hello World', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4200');
  });

  it('should be titled "Hello Angular"', async () => {
    await expect(page.title()).resolves.toMatch('Hello Angular');
  });
});
