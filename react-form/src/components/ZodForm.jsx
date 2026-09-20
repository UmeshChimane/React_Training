import { useState } from "react";
import { z } from "zod";
import "./App.css";

function ZodForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Zod schema - writing all the rules
  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter a valid email"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const newErrors = {
        name: "",
        email: "",
        password: ""
      };

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        newErrors[field] = issue.message;
      });

      setErrors(newErrors);

      return;
    }

    // If validation is successful
    setErrors({
      name: "",
      email: "",
      password: ""
    });

    console.log("Form submitted");
    console.log(formData);
  };

  return (
    <div>
      <h2>{formData.name}</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
            }
          />

          {errors.name && <p>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value
              })
            }
          />

          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password:</label>

          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value
              })
            }
          />

          {errors.password && <p>{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default ZodForm;