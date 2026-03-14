const anne_univ_L2_24 = [];
const homme_L1_24 = [];
const femme_L1_24 = [];

const homme_L3_24 = [];
const femme_L3_24 = [];

let chargeAPI = 0;


    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://data.enseignementsup-recherche.gouv.fr/api/explore/v2.1/catalog/datasets/fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics/records/?limit=100&offset=0&order_by=annee_universitaire+ASC&select=annee_universitaire%2C+etablissement_lib%2C+libelle_intitule_1%2C+niveau_lib%2C+hommes%2C+femmes%2Ceffectif&where=annee_universitaire+in+%28%222021-22%22%2C%222022-23%22%2C%222023-24%22%2C%222024-25%22%29+AND+etablissement_lib+%3D+%22Universit%C3%A9+Toulouse+-+Jean+Jaur%C3%A8s%22+AND+libelle_intitule_1%3D%22Mathematiques+et+informatique+appliquees+aux+sciences+humaines+et+sociales%22+AND+niveau_lib%3D%221%C3%A8re+ann%C3%A9e%22");
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const results = JSON.parse(xhr.responseText);

            for (const i of results.results) {
                anne_univ_L2_24.push(i.annee_universitaire)
                homme_L1_24.push(i.hommes);
                femme_L1_24.push(i.femmes);
            };

            chargeAPI++;

            if(chargeAPI === 2){
                creegraphique();
            }
            
        }
    }
    xhr.send();


    const xhr1 = new XMLHttpRequest();
    xhr1.open("GET","https://data.enseignementsup-recherche.gouv.fr/api/explore/v2.1/catalog/datasets/fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics/records/?limit=100&offset=0&order_by=annee_universitaire+ASC&select=annee_universitaire%2C+etablissement_lib%2C+libelle_intitule_1%2C+niveau_lib%2C+hommes%2C+femmes%2Ceffectif&where=annee_universitaire+in+%28%222021-22%22%2C%222022-23%22%2C%222023-24%22%2C%222024-25%22%29+AND+etablissement_lib+%3D+%22Universit%C3%A9+Toulouse+-+Jean+Jaur%C3%A8s%22+AND+libelle_intitule_1%3D%22Mathematiques+et+informatique+appliquees+aux+sciences+humaines+et+sociales%22+AND+niveau_lib%3D%223%C3%A8me+ann%C3%A9e%22");
    xhr1.onreadystatechange = function() {
        if(xhr1.readyState === 4 && xhr1.status === 200) {
            const results = JSON.parse(xhr1.responseText);

            for (const i of results.results) {
                homme_L3_24.push(i.hommes);
                femme_L3_24.push(i.femmes);
            };
            
             chargeAPI++;

            if(chargeAPI === 2){
                creegraphique();
            }
            }
    }
    xhr1.send();


    function creegraphique(){
    const data1 = {
    labels : anne_univ_L2_24 ,
    datasets : [
        {
            type : 'line',
            label : 'Les inscrits hommes à l’UT2J en L3 MIASHS',
            backgroundColor : 'rgb(0, 199, 33)',
            borderColor : 'rgb(66, 199, 0)',
            data : homme_L3_24,
            tension: 0.4
        }, // le virgule est important pour separer les deux datasets
        {
            type : 'line',
            label : 'Les inscrits femmes à l’UT2J en L3 MIASHS',
            backgroundColor : 'rgb(168, 17, 243)',
            borderColor : 'rgb(180, 14, 241)',
            data : femme_L3_24,
            
        },
        {
            type : 'line',
            label : 'Les inscrits hommes à l’UT2J en L2 MIASHS',
            backgroundColor : 'rgb(0, 199, 172)',
            borderColor : 'rgb(0, 199, 193)',
            data : [90, 76, 85, 85],
            
        }, // le virgule est important pour separer les deux datasets
        {
            type : 'line',
            label : 'Les inscrits femmes à l’UT2J en L2 MIASHS',
            backgroundColor : 'rgb(51, 17, 243)',
            borderColor : 'rgb(14, 40, 241)',
            data : [58, 44, 50, 45],
            
        },
        {
            type : "line",
            label : "les inscrits hommes a L'UT2J en L1 MIASHS",
            backgroundColor : 'rgb(231, 125, 125)',
            borderColor : 'rgb(231, 125, 125)',
            data : homme_L1_24,
            tension: 0.4
        },
        {
            type : "line",
            label : "les inscrits femmes a L'UT2J en L1 MIASHS",
            backgroundColor : 'rgb(255, 99, 132)',
            borderColor : 'rgb(255, 99, 132)',
            data : femme_L1_24,
            
        }
    ]
}

const config1 ={
    data : data1,
    options : {}
}

const myChart1 = new  Chart(
    document.querySelector('#myChart1'),
    config1
);

}