
// let url: 'https://ip-geolocation-and-threat-detection.p.rapidapi.com/54.85.132.205',

const OPTIONS = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': '32b8011173msh17ccd67191b47dep10e726jsn4070fdd998ff',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
  };

// método que le pasaremos la ip
// fecth devuelve una promesa, hay que resolverla y transformar la respuesta a json
 const fecthIpInfo =  ip => {
    return  fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
    .then(resp => resp.json())
    .catch(error => console.log(error))
}

// TRUQUILLO, a la función le pasas el selector 
const $ = selector => document.querySelector(selector);

// el dólar para saber que es un elemento del DOM
const $formulario = $("#formulario");
const $input = $("#input");
const $submit = $("#submit");
const $resultado = document.querySelector("#resultado");

// prevent. para evitar que se refresque la página, ya que el evento submit hace una acción POST
$formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // MIRAR ESTO
    const {value} = $input;

    if (!value) return;

    $submit.setAttribute('disabled', '');
    $submit.setAttribute('aria-busy', 'true');

    // obtenemos toda la info de la IP
    const ipInfo = await fecthIpInfo(value);

    if (ipInfo) {
        $resultado.innerHTML = JSON.stringify(ipInfo, null, 2)
    }
    $submit.removeAttribute('disabled');
    $submit.removeAttribute('aria-busy');

});

