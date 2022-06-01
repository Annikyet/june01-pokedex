import { pokemonsService } from "../Services/PokemonsService.js"



// public



// private
export class PokemonsController {
  constructor() {
    
  }

  add(id) {
    console.log(`pokemonsController.add(${id})`)
    pokemonsService.add(id)
  }

  remove(id) {
    console.log(`pokemonsController.remove(${id})`)
    pokemonsService.remove(id)
  }

  viewPokemon(id) {
    console.log(`pokemonsController.viewPokemon(${id})`)
  }

  viewStats() {
    console.log(`pokemonsController.viewStats()`)
  }

  viewDesc() {
    console.log(`pokemonsController.viewDesc()`)
  }
}