<script lang="ts">
	import { page } from '$app/stores';

	const mainRoutes = [
		{
			name: 'Home',
			href: '/',
			icon: 'solar:home-2-line-duotone',
			iconFilled: 'solar:home-2-bold-duotone',
		},
		{
			name: 'Peers',
			href: '/peers',
			icon: 'solar:users-group-rounded-line-duotone',
			iconFilled: 'solar:users-group-rounded-bold-duotone',
		},
		{
			name: 'Groups',
			href: '/groups',
			icon: 'solar:users-group-two-rounded-line-duotone',
			iconFilled: 'solar:users-group-two-rounded-bold-duotone',
		},
		{
			name: 'Notes',
			href: '/notes',
			icon: 'solar:notebook-line-duotone',
			iconFilled: 'solar:notebook-bold-duotone',
		},
		{
			name: 'Setting',
			href: '/settings',
			icon: 'solar:settings-line-duotone',
			iconFilled: 'solar:settings-bold-duotone',
		},
	];

	let className = '';
	export { className as class };

	const isSelected = (href: string, currentPath: string) => {
		return href === currentPath;
	};
</script>

<nav class="h-full bg-Tertiary3  border-r-[1px]  overflow-auto p-4 {className} flex flex-col gap-4">
	{#each mainRoutes as { name, href, icon, iconFilled }}
		<a
			{href}
			class="flex items-center text-2xl p-2 rounded-lg  transition-all {isSelected(
				href,
				$page.url.pathname,
			)
				? 'bg-white text-Tertiary3'
				: 'text-white'}"
			title={name}
		>
			<iconify-icon icon={isSelected(href, $page.url.pathname) ? iconFilled : icon} />
		</a>
	{/each}
</nav>
