import Image from "next/image";
import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function AlertToast({type,msg}){

    const [show,setShow] = useState(true);
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
            <Toast show={show} onClose={()=>setShow(!show)} bg={alertType}>
                <Toast.Header>
                    <Image 
                        src="/ceb.png" 
                        className="rounded me-2" 
                        alt="a"
                        width={20}
                        height={20}
                    />
                    <strong className="me-auto">Alert</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body>{msg}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}