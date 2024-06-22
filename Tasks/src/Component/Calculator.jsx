import { useState } from "react";
import add from "../assets/add.png"
import minus from "../assets/minus.png"
import multiply from "../assets/multiply.png"
import divide from "../assets/divide.png"

const Calculator = () => {
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [output, setoutput] = useState(0);

    function set_value_1(e) {
        setvalue1(e.target.value);
        console.log(e.target.value);
    }
    function set_value_2(e) {
        setvalue2(e.target.value);
        console.log(e.target.value);
    }


    function addition() {
        if (value1 === "" || value2 === "") {
            alert("Please enter the numbers for addition");
            return;
        };
        setoutput(parseInt(value1) + parseInt(value2));
        setvalue1((value) => value = "");
        setvalue2((value) => value = "");
    }
    function subtraction() {
        if (value1 === "" || value2 === "") {
            alert("Please enter the numbers for subtraction");
            return;
        };
        setoutput(parseInt(value1) - parseInt(value2));
        setvalue1((value) => value = "");
        setvalue2((value) => value = "");
    }
    function multiplication() {
        if (value1 === "" || value2 === "") {
            alert("Please enter the numbers for multiplication");
            return;
        };
        setoutput(parseInt(value1) * parseInt(value2));
        setvalue1((value) => value = "");
        setvalue2((value) => value = "");
    }
    function clear_data() {
        setoutput(0);
    }
    function division() {
        if (value1 === "" || value2 === "") {
            alert("Please enter the numbers for division");
            return;
        };
        setoutput(parseInt(value1) / parseInt(value2));
        setvalue1((value) => value = "");
        setvalue2((value) => value = "");
    }

    return (
        <>

            <section className="border-black border-4 p-3 py-24 bg-emerald-500 flex gap-6 flex-col">
                <h1 className="text-center text-5xl font-bold">CALCULATOR</h1>
                <div className="flex flex-col w-1/2 m-auto gap-2">
                    <input type="number" onChange={set_value_1} value={value1} className="h-10 w-auto  border-black border-2 pl-3" placeholder="Enter the First Number" />
                    <input type="number" onChange={set_value_2} value={value2} className="h-10 w-auto  border-black border-2 pl-3" placeholder="Enter the Second Number" />
                </div>
                <div className="flex gap-5 m-auto bg-black w-1/2 justify-center py-2">
                    <button className="p-2 bg-white text-3xl font-bold border-black border-2"><img src={add}
                        className="h-6 w-6 bg-white"
                        onClick={addition} /></button>
                    <button className="p-2 bg-white text-3xl font-bold border-black border-2"><img src={minus}
                        className="h-6 w-6 bg-white" onClick={subtraction} /></button>
                    <button className="p-2 bg-white text-3xl font-bold border-black border-2"><img src={multiply}
                        className="h-6 w-6 bg-white" onClick={multiplication} /></button>
                    <button className="p-2 bg-white text-3xl font-bold border-black border-2"><img src={divide}
                        className="h-6 w-6 bg-white" onClick={division} /></button>
                    <button className="p-2 px-5 bg-white text-1xl font-medium border-black border-2"><p
                        className="h-6 bg-white" onClick={clear_data} >Clear</p></button>
                </div>
                <button className="bg-white w-1/2 m-auto h-10 text-left pl-3">{output}</button>
            </section>

        </>
    )
}

export default Calculator;