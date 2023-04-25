import { getProducts, saveProduct, deleteProduct } from './connection.js' // Imports the querys to get, save and delete products

const formularioInsert = document.querySelector('#formularioInsert').content // Gets the form template
const form = formularioInsert.querySelector(".formulario") // Selects the form from the template
const btnAgregar = formularioInsert.querySelector('.btnAdd') // Selects the button to add products

let products = []

// Load the document, fetch the elements from the database and saves it in the 'products' list, then starts the main() function
document.addEventListener('DOMContentLoaded', async (e) => {
    products = await getProducts()
    console.log('productos:', products)
    main()
})


// The main function prevents any method from being executed if the products in the list have not been loaded yet
const main = () => {
    // Aquí va la llamada a la función para imprimir tarjetas
    // printCards(products)

    // Aquí van las llamadas a las demás funciones y listeners
    btnAgregar.addEventListener('click', e => {
        e.preventDefault(); // Evita que se refresque la página
        insertProduct()
    })

}

// ---------------- Aquí van las definiciones de las funciones ------------------
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