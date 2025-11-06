
// Données des cartes ChronoDeck

const carte = [
  {
    id: 1,
    image: "img/gym1.png",
    prix: "60$",
    name: "Champion cryogénisé",
    Description: "Râle d’agonie : vous obtenez un serviteur légendaire aléatoire. Réduit son coût de (1).",
    rare: "Common",
  },
  {
    id: 2,
    image: "img/gym6.png",
    prix: "36$",
    name: "Arrêt du temps",
    Description: "Une horloge cassée donne l’heure exacte deux fois par jour.",
    rare: "Common",
  },
  {
    id: 3,
    image: "img/gym7.png",
    prix: "75$",
    name: "Manifeste commémoratif",
    Description: "Laissez-moi mourir, bon sang !",
    rare: "Common",
  },
  {
    id: 4,
    image: "img/gym8.png",
    prix: "80$",
    name: "Broxigar",
    Description: "Icône, Charge. Début de partie : disparaît. Tuez les 4 Démons d’Argus pour le faire réapparaître.",
    rare: "Rare",
  },
  {
    id: 5,
    image: "img/gym9.png",
    prix: "68$",
    name: "Solitude",
    Description: "Du temps pour moi.",
    rare: "Rare",
  },
  {
    id: 6,
    image: "img/gym10.png",
    prix: "52$",
    name: "Glaive perdu dans le temps",
    Description: "Je savais bien que je l’avais laissé quelque part !",
    rare: "Rare",
  },
  {
    id: 7,
    image: "img/gym11.png",
    prix: "101$",
    name: "Dodo menacé d’extinction",
    Description: "Les rumeurs concernant mon extinction imminente sont grandement exagérées…",
    rare: "Epique",
  },
  {
    id: 8,
    image: "img/gym12.png",
    prix: "80$",
    name: "Druidesse du renouveau",
    Description: "Rembobinage Cri de guerre : lance 2 sorts de nature aléatoires.",
    rare: "Epique",
  },
  {
    id: 9,
    image: "img/gym12.png",
    prix: "80$",
    name: "Mentor bien-né",
    Description: "Cri de guerre : vous obtenez un élève 2/2 et découvrez un sort à lui enseigner.",
    rare: "Epique",
  },
  {
    id: 10,
    image: "img/gym13.png",
    prix: "86$",
    name: "Générale des forestiers Sylvanas",
    Description: "Cri de guerre : inflige 2 points de dégâts à chaque adversaire.",
    rare: "Légendaire",
  },
  {
    id: 11,
    image: "img/gym14.png",
    prix: "72$",
    name: "Traqueur d’époque",
    Description: "Quelle époque, mes aïeux, quelle époque !",
    rare: "Légendaire",
  },
  {
    id: 12,
    image: "img/gym15.png",
    prix: "365$",
    name: "Bombe tapante",
    Description: "Croyez-moi, le minuteur s’arrête toujours à 0 seconde.",
    rare: "Légendaire",
  },
];


// Fonction d'affichage

function afficherCartes(cartesAAfficher = carte) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  cartesAAfficher.forEach(c => {
    const div = document.createElement("div");
    div.className = "bg-[#17171680] rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition transform";

    div.innerHTML = `
      <img src="${c.image}" alt="${c.name}" class="w-full h-64 object-cover">
      <div class="p-4 text-center">
        <h3 class="text-xl font-bold text mb-2">${c.name}</h3>
        <p class="text-sm text-gray-300 mb-2">${c.Description}</p>
        <p class="text-yellow-400 font-semibold mb-3">${c.prix}</p>
        <p class="text-sm text-gray-400 mb-3">${c.rare}</p>
        <div class="flex gap-2">
          <button class=" text-white bg-green-500  px-2 py-1 rounded-lg font-bold  text-xs ">Acheter</button>
          <button class="bg-green-500 text-white px-2 py-1 rounded-lg font-bold  text-xs ">Favoris</button>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}


// Filtrage

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const rarity = btn.dataset.rarity;
    if (rarity === "") {
      afficherCartes(carte);
    } else {
      const filtred = carte.filter(c => c.rare === rarity);
      afficherCartes(filtred);
    }
  });
});


    
