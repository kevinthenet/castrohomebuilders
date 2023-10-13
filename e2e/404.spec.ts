import AxeBuilder from '@axe-core/playwright';

import { expect, test } from './base-test';

const internalLinks = ['/', '/about', '/contact', '/privacy'];

test.beforeEach(async ({ page }) => {
  await page.goto('/404');
});

test.skip('should not have any automatically detectable accessibility issues', async ({ page }) => {
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);

  // test dark mode for accessibility violations as well
  await page.getByRole('button').filter({ hasText: 'Toggle theme mode' }).click();

  const darkModeAccessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(darkModeAccessibilityScanResults.violations).toEqual([]);
});

test('has in title: "Not Found"', async ({ page }) => {
  await expect(page).toHaveTitle(/Not found/);
});

test('has button: "Go back home" which navigates back to homepage', async ({ page }) => {
  const btn = page.getByRole('link').filter({ hasText: 'Go back home' });
  await expect(btn).toBeVisible();
  await btn.click();
  await expect(page).toHaveURL('/');
  await expect(page).toHaveTitle('Castro Home Builders');
});

test('navigating to an unknown page will render the 404 page', async ({ page }) => {
  const generateRandomString = (myLength) => {
    const chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    const randomArray = Array.from(
      { length: myLength },
      (v, k) => chars[Math.floor(Math.random() * chars.length)]
    );

    const randomString = randomArray.join('');
    return randomString;
  };

  let randomPage = generateRandomString(12);

  if (internalLinks.includes(randomPage)) {
    // shouldn't ever be hit, but on the one in a million,
    // cosmic-ray-flipped-a-bit chance
    // regenerate random page
    randomPage = generateRandomString(12);
  }

  console.log(`Navigating to: /${randomPage}`);
  await page.goto(`/${randomPage}`);
  await expect(page).toHaveTitle(/Not found/);
});
