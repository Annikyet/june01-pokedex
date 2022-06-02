


// where is this importing from???
// from here: 
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 5000
})


class PokeApiService {
  constructor() {

  }

  async getPokemon() {
    console.log('pokeApiService.getPokemon()')
    try {
      const res = await pokeApi.get('sylveon')
      console.log('did it work?')
      console.log(res.data)
    } catch(error) {
      console.log('of course it didnt work')
      console.log(error)
    }
  }
}

export const pokeApiService = new PokeApiService()