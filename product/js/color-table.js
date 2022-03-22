function preto(){
	document.getElementById('pic').src = './img/camiseta-preta.png'
}

function branco(){
	document.getElementById('pic').src = './img/camiseta-branca.png'
}

function amarelo(){
	document.getElementById('pic').src = './img/camiseta-amarelo.png'
}

function vermelho(){
	document.getElementById('pic').src = './img/camiseta-vermelho.png'
}

function verde(){
	document.getElementById('pic').src = './img/camiseta-verde.png'
}

// Alterando o nome da class [selected]
var cart = $(".all-c-border")

cart.on("click", function() {
	
	cart.removeClass("selected-color")
	$(this).addClass("selected-color")

})



    