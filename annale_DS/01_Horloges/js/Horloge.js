/* 
 * © Philippe GENOUD.
 * Université Grenobles Alpes
 * Equipe STeamer - Laboratoire d'Informatique de Grenoble
 */

/**
 * le type Horloge
 * 
 * Une horloge a les attributs suivants :
 * 
 * id (string)    : l'id de l'élément HTML dans lequel l'heure est affichée
 * decalage (number) : decalage horaire par rapport à heure GMT
 * heure (number) : la composante heure de l'horloge (entier de 0 à 23)
 * min (number)   : la composante minutes de l'horloge (entier de 0 à 59)
 * sec (number)   : la composante secondes de l'horloge (entier de 0 à 59)
 * timerId (Timer): le timer qui permet de démarrer l'horloge et de l'incrémenter
 *                  toutes les secondes. vaut null quand l'horloge est arrêtée
 * @type Horloge
 */
class Horloge {
    
    /**
     * 
     * @param {string} id de l'élément HTML dans lequel l'heure est affichée
     * @param {string} ville à laquelle est associée l'horloge
     * @param {number} decalage horaire par rapport à heure GMT
     * @param {type} img image du drapeau du payas de la ville
     * @returns {Horloge}
     */
    constructor(id, ville, decalage, img) {
        this.id = id;
        this.timerId = null;
        this.decalage = decalage;
        this.demarrer();
    }

    /**
     * affiche l'heure donnée par l'horloge dans l'élément HTML défini par 
     * l'attribut this.id
     * @returns {undefined}
     */
    afficher() {
        let res = this._formaterNombre(this.heure) + ":" +
                this._formaterNombre(this.min) + ":" +
                this._formaterNombre(this.sec);
        document.getElementById(this.id).innerHTML = res;
    }

    /**
     * Renvoie un chaîne de 2 caractères pour l'affichage d'un nombre avec 2 chiffres.
     * 
     * Si le nombre est un chiffre (0 <= nbre <= 9), la chaîne retournée contient un 
     * caractère '0' avant le chiffre du nombre. Par exemple, si nbre = 7 la chaîne
     * retournée sera '07'.
     * 
     * Si le nombre contient deux chiffres, la chaîne retournée correspond à ces 
     * deux chiffres. Par exemple, si nbre = 14 la chaîne retournée sera '14'.
     *
     * @param {number} nbre le nombre à formater.
     * @returns {string} la chaîne de caractères permettant d'afficher le nombre avec 2 chiffres.
     */
    _formaterNombre(nbre) {
        let res = "";
        if (nbre < 10) {
            res = "0";
        }
        res += nbre;
        return res;
    }

    /**
     * incremente l'horloge d'une seconde et réaffiche l'heure
     * @returns {undefined}
     */
    incrementer() {
        this.sec = this.sec + 1;
        if (this.sec === 60) {
            this.sec = 0;
            this.min = this.min + 1;
            if (this.min === 60) {
                this.min = 0;
                this.heure = this.heure + 1;
                if (this.heure === 24) {
                    this.heure = 0;
                }
            }
        }
    }

    /**
     * démarre l'horloge, et l'incrémente et la réaffiche toutes les 1 secondes
     * @returns {undefined}
     */
    demarrer() {
        if (this.timerId === null) {
            // l'horloge n'est pas déjà démarrée
            // on synchronise l'horloge avec l'heure courante
            let date = new Date();
            this.heure = (date.getHours() + this.decalage + 24) % 24;
            this.min = date.getMinutes();
            this.sec = date.getSeconds();
            this.timerId = setInterval(() => {
                this.incrementer();
                this.afficher();
            }, 1000);
        }
    }

    /**
     * arrête l'horloge
     * @returns {undefined}
     */
    arreter() {
        if (this.timerId !== null) {
            // l'horloge n'est pas déjà arrêtée
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

}
