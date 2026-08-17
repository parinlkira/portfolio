# Parin Dalwadi - Professional Portfolio

A modern, responsive portfolio website built with React, HTML5, and CSS3, featuring real professional experience from Delta Air Lines and Amazon.

## 🌟 Portfolio Highlights

### Professional Background
- **Senior Full-Stack Engineer** at Delta Air Lines (Aug 2021 - Present)
- **Software Development Engineer I** at Amazon.com Services (Jul 2019 - Aug 2021)
- **Master of Science** in Computer Network Engineering from NC State University
- **6+ years** of experience in cloud-native application development

### Key Achievements
- 💰 **$250K+/year** in cost savings through optimization
- 📈 **$5M+/year** revenue impact at Amazon
- 🚀 **400%** performance improvement in data processing
- 🌍 **20+** cloud services deployed at global scale
- ⚡ **99.99999%** system resiliency achieved

## 📂 Project Structure

```
portfolio/
├── index.html              # Landing page with auto-redirect
├── portfolio.html          # Main HTML file
├── portfolio.jsx           # React components with real data
├── portfolio.css           # Professional responsive styling
├── headshot.jpg           # Profile picture
├── PARIN DALWADI RESUME.pdf  # Resume document
└── README.md              # This file
```

## 🚀 Quick Start

### Start Local Server

Navigate to the portfolio folder and start a server:

```bash
cd /Users/parindalwadi/Desktop/github/webdesign/portfolio

# Option 1: Using npx http-server (recommended)
npx http-server -p 8080 -a 127.0.0.1 -c-1

# Option 2: Using Python
python3 -m http.server 8080
```

Then open: **http://localhost:8080**

## 📋 Portfolio Sections

### 1. Hero Section
- Professional headline: "Senior Full-Stack Engineer | Cloud Architect | DevOps Expert"
- Profile picture from headshot.jpg
- Quick access buttons (Contact, Download Resume)

### 2. About Me
- Overview of 6+ years professional experience
- Focus on Delta Air Lines and Amazon achievements
- Key statistics: 20+ services, $5M+ impact

### 3. Technical Skills (5 Categories)
- **Programming Languages**: Java (95%), Python (90%), JavaScript/TypeScript (90%), Scala, SQL
- **Cloud & DevOps**: AWS (95%), RedHat Openshift (90%), Tekton, CI/CD, Docker/Kubernetes
- **Frameworks & Tools**: Spring Boot (90%), Quarkus (85%), Node.js, React.js, Mockito
- **Databases & Big Data**: DynamoDB (90%), MySQL, S3, Data Modeling, SageMaker
- **Architecture & Design**: Microservices (95%), RESTful APIs (95%), Circuit Breaker, Distributed Systems

### 4. Professional Experience
1. **Senior Full-Stack Engineer** - Delta Air Lines (2021-Present)
   - Led 20+ microservices development
   - $100K/month cost reduction
   - 15s to 10ms latency improvement
   - 20TB data cleanup

2. **Software Development Engineer I** - Amazon (2019-2021)
   - 14 markets worldwide deployment
   - $100K/month memory savings
   - $5M/year revenue increase
   - 10x operational efficiency

### 5. Education
1. **Master of Science in Computer Network Engineering**
   - North Carolina State University (2017-2019)
   - Raleigh, North Carolina, USA

2. **Bachelor of Technology in Electronics and Telecommunications**
   - Vishwakarma Institute of Technology (2012-2016)
   - Pune, Maharashtra, India

### 6. Featured Projects
1. **Delta Containerization** - AWS DevOps Architecture
   - Impact: $100K/month savings, 15s to 10ms latency

2. **Circuit Breaker Reference Service**
   - Impact: $50K/year savings, 99.99999% resiliency

3. **Automated Distribution Engine (ADE)**
   - Impact: 400% faster data processing, 20TB cleanup

4. **Image Based Classification Service** (Amazon)
   - Impact: $100K/month memory savings

5. **Catalog Data Validation Service** (Amazon)
   - Impact: $5M/year revenue, 10x efficiency

6. **Student Database Management System** (Academic)
   - Java, MySQL, JDBC, Swing

### 7. Contact Section
- Contact form with name, email, message
- Social media links (LinkedIn, GitHub, Twitter, Instagram)
- Email and location info (to be updated)

## 🎨 Customization Guide

### Update Personal Information

**Contact Details** (`portfolio.jsx`, Contact component ~line 448):
```jsx
<p>your.email@example.com</p>
<p>+1 (XXX) XXX-XXXX</p>
<p>Your City, State</p>
```

**Social Media Links** (`portfolio.jsx`, Contact component ~line 469):
```jsx
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourusername">GitHub</a>
```

### Update Content from Resume

All education, experience, and projects are now populated from `PARIN DALWADI RESUME.pdf`. 
To update, modify the arrays in `portfolio.jsx`:
- `Education` component (line ~316)
- `Experience` component (line ~224)
- `Projects` component (line ~288)
- `Skills` component (line ~154)

### Color Scheme

Edit CSS variables in `portfolio.css` (lines 5-17):
```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Accent color */
    --accent-color: #06b6d4;     /* Highlights */
}
```

## 🛠️ Technologies Used

- **React 18**: Component-based UI
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid & Flexbox
- **Font Awesome 6**: Icons
- **Google Fonts**: Inter & Poppins
- **Babel Standalone**: JSX transformation

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px (full layout)
- **Tablet**: 768px - 1024px (adjusted grid)
- **Mobile**: < 768px (single column, hamburger menu)
- **Small Mobile**: < 480px (optimized for small screens)

## ✨ Key Features

### Performance
- ✅ Optimized images and assets
- ✅ Efficient CSS with custom properties
- ✅ Minimal dependencies (CDN-based React)
- ✅ Fast load times

### Accessibility
- ✅ Semantic HTML5 elements
- ✅ ARIA labels for screen readers
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Alt text for images

### User Experience
- ✅ Smooth scrolling navigation
- ✅ Mobile-first responsive design
- ✅ Interactive hover states
- ✅ Floating profile picture animation
- ✅ Sticky header with scroll effect
- ✅ Hamburger menu for mobile

### Code Quality
- ✅ Component-based React architecture
- ✅ Clean, maintainable code
- ✅ CSS custom properties for theming
- ✅ Data extracted from actual resume

## 🌐 Deployment Options

### GitHub Pages
```bash
# Push to GitHub
git add .
git commit -m "Update portfolio"
git push origin main

# Enable GitHub Pages in repository settings
# Select branch: main, folder: /portfolio
```

### Netlify
1. Drag and drop the `portfolio` folder to Netlify
2. Or connect GitHub repository
3. Site URL: `yourname.netlify.app`

### Vercel
```bash
cd portfolio
vercel deploy
```

## 📊 Portfolio Data Source

All professional data is extracted from:
- **Source**: `PARIN DALWADI RESUME.pdf`
- **Extraction Method**: PyPDF2 Python library
- **Sections Parsed**: Education, Experience, Projects, Skills

## 🎯 Next Steps

- [ ] Add real email and phone number
- [ ] Update social media profile links
- [ ] Add GitHub repository links to projects
- [ ] Implement backend for contact form (Formspree/EmailJS)
- [ ] Add blog section (optional)
- [ ] Add certifications section (optional)
- [ ] Implement dark mode toggle
- [ ] Add analytics (Google Analytics/Plausible)
- [ ] Add favicon and meta tags for SEO
- [ ] Deploy to production

## 📄 License

This portfolio showcases the professional work of Parin Dalwadi.

---

**Built with ❤️ using React, HTML5, and CSS3**

*Last Updated: October 2025*
*Data Source: PARIN DALWADI RESUME.pdf*
