import { initializeApp } from 'firebase/app';
import { doc, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { docStore } from 'sveltefire';

const firebaseConfig = {
	apiKey: 'AIzaSyByXYY494vHtngPVMuxFV1odNMO-QoERAA',
	authDomain: 'mindspace-94c0a.firebaseapp.com',
	projectId: 'mindspace-94c0a',
	storageBucket: 'mindspace-94c0a.appspot.com',
	messagingSenderId: '321794509680',
	appId: '1:321794509680:web:bb393d9b90ad5daaee1db5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

// docs

//export const profilesDocs = docStore(firestore, 'profiles');
//export const groupsDocs = docStore(firestore, 'group');
//export const directMessagesDocs = docStore(firestore, 'direct-messages');
//export const groupMessagesDocs = docStore(firestore, 'group-messages');
//
//export const postsDocs = docStore(firestore, 'posts');
