import { firestore } from '$lib/utils/firebase';
import { Timestamp, doc, setDoc } from 'firebase/firestore';

export function sendDirectMessage(message: { receiver_id: string; content: string }) {
	const timestamp = Timestamp.now();

	// Create a new message document in the "direct_messages" collection
	setDoc(doc(firestore, 'direct-messages'), {
		...message,
		timestamp,
	});
}
