import {Link} from "react-router-dom"


export const Navbar=()=>{


    return (
       <div style={{height:"70px",position:"fixed" ,textAlign:"center" ,border:"1px solid red" ,width:"100%",background:"yellowgreen"}}>
          <Link to={"/"}>Home</Link>
          <Link to={"/users"}>Users</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/carts"}>Cart</Link>
       </div>
    )
}