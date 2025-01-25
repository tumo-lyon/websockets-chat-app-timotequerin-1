// @ts-check

/**
 * Change l'élément de saisie pour indiquer que des utilisateurs sont en train de taper.
 * 
 * @param {string[]} typingUsers
 */
export function setTypingIndicator(typingUsers) {
	const typingElement = document.getElementById('typing-indicator');

	if (!typingElement) {
		return;
	}
	
	if (typingUsers.length > 0) {
		typingElement.innerText = typingUsers.join(', ') + ' are typing...';
	} else {
		typingElement.innerText = '';
	}
}