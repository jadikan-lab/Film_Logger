# Workflow Film Logger

Ce repo suit une regle simple :

- `quick.html` est la reference fonctionnelle.
- `preview.html` est la preview design basee sur `quick.html`.
- `main` doit rester publiable et stable.

## Regle d'or

Quand une question apparait, on decide d'abord si c'est :

- du design
- une fonctionnalite
- un correctif
- du nettoyage de code

On ne melange pas ces categories dans le meme lot si on peut l'eviter.

## Fichiers de reference

- `quick.html` : version qui doit toujours fonctionner.
- `preview.html` : version de redesign. Elle doit reprendre les fonctions de `quick.html` sans devenir la source de verite metier.
- `film-logger.html` : prototype secondaire. Ne pas l'utiliser comme base principale pour les futures evolutions metier.

## Branches longues

- `main` : stable, publiable, protegee dans les usages.
- `design/preview-redesign` : branche de redesign de `preview.html`.
- `backup/...` : sauvegardes ponctuelles avant gros changements.

## Branches courtes a creer quand necessaire

- `feature/<sujet-court>` : nouvelle fonctionnalite.
- `fix/<sujet-court>` : correction de bug ou de robustesse.
- `design/<sujet-court>` : iteration UI/UX si elle ne doit pas aller directement dans `design/preview-redesign`.
- `chore/<sujet-court>` : maintenance, nettoyage, docs, scripts.

Exemples :

- `feature/import-merge-json`
- `fix/csv-export-escaping`
- `design/archive-cards`
- `chore/update-readme`

## Regles pratiques

### 1. Si le changement est fonctionnel

- partir de `main`
- implementer d'abord dans `quick.html`
- verifier que `quick.html` reste stable
- ensuite reporter le changement utile dans `preview.html` si la preview a besoin de suivre

### 2. Si le changement est visuel

- partir de `design/preview-redesign`
- travailler dans `preview.html`
- ne pas changer les regles metier sans raison claire
- ne pas casser la parite fonctionnelle avec `quick.html`

### 3. Si le changement est un correctif critique

- partir de `main`
- corriger d'abord `quick.html`
- reporter dans `preview.html` si le meme probleme existe

## Routine conseillee avant chaque session

1. Se demander : design, fonction, fix, ou code ?
2. Choisir la bonne branche.
3. Confirmer le fichier de reference :
   - fonction = `quick.html`
   - design = `preview.html`
4. Faire une sauvegarde avant gros chantier.
5. Verifier apres modification que `quick.html` reste la base fiable.

## Routine conseillee apres une fonctionnalite validee

1. La valider dans `quick.html`.
2. La merger vers `main`.
3. Remettre `design/preview-redesign` a jour depuis `main`.
4. Adapter `preview.html` si la nouvelle fonction doit apparaitre dans la preview.

## Convention a retenir

Si je doute, je me rappelle :

- `feature/` = nouvelle fonction
- `fix/` = correction
- `design/` = interface
- `chore/` = entretien
- `backup/` = sauvegarde

Et surtout :

- `quick.html` doit toujours marcher
- `preview.html` doit toujours se baser sur `quick.html`
- on ne melange pas design et logique si ce n'est pas necessaire