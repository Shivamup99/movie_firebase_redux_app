export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
		'X-RapidAPI-Key': '26c526f6cemsh6915bd3313d3463p151a35jsnb94141fe0386'
	}
};

fetch('https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F120&output_language=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));