<script lang="ts">
	import '../app.css';
	import '@appwrite.io/pink';
	import '@appwrite.io/pink-icons';

	let isDark = true;
	let isMenuOpened: null | boolean = null;

	function toggleTheme() {
		if (isDark) {
			document.body.classList.remove('theme-dark');
		} else {
			document.body.classList.add('theme-dark');
		}

		isDark = document.body.classList.contains('theme-dark');
	}

	function toggleMenu() {
		if (isMenuOpened === null) {
			isMenuOpened = true;
		} else {
			isMenuOpened = !isMenuOpened;
		}
	}
</script>

<div class="grid-with-side">
	<header class="main-header u-padding-inline-end-0">
		<button
			on:click={toggleMenu}
			class="button is-text is-only-icon is-not-desktop nav-btn"
			aria-label="Open Menu"
		>
			<span aria-hidden="true" class="icon-menu" />
		</button>
		<a class="logo" href="/">
			<img src="/logo.svg" alt="Logo" />
		</a>
		<div class="main-header-end u-margin-inline-end-16">
			<ul class="buttons-list is-with-padding">
				<li class="buttons-list-item">
					<a
						href="https://github.com/Meldiron/appwrite-ssr-svelte-kit"
						target="_blank"
						class="button is-secondary is-not-mobile"
					>
						<span class="text">View on GitHub</span>
					</a>
					<a
						href="https://github.com/Meldiron/appwrite-ssr-svelte-kit"
						target="_blank"
						class="button is-secondary is-only-mobile"
					>
						<svg
							width="16"
							height="16"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><title>GitHub</title><path
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
								fill="currentColor"
							/></svg
						>
					</a>
				</li>
				<li class="buttons-list-item u-padding-inline-0">
					<div>
						{#if isDark}
							<div>
								<button
									on:click={toggleTheme}
									class="button is-only-icon is-text"
									aria-label="Replace to Dark Mode Theme"
								>
									<span class="icon-sun" aria-hidden="true" />
								</button>
							</div>
						{:else}
							<button
								on:click={toggleTheme}
								class="button is-only-icon is-text"
								aria-label="Replace to Light Mode Theme"
							>
								<span class="icon-moon" aria-hidden="true" />
							</button>
						{/if}
					</div>
				</li>
			</ul>
		</div>
	</header>
	<aside
		class="main-side"
		style:display={isMenuOpened === null ? undefined : isMenuOpened ? 'block' : 'none'}
	>
		<div class="side-nav">
			<div class="side-nav-main">
				<section class="drop-section">
					<ul class="drop-list">
						<li class="drop-list-item">
							<a class="drop-button u-cross-center is-selected" href="https://svelte-kit.ssr.almostapps.eu/">
								<svg role="img" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
									><title>Svelte</title><path
										d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"
										fill="currentColor"
									/></svg
								>
								<span class="text">Svelte Kit</span>
							</a>
						</li>
						<li class="drop-list-item">
							<a class="drop-button u-cross-center" href="https://next-js.ssr.almostapps.eu/">
								<svg role="img" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
									><title>Next.js</title><path
										d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"
										fill="currentColor"
									/></svg
								>
								<span class="text">Next.js </span>
							</a>
						</li>
						<li class="drop-list-item">
							<a class="drop-button u-cross-center" href="/">
								<svg role="img" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
									><title>Remix</title><path
										d="M21.511 18.508c.216 2.773.216 4.073.216 5.492H15.31c0-.309.006-.592.011-.878.018-.892.036-1.821-.109-3.698-.19-2.747-1.374-3.358-3.55-3.358H1.574v-5h10.396c2.748 0 4.122-.835 4.122-3.049 0-1.946-1.374-3.125-4.122-3.125H1.573V0h11.541c6.221 0 9.313 2.938 9.313 7.632 0 3.511-2.176 5.8-5.114 6.182 2.48.497 3.93 1.909 4.198 4.694ZM1.573 24v-3.727h6.784c1.133 0 1.379.84 1.379 1.342V24Z"
										fill="currentColor"
									/></svg
								>
								<span class="text">Remix</span>
								<code class="inline-code">WIP</code>
							</a>
						</li>

						<li class="drop-list-item">
							<a class="drop-button u-cross-center" href="https://nuxt.ssr.almostapps.eu/">
								<svg role="img" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
									><title>Nuxt.js</title><path
										d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"
										fill="currentColor"
									/></svg
								>
								<span class="text">Nuxt</span>
							</a>
						</li>
						<li class="drop-list-item">
							<a class="drop-button u-cross-center" href="https://astro.ssr.almostapps.eu/">
								<svg role="img" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
									><title>Astro</title><path
										d="M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.632-4.187-1.483-.161.488-.198 1.046-.198 1.402 0 0-.106 1.75 1.111 2.968 0-.632.513-1.145 1.145-1.145 1.083 0 1.082.945 1.081 1.712v.069c0 1.164.711 2.161 1.723 2.582a2.347 2.347 0 0 1-.236-1.029c0-1.11.652-1.523 1.41-2.003.602-.383 1.272-.807 1.733-1.66a3.129 3.129 0 0 0 .378-1.494 3.14 3.14 0 0 0-.148-.954zM15.551.6c.196.244.296.572.496 1.229l4.368 14.347a18.18 18.18 0 0 0-5.222-1.768L12.35 4.8a.37.37 0 0 0-.71.002l-2.81 9.603a18.175 18.175 0 0 0-5.245 1.771L7.974 1.827c.2-.656.3-.984.497-1.227a1.613 1.613 0 0 1 .654-.484C9.415 0 9.757 0 10.443 0h3.135c.686 0 1.03 0 1.32.117A1.614 1.614 0 0 1 15.55.6z"
										fill="currentColor"
									/></svg
								>
								<span class="text">Astro</span>
							</a>
						</li>
						<li class="drop-list-item">
							<a class="drop-button u-cross-center" href="/">
								<svg width="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
									><title>Angular</title><path
										d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z"
										fill="currentColor"
									/></svg
								>
								<span class="text">Analog</span>
								<code class=" inline-code">WIP</code>
							</a>
						</li>
					</ul>
				</section>
				<div style="border-top: 1px solid hsl(var(--color-border)); padding: 1rem">
					<div class="u-flex u-cross-center u-flex-vertical u-gap-8">
						<p>
							Made with <span
								style="color: hsl(var(
							--color-primary-200))">❤️</span
							> by
						</p>

						<div>
							<ul class="avatars-group">
								<li class="avatars-group-item">
									<a
										href="https://github.com/matusfercak"
										target="_blank"
										class="avatar is-size-small is-color-blue"
									>
										<img
											style="border-radius: 50%;"
											src="/matus.webp"
											width="36"
											height="36"
											alt="Author"
										/>
									</a>
								</li>
								<li class="avatars-group-item">
									<a
										href="https://github.com/meldiron"
										target="_blank"
										class="avatar is-size-small is-color-blue"
									>
										<img
											style="border-radius: 50%;"
											src="/matej.webp"
											width="36"
											height="36"
											alt="Author"
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</aside>
	<slot />
</div>
