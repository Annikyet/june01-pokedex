


class PokemonsService {
  constructor() {

  }

  add(id) {
    console.log(`pokemonsService.add(${id})`)
  }

  remove(id) {
    console.log(`pokemonsService.remove(${id})`)
  }
}

export const pokemonsService = new PokemonsService()