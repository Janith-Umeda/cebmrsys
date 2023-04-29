import HeadwTitle from "@/components/head";
import NavBar from "@/components/navbar";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function EntryField(){

    const [isValidAcc,setValidAcc] = useState(true);

    return(
        <Card bg="light" className="mt-4">
            <Card.Body className="row">
                <div className="col-6" >
                    <input 
                        type="number" 
                        className={`form-control  ${!isValidAcc && 'anum_not_valid' }` }
                        placeholder="Account Number" 
                    />
                    <div hidden={isValidAcc ? true : false } className="form-text text-danger">Wrong Account Number</div>
                </div>
                <div className="col-3" >
                    <input 
                        type="date" 
                        className="form-control"
                    />
                </div>
                <div className="col-3">
                    <input type="number" className="form-control" />
                </div>
            </Card.Body>
        </Card>
    )
}

function RBoard(){
    const [isLogout,setLogout] = useState(false);
    const [userData,setUserData] = useState(null);

    // fetch current logged user's data
    useEffect(()=>{
        const uid = sessionStorage.getItem('userId');
        if(!userData){
            fetch(`http://api.cebmr/?method=me&userid=${uid}`,{
                'method':'get'
            }).then(res=>{
                res.json().then(data=>{
                    setUserData(data);
                    console.log(data);
                })  
            }).catch(err=>{})
        }
        return
    })

    useEffect(()=>{
        if(isLogout){
            sessionStorage.removeItem('userId');
            window.location.replace('./login');
        }
        return ()=>setLogout(false);
    })


    return (
        <>
        <NavBar logoutTrigger={()=>setLogout(true)} userName={userData?.data.username} />
        <main className="container">
            <EntryField />
        </main>
        </>
    )
}

export default function ReaderBoard(){

    const [isLogged,setLogged] = useState(false);
    
    useEffect(()=>{
        if(!sessionStorage.getItem('userId')){
            window.location.replace('/login');
        }else{
            setLogged(true);
        }
    },[setLogged])

    return(
        <>
            <HeadwTitle title="CEB Meter Reader | ReaderBoard"/>
            {isLogged && <RBoard />}
        </>
    );
}