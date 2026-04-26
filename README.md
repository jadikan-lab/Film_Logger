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

Ouvrir `film-logger.html` dans un navigateur. Aucune dépendance à installer, aucun serveur requis.

## Stack

- HTML/CSS/JS pur — single-file
- [LocalForage](https://localforage.github.io/localForage/) pour la persistance
