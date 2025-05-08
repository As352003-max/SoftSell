import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert('Message submitted!');
  };

  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="name" placeholder="Name" className="w-full p-3 rounded bg-gray-800 text-white" onChange={handleChange} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input name="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 text-white" onChange={handleChange} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input name="company" placeholder="Company" className="w-full p-3 rounded bg-gray-800 text-white" onChange={handleChange} />

          <select name="license" className="w-full p-3 rounded bg-gray-800 text-white" onChange={handleChange}>
            <option value="">Select License Type</option>
            <option value="office">Microsoft Office</option>
            <option value="adobe">Adobe Suite</option>
            <option value="others">Others</option>
          </select>

          <textarea name="message" placeholder="Message" className="w-full p-3 rounded bg-gray-800 text-white" onChange={handleChange} />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
