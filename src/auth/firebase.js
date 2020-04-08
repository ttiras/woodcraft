import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
  apiKey: "AIzaSyDMKiYJcnqEVWG1owHixKjoUMBz7KnNaRk",
  authDomain: "woodcraft-auth-41aa7.firebaseapp.com",
  databaseURL: "https://woodcraft-auth-41aa7.firebaseio.com",
  projectId: "woodcraft-auth-41aa7",
  storageBucket: "woodcraft-auth-41aa7.appspot.com",
  messagingSenderId: "2398689776",
  appId: "1:2398689776:web:267e88bdb959328f94a535",
  measurementId: "G-0XDJKMWQG5"
};

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	register(name, email, password) {
		return this.auth.createUserWithEmailAndPassword(email, password)
		/*return this.auth.currentUser.updateProfile({
			displayName: name
		})*/
	}

	addQuote(quote) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
			quote
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserQuote() {
		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return quote.get('quote')
	}

	resetPassword(email) {
		return this.auth.sendPasswordResetEmail(email)
	}
}

export default new Firebase()