import { useNavigate } from "react-router-dom"

export const Home= () => {


    //useNavigate() is also used to move between two pages
    const navigate=useNavigate();
    const handleCLick=()=>{
        navigate("/dashboard")

    }
  return (

    <div>
        <h1>Home Page</h1>
        <button onClick={handleCLick}>Go to dashboard</button>
    </div>
  )
}
