<script setup>
	import NavBar from "./components/NavBar.vue";
	import ShowCase from "./components/ShowCase.vue";
	import useFetch from "./composables/use-fetch.js";
	import { ref, reactive } from "vue";

	const movieTitle = ref();
	const movieTitles = reactive({ list: [] });

	const getData = async () => {
		const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${movieTitle.value}?exact=true`;
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key":
					"c711947e3amsh0c697f08f7842e1p1f50d7jsndcb62addaea8",
				"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
			},
		};

		const { response, fetchData } = useFetch(url, options);

		await fetchData();
		movieTitles.list = response.value.results;
	};

	const search = () => {
		getData();
		console.log(movieTitles.list);
	};
</script>

<template>
	<header>
		<NavBar v-model:title="movieTitle" @search="search" />
	</header>

	<section
		class="display"
		v-if="movieTitles.list && movieTitles.list.length > 0"
	>
		<div class="display-main">
			<figure class="main__img-container">
				<img
					class="main__img"
					:src="movieTitles.list[0].primaryImage.url"
					alt=""
				/>
			</figure>
		</div>
		<div class="display-aside">
			<div class="aside__description">
				<h2 class="aside__title">
					{{ movieTitles.list[0].titleText.text }}
				</h2>
				<h3>{{ movieTitles.list[0].titleType.categories[0].value }}</h3>
				<h3>
					Release Date:
					{{ movieTitles.list[0].releaseDate.day }}/{{
						movieTitles.list[0].releaseDate.month
					}}/{{ movieTitles.list[0].releaseDate.year }}
				</h3>
			</div>
		</div>
	</section>
	<section v-else>
		<h1>No movies displayed yet...</h1>
	</section>

	<!-- <ShowCase /> -->
</template>

<style lang="scss" scoped>
	.display {
		border: 3px solid crimson;
		display: grid;
		grid-template-columns: 1fr 33%;

		.display-main {
			.main__img-container {
				.main__img {
					width: 100%;
					object-fit: cover;
				}
			}
		}
	}
</style>
