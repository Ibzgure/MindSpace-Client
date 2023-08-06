<script>
	import { auth } from '$lib/utils/firebase';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

	const loginWithGoogle = async () => {
		await signInWithPopup(auth, new GoogleAuthProvider());
	};
</script>

<main class="min-h-screen flex items-center justify-center bg-gray-100">
	<div class="bg-white p-8 rounded shadow-md w-96">
		<h1 class="text-2xl font-semibold mb-6">Sign In</h1>
		<button
			class="w-full py-2 px-4 rounded bg-blue-500 text-white font-semibold"
			on:click={loginWithGoogle}
		>
			Sign in with Google
		</button>
	</div>
</main>
