import {useEffect, useState} from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)       
        
    }

    // logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=> setUser({}))
        .finally(() => setIsLoading(false))
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            } else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])    

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        isLoading
    }

}

export default useFirebase;