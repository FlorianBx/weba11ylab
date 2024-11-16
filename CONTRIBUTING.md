# Guide de contribution

Merci de votre intérêt à contribuer à notre guide d'accessibilité web ! Ce document explique comment vous pouvez participer à l'amélioration de ce projet.

## Comment contribuer ?

1. **Fork & Clone**
- Créez un fork du dépôt
- Clonez votre fork en local
```bash
git clone https://github.com/FlorianBx/weba11ylab
```

2. **Créer une branche**
```bash
git checkout -b feature/nom-de-votre-modification
```

3. **Faire vos modifications**
- Respectez la structure des fichiers existants
- Suivez les conventions de nommage
- Ajoutez des exemples de code quand c'est pertinent
- Testez vos exemples avant de les soumettre

4. **Guidelines pour le contenu**
- Utilisez un langage clair et concis
- Incluez des exemples pratiques
- Respectez la structure Markdown suivante :
````markdown
# Titre principal

## Sous-titre
     
### Section
     
- Points clés
- Exemples
### Exemples de code
```html
  <!-- Votre code ici -->
```
````

5. **Commit & Push**
```bash
git add .
git commit -m "description claire de vos modifications"
git push origin feature/nom-de-votre-modification
```

6. **Créer une Pull Request**
- Utilisez un titre clair et descriptif
- Expliquez vos modifications dans la description
- Référencez les issues concernées si applicable

## Structure du projet

```
docs/
├── checklist.md         # Checklist d'accessibilité
├── forms.md            # Guide des formulaires accessibles
├── images.md           # Guide des images accessibles
├── keyboard.md         # Navigation au clavier
└── ...
```

## Bonnes pratiques

- **Documentation** : Tout nouveau contenu doit être documenté et expliqué
- **Exemples** : Incluez toujours des exemples concrets et testés
- **Tests** : Vérifiez que vos exemples de code sont valides et accessibles
- **Style** : Suivez le style de documentation existant

## Questions ?

Si vous avez des questions ou besoin d'aide :
1. Consultez les issues existantes
2. Créez une nouvelle issue avec le label "question"
3. Contactez les mainteneurs du projet

Nous apprécions toutes les contributions, des corrections de typos aux nouveaux chapitres complets !
