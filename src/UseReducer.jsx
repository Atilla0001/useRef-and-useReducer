import { useReducer } from "react"


const initialState = {
  sayi: 0
}

const reducerFn = (prevState, action) => {
  switch (action.type) {
    case 'İncreament':
      return {sayi: prevState.sayi +1};
    case 'decreament':
      return { sayi: prevState.sayi - 1 };
    default:
      return { sayi: prevState.sayi };
  }

}


const UseReducer = () => {
    const [state, dispatch] = useReducer(reducerFn, initialState)

    return (
      <div style={{paddingTop:"10%",paddingLeft:"40%"}}>
<h1>useReducer</h1>

<div style={{ display:"flex"}}>
     <button  onClick={() => dispatch({ type: 'İncreament' })}>İncreament</button>
        <button style={{marginLeft:"15px"}}  onClick={() => dispatch({ type: 'decreament' })}>decreament</button>
        <p style={{marginLeft:"15px"}} >=</p>
        <p style={{marginLeft:"15px"}}>{state.sayi}</p>
</div>
     
      </div>
    )
}
export default UseReducer
