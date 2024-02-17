import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import {} from "@graphprotocol/graph-ts"
import { InfoAdded } from "../generated/schema"
import { InfoAdded as InfoAddedEvent } from "../generated/Lock/Lock"
import { handleInfoAdded } from "../src/lock"
import { createInfoAddedEvent } from "./lock-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let param0 = "ethereum.Tuple Not implemented"
    let newInfoAddedEvent = createInfoAddedEvent(param0)
    handleInfoAdded(newInfoAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("InfoAdded created and stored", () => {
    assert.entityCount("InfoAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "InfoAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "param0",
      "ethereum.Tuple Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
