const pokemon_image = document.getElementById("pokemon_image");
const pokemon_number = document.getElementById("pokemon_number");
const pokemon_name = document.getElementById("pokemon_name");

const search = document.getElementById("btn-search");
const input_search = document.getElementById("input_search");
const prev = document.getElementById("btn-prev");
const next = document.getElementById("btn-next");

let actual;
let max;

const searchPokemon = (search_pokemom) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${search_pokemom}`)
        .then((res) => res.json())
        .then((data) => {
            pokemon_image.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;;
            pokemon_number.innerText = data.id;
            pokemon_name.innerText = data.name;
            actual = data.id;
        })
        .catch(() => {
            alert("Nenhum pokemom encontrado com o parâmetros informado.");
            input_search.value = '';
        })

}

search.addEventListener("click", (event) => {

    event.preventDefault();

    let search_text = input_search.value;

    if (search_text) {
        searchPokemon(search_text)
    } else {
        alert("Necessário digitar no campo de pesquisa");
    }
})

next.addEventListener("click", () => {

    let pokemon_next = actual + 1;

    if (pokemon_next > 0) {
        searchPokemon(pokemon_next)
        input_search.value = '';
    } else {
        searchPokemon(1)
        input_search.value = '';
    }

})

prev.addEventListener("click", () => {

    let pokemon_prev = actual - 1;

    if (pokemon_prev > 0) {
        searchPokemon(pokemon_prev)
        input_search.value = '';
    } else {
        searchPokemon(1024);
    }
})

searchPokemon(25);



