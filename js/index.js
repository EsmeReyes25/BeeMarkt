import { getProducts, saveProduct, deleteProduct } from './connection.js';
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

    // Aquí van las llamadas a las demás funciones

    // Data to be added to the database
    const sendData = {
        category: 'bebidas',
        contact: 'contacto',
        image_url: 'imagen',
        price: '15',
        product_name: 'agua de sabor',
        sale_days: 'Lunes, Martes, Miercoles, Jueves, Viernes',
        sale_hours: '08:00 - 14:00',
        vendor_name: 'Juan'
    }
    
    //insertProduct(sendData)
    //deleteProd(producto)
}

// ---------------- Aquí van las definiciones de las funciones ------------------
// Function to add a product
const insertProduct = async (data) => {
    await saveProduct(data)
}

// Function to delete a product
const deleteProd = async (prod) => {
    await deleteProduct(prod)
}