// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js"
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLuzceNSSoL0engG78Y0F5z_k9SqIgXf8",
  authDomain: "beemarkt-b43ad.firebaseapp.com",
  projectId: "beemarkt-b43ad",
  storageBucket: "beemarkt-b43ad.appspot.com",
  messagingSenderId: "632203752889",
  appId: "1:632203752889:web:3f483d91c3c3e2873b3268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore()
const productos = collection(database, "productos")

// Define the routes using the corresponding HTTP methods
// GET
const getProducts = async () => {
    const array = await getDocs(productos)
    try {
        let returnData = []
        array.forEach(product => {
            const productData = product.data()
            const productId = product.id
            const productWithId = { ...productData, id: productId }
            returnData.push(productWithId)
        })
        return returnData
    } catch (err) {
        console.error("Error! Couldn't get the elements from the database:", err)
    }
}

// POST
const saveProduct = async (sendData) => {
    try{
        addDoc(productos, sendData)
        console.log("Product saved successfully:", sendData.product_name)
    } catch(err){
        console.error("Error! Couldn't save the product:", err)
    }
}

// DELETE
const deleteProduct = async (prod) => {
    try {
        await deleteDoc(doc(productos, prod.id));
        console.log("Product deleted: ", prod.product_name);
    } catch (error) {
        console.error("Error! Couldn't delete the product: ", error);
    }
  }

export { getProducts, saveProduct, deleteProduct }