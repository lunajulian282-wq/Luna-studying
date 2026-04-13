// 🎮 60 SEPARATE GAMES (YOU EDIT EACH ONE EASILY)

const game1 = { name: "sand boxels", url: "https://drive.google.com/file/d/1MQM0bfDkGpdXja1xH05tIUDsnTM30tHg/view?pli=1", image: "IMAGE URL HERE" };
const game2 = { name: "Game 2", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game3 = { name: "Game 3", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game4 = { name: "Game 4", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game5 = { name: "Game 5", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game6 = { name: "Game 6", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game7 = { name: "Game 7", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game8 = { name: "Game 8", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game9 = { name: "Game 9", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game10 = { name: "Game 10", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game11 = { name: "Game 11", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game12 = { name: "Game 12", url: "HTML CODE HERE", image: "IMAGE URL HERE" };

const game13 = { name: "Game 13", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game14 = { name: "Game 14", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game15 = { name: "Game 15", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game16 = { name: "Game 16", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game17 = { name: "Game 17", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game18 = { name: "Game 18", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game19 = { name: "Game 19", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game20 = { name: "Game 20", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game21 = { name: "Game 21", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game22 = { name: "Game 22", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game23 = { name: "Game 23", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game24 = { name: "Game 24", url: "HTML CODE HERE", image: "IMAGE URL HERE" };

const game25 = { name: "Game 25", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game26 = { name: "Game 26", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game27 = { name: "Game 27", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game28 = { name: "Game 28", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game29 = { name: "Game 29", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game30 = { name: "Game 30", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game31 = { name: "Game 31", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game32 = { name: "Game 32", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game33 = { name: "Game 33", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game34 = { name: "Game 34", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game35 = { name: "Game 35", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game36 = { name: "Game 36", url: "HTML CODE HERE", image: "IMAGE URL HERE" };

const game37 = { name: "Game 37", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game38 = { name: "Game 38", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game39 = { name: "Game 39", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game40 = { name: "Game 40", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game41 = { name: "Game 41", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game42 = { name: "Game 42", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game43 = { name: "Game 43", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game44 = { name: "Game 44", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game45 = { name: "Game 45", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game46 = { name: "Game 46", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game47 = { name: "Game 47", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game48 = { name: "Game 48", url: "HTML CODE HERE", image: "IMAGE URL HERE" };

const game49 = { name: "Game 49", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game50 = { name: "Game 50", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game51 = { name: "Game 51", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game52 = { name: "Game 52", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game53 = { name: "Game 53", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game54 = { name: "Game 54", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game55 = { name: "Game 55", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game56 = { name: "Game 56", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game57 = { name: "Game 57", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game58 = { name: "Game 58", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game59 = { name: "Game 59", url: "HTML CODE HERE", image: "IMAGE URL HERE" };
const game60 = { name: "Game 60", url: "HTML CODE HERE", image: "IMAGE URL HERE" };

// 📦 ALL GAMES
const allGames = [
  game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12,
  game13, game14, game15, game16, game17, game18, game19, game20, game21, game22, game23, game24,
  game25, game26, game27, game28, game29, game30, game31, game32, game33, game34, game35, game36,
  game37, game38, game39, game40, game41, game42, game43, game44, game45, game46, game47, game48,
  game49, game50, game51, game52, game53, game54, game55, game56, game57, game58, game59, game60
];

// =====================
// PAGINATION
// =====================

const gamesPerPage = 12;
let currentPage = 1;

const gamesContainer = document.getElementById("games");
const search = document.getElementById("search");
const pagination = document.getElementById("pagination");

function getPage(page) {
  const start = (page - 1) * gamesPerPage;
  return allGames.slice(start, start + gamesPerPage);
}

function render(page, list = null) {
  gamesContainer.innerHTML = "";

  const games = list || getPage(page);

  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <a href="${game.url}" target="_blank">
        <img src="${game.image}">
        <h3>${game.name}</h3>
      </a>
    `;

    gamesContainer.appendChild(card);
  });
}

function renderPages() {
  const totalPages = Math.ceil(allGames.length / gamesPerPage);
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    btn.onclick = () => {
      currentPage = i;
      render(i);
    };

    pagination.appendChild(btn);
  }
}

search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = allGames.filter(g =>
    g.name.toLowerCase().includes(value)
  );

  gamesContainer.innerHTML = "";

  filtered.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <a href="${game.url}" target="_blank">
        <img src="${game.image}">
        <h3>${game.name}</h3>
      </a>
    `;

    gamesContainer.appendChild(card);
  });
});

renderPages();
render(currentPage);
