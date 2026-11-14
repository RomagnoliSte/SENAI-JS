const container = document.getElementById("container");

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {

        data.results.forEach(character => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = ` 

                <img src="${character.image}" alt="Imagem do personagem"/>
                <p> ${character.name} </p>

            `;

            container.appendChild(card)

        });

    })

/*
<div class="details-container">
                    
                <div class="details-personagem">
                    <span> ${character.species} </span>
                </div>

                <div class="details-personagem">
                    <span> ${character.status} </span>
                </div>

                <div class="details-personagem">
                    <span> ${character.origin.name} </span>
                </div>
                    
            </div>
             */