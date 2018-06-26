function handleSubmit(e){
	e.preventDefault();
	var word = document.getElementById('word');
	var lang = document.getElementById('lang');

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			document.getElementById('res').innerHTML = xhr.response;
		}
	};

	xhr.open('GET', 'http://localhost:8000/?word=' + word.value + '&lang=' + lang.value, true);
	xhr.send();
}

var form = document.getElementById('form');

form.addEventListener("submit", handleSubmit, true);
