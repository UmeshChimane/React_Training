import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name === "") {
      alert("Name is required");
      return;
    }
    if (formData.email === "") {
      alert("Email is required");
      return;
    }
    if (formData.password.length < 8) {
      alert("Password must be greater than 8 characters");
    }

    console.log("Form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="name">Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <br /><br />
        <label htmlFor="pass">Password</label>
        <input type="password" value={formData.password} onChange={(e)=>{setFormData({...formData,password:e.target.value})}}/>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <h2>
        Email: {formData.email} Name :{formData.name}
      </h2>
    </div>
  );
}

export default Form;
