import  { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase/firebase.confg';
import { collection, doc, getDoc, onSnapshot, query } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';


const AuthContext = createContext();
 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [tasks, setTasks] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    // Local variable block jeno listener data memory leak na hoy
    let unsubscribeTasks = null; 

    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      setFetchError(''); 
      
      // Cleanup previous listener if any active stream exists
      if (unsubscribeTasks) unsubscribeTasks();

      if (currentUser) {
        setUser(currentUser);
        
        try {
          // 1. Fetch User Profile Document 
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setRole(docSnap.data().role); // 🌟 ROLE STATE UPDATED PERFECTLY HERE!
            
          } else {
            console.warn("No document matched in 'users' collection for UID:", currentUser.uid);
            setRole(null);
          }

          // 2. Direct Tasks Snapshot Fetch (Real-time connection stream)
          const tasksRef = collection(db, "task");
          const q = query(tasksRef);

          unsubscribeTasks = onSnapshot(q, (snapshot) => {
            const taskList = snapshot.docs.map(doc => {
              return {
                id: doc.id,
                ...doc.data()
              };
            });
            setTasks(taskList);
           
            
            setLoading(false); // 🌟 Loading status ends successfully
          }, (error) => {
            console.error("Snapshot dynamic error stream catch:", error);
            setFetchError("Database dynamic token parsing failed!");
            setLoading(false);
          });

        } catch (err) {
          console.error("Firestore global validation fetch error:", err);
          setFetchError("Data synchronization crashed: " + err.message);
          setLoading(false);
        }

      } else {
        // Session timeout parameters logic reset
        setUser(null);
        setRole(null);
        setTasks([]);
        setLoading(false);
      }
    });

    // Dynamic clean up return container
    return () => {
      unsubscribeAuth();
      if (unsubscribeTasks) unsubscribeTasks();
    };
  }, []);

  const authInfo = { user, role, tasks, loading, fetchError };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);



// import { onAuthStateChanged } from "firebase/auth";

// import { createContext, useContext, useEffect, useState } from "react";
// import{auth, db } from "../firebase/firebase.confg";
// import {collection, doc,getDoc, onSnapshot, query} from "firebase/firestore";

// const AuthContext = createContext();



// export const AuthProvider = ({ children }) => {
//   const [User, setUser] = useState(null);
//   const [Role,setRole] = useState(null);
//   const [TaskData,setTaskData] = useState(null);
  
//   const [loading, setloading] = useState(true);

 
//   useEffect(() => {

//     const unsubscribeAuth = onAuthStateChanged(auth, async(curentruser) => {

//       setloading(true)
//       if (curentruser) {
//       setUser(curentruser);

//         try {
//           const docRef = doc(db,"users",curentruser.uid);
//           const docSnap= await getDoc(docRef)
//           if (docSnap.exists()) {
//           setRole(docSnap.data().role)
          
//         }

//          const q = query(collection(db, "task"));
//          const unsubscribeTask =  onSnapshot(
//                 q,
//                 (querySnapshot) => {
                  
//                      const taskList = querySnapshot.docs.map((doc) => ({
//                     id: doc.id,
//                     ...doc.data(),
//                   }));
          
//                   setTaskData(taskList);
//                   console.log(TaskData);
//                   setloading(false)
                 
//                 },(error)=>{
//                   setloading(false)

//                 }
               
//               );
          

//           setloading(false)
//         } catch (error) {
//            console.error('');
//           setloading(false)
//         }finally{
//          setloading(false)
//   }
        
//       } else {
//          setUser(null)
//          setRole(null)
//       }




//   //         try {
    
//   //     if (curentruser) {

//   //       setUser(curentruser);

//   //       const docRef = doc(db,"users",curentruser.uid);
//   //       const docSnap= await getDoc(docRef)

//   //       if (docSnap.exists()) {
//   //         setRole(docSnap.data().role)
          
//   //       }

//   //       }else{
//   //         setUser(null)
//   //         setRole(null)
//   //       }
    
//   // } catch (error) {
//   //   console.error('');
//   //   setloading(false)
    
//   // }finally{
//   //   setloading(false)
//   // }
  
      
//     });

//   return () =>{
// unsubscribeAuth()
// if (unsubscribeTask) {
//   unsubscribeTask()
  
// }
//   } ;

//   }, []);

  

  
 
  

//   return <AuthContext.Provider value={{User,Role,loading }}> {!loading && children}</AuthContext.Provider>;
// };


// export const useAuth = () =>  useContext(AuthContext);