
export async function fetchData() {
	const result = await fetch(https://raw.githubusercontent.com/emregurdrama/vue-autocomplete-project/main/src/data/data.json")
		.then((response) => response.json())
		.then((data) => data)
	return result;
}

export async function filterData(value){
	try {
		   const data = await fetchData();
		   const result = data.filter(x => {
			return x.toLocaleLowerCase('TR').startsWith(value.value.toLocaleLowerCase('TR'));
		});
		return result;

	} catch (error) {
		return null;
	}
		
}

