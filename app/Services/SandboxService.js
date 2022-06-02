


// where is this importing from???
// const pokeApi = axios.create({
//   baseURL: 'https://pokeapi.co/api/v2/pokemon',
//   timeout: 5000
// })


class SandboxService {
  constructor() {

  }

  add(id) {
    console.log(`sandboxService.add(${id})`)
  }

  remove(id) {
    console.log(`sandboxService.remove(${id})`)
  }

  getPokemon() {
    
  }
}

export const sandboxService = new SandboxService()