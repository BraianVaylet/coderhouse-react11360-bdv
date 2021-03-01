import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB4BwDPJQiCJEPQkGLNBGVF5hmvsdqEXus",
  authDomain: "aquilastore-5e5b4.firebaseapp.com",
  projectId: "aquilastore-5e5b4",
  storageBucket: "aquilastore-5e5b4.appspot.com",
  messagingSenderId: "541611517575",
  appId: "1:541611517575:web:a4607cc5e3b2969536ba22",
  measurementId: "G-6M9DZJMWYY",
}

try {
  !firebase.apps.length && firebase.initializeApp(firebaseConfig)
} catch (error) {
  console.log("firebase-error", error)
}

const db = firebase.firestore()

// MAP USER
const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  }
}

// MAP PRODUCT
const mapProductFromFirebaseToProduct = (doc) => {
  const data = doc.data()
  const id = doc.id
  const createdAt =
    data.createdAt || firebase.firestore.Timestamp.fromDate(new Date())
  return { id, ...data, createdAt: +createdAt.toDate() }
}

// MAP PURCHASES
const mapPurchaseFromFirebaseToPurchase = (doc) => {
  const data = doc.data()
  const id = doc.id
  const createdAt =
    data.createdAt || firebase.firestore.Timestamp.fromDate(new Date())
  return { id, ...data, createdAt: +createdAt.toDate() }
}

// AUTH STATE CHANGE
export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}

// GOOGLE login
export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(googleProvider)
}

// FACEBOOK login
export const loginWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider()
  return firebase.auth().signInWithPopup(facebookProvider)
}

// SIGNOUT
export const onAuthSignOut = () => firebase.auth().signOut()

// ADD PRODUCT
export const addProduct = ({
  title,
  description,
  pictureName,
  pictureUrl,
  price,
  stock,
  brand,
  model,
  category,
  calification,
  gender,
  sizes,
  colors,
}) => {
  return db.collection("products").add({
    title,
    description,
    pictureName,
    pictureUrl,
    price,
    stock,
    brand,
    model,
    category,
    calification,
    gender,
    sizes,
    colors,
    isActive: true,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  })
}

// EDIT PRODUCT
export const editProduct = (
  id,
  {
    title,
    description,
    pictureName,
    pictureUrl,
    price,
    stock,
    brand,
    model,
    category,
    calification,
    gender,
    sizes,
    colors,
  }
) => {
  return db
    .collection("products")
    .doc(id)
    .update({
      title,
      description,
      pictureName,
      pictureUrl,
      price,
      stock,
      brand,
      model,
      category,
      calification,
      gender,
      sizes,
      colors,
      isActive: true,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    })
}

// GET ALL PRODUCTS
export const fetchAllProducts = async () => {
  try {
    const doc = await db.collection("products").get()
    return doc.docs.map(mapProductFromFirebaseToProduct)
  } catch (error) {
    console.log("error", error)
  }
}

// GET PRODUCTS (IsActive === true)
export const fetchProducts = async () => {
  try {
    const doc = await db
      .collection("products")
      .where("isActive", "==", true)
      .get()
    return doc.docs.map(mapProductFromFirebaseToProduct)
  } catch (error) {
    console.log("error", error)
  }
}

// GET PRODUCTS BY CATEGORY (IsActive === true)
export const fetchProductsByCategory = async (category) => {
  try {
    const doc = await db
      .collection("products")
      .where("category", "==", category)
      .where("isActive", "==", true)
      .get()
    return doc.docs.map(mapProductFromFirebaseToProduct)
  } catch (error) {
    console.log("error", error)
  }
}

// GET PRODUCTS BY ID
export const fetchProductsByID = async (id) => {
  try {
    const doc = await db.collection("products").doc(id).get()
    if (doc.exists) {
      return mapProductFromFirebaseToProduct(doc)
    } else {
      console.log("error", "Error, el producto no existe")
      return {}
    }
  } catch (error) {
    console.log("error", error)
  }
}

// DELETE PRODUCT BY ID
export const deleteProductsByID = async (id) => {
  try {
    return await db.collection("products").doc(id).delete()
  } catch (error) {
    console.log("error", error)
  }
}

// CHANGE ACTIVE PRODUCT BY ID
export const changeIsActiveProductByID = async (id, active) => {
  try {
    return await db.collection("products").doc(id).update({ isActive: active })
  } catch (error) {
    console.log("error", error)
  }
}

export const addPurchase = ({
  email,
  fullname,
  dni,
  phone,
  address,
  addressNum,
  addressInfo,
  products,
  total,
  itsPaid = false,
  createdAt = firebase.firestore.Timestamp.fromDate(new Date()),
  status = "init",
}) => {
  products.forEach(async (product) => {
    const productDb = await fetchProductsByID(product.id)
    if (productDb.stock > 0 && productDb.stock >= product.count) {
      // actualizo stock
      await db
        .collection("products")
        .doc(product.id)
        .update({ stock: productDb.stock - product.count })
    } else {
      return new Error("No hay Stock")
    }
  })
  // creo una compra
  return db.collection("purchases").add({
    email,
    fullname,
    dni,
    phone,
    address,
    addressNum,
    addressInfo,
    products,
    total,
    itsPaid,
    createdAt,
    status,
  })
}

// GET ALL PURCHASES
export const fetchAllPurchases = async () => {
  try {
    const doc = await db
      .collection("purchases")
      .orderBy("createdAt", "asc")
      .get()
    return doc.docs.map(mapPurchaseFromFirebaseToPurchase)
  } catch (error) {
    console.log("error", error)
  }
}

// GET ALL PURCHASES BY USER EMAIL
export const fetchAllPurchasesByUser = async (email) => {
  try {
    const doc = await db
      .collection("purchases")
      .where("email", "==", email)
      .orderBy("createdAt", "asc")
      .get()
    return doc.docs.map(mapPurchaseFromFirebaseToPurchase)
  } catch (error) {
    console.log("error", error)
  }
}
