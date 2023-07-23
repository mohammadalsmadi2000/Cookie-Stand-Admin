import { useState } from "react";
import CustomInput from "./CustomInput";
import {data} from "../data.js"
export default function CustomForm({handelData}) {
    const [objStae, setObjState] = useState({ "Minimum Customers per Hour": 0, "Maximum Customers per Hour": 0, "Average Cookies Per Sale": 0 })
    const [makeChange,setMakeChange]=useState(false)
    const hourly_sales=data
    
    function handelChangeFromChild(stateFromChild){
        console.log("done")
        
        setObjState((prev)=>({
            ...prev,
            ...stateFromChild
        }))
    }

 

    return (
        <>
            <div className="flex items-center justify-center" >
                <p style={{ fontSize: 38, fontWeight: "bold" }} >Create Cookie Stand</p>
            </div>
            <div className="flex items-center pl-8 pt-7" style={{ width: "100%" }} >
                <p style={{ fontWeight: "bold" }} >Location : </p>
                <input className="pl-3" style={{ width: "88%" }} name="createCookie" placeholder="bla..." ></input>
            </div>
            <div className="flex items-center pt-12">
                <CustomInput titleT="Minimum Customers" titleB=" per Hour" handelChangeFromChild={handelChangeFromChild}/>
                <CustomInput titleT="Maximum Customers" titleB=" per Hour" handelChangeFromChild={handelChangeFromChild}/>
                <CustomInput titleT="Average Cookies Per" titleB=" Sale" handelChangeFromChild={handelChangeFromChild}/>
                <div className="flex items-center justify-center mt-5 ml-2" style={{ backgroundColor: '#21c45d', height: 100, width: 200 }}>
                    <button onClick={handelData.bind(this,objStae)} >Create</button>
                </div>
              
            </div>
        </>
    )
}