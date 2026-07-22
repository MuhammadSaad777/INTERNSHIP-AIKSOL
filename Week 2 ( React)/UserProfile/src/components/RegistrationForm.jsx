import { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    const newErrors = { email: '', username: '', password: '' };
    let isValid = true;

    if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters.';
      isValid = false;
    }

    if (formData.password.length <= 6) {
      newErrors.password = 'Password must be more than 6 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log('Form submitted:', formData);
    }
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error-text">{errors.username}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
      </div>

      <button type="submit" className="submit-btn">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;