import {
    getDataFromDoc
} from "./utils.js"

getManyDocument()
// read one
async function getOneDocument() {

    // promise
    // const res = firebase.firestore().collection('users').doc('DP9lmUoi4WwzGPXj1nlD').get()
    // .then((res) => {
    //     console.log(res);
    // })
    // async await
    const res = await firebase.firestore().collection('users').doc('DP9lmUoi4WwzGPXj1nlD').get()
    const user = res.data()
    user.id = res.id
    // console.log(user);
}
// get many documents
async function getManyDocument() {
    const res = await firebase.firestore().collection('users').get()
    const user = getDataFromDoc(res.docs[0])
    console.log(res.docs[0].data());
}

// add document
// addDocument()

// function addDocument() {
//     const data = {
//         name: 'Hvu',
//         age: 18
//     }
    // firebase.firestore().collection('users').add(data)
// }

// update

// function updateDocument(){
//     const docID = 'DP9lmUoi4WwzGPXj1nlD'
//     const data = {
//         School: 'Université de Montréal',
//         Hobby: 'Coding',
//         number: firebase.firestore.FieldValue.arrayUnion('1900hotlineblink')
//     }
// firebase.firestore().collection('users').doc(docID).update(data)
// }
// updateDocument()

// delete

function deleteDocument() {
    const docID = 'KQpAp7KYkDXy5n4xTmh4'
    firebase.firestore().collection('users').doc(docID).delete()
}

deleteDocument()