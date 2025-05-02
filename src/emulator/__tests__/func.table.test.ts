import { describe, expect, it } from 'vitest'

import funcTable, { funcTable0, funcTable8, funcTableE } from '../func.table'

describe('The funcTable0 CPU instruction pointer table', () => {
  it('should have a fixed size of 15', () => {
    expect(funcTable0.length).toBe(15)
  })
})

describe('The funcTable8 CPU instruction pointer table', () => {
  it('should have a fixed size of 15', () => {
    expect(funcTable8.length).toBe(15)
  })
})

describe('The funcTableE CPU instruction pointer table', () => {
  it('should have a fixed size of 15', () => {
    expect(funcTableE.length).toBe(15)
  })
})

describe('The funcTable CPU instruction pointer table', () => {
  it('should have a fixed size of 16', () => {
    expect(funcTable.length).toBe(16)
  })
})
