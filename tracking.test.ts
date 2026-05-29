import test from 'node:test';
import assert from 'node:assert/strict';

import { buildEventParams, getCampaignParams } from './tracking.ts';

test('getCampaignParams keeps supported UTM parameters and ignores unrelated query params', () => {
  const campaign = getCampaignParams('?utm_source=google&utm_medium=cpc&utm_campaign=agua&utm_content=hero&gclid=abc123&foo=bar');

  assert.deepEqual(campaign, {
    utm_source: 'google',
    utm_medium: 'cpc',
    utm_campaign: 'agua',
    utm_content: 'hero',
    gclid: 'abc123',
  });
});

test('buildEventParams includes page context, campaign params and event metadata', () => {
  const params = buildEventParams(
    { cta_location: 'hero', cta_text: 'Pedir propuesta' },
    'https://www.aquamaria.com.ar/?utm_source=meta&utm_medium=paid_social'
  );

  assert.equal(params.page_path, '/');
  assert.equal(params.page_location, 'https://www.aquamaria.com.ar/?utm_source=meta&utm_medium=paid_social');
  assert.equal(params.utm_source, 'meta');
  assert.equal(params.utm_medium, 'paid_social');
  assert.equal(params.cta_location, 'hero');
  assert.equal(params.cta_text, 'Pedir propuesta');
});
