import CustomInput from "./CustomInput";

export default function CustomForm() {
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
                <CustomInput titleT="Minimum Customers" titleB="per Hour" />
                <CustomInput titleT="Maximum Customers" titleB="per Hour" />
                <CustomInput titleT="Average Cookies Per" titleB="Sale" />
                <div className="flex items-center justify-center mt-5 ml-2" style={{backgroundColor:'#21c45d',height:100 ,width:200}}>
                    <button >Create</button>
                </div>

            </div>
        </>
    )
}