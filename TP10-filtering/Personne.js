class Personne {
  /**
   * @param {string} prenom 
   * @param {string} nom 
   * @param {number} age 
   */
  constructor(prenom, nom, age) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
  }

  compareTo(p) {
      return this.age - p.age || this.nom.localeCompare(p.nom);
      // équivalent  à 
      //
      // let res = this.age - p.age;
      // if (res === 0) {
      //     if (this.nom < p.nom) {
      //         return -1;
      //     } else if (this.nom === p.nom) {
      //         return 0;

      //     } else {
      //         return 1;
      //     }
      // }
      // return res;
  }
}

// export pour pouoir utiliser cette classes dans d'autres modules
module.exports = Personne