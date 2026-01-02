# Quick Start Guide

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   - Copy `.env.example` to `.env`
   - Add your Firebase configuration values

3. **Add Assets**
   - Place Tamzen fonts in `/public/fonts/`:
     - `Tamzen10x20r.ttf` (regular)
     - `Tamzen10x20b.ttf` (bold)
   - Add team photos to `/public/images/`
   - Add event photos to `/public/Events/`
   - Add logos to `/public/Logos/`

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Important Notes

- **No Backend Yet**: All Firebase functions are stubbed and ready for implementation
- **Mock Data**: The app uses mock data. Replace with actual Firebase queries when backend is implemented
- **TypeScript Errors**: Some Firebase-related TypeScript errors are expected until the `firebase` package is installed

## 🔧 Next Steps

1. Install Firebase: `npm install firebase`
2. Configure Firebase project
3. Implement authentication functions
4. Connect to Firestore database
5. Add real-time listeners
6. Implement file uploads
7. Integrate Jitsi Meet for video meetings

## 📚 Documentation

See `README.md` for full documentation.

