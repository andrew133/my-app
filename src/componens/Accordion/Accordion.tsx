import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    debugger
    console.log("Accordion rendering")
    if (props.collapsed == true){
    return (<>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </>
    );
    }
    return (<>
            <AccordionTitle title={props.titleValue}/>
        </>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
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