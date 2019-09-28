import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDe9KzIzoEQB-7HpiS6Ieo5SL3yQvbs6NY",
    authDomain: "clothes-db-3697e.firebaseapp.com",
    databaseURL: "https://clothes-db-3697e.firebaseio.com",
    projectId: "clothes-db-3697e",
    storageBucket: "",
    messagingSenderId: "18253281682",
    appId: "1:18253281682:web:1f78dfd1a20be9bf"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
        if(!userAuth) return; 
        const userRef = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userRef.get()
        if(!snapShot.exists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('error creating user', error.message);
            }
        }

        return userRef;
    }

  export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
      const collectionRef = firestore.collection(collectionKey);
      console.log(collectionRef)

      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj)
      });
      return await batch.commit()
  };

  export const convertCollectionsSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map( doc => {
          const { title, items } = doc.data();
          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          }
      });

      return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;