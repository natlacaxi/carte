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
- Après une modification, changez le numéro de version dans `sw.js` (`talcomap-v4`) pour forcer la mise à jour du cache.

## Services utilisés
Tuiles OpenStreetMap et autres fonds · OSRM (routing.openstreetmap.de) · Transitous · Nominatim · Overpass · Open-Meteo · OpenSky · Wikipédia. Usage gratuit et raisonnable uniquement.
