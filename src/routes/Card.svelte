<script lang="ts">
	import { AppwriteService } from '$lib/AppwriteService';
	import type { Models } from 'appwrite';
	export let account: undefined | null | true | Models.User<any> = undefined;
	export let isCsr = false;

	async function fetchAccount() {
		account = true;

		try {
			account = await AppwriteService.getAccount();
		} catch (err: any) {
			account = null;
		}
	}
</script>

<div
	class={`card ${
		account === undefined || account === true
			? 'card-is-pending'
			: account === null
			? 'card-is-failed'
			: 'card-is-complete'
	}`}
>
	<div class="u-flex u-main-space-between u-cross-center">
		<div class="">
			<div class="eyebrow-heading-3">{isCsr ? 'Client' : 'Server'} Side</div>
		</div>

		<div style:opacity={isCsr ? '100%' : '0%'}>
			<div class="status">
				<button on:click={fetchAccount} class="tag">
					<span class="text">Fetch</span>
				</button>
			</div>
		</div>
	</div>

	<h2 class="heading-level-6 u-margin-block-start-2">
		{#if account === undefined}
			Not Fetched Yet.
		{:else if account === null}
			You are not signed in.
		{:else if account === true}
			Fetching Account...
		{:else}
			Welcome <code class="u-un-break-text inline-code">{account.$id}</code>
		{/if}
	</h2>

	<div class="u-flex u-main-space-between u-cross-end u-margin-block-start-40">
		{#if account === undefined || account === true || account === null}
			<div
				style="--p-avatar-border-color: var(--color-neutral-120)"
				class="avatar is-color-empty"
			/>
		{:else}
			<div class="avatar">
				<img src={AppwriteService.getAccountPicture(account.$id)} alt="Avatar" />
			</div>
		{/if}
		<div
			class={`status ${
				account === undefined || account === true
					? 'is-pending'
					: account === null
					? 'is-failed'
					: 'is-complete'
			}`}
		>
			<span class="status-icon" />
		</div>
	</div>
</div>
