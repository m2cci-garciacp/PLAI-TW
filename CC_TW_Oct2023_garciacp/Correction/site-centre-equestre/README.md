# Site Centre Equestre

Correction du [DS du 27 octobre 2023](https://lig-membres.imag.fr/genoud/teaching/PL2AI/examens/Sujets/AI/CC2023_27_11/CC_TW_2023_10_27.html) 

Ce repository git permet de suivre l'évolution du devoir exercice par exercice.
A chaque version est associée un tag  de la forme **vx.y** où :

- le numéro de version majeur (**x**) indique le numéro de l'exercice traité
- le numéro de version mineur (**y**) indique la numéro de la question dans l'exercice si l'exercice comporte plusieurs questions

Ces tags identifient certains commits particuliers dans l'historique des commits du projet.  Ils vous permettent ainsi
 de récupérer facilement le code correspondant à l'état du projet à la fin de chaque exercice.

Cette version (v6.3) correspond à la solution complète du TP, c'est à dire le projet après la résolution du dernier exercice (question 3 de l'exercice 6).  

Pour avoir le détail des différentes versions utilisez la commande

```bash
git tag -l -n
```
 Les différentes tags sont :

| N° version | description |
|------------|-------------|
| v0         |   v0 : état initial du site |
| v1.0       |     Correction exercice 1 : mise en forme des horaires sous forme d'une table |
| v2.0       |     Correction exercice 2 : ajout de liens depuis la page d'accueil |
| v3.0       |     Correction exercice 3 : utilisation d'une feuille de styles |
| v4.1       |     Correction exercice 4.1 : utilisation d'une grille boostrap dans la page d'accueil |
| v4.2       |     Correction exercice 4.2 : ajout d'une barre de navigation |
| v4.3       |     Correction exercice 4.3 : mise en forme de la table des horaires |



Pour récupérer le code source correspondant à une version donnée 

```bash
git checkout -b exercice.x.y vx.y
```

qui permet de créer une branche de nom `exercice.x.y` en récupérant le code de la version `vx.y`. Par exemple

```bash
git checkout -b exercice.4.2 v4.2
```

vous permet de récupérer dans la branche `exercice.4.2` le code de la version `v4.2`. **Attention** une fois cette commande effectuée, vous êtes positionné sur la branche `exercice.4.2` (votre répertoire de travail (*working directory*) contient les fichiers correspondant au commit identifié par le tag `v4.2`). Vous pouvez revenir sur la branche `master` à l'aide de la commande

```bash
git checkout master
```

Vous pouvez alors (si vous le souhaitez) détruire la branche `exercice.4.2` par la commande 

```bash
git branch -d exercice.4.2
```

Vous pouvez aussi à l'aide de la commande `git diff` visualiser facilement les différences entre deux versions d'un code. Par exemple

```bash
git diff v4.3 v4.2  pages/horaires.html
```
vous montrera les différences entre la version `v4.3` et la version `v4.2` du code HTML du fichier  `pages/horaires.html`


