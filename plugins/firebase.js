import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyB9waR25eiehR3SnxM2ogRTiqEBi2_j5f4",
      authDomain: "twitterpj-adbcf.firebaseapp.com",
      projectId: "twitterpj-adbcf",
      storageBucket: "twitterpj-adbcf.appspot.com",
      messagingSenderId: "1015983968962",
      appId: "1:1015983968962:web:c708ea20fbbe328768e15b",
      measurementId: "G-0R928PBZHF"
    }
  )
}

export default firebase