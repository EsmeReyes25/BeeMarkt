import { getProducts, saveProduct, deleteProduct } from './connection.js' // Imports the querys to get, save and delete products

const formularioInsert = document.querySelector('#formularioInsert').content // Gets the form template
const form = formularioInsert.querySelector(".formulario") // Selects the form from the template
const btnAgregar = formularioInsert.querySelector('.btnAdd') // Selects the button to add products



// Carga de tarjetas
const cardTop = document.querySelector('#products-top').content
const contenido = document.querySelector('#contenido-productos')
const fragment = document.createDocumentFragment()
const Buscar = document.getElementById('buscador') // ******PENDIENTE******
let products = []
// let 

//Seccion Comida
const contenido_comida = document.querySelector('#contenido-comida')
const fragment_comida = document.createDocumentFragment()

//Seccion Bebidas
const contenido_bebidas = document.querySelector('#contenido-bebidas')
const fragment_bebidas = document.createDocumentFragment()

//Seccion Papelería
const contenido_papeleria = document.querySelector('#contenido-papeleria')
const fragment_papeleria = document.createDocumentFragment()

// Seccion Accesorios
const contenido_accesorios = document.querySelector('#contenido-accesorios')
const fragment_accesorios = document.createDocumentFragment()

// Seccion para otros
const contenido_otros = document.querySelector('#contenido-otros')
const fragment_otros = document.createDocumentFragment()


// Change color effect on header
window.addEventListener("scroll", function() {
    var header = document.querySelector("header")
    header.classList.toggle("abajo", window.scrollY > 0)
})

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
            cardTop.querySelector('.contactoVendedor').textContent = item.contact
            const clone = cardTop.cloneNode(true)
            fragment_otros.appendChild(clone)
        }
    })
    contenido_otros.appendChild(fragment_otros)
}

const creaCardsAccesorios = () => {
    products.forEach((item) => {
        if (item.category === 'accesorios') {
            console.log(item)
            cardTop.querySelector('img').setAttribute('src', item.image_url)
            cardTop.querySelector('.nombreProducto').textContent = item.product_name
            cardTop.querySelector('.precioProducto').textContent = '$ ' + item.price
            cardTop.querySelector('.categoriaProducto').textContent = item.category
            cardTop.querySelector('.diasVenta').textContent = item.sale_days
            cardTop.querySelector('.horasVenta').textContent = item.sale_hours
            cardTop.querySelector('.nombreVendedor').textContent = item.vendor_name
            cardTop.querySelector('.contactoVendedor').textContent = item.contact
            const clone = cardTop.cloneNode(true)
            fragment_accesorios.appendChild(clone)
        }
    })
    contenido_accesorios.appendChild(fragment_accesorios)
}

const creaCardsPapeleria = () => {
    products.forEach((item) => {
        if (item.category === 'papelería') {
            console.log(item)
            cardTop.querySelector('img').setAttribute('src', item.image_url)
            cardTop.querySelector('.nombreProducto').textContent = item.product_name
            cardTop.querySelector('.precioProducto').textContent = '$ ' + item.price
            cardTop.querySelector('.categoriaProducto').textContent = item.category
            cardTop.querySelector('.diasVenta').textContent = item.sale_days
            cardTop.querySelector('.horasVenta').textContent = item.sale_hours
            cardTop.querySelector('.nombreVendedor').textContent = item.vendor_name
            cardTop.querySelector('.contactoVendedor').textContent = item.contact
            const clone = cardTop.cloneNode(true)
            fragment_papeleria.appendChild(clone)
        }
    })
    contenido_papeleria.appendChild(fragment_papeleria)
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
            cardTop.querySelector('.contactoVendedor').textContent = item.contact
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
            cardTop.querySelector('.contactoVendedor').textContent = item.contact
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
            cardTop.querySelector('.contactoVendedor').textContent = item.contact
            cardTop.querySelector('a').setAttribute('href', item.contact)
            const clone = cardTop.cloneNode(true)
            fragment.appendChild(clone)
        }
    })
    contenido.appendChild(fragment)
}



// The main function prevents any method from being executed if the products in the list have not been loaded yet
const main = () => {
    // Aquí va la llamada a la función para imprimir tarjetas
    creaCards()
    creaCardsComida()
    creaCardsBebidas()
    creaCardsPapeleria()
    creaCardsAccesorios()
    creaCardsOtros()

    // Aquí van las llamadas a las demás funciones y listeners
    btnAgregar.addEventListener('click', e => {
        e.preventDefault(); // Evita que se refresque la página
        insertProduct()
    })

     // Cierra el formulario
     document.querySelector('.modal-backdrop').remove();
     document.querySelector('body').classList.remove('modal-open');
};


// Load the document, fetch the elements from the database and saves it in the 'products' list, then starts the main() function
document.addEventListener('DOMContentLoaded', async (e) => {
    products = await getProducts()
    console.log('productos:', products)
    main()
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

// ---------------- Aquí van las definiciones de las funciones ------------------
// Function to add a product
/*const insertProduct = async () => {
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
}*/const insertProduct = async () => {
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
    };

    // Envía los datos al servidor
    const response = await fetch('https://mi-servidor.com/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    });

    // Espera la respuesta del servidor
    const data = await response.json();

    // Agrega el nuevo producto a la lista de productos
    products.push(data);

    // Imprime todas las tarjetas de nuevo
    creaCards();
};



// Function to delete a product
const deleteProd = async (prod) => {
    await deleteProduct(prod)
}


//