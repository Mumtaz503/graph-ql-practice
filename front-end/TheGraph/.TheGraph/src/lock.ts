import { InfoAdded as InfoAddedEvent } from "../generated/Lock/Lock"
import { InfoAdded } from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"

export function handleInfoAdded(event: InfoAddedEvent): void {

  let infoAdded = InfoAdded.load(getIdFromEventParams(event.params._age, event.params._name))





  // let entity = new InfoAdded(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.param0_age = event.params.param0.age
  // entity.param0_name = event.params.param0.name

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

function getIdFromEventParams(age: BigInt, name: string): string {
  return age.toHexString() + name.toString()
}