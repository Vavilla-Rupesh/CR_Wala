# CR Wala - PR Marketing Website Documentation

## Project Overview
CR Wala is a modern React-based website for a PR marketing agency, featuring a responsive design, dark/light theme support, authentication, and interactive 3D elements.

## Tech Stack
- React 18.3
- Vite
- React Router DOM
- Framer Motion (animations)
- Three.js (3D graphics)
- Tailwind CSS (styling)
- Headless UI (accessible components)

## Project Structure

### Core Components
1. **App.jsx**
   - Root component
   - Handles routing
   - Wraps application with ThemeProvider and AuthProvider

2. **Context Providers**
   - `ThemeContext`: Manages dark/light theme
   - `AuthContext`: Handles user authentication state

### Pages
1. **Home**
   - Landing page with 3D sphere animation
   - Service highlights
   - Call-to-action buttons

2. **Services**
   - Pricing packages display
   - Package selection
   - Consultation booking

3. **About**
   - Company information
   - Mission and vision
   - Key features

4. **Contact**
   - Contact form
   - Company information
   - Location details

5. **Profile**
   - User profile display
   - Appointment management
   - Logout functionality

### Components
1. **Navbar**
   - Responsive navigation
   - Theme toggle
   - Authentication controls
   - Mobile menu

2. **Footer**
   - Company links
   - Social media
   - Quick access links

3. **AuthModal**
   - Login/Signup functionality
   - Form validation
   - Modal state management

4. **AppointmentModal**
   - Booking form
   - Package selection
   - Submission handling

5. **ThemeToggle**
   - Theme switching
   - Persistent theme storage

## Key Features
1. **Authentication**
   - Email/password login
   - User registration
   - Protected routes

2. **Theming**
   - Dark/light mode toggle
   - Local storage persistence
   - Smooth transitions

3. **Responsive Design**
   - Mobile-first approach
   - Breakpoint optimization
   - Flexible layouts

4. **Animations**
   - Page transitions
   - Interactive elements
   - 3D visualization

## State Management
1. **Context API**
   - Theme state
   - Authentication state
   - Global app state

2. **Local State**
   - Component-specific state
   - Form handling
   - UI interactions

## Styling
- Tailwind CSS for utility-first styling
- Custom glass-card effect
- Gradient text effects
- Responsive design utilities

## Navigation Flow
1. User lands on Home page
2. Can browse Services, About, Contact
3. Authentication required for:
   - Booking appointments
   - Accessing profile
   - Managing appointments

## Future Enhancements
1. Backend integration
2. Real authentication
3. Appointment management
4. Payment integration
5. Admin dashboard