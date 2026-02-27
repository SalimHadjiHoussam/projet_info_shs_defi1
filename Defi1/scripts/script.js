// Requete AJAX
// A tester xhr 
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb");
xhr.onreadystatechange = function () 
{
    if (xhr.readyState === 4 && xhr.status === 200) 
    {
        const bouton = document.querySelector("#button");
        const div = document.querySelector("#monDiv");

        // Ici on a transformer la reponse par un objet javaScript de format JSON
        // qu'on pourra utulisé plus facilement au cours de notre programme
        const reponse = JSON.parse(xhr.responseText);
        // Ajout de l'evenement click au niveau du boutton
        bouton.addEventListener("click", function () 
        {
            // une fois cliqué, si mon div est chargé, ça me vide tout pour pouvoir inserer 
            // nos balises et leur contenus via div.innerHTML
            div.innerHTML = "";  // nettoyage
            const ul = document.createElement("ul");

        // avec notre objet javaScript qu'on avait nommé reponse,
        // on parcourcours via une boucle for les lines et line ou reponse.lines.line est un tableau
        // donc on le parcours avec un of et non in
            for (const items of reponse.lines.line) 
            {
                const idLigne = items.id; // Recuperation de l'id des lignes pour repondre a la version 2
                const li = document.createElement("li");
                li.textContent = `${items.shortName} : ${items.name}`;

                // ici on a ajouté un style de curseur sur le li pour montrer que c'est cliquable
                li.style.cursor = "pointer"; 

                // On l'ajoute un evement pour afficher la liste de tous les arrets pour une lignes selectionnée
                li.addEventListener("click", function () 
                {
                    // Ici on s'est dit, quand on clique, ça nous sort la liste des arrets, 
                    // mais quand on reclique, la liste ne se ferme pas, donc la solution
                    // c'etait d'utuliser toogle comme callback qui nous permet d'oubrir et de fermer 
                    // a chaque clique
                    // mais il se trouve qu'on avait deja une fonction afficherArrets(idLigne, li) en callback
                    //  donc on a selectionner le ul dans le li
                    const ulExist = li.querySelector("ul");
                    
                    if (ulExist) // si y'a un ul dans le li
                    {
                        li.style.color = "";
                        // on le supprime temporairement car car a chaque fois qu'on appel la fonction afficherArrets(idLigne, li)
                        // ça le créer aussi
                        // ça voudrais dire qu'on a deja cliquer et la liste est ouverte
                        ulExist.remove(); 
                    } else {
                        li.style.color = "blue";
                        // sinon on rappel la fonction pour afficher
                        // qui prend comme parametre l'id de la ligne et le li qui declenche l'evenement
                        afficherArrets(idLigne, li);
                    }
                });
                ul.appendChild(li); // on me le li dans le ul
            }
            div.appendChild(ul); // le ul dans le div
        });
    }
};
xhr.send(); // et la on envoie la requete, comme on est avec get, on a pas besoin de le mettre en paramètre

// Fonction pour charger les arrêts
function afficherArrets(idLigne, liEvent) 
{
    let xhr2 = new XMLHttpRequest();
    
    // Ici l'url prend l'id ligne pour acceder aux lignes
    xhr2.open("GET", `https://cors-anywhere.herokuapp.com/https://api.tisseo.fr/v2/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&lineId=${idLigne}`);
    xhr2.onreadystatechange = function () 
    {
        if (xhr2.readyState === 4 && xhr2.status === 200)
        {
            // Ici pour regler le problème des arrets qui se repète, on a utuliser un set -> les ensembles
            const doublons = new Set(); // New set vide
            const rep = JSON.parse(xhr2.responseText);
            const ulArret = document.createElement("ul");
            // Avec une première boucle for sur rep.physicalStops.physicalStop on a ajouter 
            // tous les arrets dans le set pour pouvoir ignorer tout ce qui qui se repètre 
            for (const arret of rep.physicalStops.physicalStop) 
            {
                doublons.add(arret.name);
            }
            //  Avec une deuxième boucle sur notre set deja remplit sans doublons
            for(let element of doublons)
            {
                const liArret = document.createElement("li");
                liArret.textContent = element;  // On ecrit ces arrets dans notre liArret
                ulArret.appendChild(liArret);
            }
            // Le li qui declenche l'event prends comme fils le ulArret
            liEvent.appendChild(ulArret);
        }
    };
    xhr2.send();  // Envoie de la requette
}
