import { collection, addDoc } from 'firebase/firestore';
import db from './firebase-config.js';
import products from '../products.js';

const ItemCollectionRef = collection(db, 'items');

const promises = products.map (product => addDoc(ItemCollectionRef, product))

Promise.all(promises).then(() => {
    console.log('done')
    process.exit(0)
});