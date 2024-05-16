import { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef();

    function clickhandle() {
        inputRef.current.focus();
    }
    function clickhandle2() {
        inputRef.current.remove();
    }

    return (
        <div style={{paddingTop:"10%", paddingLeft:"40%"}}>
<h1>useRef</h1>




            <input type="" ref={inputRef} id="input" />
            <button onClick={clickhandle}>Focus</button>
            <button onClick={clickhandle2}>Remove</button>
        </div>
    );
};

export default UseRef;
