export function ButtonLight({label, onClick}) {
    return <button onClick={onClick} type="button" className="bg-white text-black hover:bg-blue-800 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-blue-800 mr-3 rounded shadow">{label}</button>
}