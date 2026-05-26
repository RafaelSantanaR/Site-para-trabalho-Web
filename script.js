const API_KEY = "993c54143baa4660a29f23e1117dbd4b";

async function buscarJogos(busca) {
    const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${busca}&page_size=10`);
    const data = await res.json();

    const datalist = document.getElementById("lista-jogos");
    datalist.innerHTML = "";

    data.results.forEach(jogo => {
        const option = document.createElement("option");
        option.value = jogo.name;
        datalist.appendChild(option);
    });
}

document.getElementById("jogo").addEventListener("input", (e) => {
    if (e.target.value.length >= 2) buscarJogos(e.target.value);
});