import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

export default function BillCard({rb,date,units,accData,okTrigger,isLoading}){

    const [fixC,setFixC] = useState(0);
    const [frb,setFrb] = useState(0);
    const [srb,setSrb] = useState(0);
    const [trb,setTrb] = useState(0);
    const [total,setTotal] = useState(0);

    function formatNumber(value){
        return `Rs ${new Intl.NumberFormat().format(value)}`
    }

    useEffect(()=>{
        if(units >= 1){
            const unit = Number(units);
            let fc = 0;
            let tot = 0;

            if(30 >= unit){

                fc = 500;
                setFrb(unit * 20);
                tot = (unit * 20) + fc;

            }else if(30 < unit && unit <= 90){

                fc = 1000;
                setSrb(unit * 35);
                tot = (unit * 35) + fc;

            }else if(60 < unit){
                let uPri = 40;

                if(92 <= unit){
                    uPri = uPri + (unit - 91);
                }
                
                fc = 1500;
                setTrb(unit * uPri);
                tot = (unit * uPri) + fc;

            }
            setFixC(fc);
            setTotal(tot);
        }
        return ()=>{
            if(units !== 0){
                setFrb(0);
                setSrb(0);
                setTrb(0);
                setFixC(0);
                setTotal(0);
            }  
        }

    },[units,setTotal])

    return (
        <Card bg="light">
            <Card.Header className="billcard-head">
                <h6 title="Account Owner's Name" className="billcard-name">{accData?.cname}</h6>
                <h6 title="Issued Date" className="billcard-date">{date ? date : 'Pick a Date'}</h6>
            </Card.Header>
            <Card.Body >
                <div className="row mb-1">
                    <div className="col-8 border border-2">Units</div>
                    <div className="col-4 border border-2 text-end">{new Intl.NumberFormat().format(units >= 0 ? units : 0 )}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-8 border border-2">Fixed Charge</div>
                    <div className="col-4 border border-2 text-end">{formatNumber(fixC)}</div>
                </div>
                <div className={`row mb-1 ${frb > 1 && 'r-select' }`}>
                    <div className="col-8 border border-2">First Range Billed</div>
                    <div className="col-4 border border-2 text-end">{formatNumber(frb)}</div>
                </div>
                <div className={`row mb-1 ${srb > 1 && 'r-select' }`}>
                    <div className="col-8 border border-2">Second Range Billed</div>
                    <div className="col-4 border border-2 text-end">{formatNumber(srb)}</div>
                </div>
                <div className={`row mb-1 ${trb > 1 && 'r-select' }`}>
                    <div className="col-8 border border-2">Third Range Billed</div>
                    <div className="col-4 border border-2 text-end">{formatNumber(trb)}</div>
                </div>
                <div className="row billcard-total">
                    <div className="col-8 border border-2">Total </div>
                    <div className="col-4 border border-2 text-end">{formatNumber(total)}</div>
                </div>
            </Card.Body>
            <Card.Footer className="billcard-footer" hidden={(accData && rb) ? false : true} >
                <div className="billcard-footer-accno">
                    <span>Account Number : </span>
                    <span>{accData?.accno}</span>
                </div>
                <button 
                    className="btn btn-primary w-25" 
                    onClick={()=>okTrigger()}
                    disabled={units <= 0 ? true : false}
                >
                    {isLoading ? <Spinner size="sm"/> : 'OK'}
                </button>
            </Card.Footer>
        </Card>
    )
}