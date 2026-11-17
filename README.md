# TalcoMap

PWA cartographique sur OpenStreetMap : recherche, itinéraires (voiture, vélo, marche, transports), guidage, services à proximité, horaires d'ouverture, trains/bus/métro.

## Fichiers (tout à la racine)
- `index.html` : l'application complète
- `manifest.webmanifest`, `sw.js` : installation et mode hors ligne
- `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` : icônes

## Mise en ligne
Déposez ces fichiers à la racine d'un dépôt GitHub Pages (ou tout hébergement HTTPS). Le HTTPS est obligatoire pour l'installation, la géolocalisation et le guidage.

## À compléter
- Mentions légales dans `index.html` (éditeur, immatriculation, e-mail, hébergeur) et l'adresse de contact dans Réglages. Transitous demande un contact visible.
- Après une modification, changez le numéro de version dans `sw.js` (`talcomap-v5`) pour forcer la mise à jour du cache.

## Services utilisés
Tuiles OpenStreetMap et autres fonds · OSRM (routing.openstreetmap.de) · Transitous · Nominatim · Overpass · Open-Meteo · OpenSky · Wikipédia. Usage gratuit et raisonnable uniquement.

## Firebase (comptes, synchronisation, signalements)
1. Console Firebase, projet `itn-5-fd577` : Authentication, onglet Méthode de connexion, activez **E-mail/Mot de passe** (les pseudos sont convertis en `pseudo@talcomap.app`, aucune vraie adresse n'est demandée).
2. Authentication, Paramètres, **Domaines autorisés** : ajoutez le domaine de votre hébergement (ex. `votrenom.github.io`).
3. **Realtime Database** : onglet Règles, collez `database.rules.json` puis Publier. C'est la base utilisée par l'application.
4. **Firestore** (facultatif, non utilisé par l'application) : collez `firestore.rules` si vous l'activez. Tout le reste est refusé.
5. En ligne de commande : `firebase deploy --only database,firestore` utilise `firebase.json`.
6. **Créez tout de suite les comptes `anton` et `talco`** (bouton Compte, Créer un compte). Les droits d'administration sont liés à ces deux pseudos : le premier qui s'inscrit avec l'un d'eux en prend le contrôle.
7. Conseil : dans Google Cloud, Identifiants, restreignez la clé API aux domaines de votre site, et activez App Check.

Limites : un administrateur peut supprimer les données d'un utilisateur et le suspendre (il ne peut plus se connecter ni publier), mais le compte Authentication lui-même ne peut être supprimé que depuis la console Firebase ou une Cloud Function.
