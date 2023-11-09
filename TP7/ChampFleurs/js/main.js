/* 
 * Le 'programme principal' exécuté au chargement de la page
 */

// dessine une 'fleur' occupant toute le canvas d'id 'zoneDessin'
dessiner1Fleur("zoneDessin", 10, 'red');

// associe au bouton d'id 'btnDessiner' un gestionnaire d'événements qui
// lorsque l'utilisateur clique sur le bouton pave de le canvas d'id 'zoneDessin'
// de 'fleurs'.
// Le nombre de fleurs par ligne et le nombre de pétales (ellipse) par fleur
// sont donnés par la valeur des inputs d'id 'nbEllipses' et 'nbFleursLigne' 

document.querySelector("#btnDessiner").addEventListener('click',
        () => pavageFleurs('zoneDessin',
                  document.querySelector('#nbEllipses').value,
                  document.querySelector('#nbFleursLigne').value,
                  'red')
);

/*
 l'utilisation d'une fonction flêchée ci dessus est équivalente à l'utilisation
 d'une fonction anonyme passée en paramètre de la méthode addEventListener. 
 
document.querySelector("#btnDessiner").addEventListener('click',
        function () {
            pavageFleurs('zoneDessin',
                    document.querySelector('#nbEllipses').value,
                    document.querySelector('#nbFleursLigne').value,
                    'red');
        }
);

 */