import { useState } from "react";

export default function CustomInput({ titleT, titleB,handelChangeFromChild }) {
    
    return (
        <>
            <div  className="flex flex-col items-center justify-center pl-3">
                <p style={textStyle}>{titleT}</p>
                <p style={textStyle}>{titleB}</p>
                <input name={titleT+titleB} type="text" onChange={(event)=>handelChangeFromChild({[titleT+titleB]:Number(event.target.value||0)})} />
            </div>

        </>
    )
}

const textStyle={
    fontWeight:"bold"
}