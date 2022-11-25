// con cambio en variables
import rapidAPIKey from '../../.env'
import API from '../../.env'


const container = null || document.getElementById('container');
console.log(document.getElementById('container'));
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': rapidAPIKey,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

 async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data
 }

 (async () => {
    try{
        const videos = await fetchData(API);
        console.log(videos);
        
        let view = `
            ${videos.items.map(video =>  `
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description} ">
            <h3>
                ${video.snippet.title}  
            </h3>
            `).slice(0,2).join('') 
        }
        `;
        container.innerHTML = view;
    
    }
    catch(error){
        console.log(error);
        throw new Error('Unable to show videos at this moment');

    }
    
    
})();