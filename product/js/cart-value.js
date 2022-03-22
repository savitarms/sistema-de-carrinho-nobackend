const informacao = []

const produto = {  
    image: "",
    name: "", 
    description: "",
    price: null,
    quantity: null
} 

informacao.push(produto)

// Armazenando no sessionStorage e levando para a pagina de carrinho
function pagina() {
// Pegando todos os valores dos produtos
    const tamanhoDesc = window.document.querySelector('.selected-size').title
    const corDesc = window.document.querySelector('.selected-color').title

    const image_produto = window.document.getElementById('pic').src
    const name_produto = window.document.getElementById('titlepdt').innerText
    const description_produto = 'Cor: ' + corDesc + ' | ' + tamanhoDesc
    const price_produto = window.document.getElementById('price').title
    const quantity_produto = window.document.getElementById('quantity').value

// Chamando os valores para a lista de objetos
    produto.image = image_produto
    produto.name = name_produto
    produto.description = description_produto
    produto.price = price_produto
    produto.quantity = quantity_produto

    sessionStorage.setItem('informacao', JSON.stringify(informacao))
    window.location.assign('../carrinho/cart.html')
}

function openPage() {
    document.getElementById('pagecart').addEventListener('click', function(){
    pagina()
    })
}

window.addEventListener('load', openPage)