import { auth, firestore } from '$lib/utils/firebase';
import { doc, setDoc } from 'firebase/firestore';

interface UserProfile {
	username: string;
	about: string;
	uid?: string;
}

export async function saveProfile(profile: UserProfile) {
	const uid = auth.currentUser?.uid;
	console.log('Hello');
	if (uid) {
		const profileDoc = await setDoc(doc(firestore, 'profiles', uid), {
			...profile,
			uid,
		});
		return profileDoc;
	} else {
		throw Error('UID not specified');
	}
}
