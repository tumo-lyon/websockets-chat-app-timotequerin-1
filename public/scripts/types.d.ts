interface Message {
	content: string;
};

interface UserMessage extends Message {
	author: string;
	time: string;
	isMe: boolean;
};

interface SystemMessage extends Message {};