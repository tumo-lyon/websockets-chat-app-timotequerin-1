// @ts-check
/// <reference path="./types.d.ts" />

/**
 * Crée un élément HTML représentant un message.
 * 
 * @param {UserMessage} message 
 * @returns {HTMLDivElement}
 */
function createUserMessage(message) {
	const messageElement = document.createElement('div');
	messageElement.classList.add('user-message');

	if (message.isMe) messageElement.classList.add('user-message-me');

	const timeElement = document.createElement('p');
	timeElement.classList.add('user-message-time');
	timeElement.innerText = `${message.time} • ${message.author}`;

	const contentElement = document.createElement('p');
	contentElement.classList.add('user-message-content');
	contentElement.innerText = message.content;

	messageElement.appendChild(timeElement);
	messageElement.appendChild(contentElement);
	
	return messageElement;
}

/**
 * Ajoute un message à la liste des messages.
 * 
 * @param {UserMessage} message 
 */
export function addUserMessageToFeed(message) {
	const messageElement = createUserMessage(message);
	const messagesElement = document.getElementById('message-feed');
	messagesElement?.appendChild(messageElement);
	messageElement.scrollIntoView();
}

/**
 * Crée un élément HTML représentant un message système.
 * 
 * @param {SystemMessage} message 
 * @returns {HTMLDivElement}
 */
export function createSystemMessage(message) {
	const messageElement = document.createElement('div');
	messageElement.classList.add('system-message');

	messageElement.innerText = message.content;

	return messageElement;
}

/**
 * Ajoute un message système à la liste des messages.
 * 
 * @param {SystemMessage} message 
 */
export function addSystemMessageToFeed(message) {
	const messageElement = createSystemMessage(message);
	const messagesElement = document.getElementById('message-feed');
	messagesElement?.appendChild(messageElement);
	messageElement.scrollIntoView();
}
