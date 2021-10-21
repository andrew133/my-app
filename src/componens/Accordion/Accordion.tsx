import React from "react";

function Accordion(props: any) {
    debugger
    console.log("Accordion rendering")
    return(<>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </>

    );

}

function AccordionTitle(props: any) {
    debugger
    console.log("AccordionTitle rendering")
    return (
        <h3> {props.title} </h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>

}

export default Accordion;