# Branches Film Logger

## Raccourci simple

- `main` : version stable publiee
- `quick.html` : reference fonctionnelle a ne pas casser
- `preview.html` : redesign base sur `quick.html`

## Ou travailler ?

- Nouvelle fonction : `feature/...`
- Correctif : `fix/...`
- Design / UI : `design/...`
- Maintenance / nettoyage : `chore/...`
- Sauvegarde : `backup/...`

## Branches actives utiles

- `main`
  - stable, publique
  - reference de production

- `design/preview-redesign`
  - redesign de `preview.html`
  - ne pas en faire la source de verite metier

- `feature/settings-parity`
  - branche reservee a la parite fonctionnelle des reglages
  - partir de `main`
  - verifier d'abord le comportement dans `quick.html`

## Regle a relire avant chaque session

1. Est-ce que je change le look ?
2. Est-ce que je change le comportement ?
3. Est-ce que je change seulement le code interne ?

Si la reponse melange plusieurs sujets, il faut decouper.

## Memo court

- `quick.html` doit toujours marcher
- `preview.html` doit toujours se baser sur `quick.html`
- ne pas melanger design et fonction si ce n'est pas necessaire
