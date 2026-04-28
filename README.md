# Film Logger 🎞

Application web single-file pour journaliser ses prises de vue en argentique.

## Fonctionnalités

- **Sélection de l'appareil** parmi la collection complète :
  - Will Travel 4×5
  - Will Travel 5×7
  - DIY 8×18
  - Stéréo 3D World
  - Stéréo Spoutnik
  - AKM4
  - Les Cordes

- **Log de chaque prise** : vitesse d'obturation, ouverture, mise au point, environnement lumineux, notes, photo optionnelle
- **Rouleaux / sessions** : organise les prises par rouleau
- **Journal** : liste filtrables par appareil ou rouleau
- **Stats** : vue d'ensemble, répartition par appareil / film / lumière
- **Export** JSON & CSV
- **Persistance locale** via IndexedDB (LocalForage)

## Utilisation

Entrées disponibles :

- `quick.html` : base fonctionnelle de référence, à conserver complète et stable.
- `preview.html` : terrain de redesign, prévu pour tester une nouvelle interface sans perdre les fonctions existantes.
- `film-logger.html` : prototype single-file plus simple, utile comme piste visuelle mais pas comme source de vérité fonctionnelle.

Pour la version publiée, la référence reste `quick.html`.

## Stack

- HTML/CSS/JS pur — single-file
- [LocalForage](https://localforage.github.io/localForage/) pour la persistance
