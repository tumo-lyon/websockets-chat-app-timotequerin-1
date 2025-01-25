# API Socket.io de l'application web de chat en ligne

Cette API décrit les événements et les données échangées entre le serveur et les clients de l'application web de chat en ligne.

Les événements sont organisés en deux catégories : les événements émis par le serveur et les événements émis par les clients.

## Evénements émis par le serveur

### `user_message`

Cet événement est émis par le serveur lorsqu'un client envoie un message textuel à l'ensemble des autres clients connectés.


#### Données

Les données envoyées avec cet événement sont les suivantes :

| Nom       | Type    | Description                           |
| --------- | ------- | ------------------------------------- |
| `author`  | String  | Nom de l'auteur du message            |
| `content` | String  | Contenu du message                    |
| `time`    | String  | Date et heure d'envoi du message      |
| `isMe`    | Boolean | Indique si le message est de l'auteur |

Vous devez émettre cet événement avec les données appropriées sous forme d'objet.

**Note**: La propriété `isMe` est utilisée pour indiquer si le message a été envoyé par l'auteur du message. Elle est utilisée pour afficher le message différemment sur l'interface utilisateur. Vous pouvez laisser cette propriété à `false` au début.

### `system_message`

Cet événement est émis par le serveur pour envoyer un message système à l'ensemble des clients connectés. Ce type de message est utilisé pour informer les clients des connexions, déconnexions et autres événements importants.

#### Données

Les données envoyées avec cet événement sont les suivantes :

| Nom       | Type    | Description                           |
| --------- | ------- | ------------------------------------- |
| `content` | String  | Contenu du message                    |

Vous devez émettre cet événement avec les données appropriées sous forme d'objet.

### `typing`

Cet événement est émis par le serveur pour indiquer aux autres clients que des utilisateurs sont en train d'écrire un message.

#### Données

Pour cet événement, vous devez envoyer un Tableau de chaînes de caractères contenant les noms des utilisateurs en train d'écrire un message.


## Evénements émis par les clients

### `user_message_send`

Cet événement est émis par un client lorsqu'il envoie un message textuel à l'ensemble des autres clients connectés.

#### Données

Les données envoyées avec cet événement sont les suivantes :

| Nom       | Type    | Description                           |
| --------- | ------- | ------------------------------------- |
| `content` | String  | Contenu du message                    |

Vous devez émettre cet événement avec les données appropriées sous forme d'objet.

### `typing_start` et `typing_stop`

Ces événements sont émis par un client lorsqu'il commence et arrête d'écrire un message.

#### Données

Il n'y a pas de données à envoyer avec ces événements. Vous devez simplement les émettre sans données.