# EventSport — Plateforme de Tournois Sportifs

**EventSport** est une application web légère et intuitive permettant de créer, gérer et rejoindre des événements ou tournois sportifs (ex : ping-pong, football, tennis) classés par régions françaises.

---

## 🚀 Fonctionnalités principales

- **Authentification sécurisée** : Inscription, connexion, gestion de profil et changement de mot de passe.
- **Création d'événements** : Définition du sport, du format (élimination directe, poules, match simple...), de la date, de l'heure, de la région et de la jauge de participants.
- **Gestion des inscriptions** : 
  - Les utilisateurs peuvent rejoindre ou se retirer d'un événement.
  - Affichage en temps réel de la jauge de remplissage.
  - Désactivation automatique si le tournoi est complet.
- **Espace Administrateur** : Le créateur d'un événement peut modifier les informations du tournoi ou retirer des participants.
- **Filtrage par région** : Exploration facile des tournois disponibles selon la région.
- **Tableau de bord** : Vue consolidée des événements créés et des inscriptions actives pour chaque utilisateur.

---

## 🛠️ Technologies utilisées

- **Frontend** : HTML5, CSS3, JavaScript ES6 (Modules)
- **Backend & Base de données** : Firebase SDK v9+ / v12 (Firestore & Authentication)

---

## 📁 Structure du projet

```text
├── index.html           # Page d'accueil et présentation du service
├── create.html          # Formulaire de création d'un événement
├── event.html           # Liste des événements & Détails / Gestion d'un événement
├── dashboard.html       # Tableau de bord utilisateur (Inscriptions & Créations)
├── login.html           # Page de connexion
├── register.html        # Page d'inscription
├── style.css            # Feuille de styles globale
└── firebase-config.js   # Configuration et initialisation des services Firebase
```

## ⚙️ Configuration et Installation
**1. Prérequis**

Un simple serveur HTTP local suffit pour faire tourner le projet (ex: extension Live Server sur VS Code, npx serve, ou Python python -m http.server).