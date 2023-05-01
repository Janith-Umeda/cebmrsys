import NavBar from '@/components/navbar'
import { useEffect, useState } from 'react'
import HeadwTitle from '@/components/head'
import { Card, Spinner } from 'react-bootstrap'
import AlertToast from '@/components/toast'
import BillCard from '@/components/billcard'

function Entry({setAccNo,setSubmit,loading}){
  return (
    <Card bg='warning'>
      <Card.Body>
        <div className="bill-check-entry">
          <input 
            type="number" 
            className="form-control w-50"
            placeholder='Your Account Number Here..'
            onBlur={(e)=>setAccNo(e.target.value)}
           />
          <button 
            className="btn btn-secondary"
            onClick={()=>setSubmit(true)}
          >
            {loading ? <Spinner size='sm' /> : 'Submit' }
          </button>
        </div>
      </Card.Body>
    </Card>
  )
}

function Spin(){
  return (
    <div className="d-flex justify-content-center">
      <Spinner />
    </div>
  )
}

function PastBills({accNo,bills}){
  const [onClick,setClick] = useState(false);
  const [isLoading,setLoading] = useState(false);
  const [pastBills,setPBills] = useState(null);

  useEffect(()=>{

    if(onClick){
      setLoading(true);
      fetch(`http://api.cebmr/bill?accountNumber=${accNo}&limit=${bills}&offset=1`,{
        method:'get'
      }).then(res=>{
        res.json().then(data=>{
          setLoading(false);
          setPBills(data.bill_Data);
        })
      }).catch(err=>{
        setLoading(false);
      })
    }

    return ()=>setClick(false)
  },[accNo, bills, onClick])

  return (
    <>
    <div className='mt-3 mb-3 d-flex justify-content-center'>
      <button className="btn shadow btn-info rounded-5 w-50" onClick={()=>setClick(true)}>
        {isLoading ? (<Spinner size='sm' />) : ('View Past Bills')}
      </button>
    </div>
      {
        pastBills?.map((row)=>{
          return(
            <div className="mb-3" key={row.id}>
              <BillCard 
                rb={false}
                date={row.date}
                units={row.units}
                accData={{accno:row.accno,cname:row.cname}}
              />
            </div>
          )
        })
      }
    </>
  )
}

export default function Home() {
  const [onSubmit,setSubmit] = useState(false);
  const [isLbtnClick,setLbtnClick] = useState(false);
  const [accNo,setAccNo] = useState(0);
  const [isLoading,setLoading] = useState(false);
  const [resData,setResData] = useState(null);
  const [showAlert,setAlert] = useState(false);

  useEffect(()=>{
    if(onSubmit){
      setLoading(true);
      fetch(`http://api.cebmr/bill?accountNumber=${accNo}&limit=1&offset=0`,{
        method:'get'
      }).then(res=>{
        res.json().then(data=>{
          setLoading(false);
          setResData(data);
          setAlert(true);
        })
      }).catch(err=>{
        setLoading(false);
        setAlert(true);
        setResData({status:false,msg:'Something Went Wrong!'});
      })
    }

    return ()=>setSubmit(false);
  },[accNo, onSubmit])


  useEffect(()=>{
    if(isLbtnClick){
      window.location.replace('/login');
    }
    return ()=>{setLbtnClick(false)}
  })

  return (
    <>
      <HeadwTitle title="CEB Meter Reader" />
      <main>
        <NavBar logoutTrigger={()=>setLbtnClick(true)}/>
        <div className="container mt-5">
          <Entry setSubmit={setSubmit} setAccNo={setAccNo} loading={isLoading}/>
          <div className={`${resData?.status ? 'bg-success' : 'bg-danger'} text-white text-center w-50 rounded m-auto mt-4`}>{resData?.msg}</div>
          <div className="mt-4">
            {isLoading ? (
              <Spin />
            ):(
              resData?.bills > 0 ? (
                <>
                <BillCard 
                  key={resData?.bill_Data[0].id}
                  rb={false}
                  date={resData?.bill_Data[0].date}
                  units={resData?.bill_Data[0].units}
                  accData={{accno:resData?.bill_Data[0].accno,cname:resData?.bill_Data[0].cname}}
                />
                <PastBills accNo={resData?.bill_Data[0].accno} bills={resData?.bills}/>
                </>
              ) : (
                <Card className='shadow' bg='info' hidden={resData?.msg === "Invalid Account Number" ? true : false}>
                  <Card.Body className='text-center text-white fs-5'>
                    {accNo ? ('You Don\'t Have any Bills Received Yet.Please Check Again Later.') 
                    : ('Enter Your Account Number for Check the Latest Bill.')}
                  </Card.Body>
                </Card>
              )
            )}
          </div>
        </div>
      </main>
      <AlertToast 
        setShow={setAlert} 
        showAlert={showAlert} 
        msg={resData?.msg} 
        type={resData?.status ? ('success') : ('error')}/>
    </>
  )
}
