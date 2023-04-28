import HeadwTitle from "@/components/head";
import NavBar from "@/components/navbar";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function EntryField(){
    return(
        <Card bg="light" className="mt-4">
            <Card.Body className="row">
                <div className="col-6 bg-danger" >
                    input
                </div>
                <div className="col-3 bg-warning" >sd</div>
                <div className="col-3 bg-success">se</div>
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
        <main className="container">
            <NavBar logoutTrigger={()=>setLogout(true)} userName={userData?.data.username} />
            <EntryField />
        </main>
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