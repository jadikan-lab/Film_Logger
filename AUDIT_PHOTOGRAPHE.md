# Audit Photographe - Protocole v0.1

Date: 28/04/2026

But: faire un audit metier oriente pratique photo argentique, avec un protocole court mais reproductible.

## 1) Protocole d'audit (5 a 8 scenarios)

### Scenario A - Demarrage pellicule 35mm
- Ouvrir quick.html
- Creer une nouvelle pellicule 35mm avec appareil, ISO, notes, statut
- Verifier que l'entree apparait bien dans Continuer

Critere de succes:
- Enregistrement sans ambiguite
- Le vocabulaire est clair pour un photographe

### Scenario B - Demarrage plan-film puis reprise
- Ouvrir onglet Plan-film
- Creer un support plan-film (ou papier)
- Revenir plus tard et verifier reprise/modification

Critere de succes:
- Les champs techniques sont suffisants
- La reprise est immediate et comprensible

### Scenario C - Continuite de prise de vue
- Dans Continuer, selectionner un support deja entame
- Enregistrer au moins 2 vues successives (vitesse, ouverture, notes)
- Verifier progression des vues et historique

Critere de succes:
- La notion de progression est lisible
- Le risque d'erreur de saisie est faible

### Scenario D - Passage vers archives
- Marquer un support comme termine
- Verifier son apparition dans Archives
- Tester le renommage de dossier archive

Critere de succes:
- Flux fin de cycle intuitif
- Aucune perte de contexte entre Continuer et Archives

### Scenario E - Reglages metier
- Ouvrir directement Reglages
- Modifier pratiques, appareils, catalogues films/papiers
- Revenir aux onglets de saisie et verifier l'impact

Critere de succes:
- Reglages coherents et persistants
- Terminologie metier correcte

### Scenario F - Export et relecture
- Exporter en JSON puis CSV
- Verifier lisibilite des donnees exportees

Critere de succes:
- Exports exploitables pour archivage/reprise

### Scenario G - Mobile terrain (lecture + saisie)
- Tester sur smartphone (portrait)
- Verifier lisibilite de la hierarchie, taille des controles, vitesse de saisie

Critere de succes:
- Interface utilisable sans zoom
- Action principale evidente sur chaque vue

### Scenario H - Cas d'erreur utilisateur
- Champs incomplets ou incoherents
- Annulation/reprise de manipulation

Critere de succes:
- Messages explicites
- Pas de blocage irreversible

## 2) Verification operationnelle deja faite

### Lien profond de Reglages
- Valide en local sur quick.html avec: #panelSettings:films
- Statut GitHub Pages: non visible pour l'instant tant que la branche feature/settings-parity n'est pas fusionnee dans main

### Repere de flux dans la preview
- Valide en local sur preview.html
- Le rail change bien d'etape en fonction des onglets (capture, continue, archive, settings)

### Test smartphone public
- Tunnel localtunnel indisponible au moment du test (503 Tunnel Unavailable)
- Alternative recommandee: test via URL GitHub Pages de main, puis nouveau test apres merge

## 3) Liste des points metier prioritaires (audit photographe)

Priorite 1 - Critique usage terrain
- Clarte des termes photo (plan-film, papier, support, vue, termine)
- Ordre des champs de saisie vs logique de prise de vue reelle
- Comprension immediate de l'etat du support (en cours, frigo, termine)

Priorite 2 - Fiabilite de suivi
- Cohesion entre saisie, reprise, archivage
- Lisibilite de la progression des vues
- Qualite des export JSON/CSV pour archivage long terme

Priorite 3 - Confort expert
- Densite d'information sans surcharge
- Rapidite de saisie mobile
- Ajustement des reglages sans risque de confusion

## 4) Format de restitution attendu du photographe

Pour chaque scenario:
- note sur 5
- points forts
- points bloquants
- proposition d'amelioration concrete

Synthese finale:
- top 3 corrections indispensables avant generalisation
- top 3 ameliorations de confort