const Input=({temp,setTemp})=>{


    return(
    <>
       <input type="text" value={temp} onChange={(event)=>setTemp(event.target.value)}  />
    </>
)
}

export default Input