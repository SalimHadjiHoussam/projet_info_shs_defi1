// defi 2.2

// donnes  années universitaires et represente l'axe de X du graphique
const labels = [
 '2021-22',
 '2022-23',
 '2023-24',
 '2024-25'
 ];
 
// Un objet qui contient toutes les données du graphique
 const data = { 
 labels: labels, 
 datasets: [{  // on stoke les données dans un tableau de dataset
 label: 'Les inscrits à l’UT2J en L2 MIASHS', // le titre du graphique
 backgroundColor: 'rgb(0, 199, 193)', 
 borderColor: 'rgb(0, 199, 193)',
 data: [148, 120, 135, 130]  // Axe des y qui contient les  valeurs correspondant à chaque année 
 
 }]
  };
// c'est ici que nous allons configurer notre graphique et choisissant le type d'affichage.
const config = {
 type: 'bar', // type de graphe : diagramme en barre
 data: data, // les données du graphique
 options: {} 
 };

 // on peut aussi faire un graphique en ligne pour les memes données 
const config1 = { // on a juste fait une autre configuration en changeant le type de graphique
 type: 'line', // type de graphe : diagramme en ligne
 data: data,
 options: {}
 };

 // on va creer le graphique en utilisant la classe Chart de Chart.js et en lui passant la configuration que nous avons définie ci-dessus.
 const myChart = new Chart(
 document.querySelector('#myChart'), // pour afficher on avait besoin de l'element canvas dans HTML et on le selection ici et faut bien choisir l'id de canva que nous avon defini dans le html
 config // on fait appel a la configuration que nous avons defini 
 ); 

 // meme chose pour le graphique en ligne
 const myChart1 = new Chart(
 document.querySelector('#myChart1'),
 config1
 ); 
