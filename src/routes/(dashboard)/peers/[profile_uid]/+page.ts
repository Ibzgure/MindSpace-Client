import { firestore, user } from '$lib/utils/firebase';
import { collection, query, where } from 'firebase/firestore';
import { get } from 'svelte/store';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const peer_uid = params.profile_uid;
	const user_uid = get(user)?.uid;

	const dmQuery = query(
		collection(firestore, 'direct-messages'),
		where('sender_id', 'in', [peer_uid, user_uid]),
		where('receiver_id', 'in', [peer_uid, user_uid]),
	);
	// return { dmQuery, peer_uid, user_uid };
	return {};
}
