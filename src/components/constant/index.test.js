import { categories, categoriesDescriptions } from '.'

it('should have categories in correct format', () => {
  expect(categories).toBeInstanceOf(Array)
  categories.map((key) => {
    expect(typeof key).toBe('string')
    return key
  })
});

it('should have categoriesDescription in correct format', () => {
  expect(categoriesDescriptions).toBeInstanceOf(Object)
  Object.keys(categoriesDescriptions).map((key) => {
    expect(typeof key).toBe('string')
    expect(typeof categoriesDescriptions[key]).toBe('string')
    return key
  })
});
