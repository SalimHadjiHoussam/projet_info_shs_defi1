// Définir les étiquettes pour les années qui apparaîtront sur les axes X
const labelsAnnees = ['2021-22', '2022-23', '2023-24', '2024-25'];

// Configuration commune pour que tous mes graphiques  affichent les années
const optionsGrandsGraphiques = {
    responsive: true,
    maintainAspectRatio: false, // J'active ceci pour mettre la hauteur de 600px définie dans mon CSS
    plugins: {
        legend: { position: 'top' }, // Je place la légende en haut 
        tooltip: { enabled: true } // J'active le survol pour voir l'année et la valeur exacte avec tooltip
    },
    scales: {
        y: { beginAtZero: true }, 
        x: { display: true } // Je m'assure que l'axe des années est bien visible
    }
};

// --- GRAPHIQUE 1 : TOTAL L2 MIASHS (Bâtons) ---
new Chart(document.getElementById('chartTotal'), {
    type: 'bar',
    data: {
        labels: labelsAnnees,
        datasets: [{
            label: 'Les inscrits à l’UT2J en L2 MIASHS',
            data: [148, 120, 135, 130],
            backgroundColor: 'rgb(0, 199, 193)' 
        }]
    },
    options: optionsGrandsGraphiques
});

// --- GRAPHIQUE 2 : ÉVOLUTION MIASHS (Courbe) ---
new Chart(document.getElementById('chartLine'), {
    type: 'line',
    data: {
        labels: labelsAnnees,
        datasets: [{
            label: 'Courbe d’évolution des effectifs',
            data: [148, 120, 135, 130],
            borderColor: 'rgb(0, 199, 193)',
            backgroundColor: 'rgb(0, 199, 193)',
            tension: 0.2 // J'ajoute un effet arrondi à ma ligne
        }]
    },
    options: optionsGrandsGraphiques
});

// --- GRAPHIQUE 3 : COMPARAISON MIASHS VS CPGE (Données API) ---
//  ici que je compare l'établissement ut2j avec les lycées Rascol et Daudet
new Chart(document.getElementById('chartComparaisonAPI'), {
    type: 'bar',
    data: {
        // afficher les établissements sur l'axe X pour cette comparaison
        labels: ['L2 MIASHS (UT2J)', 'CPGE Lycée Rascol (Albi)', 'CPGE Lycée Daudet (Nîmes)'],
        datasets: [
            {
                label: 'Hommes (Dernière année)',
                data: [85, 27, 30], // Données mixées entre celles de L2 MIASHS et l'API des classes préparatoires (CPGE
                backgroundColor: 'rgb(0, 199, 193)'
            },
            {
                label: 'Femmes (Dernière année)',
                data: [45, 4, 10], // Données mixées entre celles de L2 MIASHS et l'API des classes préparatoires (CPGE)
                backgroundColor: 'rgb(51, 17, 243)' // bleu pour les femmes
            }
        ]
    },
    options: optionsGrandsGraphiques
});