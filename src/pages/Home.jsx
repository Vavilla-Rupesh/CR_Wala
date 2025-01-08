import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

function Home() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sphere args={[1, 32, 32]}>
              <meshStandardMaterial color="#6366f1" wireframe />
            </Sphere>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Elevate Your Brand with
              <span className="gradient-text"> CR Wala</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium PR marketing services for founders, individuals, and actors.
              Transform your presence and amplify your impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent px-8 py-4 rounded-lg text-lg font-medium"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-accent font-medium"
                >
                  Learn More →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Personal Branding",
    description: "Build a strong personal brand that resonates with your audience and establishes you as an industry leader."
  },
  {
    title: "Media Relations",
    description: "Get featured in top-tier publications and media outlets to increase your visibility and credibility."
  },
  {
    title: "Crisis Management",
    description: "Protect and maintain your reputation with our expert crisis management and communication strategies."
  }
];

export default Home;