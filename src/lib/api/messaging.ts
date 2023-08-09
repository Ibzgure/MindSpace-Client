import { firestore, user } from '$lib/utils/firebase';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { get } from 'svelte/store';

export async function sendDirectMessage(message: { receiver_id: string; content: string }) {
	const timestamp = Timestamp.now();

	// Create a new message document in the "direct_messages" collection
	const uid = get(user)?.uid;

	await addDoc(collection(firestore, 'direct-messages'), {
		...message,
		sender_id: uid,
		timestamp,
	});
}
