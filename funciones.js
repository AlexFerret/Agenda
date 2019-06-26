Number.isNaN(0)
Date.prototype.toString = function(){ return this.getDate()+"/"+(this.getMonth()+1)+"/"+this.getFullYear(); } 
var miFecha = new Date();
window.addEventListener('load',cargar, true);

localStorage.setItem("costo", 11);
costo = localStorage.getItem("costo");


function recarga(){
	fondo = document.getElementById("fondo1");
	ventana = document.getElementById("C3");
	fondo.style.visibility = "visible";
	ventana.style.visibility ="visible";
}

function cancelar(){
	fondo = document.getElementById("fondo1");
	ventana = document.getElementById("C3");
	fondo.style.visibility = "hidden";
	ventana.style.visibility ="hidden";
}

function guardar(){
	input = document.getElementById("intro");
	pantalla = document.getElementById("pantalla");
	ventana = document.getElementById("C3");
	fondo = document.getElementById("fondo1");

	localStorage.setItem("recarga", parseInt(input.value));
	total = parseInt(pantalla.value) + parseInt(input.value);
	localStorage.setItem("total", total);

	pantalla.value = localStorage.getItem("total");
	input.value = "";

	monto = localStorage.getItem("recarga");
	ficha = document.getElementById('fichas');
	ficha.innerHTML += "<div class='fichas'><div class='ban0'>"+ miFecha +"</div><div class='ban1'>Se realizo una recarga</div><div class='ban2'>-$" + monto + ".00</div>";
	localStorage.setItem('fichas',ficha.innerHTML);

	fondo.style.visibility = "hidden";
	ventana.style.visibility ="hidden";
}

function cargar(){
	pantalla = document.getElementById("pantalla");
	ficha = document.getElementById('fichas');
	pantalla.value = isNaN(parseInt(pantalla.value)) ? 0 : parseInt(pantalla.value);
		if (localStorage.getItem("total")) {
			pantalla.value = localStorage.getItem("total");
		} else  {
			localStorage.setItem("saldo", parseInt(pantalla.value));
		}

		if (localStorage.getItem('fichas')) {
			ficha.innerHTML = localStorage.getItem('fichas');
		}
	}

function viaje(){
	pantalla = document.getElementById("pantalla");
	if (pantalla.value < 11){
		alert("Saldo insuficiente");
	} else {
	total = localStorage.getItem("total");
	ficha = document.getElementById('fichas');
	ficha.innerHTML += "<div class='fichas'><div class='ban0'>"+ miFecha +"</div><div class='ban1'>Se realizo un viaje</div><div class='ban2'>-$" + costo + ".00</div>";
	localStorage.setItem('fichas',ficha.innerHTML);
	total = total - costo;
	localStorage.setItem("total", total);
	pantalla.value = localStorage.getItem("total");
	}
}