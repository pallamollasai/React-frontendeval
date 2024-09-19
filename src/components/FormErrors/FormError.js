import React, { useState } from "react";
export default function FormError() {
  const [formData, setFormData] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    country: { value: "", error: "" },
    cities: { value: [], error: "" },
    gender: { value: "", error: "" },
    groups: { value: [], error: "" }
  });

  const ifFormValid = () => {
    const isValid = true;
    return isValid;
  };

  const handleEmailInput = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        email: { ...prevFormData.email, value: e.target.value, error: "" }
      };
    });
  };

  const handlePasswordInput = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        password: { ...prevFormData.password, value: e.target.value, error: "" }
      };
    });
  };

  const handleCountryChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        country: { ...prevFormData.country, value: e.target.value, error: "" }
      };
    });
  };

  const handleCities = (e) => {
    const values = [...e.target.selectedOptions].map((option) => option.value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        cities: { ...prevFormData.cities, value: values, error: "" }
      };
    });
  };

  const handleGender = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        gender: { value: e.target.value, error: "" }
      };
    });
  };

  const handleGroups = (e) => {
    const { value } = e.target;
    let filteredValues;
    if (formData.groups.value.includes(value)) {
      filteredValues = formData.groups.value.filter((val) => val !== value);
    } else {
      filteredValues = [...formData.groups.value, value];
    }
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        groups: { ...prevFormData.groups, value: filteredValues, error: "" }
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.email.value.length === 0) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          email: { ...prevFormData.email, error: true }
        };
      });
    }
    if (formData.password.value.length === 0) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          password: { ...prevFormData.password, error: true }
        };
      });
    }
    if (formData.country.value.length === 0) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          country: { ...prevFormData.country, error: true }
        };
      });
    }
    if (formData.cities.value.length === 0) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          cities: { ...prevFormData.cities, error: true }
        };
      });
    }
    if (formData.gender.value.length === 0) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          gender: { ...prevFormData.gender, error: true }
        };
      });
    }
    if (formData.groups.value.length === 0) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          groups: { ...prevFormData.groups, error: true }
        };
      });
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} noValidate>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            // autoFocus={true}
            value={formData.email.value}
            onChange={handleEmailInput}
          />
          <p className={formData.email.error ? "error" : "hide"}>
            Please enter the email
          </p>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            // autoFocus={true}
            value={formData.password.value}
            onChange={handlePasswordInput}
          />
          <p className={formData.password.error ? "error" : "hide"}>
            Please enter the password
          </p>
        </div>

        <div>
          <label htmlFor="country">Country: </label>
          <select
            id="country"
            value={formData.country.value}
            onChange={handleCountryChange}
          >
            <option value="">Select Country</option>
            <option value="IND">India</option>
            <option value="AUS">Aus</option>
            <option value="USA">USA</option>
          </select>
          <p className={formData.country.error ? "error" : "hide"}>
            Please select the country
          </p>
        </div>

        <div>
          <label htmlFor="cities">cities</label>
          <select
            id="cities"
            multiple={true}
            value={formData.cities.value}
            onChange={handleCities}
          >
            <option value="">Select Cities</option>
            <option value="TG">Telanage</option>
            <option value="AP">Andhra</option>
            <option value="DEL">Delhi</option>
          </select>
          <p className={formData.cities.error ? "error" : "hide"}>
            Please select the cities
          </p>
        </div>

        <div>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleGender}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleGender}
          />
          <p className={formData.gender.error ? "error" : "hide"}>
            Please select the male or femail
          </p>
        </div>

        <div>
          <label htmlFor="science">Science</label>
          <input
            type="checkbox"
            id="science"
            name="groups"
            value="science"
            onChange={handleGroups}
          />
          <label htmlFor="mpc">MPC</label>
          <input
            type="checkbox"
            id="mpc"
            name="groups"
            value="mpc"
            onChange={handleGroups}
          />
          <p className={formData.groups.error ? "error" : "hide"}>
            Please select any of the groups
          </p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
