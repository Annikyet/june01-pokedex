import { pokeApiService } from "../Services/PokeApiService.js"
import { sandboxService } from "../Services/SandboxService.js"



// public



// private
export class PokemonsController {
  constructor() {
    pokeApiService.getPokemon()
    sandboxService.getPokemon()
    
  }

  add(id) {
    console.log(`pokemonsController.add(${id})`)
    sandboxService.add(id)
  }

  remove(id) {
    console.log(`pokemonsController.remove(${id})`)
    sandboxService.remove(id)
  }

  viewStats(id) {
    console.log(`pokemonsController.viewStats(${id})`)
  }

  viewDesc(id) {
    console.log(`pokemonsController.viewDesc(${id})`)
  }
}