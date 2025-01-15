import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { AUTH_ERRORS } from '../lib/errors';

export async function signUp(email: string, password: string, name: string, userType: 'influencer' | 'business') {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName: name });
    
    // Create initial user document
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
      userType,
      createdAt: new Date().toISOString(),
      hasCompletedOnboarding: false // Set initially to false
    });

    return { user, userType, error: null };
  } catch (err: any) {
    const errorCode = err.code as keyof typeof AUTH_ERRORS;
    return { user: null, userType: null, error: AUTH_ERRORS[errorCode] || AUTH_ERRORS.default };
  }
}

export async function signIn(email: string, password: string, attemptedUserType: 'influencer' | 'business') {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    
    // Get user type from Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.data();
    const storedUserType = userData?.userType;

    // Validate user type
    if (storedUserType !== attemptedUserType) {
      await signOut(auth);
      return { 
        user: null, 
        userType: null, 
        error: `This account is registered as a ${storedUserType}. Please sign in as a ${storedUserType}.`
      };
    }

    return { 
      user, 
      userType: storedUserType, 
      hasCompletedOnboarding: userData?.hasCompletedOnboarding,
      error: null 
    };
  } catch (err: any) {
    const errorCode = err.code as keyof typeof AUTH_ERRORS;
    return { user: null, userType: null, error: AUTH_ERRORS[errorCode] || AUTH_ERRORS.default };
  }
}