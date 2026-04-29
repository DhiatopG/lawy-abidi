# Checklist : Correction des Erreurs Linting Tailwind CSS

Ce document détaille les étapes pour supprimer les avertissements "Unknown at rule" dans votre éditeur concernant les règles `@tailwind`, `@apply`, et `@layer`.

## 1. Configuration de l'Espace de Travail
- [x] **Créer le dossier `.vscode`** : S'il n'existe pas à la racine du projet.
- [x] **Créer le fichier `settings.json`** : À l'intérieur du dossier `.vscode`.
- [x] **Ajouter la règle d'ignorance** :
  ```json
  {
    "css.lint.unknownAtRules": "ignore"
  }
  ```

## 2. Vérification de l'Environnement
- [ ] **Redémarrer le Linter** : Parfois, il faut fermer et rouvrir le fichier `index.css` pour que les changements prennent effet.
- [ ] **Vérifier les Diagnostics** : S'assurer que la liste des erreurs dans Antigravity est vide.

## 3. Maintenance (Optionnel)
- [ ] **PostCSS Language Support** : Si les erreurs persistent, on peut envisager d'installer une extension spécifique pour PostCSS/Tailwind qui gère mieux la coloration syntaxique.

---
**Note** : Ces erreurs sont purement visuelles et n'affectent pas le fonctionnement de votre site. Le build Tailwind transformera correctement ces règles en CSS standard.
