import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function Profile() {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-2xl font-bold">
                {user.name[0].toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-400">{user.email}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">My Appointments</h2>
                <div className="space-y-4">
                  {/* Dummy appointments */}
                  <div className="glass-card p-4">
                    <p className="font-medium">PR Strategy Consultation</p>
                    <p className="text-sm text-gray-400">January 15, 2024 - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logout}
                className="w-full py-3 rounded-lg font-medium bg-red-500/20 hover:bg-red-500/30 text-red-500"
              >
                Logout
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Profile;