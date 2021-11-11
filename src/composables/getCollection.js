import  { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    const unsub = projectFirestore.collection(collection).orderBy('createdAt').onSnapshot((snap) => {
        // problem with sanpshot that the brouser is set one to him 
        console.log("snapshot")
        let results = []
        snap.docs.forEach(doc => {
             doc.data().createdAt && results.push({...doc.data(), id: doc.id})
        })
        documents.value = results
        error.value = null 
    } , err => {
        console.log(err.message)
        documents.value = null
        error.value = err.message
    } )
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })
    return {documents , error}
}

export default getCollection