import { useState } from "react";
import { RenderPara } from "./RenderPara";

export const ParaGenerator = () => {
    const words = ["lorem", "ipsum", "dolor", "sit", "amet",
        "consectetur", "adipiscing", "elit", "sed",
        "do", "eiusmod", "tempor", "incididunt",
        "ut", "labore", "et", "dolore", "magna", "aliqua"];

    const [count, setCount] = useState("");
    const [paragraph, setParagraph] = useState("");

    function generatePara(num) {
        const n = parseInt(num);
        if (n === 0 || n < 0) {
            return alert(`0 or anthing less than 0 is not allowed`);
        }

        setCount("");

        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(words[(Math.floor(Math.random() * words.length))]);
            console.log(result);
        }
        setParagraph(result.join(" "));
    }

    return (
        <div className="w-full flex flex-col items-center  h-screen bg-gray-400">
            <h1 className="mt-6 text-4xl font-bold text-white">Welcome to Paragraph Generator</h1>
            <div className="flex flex-col  gap-4 w-60">
                <input type="number" value={count} placeholder="Numbers of words" onChange={(e) => { setCount(e.target.value) }} className="border-none p-3 rounded-md shadow-lg bg-white mt-10"></input>
                <button onClick={() => { generatePara(count) }} className=" border px-2 rounded-md bg-blue-500 font-bold text-white cursor-pointer">Submit</button>
            </div>
            <div className="mt-10 flex flex-col items-center w-full max-w-285 m-auto">
                <h1 className="text-4xl font-bold text-white underline">Generated Paragraph</h1>
                <RenderPara paragraph={paragraph}/>
            </div>
        </div>
    )
}