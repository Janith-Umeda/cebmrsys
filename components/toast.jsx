import Image from "next/image";
import { useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function AlertToast({showAlert,setShow,type,msg}){

    useEffect(()=>{
        if(showAlert){
            const d = setInterval(()=>{
                setShow(false);
                clearInterval(d);
            },5000)
        }
    })

    let alertType = '';

    switch(type){
        case 'success':
            alertType = 'success';
            break;
        case 'error':
            alertType = 'danger';
            break;
        default:
            break;
    }

    return(
        <ToastContainer position="top-end" className="p-3 mt-5">
            <Toast show={showAlert} onClose={()=>setShow(!showAlert)} bg={alertType}>
                <Toast.Header>
                    <Image 
                        src="/ceb.png" 
                        className="rounded me-2" 
                        alt="a"
                        width={20}
                        height={20}
                        unoptimized
                    />
                    <strong className="me-auto">Alert</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body><span className="text-white">{msg}</span></Toast.Body>
            </Toast>
        </ToastContainer>
    );
}