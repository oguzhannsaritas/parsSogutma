import { spawnSync } from 'node:child_process';
import { getCategoryPath, productCategories } from '../src/data/catalog';
const cases: Array<{ route: string; mobile?: boolean; dark?: boolean }> = [
    { route: '/' },
    ...productCategories.map(category => ({ route: getCategoryPath(category), mobile: ['sutluk', 'mutfak'].includes(category.id) })),
    { route: '/products/14' },
    { route: '/products/14', mobile: true, dark: true },
    { route: '/products?search=pasta' },
];
for (const test of cases) {
    const result = spawnSync(process.execPath, ['--import', 'tsx', 'scripts/check-hydration.ts', test.route], {
        stdio: 'inherit', timeout: 30_000,
        env: { ...process.env, TEST_MOBILE: test.mobile ? '1' : '0', TEST_DARK: test.dark ? '1' : '0' },
    });
    if (result.status !== 0) {
        if (result.error) console.error(result.error);
        process.exit(result.status ?? 1);
    }
}
