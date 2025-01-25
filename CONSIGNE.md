# Application web - Chat en ligne

## Contexte

Vous avez été embauché par une entreprise de développement web en tant que développeur Back-end. Votre mission est de réaliser le code serveur d'une application web de chat en ligne. Cette application doit permettre à plusieurs utilisateurs de se connecter et de discuter en temps réel.

La partie front-end de l'application a déjà été réalisée par un autre développeur. Vous devez donc vous concentrer sur la partie back-end uniquement.

Vous trouverez les détails de l'API front-end dans le fichier `API.md`.

## Fonctionnalités

- Les utilisateurs doivent pouvoir se connecter à l'application via réseau local.
- Les utilisateurs doivent pouvoir envoyer des messages textuels à tous les autres utilisateurs connectés.
- Quand un utiliseur se connecte, un message doit être envoyé à tous les autres utilisateurs pour les informer de sa connexion.
- Quand un utilisateur se déconnecte, un message doit être envoyé à tous les autres utilisateurs pour les informer de sa déconnexion.
- Quand un utilisateur est en train d'écrire un message, cela doit être indiqué aux autres utilisateurs.
- Les messages doivent être sauvegardés dans un fichier local (Nommé `messages.json`).


## Etapes

1. Initialiser un projet Node.js
2. Installer les dépendances suivantes :
	 - express
	 - socket.io
3. Créer un serveur HTTP **avec express**
4. Créer un serveur de WebSockets avec socket.io
5. Gérer les connexions et déconnexions des utilisateurs
6. Gérer l'envoi et la réception de messages
7. Gérer l'indication de l'écriture d'un message
8. Sauvegarder les messages dans un fichier local
9. Quand un utilisateur se connecte, lui envoyer les messages précédemment sauvegardés.