<template>
	<nav class="nav">
		<figure class="logo">MovieBase</figure>
		<div class="bar-search">
			<div class="search__categories">
				<button class="categories__btn">All</button>
			</div>
			<input type="text" class="search__input" />
			<button class="search__btn">Search</button>
		</div>
	</nav>
</template>

<script setup></script>

<style lang="scss" scoped>
	.nav {
		display: grid;
		grid-template-columns: min-content minmax(300px, 40%);
		grid-auto-rows: 30px;
		gap: 3rem;
		align-items: center;

		padding: $base-padding * 2;
		margin-bottom: $base-margin * 2;

		background-color: $color-primary;
		border-radius: $base-border-radius;

		.logo {
			font-size: $base-font-size * 2;
			text-shadow: 3px 2px $alt-shadow-color;
			background-color: $base-bg-color;
			padding: 0.5rem;
			color: $color-primary;
			line-height: 1.2;
			border-radius: $base-border-radius;
		}

		.bar-search {
			display: grid;
			grid-template-columns: min-content 1fr min-content;
			// gap: 0.5rem;
			height: 100%;
			border: $base-border;
			background-color: $base-input-color;
			border-radius: $small-border-radius;
			overflow: hidden;

			.search__categories {
				@include flexCenter;
				width: 50px;
				background-color: transparent;
				border-right: $base-border;
				color: $alt-font-color;
			}

			.search__input {
				border: none;
				background-color: transparent;
			}

			.categories__btn,
			.search__btn {
				@include btnInput;
			}
		}
	}
</style>
