import {useState, useContext, useEffect} from 'react'

import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
// import {db} from "./../app/firebase"
// import backgroundImage from "./../public/images/plane.png"
// import { AuthContext } from "./context/AuthContext";

import { doc, getDoc, setDoc, serverTimestamp, updateDoc, collection  } from "firebase/firestore";

export default function RiderInformation() {

  
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
            <div className=' flex flex-col md:flex-col gap-6 md:gap-8  w-full '>
                <div className='flex md:flex-row md:justify-between'>

                    <h1 className='font-extrabold text-[#000000] text-[24px] md:text-[36px] roboto'>My Personal Information</h1>

                    <Button onClick={onEdit} variant="contained" >Edit</Button>
                    

                </div>

                <div className='flex flex-row md:flex-row gap-2 md:w-full justify-between'>

                    <div className='flex flex-col md:flex-col gap-2 md:gap-3 md:w-3/4 '>

                        <div className='flex md:flex-col flex-col gap-1 md:gap-1'>

                            <TextField 
                                id="outlined-basic" 
                                label="Firstname" 
                                variant="outlined" 
                                value=""
                                disabled = {edit}
                                onChange={e => setFirstname(e.target.value)}
                            />
                            {/* <span className=' text-red-500'>{emailError !== "" && emailError}</span> */}

                        </div>

                        <div className='flex md:flex-col flex-col gap-1 md:gap-2'>

                        <TextField
                            id="outlined-basic" 
                            label="Surname" 
                            variant="outlined" 
                            value=""
                            onChange={e => setSurname(e.target.value)}
                        />
                        {/* <span className=' text-red-500'>{passwordError !== "" && passwordError}</span> */}
                        </div> 
                        <div className='flex flex-col md:flex-col gap-2 md:gap-3 '>

                        <div className='flex md:flex-col flex-col gap-1 md:gap-1'>

                            <TextField 
                                id="outlined-basic" 
                                label="Email" 
                                variant="outlined" 
                                value=""
                                disabled = {true}
                                onChange={e => setEmail(e.target.value)}
                            />
                            {/* <span className=' text-red-500'>{emailError !== "" && emailError}</span> */}

                        </div>

                        <div className='flex md:flex-col flex-col gap-1 md:gap-2'>

                        <TextField 
                            id="outlined-basic" 
                            label="Gender" 
                            variant="outlined" 
                            value=""
                            onChange={e => setSex(e.target.value)}
                        />
                        {/* <span className=' text-red-500'>{passwordError !== "" && passwordError}</span> */}
                        </div> 
                    </div>
                    <div className='flex flex-col md:flex-col gap-2 md:gap-3 '>

                        <div className='flex md:flex-col flex-col gap-1 md:gap-1'>

                            <TextField 
                                id="outlined-basic" 
                                label="Date of Birth" 
                                variant="outlined" 
                                value=""
                                disabled = {true}
                                onChange={e => setDob(e.target.value)}
                            />
                            {/* <span className=' text-red-500'>{emailError !== "" && emailError}</span> */}

                        </div>

                        <div className='flex md:flex-col flex-col gap-1 md:gap-2'>

                        <TextField 
                            id="outlined-basic" 
                            label="Phone Number" 
                            variant="outlined" 
                            value=""
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                        {/* <span className=' text-red-500'>{passwordError !== "" && passwordError}</span> */}
                        </div> 
                    </div>
                   
                    </div>

                   

                </div>

               
                <Button onClick={onSubmit} variant="contained" className="btn_blue w-3/4">Login</Button>
            </div>
        </div>
   
  )
}

