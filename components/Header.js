export default function Header({ title }) {

    return (
        <div className="flex items-center justify-start pl-4 align-top bg-green-500" style={{ width: '100%', height: '120px' }}>
            <h1 style={{ fontSize: 42 }} className="font-bold text-black">{title}</h1>
        </div>

    )

}