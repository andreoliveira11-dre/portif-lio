const projetos = [
  {
    nome: "LOGO",
    descricao: "Designer de logotipos",
    imagem: "./images/projeto2.jpg",
    link: "#"
  },
  {
    nome: "CARTÕES",
    descricao: "Designer de cartões",
    imagem: "./images/projeto1.jpg",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

container.innerHTML = "";

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("projeto-card");

  card.innerHTML = `
    <div class="projeto-imagem">
      <img src="${projeto.imagem}" alt="${projeto.nome}">
    </div>
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  container.appendChild(card);
});