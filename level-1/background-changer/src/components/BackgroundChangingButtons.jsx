import { useState } from "react"

export const BackgroundChangingButtons = () =>{
    const [color, setColor] = useState("bg-white");
    console.log(color);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
            <h1 className="mb-4 text-2xl font-bold border p-3 rounded-md bg-blue-400 text-white">Background-Changer</h1>
            <div className={`h-100 w-96 ${color} border-none shadow-lg rounded-lg mb-4`}>
            </div>
            <div className="flex w-96 justify-around">
                <button className="border px-2  bg-red-500 rounded-md text-white cursor-pointer" onClick={() =>{
                    setColor("bg-red-500")
                }}>Red</button>
                <button className="border px-2 rounded-md bg-green-500 text-white cursor-pointer" onClick={() =>{
                    setColor("bg-green-500")
                }}>Green</button>
                <button className="border px-2 rounded-md bg-yellow-500 text-white cursor-pointer" onClick={() =>{
                    setColor("bg-yellow-500")
                }}>Yellow</button>
            </div>
        </div>
    )
}