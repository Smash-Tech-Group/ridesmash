import {useState, useContext, useEffect} from 'react'

import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
// import {db} from "./../app/firebase"
// import backgroundImage from "./../public/images/plane.png"
// import { AuthContext } from "./context/AuthContext";

import { doc, getDoc, setDoc, serverTimestamp, updateDoc, collection  } from "firebase/firestore";

export default function RiderChats() {

  
//   const {user} = useContext(AuthContext)
const [firstname, setFirstname] = useState()
const [surname, setSurname] = useState()
const [email, setEmail] = useState()
const [set, setSex] = useState()
const [dob, setDob] = useState()
const [phoneNumber, setPhoneNumber] = useState()
const [errorEmail, setErrorEmail] = useState()
  

  const [edit, setEdit] = useState(false)

  const onEdit = () => {
    setEdit(true)
  }


//   const [userData, setUserData] = useState([])

    //user information

    // const getUserData = async() => {
    //   const docRef = doc(db, "rider", user.uid);
    //     const docSnap = await getDoc(docRef);
        
    //     if (docSnap.exists()) {
  
    //       setUserData(docSnap.data())
          
    //     } else {
  
    //       console.log("No such document!");
    //     }
    // }
  
    // useEffect(()=>{
    //   getUserData()
    // }, [])

    // console.log('user data: ', userData)

    // console.log('user: ', user)
  

  const onSubmit = async() => {

  
//    try {

//     const collectionRef = collection(db, "Login")
//     const docRef = await addDoc(collectionRef, {...LoginInfo, timeStamp:serverTimestamp()})
//     setLoginInfo({email:"", password:""})
//     setErrorEmail("")
//     setErrorPassword("")
//     alert("Message sent successfully!!!")
    
//    } catch (error) {


    
//    }
   

  } 
    
  return (
    
        <div className='flex flex-col md:w-full w-full px-6 md:py-12'>
            {/* <Image src={backgroundImage} alt="" className="  md:w-1/3 md:h-1/3 w-1/3 h-1/3 "/> */}
            <div className=' flex flex-col md:flex-col gap-6 md:gap-8w-full md:min-h-screen'>
                <div className='flex md:flex-row md:justify-between'>

                    <h1 className='font-extrabold text-[#000000] text-[24px] md:text-[36px] roboto'>My Chats</h1>

                    {/* <Button onClick={onEdit} variant="contained" >Edit</Button> */}
                    

                </div>
                <div className='flex flex-row md:flex-row gap-2 md:w-full justify-between'>

                    
                   

                </div>

            </div>
        </div>
   
  )
}

