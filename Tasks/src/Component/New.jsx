import React from "react";

// export const New = () => {
//     return (
//         <>
//             <h1>how are you</h1>
//         </>
//     )
// };

// export function News() {
//     const kuchbhi = <h1 className="hello">This is a element</h1>
//     const kuchbhi2 = <h1>This is a element</h1>

//     const head = React.createElement('h1', {}, "created by create-elements")

//     return (
//         <>
//             <p>hello</p>
//             <h1>{kuchbhi}</h1>
//             <p>{head}{console.log(head)}</p>
//         </>
//     )
// };


// const { name } = { name: "Mayank" }


// // new 

// function Using_props({ name }) {
//     return <h1 >Hello , my name is {name}</h1>
// }

// using props ----------------------------------------------------------------------

// export const Show_props = () => {
//     return (
//         <>
//             <Using_props name="Mayank" />
//             <Using_props name="Dipish" />
//             <Using_props name="Dheeraj" />
//         </>
//     )
// }





// using map -------------------------------------------------------------------------

// export const Show_props = () => {
//     const name = ["Mayank", "Dipish", "Dheeraj"]
//     return (
//         <>
//             {
//                 name.map((val, ind) => <Using_props key={ind} name={val} />)
//             }
//         </>
//     )
// }