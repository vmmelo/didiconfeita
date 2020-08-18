import components from './components'

it('should have correct format', () => {
  expect(components).toBeInstanceOf(Array)
  components.map((key) => {
    expect(key).toHaveProperty('title')
    expect(typeof key.title).toBe('string')
    expect(key).toHaveProperty('image')
    expect(typeof key.image).toBe('string')
    expect(key).toHaveProperty('description')
    expect(typeof key.description).toBe('string')
    return key
  })
});
