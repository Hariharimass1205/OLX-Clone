import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from '../firebase.jsx'
import React, { createContext, useEffect, useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
const AuthContext = createContext(null)
export const  AuthProvider=({children})=>{

    const [user, setUser] = useState({})

    const signUp = async (userName,email,phone,password) => {
        try {
            let userDetails = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(userDetails.user,{displayName:userName})
            await addDoc(collection(db, "user"),{
                id:userDetails.user.uid,
                userName,
                email,
                phone,
            })
            return {success:true};
        } catch (error) {
            console.log(error);
            return { success: false };
        }
      };

        const logIn = async (email, password) => {
            try {
              await signInWithEmailAndPassword  (auth, email, password);
              return { success: true };
            } catch (error) {
              console.log(error);
              return { success: false };
            }
          };

          const logOut = async () => {
    
            await signOut(auth);
            
          };

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
              setUser(currentUser);
            });
        
            return () => {
              unsubscribe();
            };
          }, []);
        
          return (
            <AuthContext.Provider value={{ user, signUp, logOut, logIn }}>
              {children}
            </AuthContext.Provider>
          );
        }


export default AuthContext
