export default function CustomInput({ titleT, titleB }) {
    return (
        <>
            <div  className="flex flex-col items-center justify-center pl-3">
                <p style={textStyle}>{titleT}</p>
                <p style={textStyle}>{titleB}</p>
                <input type="text" />
            </div>

        </>
    )
}

const textStyle={
    fontWeight:"bold"
}