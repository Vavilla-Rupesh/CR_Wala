import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CR Wala</h1>
          <p className="text-xl text-gray-300">
            Your trusted partner in building and managing powerful brand presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              At CR Wala, we're dedicated to helping founders, individuals, and actors build 
              meaningful connections with their audience through strategic PR and marketing solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              We envision a world where every brand story is told authentically, reaching and 
              resonating with the right audience at the right time.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-8 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6">Why Choose CR Wala?</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-start"
              >
                <svg
                  className="w-6 h-6 text-accent mt-1 mr-3"
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
                <div>
                  <h3 className="font-bold mb-1">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Expert Team",
    description: "Our team brings years of experience in PR, marketing, and brand development."
  },
  {
    title: "Customized Strategies",
    description: "We create tailored solutions that align with your unique goals and vision."
  },
  {
    title: "Proven Results",
    description: "Track record of successful campaigns and satisfied clients across industries."
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance and crisis management when you need it most."
  }
];

export default About;