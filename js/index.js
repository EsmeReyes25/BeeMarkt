import { getProducts, saveProduct, deleteProduct } from './connection.js' // Imports the querys to get, save and delete products

// Form to insert a new product 
const form = document.querySelector(".formulario") // Selects the form
const btnAgregar = document.querySelector('.btnAdd') // Selects the button to add products (there needs to add an id to the button in the principal.html)

// Carga de tarjetas
const cardTop = document.querySelector('#products-top').content
const contenido = document.querySelector('#contenido-productos')
const fragment = document.createDocumentFragment()
const Buscar = document.getElementById('buscador') 
let products = []

//Seccion Comida
const contenido_comida = document.querySelector('#contenido-comida')
const fragment_comida = document.createDocumentFragment()

//Seccion Bebidas
const contenido_bebidas = document.querySelector('#contenido-bebidas')
const fragment_bebidas = document.createDocumentFragment()

// Seccion para otros
const contenido_otros = document.querySelector('#contenido-otros')
const fragment_otros = document.createDocumentFragment()


// Load the document, fetch the elements from the database and saves it in the 'products' list, then starts the main() function
document.addEventListener('DOMContentLoaded', e => {
    //products = await getProducts()
    //console.log('productos:', products)
    //main()
    loadProducts()
})

// The main function prevents any method from being executed if the products in the list have not been loaded yet
const main = () => {
    // Aquí va la llamada a la función para imprimir tarjetas
    creaCards()
    creaCardsComida()
    creaCardsBebidas()
    creaCardsOtros()

    // Aquí van las llamadas a las demás funciones y listeners que necesitan de productos[]
    btnAgregar.addEventListener('click', e => {
        e.preventDefault(); // Evita que se refresque la página
        insertProduct()
        // Aquí se debe limpiar el contenido de la pantalla
        loadProducts()
    })
}

const loadProducts = async () => {
    products = await getProducts()
    console.log('productos:', products)
    main()
}

// ---------------- Aquí van las definiciones de las funciones (y listeners que no dependen de productos[]) ------------------
// Funciones para mostrar las tarjetas
const creaCardsOtros = () => {
    products.forEach((item) => {
        if (item.category === 'otros') {
            console.log(item)
            cardTop.querySelector('img').setAttribute('src', item.image_url)
            cardTop.querySelector('.nombreProducto').textContent = item.product_name
            cardTop.querySelector('.precioProducto').textContent = '$ ' + item.price
            cardTop.querySelector('.categoriaProducto').textContent = item.category
            cardTop.querySelector('.diasVenta').textContent = item.sale_days
            cardTop.querySelector('.horasVenta').textContent = item.sale_hours
            cardTop.querySelector('.nombreVendedor').textContent = item.vendor_name
            cardTop.querySelector('.contactoVendedor').setAttribute('href', item.contact)
            const clone = cardTop.cloneNode(true)
            fragment_otros.appendChild(clone)
        }
    })
    contenido_otros.appendChild(fragment_otros)
}

const creaCardsBebidas = () => {
    products.forEach((item) => {
        if (item.category === 'bebidas') {
            console.log(item)
            cardTop.querySelector('img').setAttribute('src', item.image_url)
            cardTop.querySelector('.nombreProducto').textContent = item.product_name
            cardTop.querySelector('.precioProducto').textContent = '$ ' + item.price
            cardTop.querySelector('.categoriaProducto').textContent = item.category
            cardTop.querySelector('.diasVenta').textContent = item.sale_days
            cardTop.querySelector('.horasVenta').textContent = item.sale_hours
            cardTop.querySelector('.nombreVendedor').textContent = item.vendor_name
            cardTop.querySelector('.contactoVendedor').setAttribute('href', item.contact)
            const clone = cardTop.cloneNode(true)
            fragment_bebidas.appendChild(clone)
        }
    })
    contenido_bebidas.appendChild(fragment_bebidas)
}

const creaCardsComida = () => {
    products.forEach((item) => {
        if (item.category === 'comida') {
            console.log(item)
            cardTop.querySelector('img').setAttribute('src', item.image_url)
            cardTop.querySelector('.nombreProducto').textContent = item.product_name
            cardTop.querySelector('.precioProducto').textContent = '$ ' + item.price
            cardTop.querySelector('.categoriaProducto').textContent = item.category
            cardTop.querySelector('.diasVenta').textContent = item.sale_days
            cardTop.querySelector('.horasVenta').textContent = item.sale_hours
            cardTop.querySelector('.nombreVendedor').textContent = item.vendor_name
            cardTop.querySelector('.contactoVendedor').setAttribute('href', item.contact)
            const clone = cardTop.cloneNode(true)
            fragment_comida.appendChild(clone)
        }
    })
    contenido_comida.appendChild(fragment_comida)
}

const creaCards = () => {
    products.forEach((item) => {
        if (item.category === 'dulces') {
            console.log(item)
            cardTop.querySelector('img').setAttribute('src', item.image_url)
            cardTop.querySelector('.nombreProducto').textContent = item.product_name
            cardTop.querySelector('.precioProducto').textContent = '$ ' + item.price
            cardTop.querySelector('.categoriaProducto').textContent = item.category
            cardTop.querySelector('.diasVenta').textContent = item.sale_days
            cardTop.querySelector('.horasVenta').textContent = item.sale_hours
            cardTop.querySelector('.nombreVendedor').textContent = item.vendor_name
            cardTop.querySelector('.contactoVendedor').setAttribute('href', item.contact)
            const clone = cardTop.cloneNode(true)
            fragment.appendChild(clone)
        }
    })
    contenido.appendChild(fragment)
}

// Change color effect on header
window.addEventListener("scroll", function() {
    var header = document.querySelector("header")
    header.classList.toggle("abajo", window.scrollY > 0)
})

// Funciones para el menu de carrusel
function App() { }
window.onload = function (event) {
    var app = new App()
    window.app = app
}

App.prototype.processingButton = function (event) {
    let leftPosition = 0
    const btn = event.currentTarget
    const carruselList = event.currentTarget.parentNode
    const track = event.currentTarget.parentNode.querySelector('.track')
    const carrusel = track.querySelectorAll('.carrusel')
    const carruselWidth = carrusel[0].offsetWidth
    const trackWidth = track.offsetWidth
    const listWidth = carruselList.offsetWidth
    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1)
    btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track)
}

// Funcion que muestra las tarjetas
/*
const creaCards = (productos) => {
    contenido.innerHTML = ""
    productos.forEach((item) => {
        //console.log(item)
        cardTop.querySelector('img').setAttribute('src', item.image_url)
        cardTop.querySelector('.nombreProducto').textContent = item.product_name
        cardTop.querySelector('.precioProducto').textContent = '$ ' + item.price
        cardTop.querySelector('.categoriaProducto').textContent = 'Categoría: ' + item.category
        cardTop.querySelector('.diasVenta').textContent = 'Días de venta: ' + item.sale_days
        cardTop.querySelector('.horasVenta').textContent = 'Horas de venta: ' + item.sale_hours
        cardTop.querySelector('.nombreVendedor').textContent = 'Nombre del vendedor: ' + item.vendor_name
        
        cardTop.querySelector('.contactoVendedor').textContent = item.contact
        //cardTop.querySelector('.contactoVendedor').setAttribute('src', item.contact)
        /*
        var miHipervinculo = document.getElementById("miHipervinculo");
        miHipervinculo.href = "https://www.ejemplo.com"; 

        
        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}
*/



let prevAction = (leftPosition, carruselWidth, track) => {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`
    }
}

let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`
    }
}

// Function to add a product
const insertProduct = async () => {
    // Data to be added to the database
    const sendData = {
        category: form.categ.value,
        contact: form.contacto.value,
        image_url: form.imgUrl.value,
        price: form.precio.value,
        product_name: form.productName.value,
        sale_days: form.dias.value,
        sale_hours: form.horas.value,
        vendor_name: form.vendorName.value
    }
    await saveProduct(sendData)
    form.reset()
}


// Function to delete a product
const deleteProd = async (prod) => {
    await deleteProduct(prod)
}
