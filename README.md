# UIU Developers Hub

A comprehensive all-in-one platform for UIU Developers Hub that combines a public website, social media platform, video meeting app, and Jira-like task management system.

## 🚀 Features

### Public Pages (No Authentication Required)
- **Home**: Hero section, features overview, stats, and CTA
- **About**: Detailed information about UIU Developers Hub
- **Events**: Event listings with filters and details
- **Community**: Team member profiles and community stats
- **Contact**: Contact form and information

### Authenticated Features
- **Dashboard**: Personalized home with quick stats and actions
- **Social Media**: Posts, feed, profiles, likes, comments, and interactions
- **Video Meetings**: Schedule and join video conferences (Jitsi Meet integration ready)
- **Task Management**: Kanban boards, projects, filters, and reporting
- **Role Management**: Admin panel for managing user roles and permissions

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v7
- **State Management**: React Context API + TanStack Query
- **Styling**: Tailwind CSS 4.x + Custom CSS
- **Forms**: React Hook Form + Zod (ready for implementation)
- **Backend**: Firebase (Auth, Firestore, Storage, Functions, Hosting)
- **Video**: Jitsi Meet API (ready for integration)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd UIUDevelopersHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Then update `.env` with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

4. **Add fonts and assets**
   - Place Tamzen fonts in `/public/fonts/`:
     - `Tamzen10x20r.ttf` (regular)
     - `Tamzen10x20b.ttf` (bold)
   - Add team photos to `/public/images/`
   - Add event photos to `/public/Events/`
   - Add logos to `/public/Logos/`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Design System

The project preserves the HackDay design aesthetic:

- **Colors**: Dark gradient backgrounds (`#1a1a2e` → `#16213e` → `#0f3460`), orange accents (`#ff6b35`, `#f7931e`), blue (`#569cd6`)
- **Font**: Tamzen bitmap font
- **Effects**: Custom cursor, 3D text, particle animations, glow effects
- **Sounds**: Keyboard sound system using Web Audio API

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── dashboard/      # Dashboard-specific components
│   └── ui/             # UI components (Toaster, etc.)
├── contexts/           # React contexts (Auth, Sound)
├── layouts/            # Layout components
├── pages/              # Page components
│   ├── auth/           # Authentication pages
│   ├── dashboard/      # Dashboard pages
│   └── ...             # Public pages
├── config/             # Configuration files
├── types/              # TypeScript type definitions
├── styles/             # Global styles
└── utils/              # Utility functions
```

## 🔐 Authentication

The app uses Firebase Authentication with the following user roles:
- **Guest**: Public pages only
- **Member**: Basic authenticated user
- **Moderator**: Content management
- **Admin**: Full access + role management
- **Super Admin**: System-level access

## 🚧 Implementation Status

### ✅ Completed
- Project setup and configuration
- Design system and styling
- Routing structure
- Public pages (Home, About, Events, Community, Contact)
- Authentication pages (Sign In, Sign Up)
- Dashboard layout and navigation
- Social media platform structure
- Video meeting management structure
- Task management system structure
- Role management admin panel

### 🔄 TODO (Backend Integration)
- Firebase Authentication implementation
- Firestore database integration
- Firebase Storage for file uploads
- Real-time data listeners
- Jitsi Meet integration
- Form validation with Zod
- Error handling and loading states
- Image optimization
- Service worker for offline support

## 📝 Notes

- **No Backend Yet**: As requested, no backend implementation has been done. All Firebase functions are stubbed and ready for implementation.
- **Mock Data**: The app currently uses mock data. Replace with actual Firebase queries when backend is implemented.
- **Environment Variables**: Make sure to set up your Firebase configuration in `.env` before running the app.

## 🎯 Next Steps

1. Set up Firebase project and configure authentication
2. Implement Firestore database structure
3. Connect frontend to Firebase services
4. Add Jitsi Meet integration for video meetings
5. Implement form validation and error handling
6. Add image upload functionality
7. Optimize performance and add loading states
8. Test and deploy

## 📄 License

This project is for UIU Developers Hub community use.

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and create a pull request.

---

Built with ❤️ by UIU Developers Hub

# UIUDevelopersHubFrontend
