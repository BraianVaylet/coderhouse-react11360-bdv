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
  console.error("firebase-error", error)
}

const db = firebase.firestore()

// * MAP FUNC
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

// MAP STORAGE
const mapStorageFromFirebaseToStorage = (doc) => {
  const data = doc.data()
  const id = doc.id
  const createdAt =
    data.createdAt || firebase.firestore.Timestamp.fromDate(new Date())
  return { id, ...data, createdAt: +createdAt.toDate() }
}

// MAP MESSAGES
const mapMessagesFromFirebaseToPurchase = (doc) => {
  const data = doc.data()
  const id = doc.id
  const createdAt =
    data.createdAt || firebase.firestore.Timestamp.fromDate(new Date())
  return { id, ...data, createdAt: +createdAt.toDate() }
}

// * AUTHENTICATION FUNC
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

// * ADD FUNC
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

// ADD PURCHASES
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

// SAVE STORAGE IN DB
export const addStorage = async ({
  email,
  favourites,
  notifications,
  cart,
}) => {
  try {
    const docs = await fetchStorageByUser(email)
    if (docs.length === 0) {
      return db
        .collection("storage")
        .add({ email, favourites, notifications, cart })
    } else if (docs.length === 1) {
      return db
        .collection("storage")
        .doc(docs[0].id)
        .update({ favourites, notifications, cart })
    } else {
      return new Error(
        "hay mas de un registro en storage para este usuario, revisar!"
      )
    }
  } catch (error) {
    console.error("error", error)
  }
}

// ADD MESSAGE WORK WITH US
export const addMessageWorkWithUs = ({ email, name, phone, linkedin }) => {
  return db.collection("messages").add({
    email,
    name,
    phone,
    linkedin,
    viewed: false,
    type: "workWithUs",
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  })
}

// ADD MESSAGE WORK WITH US
export const addMessageHelp = ({ email, name, phone, comment }) => {
  return db.collection("messages").add({
    email,
    name,
    phone,
    comment,
    viewed: false,
    type: "help",
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  })
}

// * EDIT FUNC
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

// CHANGE ACTIVE PRODUCT BY ID
export const changeIsActiveProductByID = async (id, active) => {
  try {
    return await db.collection("products").doc(id).update({ isActive: active })
  } catch (error) {
    console.error("error", error)
  }
}

// * GET FUNC
// GET ALL PRODUCTS
export const fetchAllProducts = async () => {
  try {
    const doc = await db.collection("products").get()
    return doc.docs.map(mapProductFromFirebaseToProduct)
  } catch (error) {
    console.error("error", error)
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
    console.error("error", error)
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
    console.error("error", error)
  }
}

// GET PRODUCTS BY ID
export const fetchProductsByID = async (id) => {
  try {
    const doc = await db.collection("products").doc(id).get()
    if (doc.exists) {
      return mapProductFromFirebaseToProduct(doc)
    } else {
      console.error("error", "Error, el producto no existe")
      return {}
    }
  } catch (error) {
    console.error("error", error)
  }
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
    console.error("error", error)
  }
}

// GET ALL PURCHASES BY USER EMAIL
export const fetchAllPurchasesByUser = async (email) => {
  try {
    const doc = await db
      .collection("purchases")
      .where("email", "==", email)
      .get()
    return doc.docs.map(mapPurchaseFromFirebaseToPurchase)
  } catch (error) {
    console.error("error", error)
  }
}

// GET STORAGE BY USER
export const fetchStorageByUser = async (email) => {
  try {
    const doc = await db.collection("storage").where("email", "==", email).get()
    return doc.docs.map(mapStorageFromFirebaseToStorage)
  } catch (error) {
    console.error("error", error)
  }
}

// GET ALL MESSAGES
export const fetchAllMessages = async () => {
  try {
    const doc = await db
      .collection("messages")
      .orderBy("createdAt", "asc")
      .get()
    return doc.docs.map(mapMessagesFromFirebaseToPurchase)
  } catch (error) {
    console.error("error", error)
  }
}

// * DELETE FUNC
// DELETE PRODUCT BY ID
export const deleteProductsByID = async (id) => {
  try {
    return await db.collection("products").doc(id).delete()
  } catch (error) {
    console.error("error", error)
  }
}

// DELETE MESSAGE BY ID
export const deleteMessagesByID = async (id) => {
  try {
    return await db.collection("messages").doc(id).delete()
  } catch (error) {
    console.error("error", error)
  }
}
