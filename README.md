# Abhishek Shukla - Portfolio Website

A modern, fully responsive static portfolio website built with HTML, Tailwind CSS, vanilla JavaScript, and GSAP animations.

## 🌟 Features

- **7 Pages**: Home, About, Skills, Projects, Journey, Contact, Blog
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between dark and light modes with persistent preference
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Modern UI**: Clean, professional design with gradient accents
- **SEO Optimized**: Proper meta tags, semantic HTML, and heading structure
- **Interactive Elements**: Dynamic text cycling, form validation, project filtering

## 📄 Pages

### 1. Home (index.html)
- Hero section with dynamic headline cycling
- Quick stats showcase
- Featured projects preview
- Social media links

### 2. About (about.html)
- Detailed biography
- Education and experience
- Core values and mission
- Call-to-action sections

### 3. Skills (skills.html)
- Frontend development skills with progress bars
- Backend technologies
- Tools and additional expertise
- Categorized skill sets

### 4. Projects (projects.html)
- Filterable project portfolio
- Project cards with tech stacks
- Live demo and detail links
- Categories: Web Apps, SaaS, E-Commerce

### 5. Journey (journey.html)
- Interactive timeline of career progression
- Milestones and achievements
- Vision for the future
- Success metrics

### 6. Contact (contact.html)
- Contact form with validation
- Email, location, and WhatsApp info
- Social media links
- Copy email functionality

### 7. Blog (blog.html)
- Featured article section
- Blog post grid with categories
- Newsletter subscription
- Article previews

## 🎨 Design Features

- **Color Scheme**: 
  - Primary: Blue (#1890ff)
  - Accent: Orange (#fa8c16)
  - Dark mode support
  
- **Typography**:
  - Inter (body text)
  - Outfit (headings)
  
- **Animations**:
  - Fade in on scroll
  - Hover effects
  - Progress bar animations
  - Smooth page transitions

## 🚀 Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No frameworks, pure JS
- **GSAP (GreenSock Animation Platform)**: Smooth animations
- **Google Fonts**: Inter and Outfit font families

## 📁 File Structure

```
abhi dev/
├── index.html          # Home page
├── about.html          # About Me page
├── skills.html         # Skills & Tech Stack
├── projects.html       # Projects portfolio
├── journey.html        # Career timeline
├── contact.html        # Contact form & info
├── blog.html           # Blog & articles
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 💻 Local Development

1. **Clone or download** this repository
2. **Open index.html** in your web browser
3. No build process required - it's a static site!

## 🌐 Deployment

This is a static website and can be deployed on any static hosting platform:

- **Vercel**: Drag and drop the folder
- **Netlify**: Connect to Git or drag and drop
- **GitHub Pages**: Push to a repository and enable Pages
- **Any web server**: Upload files via FTP

## 🔧 Customization

### Changing Colors

Edit the Tailwind config in the `<script>` tag of each HTML file:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary': { /* your colors */ },
                'accent': { /* your colors */ }
            }
        }
    }
}
```

### Updating Content

- **Personal Info**: Edit text directly in HTML files
- **Projects**: Modify the project cards in `projects.html`
- **Skills**: Update skill items and percentages in `skills.html`
- **Social Links**: Replace URLs with your actual social media profiles

### Adding New Sections

1. Create new HTML with the same navigation structure
2. Add link to navigation in all pages
3. Apply consistent styling using existing classes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is free to use for personal portfolios. Feel free to customize and deploy your own version!

## 👤 Author

**Abhishek Shukla**
- Email: abhishek@karama.agency
- GitHub: [@abhishekshukla](https://github.com/abhishekshukla)
- LinkedIn: [abhishekshukla](https://linkedin.com/in/abhishekshukla)

## 🙏 Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- GSAP for amazing animation capabilities
- Google Fonts for beautiful typography

---

**Built with ❤️ by Abhishek Shukla**
