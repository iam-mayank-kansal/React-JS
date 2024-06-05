import { useState } from "react"
import cross from "../assets/cross.png"

const To_Do_List = () => {

    const [value, setvalue] = useState("");
    const [list, setlist] = useState([]);
    function value_change(e) {
        setvalue(e.target.value);
        console.log(e.target.value);
    }
    function add_in_list() {
        if (value.trim()) {
            setlist([...list, value]);
            console.log(list);
            setvalue("");
        }
    }
    function delete_fron_list(index) {
        console.log(list)
        const newList = list.filter((item, index_to_delete) => index_to_delete != index);
        setlist(newList);
    }

    return (
        <>
            <section className="border-black border-4 p-3 py-24 bg-amber-200">
                <h1 className="text-center text-5xl font-bold">TO-DO-LIST</h1>
                <div className="flex gap-x-2.5 border-black border-2 p-3 w-1/2 m-auto px-10 my-4 justify-center bg-yellow-400">
                    <input type="text" className="border-black border-2 p-2 w-96" onChange={value_change} value={value} placeholder="Enter Your Tasks Here" />
                    <button className="border-black border-2 p-2 w-32 bg-sky-400 font-bold text-white" onClick={add_in_list}>ADD</button>
                </div>
                <div className="flex gap-x-2.5 border-black border-2 p-3 m-auto px-2 my-4 flex-col w-1/2 min-h-60 gap-2 bg-white">
                    {
                        list.map(
                            (item, index) => (<div className="flex justify-between" key={index}>
                                <p className="text-xl"><span className="font-bold pr-3">TASK - {index + 1} : </span>{item}</p>
                                <img src={cross} alt="cross" className="cursor-pointer" onClick={() => delete_fron_list(index)} />
                            </div>
                            )
                        )
                    }
                </div>
            </section>


        </>
    )
}
export default To_Do_List;