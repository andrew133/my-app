import React from 'react';
import './App.css';

function hello() {
    //debugger
    alert('Hello IT-KAMASUTRA')
}

//hello();


function App() {
    //debugger
    console.log("App rendering")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return <>This is App component</>
}

function Rating() {
    //debugger
    console.log("Rating rendering")
    return (<>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    );
}

function Star() {
    console.log("Star rendering")
    return <div>star</div>

}

function Accordion() {
    console.log("Accordion rendering")
    return (<>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    );
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return <div>
        <h3> Menu </h3>
    </div>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
}

export default App;
