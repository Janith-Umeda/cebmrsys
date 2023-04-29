import HeadwTitle from "@/components/head";
import NavBar from "@/components/navbar";
import AlertToast from "@/components/toast";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

export default function Login(){

    const [isLogged,setLogged] = useState(false);
    
    useEffect(()=>{
        if(sessionStorage.getItem('userId')){
            setLogged(true);
            window.location.replace('/readerboard');
        }else{
            setLogged(false);
        }
    },[setLogged])


    return(
        <>
            <HeadwTitle title="CEB Meter Reader | Login" />
            {isLogged ? <AlertToast type='success' msg="Logged in. Redirecting to Reader Board." /> : <LPage />}
        </>
    );
} 


function LPage(){
    const [email,setEmail] = useState('');
    const [psw,setPsw] = useState('');
    const [isClick,setClick] = useState(false);
    const [isLoading,setLoading] = useState(false);
    const [data,setData] = useState();
    const [showAlert,setAlert] = useState(false);

    useEffect(()=>{

        if(isClick){
            setLoading(true);
            fetch('http://api.cebmr/auth/',{
                'method':'post',
                'headers':{'Content-Type':'application/x-www-form-urlencoded'},
                "body":new URLSearchParams({"email":email,"psw":psw})
            }).then(response=>{
                response.json().then(data=>{
                    setLoading(false);
                    setData(data);
                    setAlert(true);
                    if(data?.userID && data?.status){
                        // const cookie = new ReadyCookies();
                        // cookie.setSession("userID",data.userID);
                        sessionStorage.setItem('userId',data.userID);
                        window.location.replace('/readerboard');
                    }
                })
            }).catch((err)=>{
                setLoading(false);
                setAlert(true);
                setData({status:false,msg:'Something Went Wrong!'});
            })
        }

        return ()=>setClick(false);

    },[isClick, email, psw, showAlert])



    return(
        <>
        <main>
            <NavBar />
            <div className="form-signin w-100 shadow position-absolute top-50 start-50 translate-middle">
                <Form validated>
                    <div className="login-sec-top">
                        <Image
                            className="img-fluid mb-3"
                            width={50}
                            height={50}
                            src="/ceb.png"
                            alt="cebLogo"
                            
                        />
                        <h2 className="h3 mb-3 fw-normal">Please Sign in</h2>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="example@gmail.com" 
                            required
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="******" 
                            required
                            onChange={(e)=>{setPsw(e.target.value)}}
                        />
                    </Form.Group>
                    <Button className="w-100" variant="primary" type="button" onClick={()=>setClick(true)}>
                        {isLoading ? (<Spinner size="sm"/>) : ('Login')}
                    </Button>
                </Form>
            </div>
        </main>
        <AlertToast 
            showAlert={showAlert}
            setShow={setAlert}
            type={data?.status ? ('success') : ('error')} 
            msg={data?.msg} 
        />
        </>
    );
}