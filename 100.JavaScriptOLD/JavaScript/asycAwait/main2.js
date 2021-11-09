  //async await
  const fetch = require('node-fetch');
  const pokemones = async() =>{
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await res.json()
      //console.log(data.results)
      data.results.forEach(element =>{
        console.log(element.name)
      })
    } catch (error) {
      console.log(error)
    }
  }
pokemones()

const pokemones = async() =>{
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await res.json()
      //console.log(data.results)
      data.results.map(poke => console.log(poke))
    } catch (error) {
      console.log(error)
    }
  }
pokemones()
