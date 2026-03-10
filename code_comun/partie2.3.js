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
