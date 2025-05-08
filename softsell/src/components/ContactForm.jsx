import React from 'react'

// 5. Contact / Lead Form
const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
          // Clear error on input change
          setErrors({ ...errors, [name]: undefined });
      };
  
      const validateForm = () => {
          const newErrors: { [key: string]: string | undefined } = {};
          if (!formData.name.trim()) {
              newErrors.name = 'Name is required';
          }
          if (!formData.email.trim()) {
              newErrors.email = 'Email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
              newErrors.email = 'Invalid email address';
          }
          if (!formData.company.trim()) {
              newErrors.company = 'Company is required';
          }
          if (!formData.licenseType) {
              newErrors.licenseType = 'License type is required';
          }
          if (!formData.message.trim()) {
              newErrors.message = 'Message is required';
          }
          setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
      };
  
      const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          if (validateForm()) {
              // In a real app, you'd send this data to a server
              console.log('Form Data:', formData);
              setIsSubmitted(true);
              // Reset form
              setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
          }
      };
  
    if (isSubmitted) {
      return (
        <section className="bg-gray-950 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-green-500/10 border border-green-500/20 p-8 rounded-lg shadow-lg"
            >
              <CheckCircle className="w-16 h-16 mx-auto text-green-400 mb-6" />
              <h2 className="text-2xl font-semibold text-white mb-4">
                Thank you!
              </h2>
              <p className="text-gray-300">
                Your inquiry has been submitted. We'll get back to you shortly.
              </p>
            </motion.div>
          </div>
        </section>
      );
    }
  
    return (
      <section className="bg-gray-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center">
            Contact Us
          </h2>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={cn(
                    "mt-1 bg-gray-800 text-white border-gray-700 focus:ring-blue-500 focus:border-blue-500",
                    errors.name && "border-red-500 focus:ring-red-500 focus:border-red-500"
                  )}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={cn(
                    "mt-1 bg-gray-800 text-white border-gray-700 focus:ring-blue-500 focus:border-blue-500",
                    errors.email && "border-red-500 focus:ring-red-500 focus:border-red-500"
                  )}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300"
                >
                  Company
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className={cn(
                    "mt-1 bg-gray-800 text-white border-gray-700 focus:ring-blue-500 focus:border-blue-500",
                    errors.company && "border-red-500 focus:ring-red-500 focus:border-red-500"
                  )}
                  aria-invalid={!!errors.company}
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="licenseType"
                  className="block text-sm font-medium text-gray-300"
                >
                  License Type
                </label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={cn(
                    "mt-1 block w-full py-3 px-4 bg-gray-800 text-white border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                    "appearance-none", // Remove default arrow
                    errors.licenseType && "border-red-500 focus:ring-red-500 focus:border-red-500"
                  )}
                  aria-invalid={!!errors.licenseType}
                >
                  <option value="">Select License Type</option>
                  <option value="perpetual">Perpetual</option>
                  <option value="subscription">Subscription</option>
                  <option value="volume">Volume</option>
                  <option value="other">Other</option>
                </select>
                {errors.licenseType && (
                  <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your Message"
                  className={cn(
                    "mt-1 bg-gray-800 text-white border-gray-700 focus:ring-blue-500 focus:border-blue-500",
                    errors.message && "border-red-500 focus:ring-red-500 focus:border-red-500"
                  )}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 py-3 rounded-full shadow-lg transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    );
  };

export default ContactForm
