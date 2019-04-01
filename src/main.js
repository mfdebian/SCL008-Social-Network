// Firebase initialization
document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();

  // Firestore ref
  const firestoreDatabase = firebase.firestore();

  // Collection ref
  const miPost = firestoreDatabase.collection('posts').doc('primerpost');

  // Explain get
  // miPost.get()
  //   .then(doc => {
  //
  //     const data = doc.data();
  //     document.write(data.body + `<br>`)
  //     document.write(data.createdAt)
  //
  //   })
  miPost.onSnapshot(doc => {

    const data = doc.data();
    console.log(data.body)
    console.log(data.createdAt)

  })

  miPost.update({ body: "Post edita4" })

});


// Routes
import { initRouter } from './route.js';

const init = () => {
  initRouter();
}

window.addEventListener('load', init);
