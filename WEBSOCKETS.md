# Les WebSockets

Avant de parler des WebSockets, il est important de comprendre comment fonctionne le protocole HTTP.

## Le protocole HTTP

Le protocole HTTP (HyperText Transfer Protocol) est un protocole de communication qui permet de transférer des données sur le Web. Il fonctionne de manière asynchrone, c'est-à-dire que le client envoie une requête au serveur et attend une réponse. Le serveur traite la requête et renvoie une réponse au client.

Cependant, le protocole HTTP a quelques limitations:

- **Latence**: Le protocole HTTP est basé sur un modèle de requête/réponse. Cela signifie que le client doit envoyer une requête au serveur pour obtenir une réponse. Cela peut entraîner une latence importante, surtout si le client doit envoyer plusieurs requêtes pour obtenir les données nécessaires.
- **Communication unidirectionnelle**: Le protocole HTTP est unidirectionnel. Cela signifie que le client envoie une requête au serveur et attend une réponse. Il n'est pas possible d'établir une communication bidirectionnelle entre le client et le serveur.
- **Pas de support pour les push notifications**: Le protocole HTTP ne prend pas en charge les push notifications. Cela signifie que le serveur ne peut pas envoyer des données au client sans que le client ne le demande.

![image](https://github.com/user-attachments/assets/22f532c4-1529-41ee-b670-77a11d468e2a)

## Les WebSockets

Les WebSockets sont une technologie qui permet d'établir une communication bidirectionnelle entre le client et le serveur. Contrairement au protocole HTTP, les WebSockets permettent au serveur d'envoyer des données au client sans que le client ne le demande. Cela permet de réduire la latence et d'améliorer les performances des applications Web.

Les WebSockets fonctionnent en établissant une connexion persistante entre le client et le serveur. Une fois la connexion établie, le client et le serveur peuvent envoyer des données de manière asynchrone. Cela permet de créer des applications Web en temps réel, comme les chats en ligne, les jeux multijoueurs, etc.

![image](https://github.com/user-attachments/assets/72264368-7823-475d-a11a-36bb58fad32c)

## Socket.IO

Socket.IO est une bibliothèque JavaScript qui permet de mettre en place des WebSockets de manière simple et efficace. Elle prend en charge les WebSockets, les long polling, les server-sent events, etc. Elle est compatible avec la plupart des navigateurs et des serveurs Web.

Voici un exemple simple d'utilisation de Socket.IO:

```javascript
// Client

const socket = io('http://localhost:3000');

socket.on('connect', () => {
	console.log('Connected to server');
});

socket.on('message', (data) => {
	console.log('Message from server:', data);
});

socket.emit('message', 'Hello from client');
```

```javascript
// Server

import { createServer } from 'http';
import { Server } from 'socket.io';

const server = createServer();
const io = new Server(server);

io.on('connection', (socket) => {
	console.log('Client connected');

	socket.on('message', (data) => {
		console.log('Message from client:', data);
		socket.emit('message', 'Hello from server');
	});
});
```

Dans cet exemple, le client se connecte au serveur en utilisant Socket.IO. Une fois la connexion établie, le client envoie un message au serveur. Le serveur reçoit le message et renvoie un message de réponse au client.


### Evénements Socket.IO

Socket.IO utilise des événements pour communiquer entre le client et le serveur. Cela permet de différentier les différents types de messages échangés entre le client et le serveur. Voici un example avec un site qui comporte un compteur de clics:

```javascript
// Client

const socket = io('http://localhost:3000');

socket.on('connect', () => {
	console.log('Connected to server');
});

// On écoute l'événement 'click' envoyé par le serveur
socket.on('click', (count) => {
	console.log('Click count:', count);
});

// On ajoute un événement sur le bouton, qui enverra un événement au serveur
document.getElementById('button').addEventListener('click', () => {
	socket.emit('click');
});
```

```javascript
// Server

import { createServer } from 'http';
import { Server } from 'socket.io';

const server = createServer();

const io = new Server(server);

let count = 0;

io.on('connection', (socket) => {
	console.log('Client connected');

	// On écoute l'événement 'click' envoyé par le client
	socket.on('click', () => {
		count++;
		// On envoie l'événement 'click' avec le compteur de clics à tous les clients connectés
		io.emit('click', count);
	});
});

server.listen(3000, () => {
	console.log('Server running on port 3000');
});
```

Notons que Socket.IO nous permet de permet de passer directement des valeurs telles que des objets, des tableaux, des chaînes de caractères, etc. dans les événements.

![image](https://github.com/user-attachments/assets/18fb8a5a-72c9-4e27-a101-3f096eb19b38)


