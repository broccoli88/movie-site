import { ref } from "vue";

export async function getTitles() {
	const url = "https://moviesdatabase.p.rapidapi.com/titles";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
				"c711947e3amsh0c697f08f7842e1p1f50d7jsndcb62addaea8",
			"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
		},
	};
	const data = ref(null);
	const error = ref(null);

	fetch(url, options)
		.then((res) => res.json())
		.then((json) => (data.value = json))
		.catch((err) => (error.value = err));

	return { data, error };
}
