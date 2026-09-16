const Input=({setTemp})=>{
    return(
    <>
       <input type="text" onChange={(event)=>setTemp(event.target.value)}  />
    </>
)
}

export default Input