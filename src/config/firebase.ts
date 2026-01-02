// Firebase configuration
// TODO: Replace with actual Firebase config
// Note: Firebase packages need to be installed: npm install firebase
// @ts-ignore - Firebase types will be available after package installation
import { initializeApp, type FirebaseApp } from 'firebase/app'
// @ts-ignore
import { getAuth, type Auth } from 'firebase/auth'
// @ts-ignore
import { getFirestore, type Firestore } from 'firebase/firestore'
// @ts-ignore
import { getStorage, type FirebaseStorage } from 'firebase/storage'

interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

const firebaseConfig: FirebaseConfig = {
  apiKey: (import.meta.env?.VITE_FIREBASE_API_KEY as string) || 'your-api-key',
  authDomain: (import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN as string) || 'your-auth-domain',
  projectId: (import.meta.env?.VITE_FIREBASE_PROJECT_ID as string) || 'your-project-id',
  storageBucket: (import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET as string) || 'your-storage-bucket',
  messagingSenderId: (import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID as string) || 'your-sender-id',
  appId: (import.meta.env?.VITE_FIREBASE_APP_ID as string) || 'your-app-id',
}

// Initialize Firebase
// @ts-ignore - Will work after Firebase package installation
let app: FirebaseApp | null = null
let auth: Auth | null = null
let db: Firestore | null = null
let storage: FirebaseStorage | null = null

try {
  // @ts-ignore
  app = initializeApp(firebaseConfig)
  // @ts-ignore
  auth = getAuth(app)
  // @ts-ignore
  db = getFirestore(app)
  // @ts-ignore
  storage = getStorage(app)
} catch (error) {
  console.warn('Firebase not initialized. Please install firebase package and configure environment variables.')
}

// Export services (will be null until Firebase is properly configured)
export { auth, db, storage }
export default app

