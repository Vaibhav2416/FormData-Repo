import { useState } from "react";

const initFormData = {
  name: "",
  email: "",
  gender: "Male",
  role: "Front-End-Developer",
  marrital_status: false
};

function FormData() {
  const [formData, setFormData] = useState(initFormData);

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;

    const valueToUpdate = type === "checkbox" ? checked : value;

    console.log(`update ${name} with ${valueToUpdate}`);

    setFormData({
      ...formData,

      [name]: valueToUpdate
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          onChange={handleChange}
          placeholder="name"
          type="text"
          value={formData.name}
        />
      </div>
      <div>
        <input
          name="email"
          onChange={handleChange}
          placeholder="email"
          type="email"
          value={formData.email}
        />
      </div>
      <div>
        <select
          onChange={handleChange}
          name="gender"
          defaultValue={formData.gender}
          placeholder="Country"
          value={formData.gender}
        >
          <option key="Male">Male</option>
          <option key="Female">Female</option>
        </select>
      </div>

      <div>
        <select
          onChange={handleChange}
          name="role"
          defaultValue={formData.role}
          placeholder="Role"
          value={formData.role}
        >
          <option key="Front-End-Developer">Front-End-Developer</option>
          <option key="Backend-End-Developer">Backend-End-Developer</option>
        </select>
      </div>

      <div>
        <input
          name="marrital_status"
          onChange={handleChange}
          checked={formData.marrital_status}
          type="checkbox"
        />
        <label>Marrital Status</label>
      </div>
      <div>
        <input type="submit" />
      </div>
      <ul>
        <li> Name: {formData.name} </li>
        <li> Email: {formData.email} </li>
        <li> Gender: {formData.gender} </li>
        <li>Role: {formData.role}</li>
      </ul>
    </form>
  );
}
export default FormData;
