const { Children } = require("react")

function Button({
    onClick,
    children,
    disabled
}){
    return(
       <button style={{padding:"1rem",
       border: 1,borderWidth:0,fontWeight:"bold",backgroundColor:"red",
       color:"white"}} disabled={disabled} onClick={onClick}>
           {children}
       </button> 
    )
}
export default Button