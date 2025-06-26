# Ryan Jones Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Game Developer and Software Engineer.

## 🚀 Live Site

Visit the live portfolio at: [ryanmjones.co.uk](https://www.ryanmjones.co.uk)

## 🛠️ Built With

- **React** - Frontend framework for building user interfaces
- **Vite** - Fast build tool and development server
- **React Bootstrap** - UI component library for responsive design
- **React Router** - Client-side routing
- **SCSS** - Enhanced CSS with variables and mixins
- **Material-UI Icons** - Icon components for social links

## 📱 Features

- Fully responsive design that works on all devices
- Clean, modern interface with smooth animations
- Project showcase with detailed case studies
- Interactive contact form with Formspree integration
- Skills visualization with progress bars
- Resume/CV viewing capability
- SEO optimized with proper meta tags
- Accessible design following best practices

## 🏗️ Project Structure

```
src/
├── assets/          # Static files (images, fonts, JSON data)
├── components/      # Reusable React components
├── pages/          # Page components (Home, About, Portfolio, etc.)
├── utils/          # Utility functions
├── hooks/          # Custom React hooks
├── constants/      # Application constants
└── index.scss      # Global styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ryanmichaeljones/ryanmichaeljones.github.io.git
cd ryanmichaeljones.github.io
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser

### Building for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## 📝 Content Management

Project data is stored in JSON files within the `src/assets/` directory:

- `portfolio-projects.json` - Detailed project information
- `portfolio-cards.json` - Project preview cards
- `about-education.json` - Education history
- `about-experience.json` - Work experience
- `about-skills.json` - Skills and proficiency levels

Simply update these files to modify the content without touching the code.

## 🎨 Customization

### Colors

Primary colors and themes can be modified in:
- `src/constants/index.js` - Color constants
- `src/index.scss` - SCSS variables and global styles

### Fonts

The project uses the Poppins font family. Font files are stored in `src/assets/fonts/`.

## 📧 Contact Form

The contact form is powered by [Formspree](https://formspree.io/), providing secure form submissions without a backend server.

## 🚀 Deployment

This site is deployed using GitHub Pages with a custom domain managed through Cloudflare:

1. Build the project: `npm run build`
2. Deploy to GitHub Pages
3. Custom domain configured via Cloudflare for SSL and performance

## 📊 Performance

- Lighthouse Performance Score: 95+
- Mobile-first responsive design
- Optimized images and lazy loading
- Minimal bundle size with code splitting

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome! Feel free to:

1. Open an issue for bugs or suggestions
2. Submit a pull request for improvements
3. Reach out via the contact form on the website

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, feel free to reach out:

- Email: ryanmichaeljonesbusiness@gmail.com
- LinkedIn: [Ryan Jones](https://www.linkedin.com/in/ryanjonesmichael/)
- GitHub: [ryanmichaeljones](https://github.com/ryanmichaeljones)
- Portfolio: [ryanmjones.co.uk](https://www.ryanmjones.co.uk)
