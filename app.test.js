import { describe, it, expect } from 'vitest';

describe('Demo Test Suite', () => {
  it('should add numbers correctly', () => {
    const sum = 1 + 1;
    expect(sum).toBe(2);
  });

  it('should subtract numbers correctly', () => {
    const difference = 5 - 3;
    expect(difference).toBe(2);
  });
});