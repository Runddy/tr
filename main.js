let translatefrom = document.querySelector('#from');

let translateto = document.querySelector('#to');


/* get the list of languages from server */ 
const get_url = 'https://text-translator2.p.rapidapi.com/getLanguages'

const OPTION ={
    method : 'get',
    headers: {
		'X-RapidAPI-Key': '9ea0fa56d4mshcfc67b9558c4eb1p195c44jsn34cf44a087a7',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	}
};

let soucer_languages;
let target_language ;

fetch(get_url , OPTION)
.then (res => res.json())
    .then(Objeto =>       
         {
            /*esto es un areglo no se que es un arreglo jajaj */ 
            let languages = Objeto.data.languages;  
            console.log ()
    /* -- code para los select*/
languages.forEach(element => {
    
    /* usar esto para probar*/ 
  /*  console.log(element)*/

  translatefrom.innerHTML +=  `<option value="${element.code}"> ${element.name} </option>`
translateto.innerHTML += `<option value="${element.code}"> ${element.name} </option>`

let texttotranslate = inputtranslate.value
translatefrom.addEventListener('click',() =>{
 
    console.log(translatefrom.value);
   soucer_languages = translatefrom.value
})
translateto.addEventListener('click',() =>{
    console.log(translateto.value);
   target_language = translateto.value
})

})
 })
    .catch(error => console.log(error))
/* traduccion  */
let mos = document.querySelector('#outputtranslateto')
let translate = document.querySelector ('#trans');
let inputtranslate = document.querySelector ('#inputtranslatefrom');

translate.addEventListener('click',()=>{
let texttotranslate = inputtranslate.value;


const encodedParams = new URLSearchParams();
encodedParams.append("source_language", soucer_languages);
encodedParams.append("target_language", target_language);
encodedParams.append("text", texttotranslate);

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '9ea0fa56d4mshcfc67b9558c4eb1p195c44jsn34cf44a087a7',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://text-translator2.p.rapidapi.com/translate', options)
	.then(response => response.json())
	.then(response => mos.value = response.data.translatedText )
	.catch(err => console.error(err));
});







