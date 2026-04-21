<script lang="ts">
	import type { Project } from '$lib/data/projects';

	let { project }: { project: Project } = $props();
</script>

<a
	href={project.github ?? '#'}
	target="_blank"
	rel="noopener noreferrer"
	class="card"
>
	<h3 class="card-title">{project.title}</h3>
	<p class="card-desc">{project.description}</p>
	<div class="card-tags">
		{#if project.aiAssisted}
			<span class="tag ai-tag">AI Assisted</span>
		{/if}
		{#each project.tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
</a>

<style>
	.card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition: border-color 0.2s;
		text-decoration: none;
		color: inherit;
	}

	.card:hover {
		border-color: var(--color-accent);
	}

	.card-title {
		font-size: 1.15rem;
		font-weight: 600;
	}

	.card-desc {
		color: var(--color-text-muted);
		font-size: 0.92rem;
		line-height: 1.6;
	}

	.card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		background: var(--color-border);
		color: var(--color-text-muted);
		font-size: 0.78rem;
		padding: 0.2rem 0.6rem;
		border-radius: 999px;
		font-weight: 500;
	}

	.ai-tag {
		background: #1e3a5f;
		color: #93c5fd;
		border: 1px solid #2563eb;
	}

	.card-links {
		display: flex;
		gap: 1rem;
		margin-top: 0.25rem;
		font-size: 0.9rem;
	}
</style>
