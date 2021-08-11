import { getFirestore } from "./firebase";

export const getProducts = (categoryID = null) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();
    let query = db.collection("items")
    

    if (categoryID) {
      query = query
        .where("categoryID", "==", categoryID)
        .orderBy("price")
    } else {
      query = query
        .orderBy('categoryID')
        .orderBy("price")
    }

    query
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          resolve([]);
          return;
        }

        const products = querySnapshot.docs.map((doc) => ({
          id: doc.categoryID,
          ...doc.data(),
        }));
        console.log(products)

        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();
    const collection = db.collection("items");
    const item = collection.doc(id);
   
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          reject("No se encontró el producto");
          return;
        }

        const product = {
          id: doc.categoryID,
          ...doc.data(),
        };
        console.log(product)
        resolve(product);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export const getHomeProducts = (cat) => {
    return new Promise((resolve, reject) => {
        let products = getFirestore().collection("products").limit(9);
        console.log("cat " + cat);
        if (cat) products = products.where("category_id", "==", `${cat}`);
        products.get().then((response) => {
            if (response.size === 0) {
                reject("No hay registros");
            }

            const data = response.docs.map((doc) => ({
                ...doc.data(),
                idFirebase: doc.id,
            }));
            console.log("get products" + data);
            resolve(data);
        });
    });
};
