import HeadwTitle from "@/components/head";
import NavBar from "@/components/navbar";
import AlertToast from "@/components/toast";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

export default function Register(){

    return(
        <>
            <HeadwTitle title="CEB Meter Reader | Register" />
            <RPage />
        </>
    );
} 


function RPage(){
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [psw,setPsw] = useState('');
    const [isClick,setClick] = useState(false);
    const [isLoading,setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [showAlert,setAlert] = useState(false);

    useEffect(()=>{

        if(isClick){
            setLoading(true);
            fetch(`${process.env.API_HOST}/api/register/`,{
                'method':'post',
                "headers":{
                    "X-Requested-With":"XMLHttpRequest",
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                "body":new URLSearchParams({email:email, password:psw, name:name})
            }).then(response=>{
                response.json().then(data=>{
                    setLoading(false);
                    setData(data);
                    setAlert(true);
                    if(data?.token && data?.status){
                        // const cookie = new ReadyCookies();
                        // cookie.setSession("userID",data.userID);
                        sessionStorage.setItem('token',data.token.token);
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
            <div className={`form-signin ${data &&( !data?.status ? 'outline-err' : 'outline-succ') } w-100 shadow position-absolute top-50 start-50 translate-middle`}>
                <Form>
                    <div className="login-sec-top">
                        <Image
                            className="img-fluid mb-3"
                            width={50}
                            height={50}
                            src="/ceb.png"
                            alt="cebLogo"
                            unoptimized={true}
                        />
                        <h2 className="h3 mb-3 fw-normal">Sign up</h2>
                        <small className={`${!data?.status ? 'text-danger' : 'text-success' } mb-1`} >{data?.message}</small>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control 
                            className={ data && (!data?.status ? 'outline-err' : 'outline-succ') }
                            type="text" 
                            placeholder="Your Name" 
                            required
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                        <small className={`${data?.errors?.name ? 'text-danger' : 'text-success' } mb-1`} >{data?.errors?.name && data?.errors?.name[0]}</small>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            className={ data && (!data?.status ? 'outline-err' : 'outline-succ') }
                            type="email" 
                            placeholder="example@gmail.com" 
                            required
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <small className={`${data?.errors?.email ? 'text-danger' : 'text-success' } mb-1`} >{data?.errors?.email && data?.errors?.email[0]}</small>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            className={ data && (!data?.status ? 'outline-err' : 'outline-succ') }
                            type="password" 
                            placeholder="******" 
                            required
                            onChange={(e)=>{setPsw(e.target.value)}}
                        />
                        <small className={`${data?.errors?.password ? 'text-danger' : 'text-success' } mb-1`} >{data?.errors?.password && data?.errors?.password[0]}</small>
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
            msg={data?.message} 
        />
        </>
    );
}