// BookingForm.js
import React, { useState } from "react";
import axios from "axios";
import "./Consultationform.css";

const Consultationform = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "pune",
    company: "",
    chiefComplaints: "",
    previousExperience: "",
  });

  const [doctors, setDoctors] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://vyankateshmiskin1010.github.io/apidr/data.json"
      );

      setDoctors(response.data.doctors);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };
  const getDoctorsInCity = () => {
    const userCity = formData.city.toLowerCase();
    return doctors.filter((doctor) => doctor.city.toLowerCase() === userCity);
  };

  const isAgeLessThan40 = parseInt(formData.age, 10) < 40;

  return (
    <div id="consultationForm" className="booking-form-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>
            Book an Appointment for <span style={{ color: "red" }}>FREE</span>
          </h2>

          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* Step 2: Age + City + Company */}
          <div className="form-group">
            <label>
              Age:
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Company:
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Chief Complaints:
              <textarea
                name="chiefComplaints"
                value={formData.chiefComplaints}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {!isAgeLessThan40 && (
            <div className="form-group">
              <label>
                Previous Experience:
                <textarea
                  name="previousExperience"
                  value={formData.previousExperience}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="results-container">
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.3rem",
            color: "#0067ff",
            marginTop: "0px",
          }}
        >
          Fill the form to see Available Doctors in your City
        </h2>

        {doctors.length > 0 && (
          <div className="doctors-list">
            <div className="doctor-names-column">
              <h3>Doctor Names</h3>
              <ul>
                {getDoctorsInCity().map((doctor) => (
                  <li
                    key={doctor.id}
                    className="doctor-name"
                    onClick={() => handleDoctorClick(doctor)}
                  >
                    {doctor.name}
                  </li>
                ))}
              </ul>
            </div>

            {selectedDoctor && (
              <div className="selected-doctor-details">
                <h3>Selected Doctor Details</h3>
                <img
                  src={selectedDoctor.image_link}
                  alt={`${selectedDoctor.name} - ${selectedDoctor.expertise}`}
                  className="doctor-image"
                />
                <div className="doctor-details">
                  <p>Name: {selectedDoctor.name}</p>
                  <p>Expertise: {selectedDoctor.expertise}</p>
                  <p>City: {selectedDoctor.city}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {doctors.length > 0 && getDoctorsInCity().length === 0 && (
          <p style={{ textAlign: "center", fontSize: "2rem" }}>
            No doctors available in the entered city.
          </p>
        )}
      </div>
    </div>
  );
};

export default Consultationform;
