//fetch -> requisição nativa
//axios -> biblioteca de requisição externa



fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results[4].name)
    })
