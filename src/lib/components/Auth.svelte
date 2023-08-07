<script>
	import { auth } from '$lib/utils/firebase';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import Button from './ui/button/Button.svelte';

	const loginWithGoogle = async () => {
		await signInWithPopup(auth, new GoogleAuthProvider());
	};
</script>

<div class="wrapper">
	<main class="min-h-screen flex items-center justify-center bg-Primary/90">
		<div class="bg-white p-8 rounded shadow-md w-96">
			<h1 class="text-sm text-primaryDark  mb-6">Welcome to mindspace</h1>
			<h1 class="text-2xl font-semibold mb-6">Sign In</h1>
			<Button
				class="w-full py-2 px-4 rounded bg-blue-500 text-white font-semibold"
				on:click={loginWithGoogle}
			>
				Sign in with Google
			</Button>
		</div>
	</main>
</div>

<style>
	.wrapper {
		background-image: url(/images/seamless-geometric-patterns-memphis-style-fashion-80-90s-hand-drawn-design_547648-1440.avif);
		background-size: 400px;
		background-repeat: repeat;
	}
</style>
