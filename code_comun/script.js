

 // defi 2.3

// on peut aussi faire une graphique mixte 
const data1 = {
  labels : [
    '2021-22',
    '2022-23',
    '2023-24',
    '2024-25'
  ],

  // c'est ici que ca change par rapport au graphique precedent;
  datasets : [ // on creer plusieurs datasets pour pouvoir afficher plusieurs graphe 
    {
      type : 'line',
      label : 'Les inscrits hommes à l’UT2J en L2 MIASHS',
      backgroundColor : 'rgb(0, 199, 172)',
      borderColor : 'rgb(0, 199, 193)',
      data : [90, 76, 85, 85]
    }, // le virgule est important pour separer les deux datasets
    {
      type : 'line',
      label : 'Les inscrits femmes à l’UT2J en L3 MIASHS',
      backgroundColor : 'rgb(51, 17, 243)',
      borderColor : 'rgb(14, 40, 241)',
      data : [58, 44, 50, 45]
    }
  ]
}

// configuration du graphique mixte
const configMixt ={ // contraiment au precedent le type est defini dans chaque dataset et pas dans la configuration car on peut faire plusieurs type de graphique dans le meme graphe
  data : data1,
  options : {}
}

const myChartMixt = new Chart(
  document.querySelector('#myChartMixt'),
  configMixt
)

// defi 2.4

const anne_univ = [];
const effectif = [];
const homme = [];
const femme = [];


    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://data.enseignementsup-recherche.gouv.fr/api/explore/v2.1/catalog/datasets/fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics/records/?limit=100&offset=0&select=annee_universitaire%2C+etablissement_lib%2C+libelle_intitule_1%2C+niveau_lib%2C+hommes%2C+femmes%2Ceffectif&where=annee_universitaire+in+%28%222021-22%22%2C%222022-23%22%2C%222023-24%22%2C%222024-25%22%29+AND+etablissement_lib+%3D+%22Universit%C3%A9+Toulouse+-+Jean+Jaur%C3%A8s%22+AND+libelle_intitule_1%3D%22Mathematiques+et+informatique+appliquees+aux+sciences+humaines+et+sociales%22+AND+niveau_lib%3D%221%C3%A8re+ann%C3%A9e%22");
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const results = JSON.parse(xhr.responseText);

            for (const i of results.results) {
                console.log(i.annee_universitaire);
                console.log(i.effectif);
                anne_univ.push(i.annee_universitaire);
                effectif.push(i.effectif);
                homme.push(i.hommes);
                femme.push(i.femmes);
            };
            
            
        }
    }
    xhr.send();



const datad = {
    labels : anne_univ,
    datasets : [

         {
      type : 'line',
      label : 'Les inscrits hommes à l’UT2J en L2 MIASHS',
      backgroundColor : 'rgb(0, 199, 172)',
      borderColor : 'rgb(0, 199, 193)',
      data : [90, 76, 85, 85],
      
    }, // le virgule est important pour separer les deux datasets
    {
      type : 'line',
      label : 'Les inscrits femmes à l’UT2J en L3 MIASHS',
      backgroundColor : 'rgb(51, 17, 243)',
      borderColor : 'rgb(14, 40, 241)',
      data : [58, 44, 50, 45]
    },



        {
            type : "line",
            label : "les inscrits hommes a L'UT2J en L1 MIASHS",
            backgroundColor : 'rgb(0, 199, 13)',
            borderColor : 'rgb(0, 199, 7)',
            data : homme
        },
        {
            type : "line",
            label : "les inscrits femmes a L'UT2J en L1 MIASHS",
            backgroundColor : 'rgb(255, 99, 132)',
            borderColor : 'rgb(255, 99, 132)',
            data : femme
        }
    ]
}

const configd ={
    data : datad,
    options : {}
}

const defi = new  Chart(
    document.querySelector('#defi'),
    configd
);
