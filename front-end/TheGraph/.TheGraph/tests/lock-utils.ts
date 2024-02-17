import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { InfoAdded } from "../generated/Lock/Lock"

export function createInfoAddedEvent(param0: ethereum.Tuple): InfoAdded {
  let infoAddedEvent = changetype<InfoAdded>(newMockEvent())

  infoAddedEvent.parameters = new Array()

  infoAddedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromTuple(param0))
  )

  return infoAddedEvent
}
