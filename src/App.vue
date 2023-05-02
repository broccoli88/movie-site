<script setup>
	import NavBar from "./components/NavBar.vue";
	import ShowCase from "./components/ShowCase.vue";
	import { ref, watch } from "vue";
	import { getTitles } from "./composables/useFetch.js";

	const movieList = ref([]);
</script>

<template>
	<header>
		<NavBar />
	</header>
	<div>
		<ShowCase />
	</div>
</template>

<style lang="scss" scoped></style>
