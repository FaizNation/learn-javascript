import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Should add two numbers correctly', () => {
  // Test basic addition
  assert.strictEqual(sum(1, 2), 3, '1 + 2 should be 3');

  // Test negative numbers
  assert.strictEqual(sum(-1, -1), -2, '-1 + -1 should be -2');

  // Test adding zero
  assert.strictEqual(sum(5, 0), 5, '5 + 0 should be 5');

  // Test adding negative and positive
  assert.strictEqual(sum(-5, 5), 0, '-5 + 5 should be 0');
});
