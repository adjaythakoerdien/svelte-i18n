<script>
	import Header from "./Header.svelte";
	import { dictionary, locale } from "svelte-i18n";
	import { setupI18n, isLocaleLoaded } from "./services/i18n";

	locale.set("en");
	setupI18n({ withLocale: "en" })

	function changeLanguageToEnglish() {
		locale.set("en");
	}

	function changeLanguageToDutch() {
		locale.set("nl");
	}

	function changeLanguageToDothraki() {
		locale.set("do");
	}

	$: if (!isLocaleLoaded) {
		setupI18n({ withLocale: "en" });
	}

	export let name;

</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	section {
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

{#if isLocaleLoaded}
<Header />

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<section>

	<button on:click={changeLanguageToDutch}>Change header to Dutch</button>
	<button on:click={changeLanguageToEnglish}>Change header to English</button>
	<button on:click={changeLanguageToDothraki}>Change header to Dothraki</button>
</section>
	{:else}
	<p>Loading...</p>
	{/if}
