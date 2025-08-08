import { test, expect } from '@playwright/test';

test.describe('Sample API tests (reqres.in)', () => {
  test('GET list users', async ({ request }) => {
    const res = await request.get('https://reqres.in/api/users?page=2');
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body.data.length).toBeGreaterThan(0);
  });

  test('POST create user', async ({ request }) => {
    const res = await request.post('https://reqres.in/api/users', {
      data: { name: 'Aris', job: 'QA Automation' }
    });
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body.name).toBe('Aris');
  });
});
