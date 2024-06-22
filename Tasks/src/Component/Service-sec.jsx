import React from "react";
function Service_Section() {

    return (<>

        <Service_Section2 name="mayank" />
        <Service_Section2 name="ayu" />
        <Service_Section2 name="mayank" />
     
    </>
    );
};
function Service_Section2(props) {
    return (
        <>
            <p>{props.name}</p>
       
        </>
    );
};

export default Service_Section;