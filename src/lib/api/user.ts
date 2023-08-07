import { auth, firestore } from '$lib/utils/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { userStore } from 'sveltefire';

interface UserProfile {
	username: string;
	about: string;
}

export async function saveProfile(profile: UserProfile) {
	const uid = auth.currentUser?.uid;
	console.log("Hello")
	if (uid) {
		const profileDoc = await setDoc(doc(firestore, 'profiles', uid), {
			...profile,
		});
		return profileDoc;
	} else {
		throw Error('UID not specified');
	}
}
