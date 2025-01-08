import { motion } from 'framer-motion';
import { useState } from 'react';

function Services() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">PR Marketing Packages</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect PR package to elevate your brand and make a lasting impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`glass-card p-8 relative ${
                pkg.popular ? 'border-accent' : ''
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹{pkg.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPackage(pkg)}
                className={`w-full py-3 rounded-lg font-medium ${
                  pkg.popular
                    ? 'bg-accent text-white'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Book a Free Consultation</h2>
          <p className="text-gray-300 mb-6">
            Not sure which package is right for you? Schedule a free consultation with our PR experts
            to discuss your goals and find the perfect solution.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent px-6 py-3 rounded-lg font-medium"
          >
            Schedule Consultation
          </motion.button>
        </div>
      </div>
    </div>
  );
}

const packages = [
  {
    name: "Starter",
    price: "29,999",
    features: [
      "Basic Media Coverage",
      "Social Media Management",
      "2 Press Releases per Month",
      "Monthly Performance Reports",
      "Email Support"
    ]
  },
  {
    name: "Professional",
    price: "59,999",
    popular: true,
    features: [
      "Premium Media Coverage",
      "Advanced Social Media Strategy",
      "4 Press Releases per Month",
      "Crisis Management",
      "Personal Brand Development",
      "Weekly Performance Reports",
      "Priority Support"
    ]
  },
  {
    name: "Enterprise",
    price: "99,999",
    features: [
      "Elite Media Coverage",
      "Complete Brand Strategy",
      "Unlimited Press Releases",
      "24/7 Crisis Management",
      "Personal PR Manager",
      "Daily Performance Reports",
      "VIP Support",
      "Event Management"
    ]
  }
];

export default Services;