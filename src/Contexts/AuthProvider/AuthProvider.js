import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email , password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        localStorage.removeItem('review-token');
        return signOut(auth); 
    }

    const googleSignIn =() =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    
    useEffect ( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        userLogin,
        logOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;