import { test, expect } from '@playwright/test';

test.describe('Sample API tests (jsonplaceholder)', () => {
  test('GET a post', async ({ request }) => {
    const res = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body).toHaveProperty('id', 1);
  });

  test('POST create post', async ({ request }) => {
    const res = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: { title: 'Aris', body: 'QA Automation', userId: 1 },
    });
    // Some proxies normalize to 200; accept 200 OR 201
    expect([200, 201]).toContain(res.status());
    const body = await res.json();
    expect(body).toHaveProperty('title', 'Aris');
  });
});
