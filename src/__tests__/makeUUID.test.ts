import makeUUID from "../makeUUID"

describe("makeUUID", () => {
  test("should generate uuid", async () => {
    const uuid = makeUUID()
    expect(uuid.length).toBe(10)
  })

  test("should generate uuid with prefix", async () => {
    const uuid = makeUUID("test")
    expect(uuid.length).toBe(10 + "test-".length)
  })

  test("should generate uuid with prefix and length", async () => {
    const uuid = makeUUID("test", 15)
    expect(uuid.length).toBe(15 + "test-".length)
  })
  test("should generate uuid with prefix and length", async () => {
    const uuid = makeUUID("", 15)
    expect(uuid.length).toBe(15)
  })
  test("should generate uuid with length", async () => {
    const uuid = makeUUID(undefined, 15)
    expect(uuid.length).toBe(15)
  })
})
