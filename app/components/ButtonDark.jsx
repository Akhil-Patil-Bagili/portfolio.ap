export function ButtonDark({label, onClick}) {
    return <button onClick={onClick} type="button" className="bg-blue-800 hover:bg-gray-100 hover:text-black text-white font-semibold py-2 px-4 border border-blue-600 rounded shadow">{label}</button>
}