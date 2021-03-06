describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    const message = element(
      by.text("Open up App.js to start working on your app!")
    );

    await expect(message).toBeVisible();
  });
});
