// const nome = document.getElementById("nome");
// const mail = document.getElementById("mail");
// const fone = document.getElementById("fone");
// const site = document.getElementById("site");
// const company_name = document.getElementById("company_name");

const container = document.getElementById("container");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        // nome.innerText = data[6].name;
        // mail.innerText = data[6].email;
        // fone.innerText = data[6].phone;
        // site.innerText = data[6].website;
        // company_name.innerText = data[6].company.name;

        data.forEach(user => {
            const card = document.createElement("div");

            card.className = "box";
            card.innerHTML = `
                <p>Nome: ${user.name} </p>
                <p>E-mail: ${user.email} </p>
                <p>Telefone: ${user.phone}</p>
                <p>WebSite: ${user.website}</p>
                <p>Company Name: ${user.company.name} </p>
            `;

            container.appendChild(card);
        })

    })