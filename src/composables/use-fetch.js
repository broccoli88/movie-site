import { reactive, toRefs } from "vue";

export default function (url, options) {
	const state = reactive({
		response: {},
		error: null,
		fetching: true,
	});

	const fetchData = async () => {
		state.fetching = true;
		try {
			const response = await fetch(url, options);
			const json = await response.json();
			state.response = json;
		} catch (err) {
			state.error = err;
		} finally {
			state.fetching = false;
		}
	};

	return { ...toRefs(state), fetchData };
}
