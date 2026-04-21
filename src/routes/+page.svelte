<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<!-- Hero -->
<section class="hero">
	<h1>Hi, I'm <span class="accent">Robert</span> (i-robert2)</h1>
	<p class="subtitle">
		Infrastructure & DevOps engineer focused on automating everything from provisioning to
		deployment. I build IaC pipelines, self-hosted services, and developer tools.
	</p>
	<div class="hero-links">
		<a href="https://github.com/i-robert2" target="_blank" rel="noopener noreferrer">GitHub</a>
		<a
			href="https://www.linkedin.com/in/robert-mihai-ionita/"
			target="_blank"
			rel="noopener noreferrer">LinkedIn</a
		>
	</div>
</section>

<!-- Projects -->
<section id="projects" class="section">
	<h2 class="section-title">Projects</h2>
	<div class="project-grid">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<style>
	.hero {
		padding: 4rem 0 3rem;
	}

	.hero h1 {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1.2;
	}

	.accent {
		color: var(--color-accent);
	}

	.subtitle {
		margin-top: 1rem;
		font-size: 1.1rem;
		color: var(--color-text-muted);
		line-height: 1.7;
	}

	.hero-links {
		margin-top: 1.5rem;
		display: flex;
		gap: 1rem;
	}

	.hero-links a {
		padding: 0.5rem 1.25rem;
		border: 1px solid var(--color-accent);
		border-radius: var(--radius);
		font-weight: 500;
		font-size: 0.9rem;
		transition:
			background 0.2s,
			color 0.2s;
	}

	.hero-links a:hover {
		background: var(--color-accent);
		color: var(--color-bg);
	}

	.section {
		padding: 3rem 0;
	}

	.section-title {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
		gap: 1.25rem;
	}

	.about-text {
		color: var(--color-text-muted);
		font-size: 1rem;
		max-width: 640px;
		line-height: 1.7;
	}
</style>
