<script lang="ts">
	import '$lib/styles/global.css';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<title>Robert I. — Portfolio</title>
	<meta name="description" content="Software engineer portfolio — projects, skills, and contact." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav class="nav">
</nav>

<main>
	{@render children()}
</main>

<style>
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 1.25rem 1.5rem;
	}

	.nav-brand {
		font-weight: 700;
		font-size: 1.15rem;
		color: var(--color-text);
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 1.5rem;
	}

	.nav-links a {
		color: var(--color-text-muted);
		font-size: 0.9rem;
		font-weight: 500;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: var(--color-text);
	}

	main {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.footer {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 3rem 1.5rem 2rem;
		text-align: center;
		color: var(--color-text-muted);
		font-size: 0.85rem;
	}
</style>
