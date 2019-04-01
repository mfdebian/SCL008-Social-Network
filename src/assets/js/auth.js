// Firebase auth
/*
1- Crearemos dos funciones que simularán el login con Google y la creación de cuenta.
*/

export const loginGoogle = () => {
  console.log('Login con Google OK');
  const provider = new firebase.auth.GoogleAuthProvider();

  // this will return a promise
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      console.log("Hola", user.displayName);
      })
    .catch(err => {
      console.log(err);
    })
}

export const createAccount = () => {
  return 'Cuenta creada OK';
}
