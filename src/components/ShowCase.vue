<script setup>
	import { getTitles } from "../composables/useFetch.js";
	import { ref, watch } from "vue";

	const { data, error } = getTitles();

	console.log(data);
</script>
<template>
	<section class="showcase">
		<div class="showcase__main">
			<img src="" alt="" />
			<p class="showcase__title">{{}}</p>
		</div>
		<aside class="showcase__side">
			<div class="showcase__preview">
				<img src="" alt="" />
				<p class="showcase__title"></p>
			</div>
		</aside>
	</section>
	<div class="loading">Loading...</div>
</template>

<style lang="scss" scoped></style>
