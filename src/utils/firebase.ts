import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyBEYwBBxPQLlZL2eI26DaHNlV2YuZj_h2I',
  authDomain: 'amanha-da-crianca.firebaseapp.com',
  databaseURL: 'https://amanha-da-crianca.firebaseio.com',
  projectId: 'amanha-da-crianca',
  storageBucket: 'amanha-da-crianca.appspot.com',
  messagingSenderId: '604731762346',
  appId: '1:604731762346:web:278e9e37c9110c876512d3',
  measurementId: 'G-R54KDE4CLD'
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
