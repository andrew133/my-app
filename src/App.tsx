import React from 'react';
import './App.css';
import Accordion from "./componens/Accordion/Accordion";
import {Rating} from "./componens/Rating/Rating";
import {Simulate} from "react-dom/test-utils";
//import seeked = Simulate.seeked;

// function sum (a: number, b: number) {
//     //debugger
//     alert(a+b)
// }
// sum(23, 12);
// sum(100, 300);



function App() {
    //debugger
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            <Rating value={3}/>
            <Accordion titleValue={"Good"} collapsed={false}/>
            <Accordion titleValue={"Programming"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    return <h1>{props.title}</h1>
}
// function Accordion(props: any) {
//     return <h1>{props.title}</h1>
// }

export default App;
