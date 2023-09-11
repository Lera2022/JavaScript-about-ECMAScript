/* https://dog.ceo/dog-api/ */


const body = document.querySelector('body');
const url = 'https://dog.ceo/api/breeds/image/random';


const getData2 = async (url) => {
	const res = await fetch(url);
	const data = await res.json();
	return data;
};

async function addDog() {
	try {
		const data = await getData2(url);
		body.insertAdjacentHTML(
			'beforeend',
			`
			<figure>
			<img src="${data.message}" />
			</figure>
			`
		);
	} catch (error) {
		console.log('Что-то пошло не так');
	}
}

let timerId = setInterval(function () {
	addDog();
}, 3000);
setTimeout(() => {
	clearInterval(timerId);
	addDog();
}, 27000);