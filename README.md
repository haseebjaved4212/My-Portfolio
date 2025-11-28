# Haseeb's Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a front-end developer. Built with React, Vite, and modern web technologies.

 ![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC) ![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02)

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Smooth Scrolling**: Navigation links with smooth scroll to sections
- **Interactive Animations**: GSAP-powered scroll animations and transitions
- **Contact Form**: Functional contact form with Web3Forms integration
- **Project Showcase**: Horizontal scrolling project gallery
- **Responsive Design**: Fully responsive across all devices
- **Custom Cursor**: Interactive custom cursor for enhanced UX
- **Dark Mode Support**: Built-in dark mode styling
- **Social Links**: Integrated social media profiles (GitHub, LinkedIn, Twitter/X)

## 🚀 Tech Stack

### Core Technologies

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **Tailwind CSS 4.1.16** - Utility-first CSS framework

### Animation & Effects

- **GSAP 3.13.0** - Advanced animations and scroll triggers
- **Framer Motion 12.23.24** - Component animations
- **ScrollTrigger** - Scroll-based animations

### Additional Libraries

- **React Icons 5.5.0** - Icon library


## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

   > **Note**: See [Web3Forms Setup](#-web3forms-configuration) section for detailed instructions.

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5174` (or the port shown in terminal)

## ⚙️ Configuration

### Web3Forms Configuration

The contact form uses Web3Forms for email delivery. Follow these steps:

1. **Get your Access Key**

   - Visit [https://web3forms.com](https://web3forms.com)
   - Enter your email address (e.g., `contactihaseeb@gmail.com`)
   - When prompted for domain, enter: `localhost` (for local development)
   - Copy the access key sent to your email

2. **Add to Environment Variables**

   - Create `.env.local` file in project root
   - Add: `VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key`
   - **Important**: No spaces after the `=` sign

3. **Restart the server**
   ```bash
   npm run dev
   ```

For detailed setup instructions, see [WEB3FORMS_SETUP.md](./WEB3FORMS_SETUP.md)

### Social Media Links

Update your social media profiles in `src/components/Header.jsx`:

```javascript
// Desktop Social Links (around line 176)
href = "https://github.com/haseebjaved4212"; // Your GitHub
href = "https://x.com/Haseebjaved4212"; // Your Twitter/X
href = "https://www.linkedin.com/in/haseeb-javed-0332b3341"; // Your LinkedIn

// Mobile Social Links (around line 250)
// Update the same URLs in mobile menu section
```

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── Images/          # Project images and assets
├── src/
│   ├── components/
│   │   ├── About.jsx    # About section component
│   │   ├── Contact.jsx  # Contact section with scroll animation
│   │   ├── CustomCursor.jsx  # Custom cursor component
│   │   ├── Footer.jsx   # Footer component
│   │   ├── Header.jsx   # Navigation header with contact form
│   │   ├── Hero.jsx     # Hero/landing section
│   │   └── Projects.jsx # Projects showcase section
│   ├── context/
│   │   └── ContactFormContext.jsx  # Contact form state management
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .env.local           # Environment variables (create this)
├── .gitignore          # Git ignore rules
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## 🎨 Components Overview

### Header Component

- Navigation menu with smooth scroll
- Social media links
- Contact form modal (triggered by "Hire Me" button)
- Responsive mobile menu

### Hero Component

- Centered hero text
- Responsive typography
- Smooth entrance animations

### About Component

- Personal introduction
- Animated stars background
- Profile image

### Projects Component

- Horizontal scrolling project gallery
- GSAP-powered animations
- Project cards with links
- Featured projects showcase

### Contact Component

- Scroll-triggered animation
- "Contact Me" button that opens contact form
- Interactive circle animation

### Custom Cursor Component

- Custom cursor with hover effects
- Smooth cursor following

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📦 Building for Production

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Preview the build**

   ```bash
   npm run preview
   ```

3. **Deploy**

   The `dist` folder contains the production-ready files. Deploy to:

   - **Vercel**: Connect your GitHub repo
   - **Netlify**: Drag and drop the `dist` folder
   - **GitHub Pages**: Use GitHub Actions or manual upload
   - Any static hosting service

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variable: `VITE_WEB3FORMS_ACCESS_KEY`
4. Deploy!

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add environment variable in Netlify dashboard
4. Deploy!

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🎯 Features in Detail

### Smooth Scroll Navigation

- Clicking navigation links smoothly scrolls to respective sections
- Works on both desktop and mobile
- Mobile menu closes automatically after navigation

### Contact Form

- Integrated with Web3Forms
- Form validation
- Success/error messages
- Auto-closes after successful submission
- Accessible from "Hire Me" button and "Contact Me" button

### Animations

- GSAP ScrollTrigger animations
- Framer Motion component animations
- Smooth page transitions
- Interactive hover effects

### Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔧 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)

   - Update heading text
   - Modify description

2. **About Section** (`src/components/About.jsx`)

   - Update "About Me" text
   - Replace profile image in `public/Images/person.png`

3. **Projects** (`src/components/Projects.jsx`)

   - Update `projectsData` array with your projects
   - Add project images to `public/Images/`
   - Update project links

4. **Contact Email**
   - Update email in `src/components/Header.jsx` (line ~62)
   - Update email in Web3Forms setup

### Styling

- Colors: Modify Tailwind classes or update `tailwind.config.js`
- Fonts: Update in `index.html` or `index.css`
- Animations: Adjust GSAP and Framer Motion settings

##  Troubleshooting

### Contact Form Not Working

- ✅ Check `.env.local` file exists
- ✅ Verify access key has no spaces after `=`
- ✅ Restart development server
- ✅ Check browser console for errors

### Animations Not Working

- ✅ Ensure GSAP is properly imported
- ✅ Check ScrollTrigger is registered
- ✅ Verify refs are properly attached

### Build Errors

- ✅ Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- ✅ Check Node.js version (v18+)
- ✅ Verify all environment variables are set

##  License

This project is private and personal. All rights reserved.

## 👤 Author

**Haseeb Javed**

- GitHub: [@haseebjaved4212](https://github.com/haseebjaved4212)
- LinkedIn: [Haseeb Javed](https://www.linkedin.com/in/haseeb-javed-0332b3341)
- Twitter/X: [@Haseebjaved4212](https://x.com/Haseebjaved4212?t=Be1nJmdR3ipCsHK3dylBTA&s=09)
- Email: contactimhaseeb@gmail.com

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) for powerful animations
- [Framer Motion](https://www.framer.com/motion/) for component animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Web3Forms](https://web3forms.com/) for contact form service
- [React Icons](https://react-icons.github.io/react-icons/) for icons

## 📄 Additional Documentation

- [Web3Forms Setup Guide](./WEB3FORMS_SETUP.md) - Detailed Web3Forms configuration

---

**Built with ❤️ using React and modern web technologies**
