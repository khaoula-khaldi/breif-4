let marcheContainer = document.getElementById('marcheContainer');
let marcheArr = JSON.parse(localStorage.getItem('marcheArr')) || [];
let cartesAchetees = JSON.parse(localStorage.getItem("cartesAchetees")) || [];

console.log(marcheArr);

// --- FONCTION D'AFFICHAGE ---
function affichageHtml(carte) {
  let div = document.createElement('div');
  div.id = `carte-${carte.id}`;
  div.className = "w-[400px] min-h-[560px]";

  div.innerHTML = `
    <img src="${carte.image}" alt="${carte.name}" class="w-full h-64 object-cover mb-2 rounded-xl">
    <h3 class="text-xl font-bold text-white mb-2">${carte.name}</h3>
    <p class="text-sm text-gray-300 mb-2">${carte.Description}</p>
    <p class="text-yellow-400 font-semibold mb-3">${carte.prix}</p>
    <p class="text-sm text-gray-400 mb-3">${carte.rare}</p>
    <div class="flex justify-center gap-2">
      <button class="btnAcheter bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-bold">
        Acheter
      </button>
      <button class="btnFavoris bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-bold">
        Favoris
      </button>
    </div>
  `;

  // Ajouter l'événement "Acheter"
  const btnAcheter = div.querySelector(".btnAcheter");
  btnAcheter.addEventListener("click", () => {
   
      cartesAchetees.push(carte);
      localStorage.setItem("cartesAchetees", JSON.stringify(cartesAchetees));

  });

  return div;
}


async function FetchCarte() {
  try {
    const res = await fetch("./cards.json");
    const data = await res.json();
    data.forEach((carte) => {
      if (carte.rare == "common" || carte.rare == "Rare" || carte.rare == "Epique" || carte.rare == "Légendaire") {
        const cardHtml = affichageHtml(carte)
        marcheContainer.append(cardHtml);
      }
    })


    const tout = document.getElementById("tout");
    const common = document.getElementById("common");
    const Rare = document.getElementById("Rare");
    const Epique = document.getElementById("Epique");
    const Légendaire = document.getElementById("Légendaire");




    // Fonction qui affiche toutes les cartes

    function afficherToutesLesCartes(data) {
      marcheContainer.innerHTML = "";
      data.forEach((carte) => {
        const cardHtml = affichageHtml(carte);
        marcheContainer.append(cardHtml);

      });
    }


    // click tout 

    tout.addEventListener("click", () => {
      afficherToutesLesCartes(data);
    });


    //Epique
    data.forEach((carte) => {
      if (carte.rare == "Epique") {
        const cardHtml = affichageHtml(carte)
        marcheContainer.append(cardHtml);
      }
      Epique.addEventListener("click", () => {
        marcheContainer.innerHTML = "";
        data.forEach((carte) => {
          if (carte.rare == "Epique") {
            const cardHtml = affichageHtml(carte)
            marcheContainer.append(cardHtml);
          }

        }
        )

      })
    })


    //Rare
    data.forEach((carte) => {
      if (carte.rare == "Rare") {
        const cardHtml = affichageHtml(carte)
        marcheContainer.append(cardHtml);
      }
      Rare.addEventListener("click", () => {
        marcheContainer.innerHTML = "";
        data.forEach((carte) => {
          if (carte.rare == "Rare") {
            const cardHtml = affichageHtml(carte)
            marcheContainer.append(cardHtml);
          }

        }
        )



      })
    })


    //légendaire
    data.forEach((carte) => {
      if (carte.rare == "légendaire") {
        const cardHtml = affichageHtml(carte)
        marcheContainer.append(cardHtml);
      }
      Légendaire.addEventListener("click", () => {
        marcheContainer.innerHTML = "";
        data.forEach((carte) => {
          if (carte.rare == "Légendaire") {
            const cardHtml = affichageHtml(carte)
            marcheContainer.append(cardHtml);
          }

        }
        )

      })
    })

    //common
    data.forEach((carte) => {
      if (carte.rare == "common") {
        const cardHtml = affichageHtml(carte)
        marcheContainer.append(cardHtml);
      }
      Common.addEventListener("click", () => {
        marcheContainer.innerHTML = "";
        data.forEach((carte) => {
          if (carte.rare == "Common") {
            const cardHtml = affichageHtml(carte)
            marcheContainer.append(cardHtml);
          }

        }
        )

      })

    })
  }


  catch (error) {
    console.error(error);
  }
}
FetchCarte()

