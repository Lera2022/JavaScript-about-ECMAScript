/* https://api.nasa.gov/ */

async function myAsync(url) {
	const response = await fetch(url);
	const json = await response.json();
	return json;
}
const body = document.querySelector('body');
const url = 'https://dog.ceo/api/breeds/image/random';

try {
	const myData = await myAsync(url);
	console.log(myData);
	myData.forEach((el) => {
		body.insertAdjacentHTML(
			'beforeend',
			`
				<figure>
					<img src="${el.message}" />
					<figcaption>${el.status}</figcaption>
				</figure>
  		`
		);
	});
} catch (error) {
	console.log(error.message);
}