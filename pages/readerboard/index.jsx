import BillCard from "@/components/billcard";
import HeadwTitle from "@/components/head";
import NavBar from "@/components/navbar";
import AlertToast from "@/components/toast";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function EntryField({setDate,setUnits,setAccData}){
    const [accNo,setAccNo] = useState([false,0]);
    const [isValidAcc,setValidAcc] = useState(true);

    useEffect(()=>{
        if(accNo[0]){
            fetch(`http://api.cebmr/checkAccount?accno=${accNo[1]}`,{
                method:'get'
            }).then(res=>{
                res.json().then(data=>{
                    if(data.status){
                        setAccData(data.accData);
                        setValidAcc(true);
                    }else{
                        setValidAcc(false);
                    }
                })
            })
        }
        return ()=>{accNo[0] = false}
    })

    function getToday(){
        const obj = new Date();
        let d = obj.getDate();
        let m = obj.getMonth()+1;
        let y = obj.getFullYear();

        d = (d <= 9) ? "0"+d : d;
        m = (m <= 9) ? "0"+m : m;

        return `${y}-${m}-${d}`;
    }

    return(
        <Card bg="light" className="mt-4 shadow">
            <Card.Body className="row">
                <div className="col-6" >
                    <input 
                        type="number" 
                        className={`form-control  ${!isValidAcc && 'anum_not_valid' }` }
                        placeholder="Account Number"
                        onBlur={(e)=>setAccNo([true,e.target.value])} 
                    />
                    <div hidden={isValidAcc ? true : false } className="form-text text-danger">Wrong Account Number</div>
                </div>
                <div className="col-3" >
                    <input 
                        type="date" 
                        className="form-control"
                        onChange={(e)=>setDate(e.target.value)}
                        // value={getToday()}
                    />
                </div>
                <div className="col-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        onChange={(e)=>setUnits(e.target.value)}
                        placeholder="Reading Units"
                    />
                </div>

            </Card.Body>
        </Card>
    )
}

function RBoard(){
    const [isLogout,setLogout] = useState(false);
    const [userData,setUserData] = useState(null);
    const [isLoading,setLoading] = useState(false);
    const [alert,setAlert] = useState(false);
    const [resData,setResData] = useState(null);

    const [isSubmit,setIsSubmit] = useState(false);
    const [date,setDate] = useState('');
    const [units,setUnits] = useState(0);
    const [accData,setAccData] = useState();

    useEffect(()=>{
        if(isSubmit){
            setLoading(true)
            fetch('http://api.cebmr/bill',{
                method:'post',
                body:new URLSearchParams({
                    accountNo:accData.accno,
                    uid:userData.data.id,
                    units:units,
                    date:date
                })
            }).then(res=>{
                res.json().then(data=>{
                    setAlert(true)
                    setResData(data);
                    setLoading(false);
                })
            }).catch(err=>{
                setAlert(true)
                setResData({status:false,msg:'Something Went Wrong!'});
                setLoading(false);
            })
        }
        return ()=>setIsSubmit(false);
    },[accData?.accno, date, isSubmit, units, userData?.data.id])

    // fetch current logged user's data
    useEffect(()=>{
        const uid = sessionStorage.getItem('userId');
        if(!userData){
            fetch(`http://api.cebmr/me/?userid=${uid}`,{
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
            <EntryField setDate={setDate} setUnits={setUnits} setAccData={setAccData}/>
            <div className="mt-4 shadow">
                <BillCard rb={true} isLoading={isLoading} date={date} units={units} accData={accData} okTrigger={()=>setIsSubmit(true)}/>
            </div>
        </main>
        <AlertToast 
            showAlert={alert}
            setShow={setAlert}
            type={resData?.status ? ('success') : ('error')}
            msg={resData?.msg}
        />
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