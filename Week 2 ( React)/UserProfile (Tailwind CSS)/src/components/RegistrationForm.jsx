import { useState } from 'react';

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
    <form
      className="mx-auto flex w-72 flex-col rounded-lg border border-gray-200 p-6 text-left shadow-sm"
      onSubmit={handleSubmit}
    >
      <div className="mb-4 flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="username" className="mb-1 text-sm font-medium">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
        />
        {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username}</p>}
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="password" className="mb-1 text-sm font-medium">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
        />
        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
      </div>

      <button
        type="submit"
        className="rounded-md bg-gray-800 py-2 text-sm text-white hover:bg-gray-700"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;