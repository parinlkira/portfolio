const { useState, useEffect } = React;

// Header Component
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav-container">
                <div className="logo">
                    <h2>Parin Dalwadi</h2>
                </div>
                
                <button 
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                    <li><a onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                    <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                    <li><a onClick={() => scrollToSection('education')}>Education</a></li>
                    <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
                    <li><a onClick={() => scrollToSection('contact')} className="nav-cta">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

// Hero Section Component
const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Parin Dalwadi</span>
                    </h1>
                    <p className="hero-subtitle">Senior Full-Stack Engineer | Cloud Architect | DevOps Expert</p>
                    <p className="hero-description">
                        Building scalable cloud-native applications at Delta Air Lines. Former Amazon SDE with 6+ years 
                        of experience in AWS, microservices, and distributed systems. Master's in Computer Network Engineering from NC State.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            <i className="fas fa-envelope"></i> Get In Touch
                        </a>
                        <a href="PARIN DALWADI RESUME.pdf" download className="btn btn-secondary">
                            <i className="fas fa-download"></i> Download Resume
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src="headshot.jpg" alt="Parin Dalwadi" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// About Section Component
const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a Senior Full-Stack Engineer with extensive experience in building scalable cloud-native 
                            applications at industry-leading companies like Delta Air Lines and Amazon. My expertise spans 
                            across full-stack development, AWS cloud architecture, DevOps automation, and microservices design.
                        </p>
                        <p>
                            With a Master's degree in Computer Network Engineering from North Carolina State University, 
                            I specialize in creating high-performance distributed systems that serve millions of users globally. 
                            I have a proven track record of delivering significant cost savings ($250K+/year), improving system 
                            performance (400% faster data processing), and driving revenue growth ($5M+/year).
                        </p>
                        <p>
                            I'm passionate about leveraging cutting-edge technologies including AWS, Java, Python, NodeJS, 
                            React, and DevOps tools to solve complex business problems and deliver exceptional user experiences.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <h3>6+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item">
                                <h3>20+</h3>
                                <p>Cloud Services Built</p>
                            </div>
                            <div className="stat-item">
                                <h3>$5M+</h3>
                                <p>Revenue Impact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Skills Section Component
const Skills = () => {
    const skillCategories = [
        {
            category: "Programming Languages",
            skills: [
                { name: "Java", level: 95 },
                { name: "Python", level: 90 },
                { name: "JavaScript/TypeScript", level: 90 },
                { name: "Scala", level: 75 },
                { name: "SQL", level: 85 }
            ]
        },
        {
            category: "Cloud & DevOps",
            skills: [
                { name: "AWS (S3, Lambda, EC2, DynamoDB)", level: 95 },
                { name: "RedHat Openshift (ROSA)", level: 90 },
                { name: "Tekton Pipelines", level: 85 },
                { name: "CI/CD Automation", level: 90 },
                { name: "Docker & Kubernetes", level: 85 }
            ]
        },
        {
            category: "Frameworks & Tools",
            skills: [
                { name: "Spring Boot", level: 90 },
                { name: "Quarkus", level: 85 },
                { name: "Node.js", level: 85 },
                { name: "React.js", level: 80 },
                { name: "Mockito & JUnit", level: 90 }
            ]
        },
        {
            category: "Databases & Big Data",
            skills: [
                { name: "DynamoDB", level: 90 },
                { name: "MySQL", level: 85 },
                { name: "AWS S3", level: 90 },
                { name: "Data Modeling", level: 85 },
                { name: "SageMaker", level: 75 }
            ]
        },
        {
            category: "Architecture & Design",
            skills: [
                { name: "Microservices Architecture", level: 95 },
                { name: "RESTful APIs", level: 95 },
                { name: "Circuit Breaker Pattern", level: 90 },
                { name: "Distributed Systems", level: 90 },
                { name: "Test Driven Development", level: 90 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div 
                                                className="skill-progress" 
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Experience Section Component
const Experience = () => {
    const experiences = [
        {
            title: "Senior Full-Stack Engineer",
            company: "Delta Air Lines",
            location: "Atlanta, Georgia, USA",
            period: "Aug 2021 - Present",
            description: [
                "Led development of 20+ Cloud Native RESTful Microservices and API Endpoints, managing an 11-person Core Team",
                "Reduced billing costs by $100K/month and latency from 15 sec to 10 ms for Delta Services",
                "Designed Scalable Service Architecture and performed Data Cleanup of 20 TB redundant data from DynamoDB",
                "Achieved 99.99% failure tolerant system through AWS Cloud services and containerization",
                "Deployed REST APIs using RedHat Openshift (ROSA), Tekton pipelines, and AWS at Global Scale"
            ]
        },
        {
            title: "Software Development Engineer I",
            company: "Amazon.com Services, Inc.",
            location: "Seattle, Washington, USA",
            period: "Jul 2019 - Aug 2021",
            description: [
                "Launched Distributed System in 14 Markets Worldwide for image-based classification of catalog items",
                "Achieved memory cost reduction of $100K/month by optimizing data storage from SageMaker to S3",
                "Designed end-to-end data quality validation service reducing team's workload from weeks to hours",
                "Increased org revenue by $5 Million/year through automation and error mitigation",
                "Reduced operational load by a factor of 10 through scalable service implementation"
            ]
        },
        {
            title: "Graduate Student",
            company: "North Carolina State University",
            location: "Raleigh, North Carolina, USA",
            period: "Aug 2017 - May 2019",
            description: [
                "Master of Science in Computer Network Engineering",
                "Focused on distributed systems, cloud architecture, and network engineering",
                "Conducted research in scalable system design and performance optimization"
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3 className="timeline-title">{exp.title}</h3>
                                <h4 className="timeline-company">{exp.company}</h4>
                                <p className="timeline-location">
                                    <i className="fas fa-map-marker-alt"></i> {exp.location}
                                </p>
                                <p className="timeline-period">
                                    <i className="fas fa-calendar-alt"></i> {exp.period}
                                </p>
                                <ul className="timeline-description">
                                    {exp.description.map((item, itemIdx) => (
                                        <li key={itemIdx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Education Section Component
const Education = () => {
    const education = [
        {
            degree: "Master of Science in Computer Network Engineering",
            institution: "North Carolina State University",
            location: "Raleigh, North Carolina, USA",
            period: "Aug 2017 - May 2019",
            description: "Advanced study in computer networking, distributed systems, and software engineering with focus on scalable cloud architectures."
        },
        {
            degree: "Bachelor of Technology in Electronics and Tele-Communications Engineering",
            institution: "Vishwakarma Institute of Technology",
            location: "Pune, Maharashtra, India",
            period: "Aug 2012 - May 2016",
            description: "Comprehensive foundation in electronics, telecommunications, and computer engineering principles."
        }
    ];

    return (
        <section id="education" className="education">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-grid">
                    {education.map((edu, idx) => (
                        <div key={idx} className="education-card">
                            <div className="education-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3 className="education-degree">{edu.degree}</h3>
                            <h4 className="education-institution">{edu.institution}</h4>
                            <p className="education-location">
                                <i className="fas fa-map-marker-alt"></i> {edu.location}
                            </p>
                            <p className="education-period">
                                <i className="fas fa-calendar-alt"></i> {edu.period}
                            </p>
                            <p className="education-description">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Projects Section Component
const Projects = () => {
    const projects = [
        {
            title: "Delta Containerization - AWS DevOps Architecture",
            description: [
                "Performed DevOps Automation and Productionized AWS Cloud services for Delta Airlines.",
                "Deployed containerization of REST APIs and Batch Job Services using RedHat Openshift (ROSA) and Tekton pipelines.",
                "Achieved 99.99% failure tolerant system at global scale."
            ],
            technologies: ["AWS", "RedHat Openshift", "ROSA", "Tekton", "Java", "CI/CD", "DynamoDB"],
            company: "Delta Air Lines",
            impact: "Achieved $100K/month cost reduction and reduced latency from 15s to 10ms"
        },
        {
            title: "Circuit Breaker Reference Service",
            description: [
                "Designed and implemented a Circuit Breaker Design Pattern service using NodeJS to optimize API calls with FailFast approach.",
                "Achieved high availability through multi-region deployment with 99.99999% resiliency."
            ],
            technologies: ["NodeJS", "Python", "Java", "AWS", "GenAI", "Microservices"],
            company: "Delta Air Lines",
            impact: "Cost reduction of $50K/year through automation and GenAI optimization"
        },
        {
            title: "Automated Distribution Engine (ADE)",
            description: [
                "Owned and drove API Development for Global Footprint Airline Services using Quarkus Framework and DynamoDB Enhanced Client.",
                "Implemented Data Modelling and Test Driven Development."
            ],
            technologies: ["Java", "Spring Boot", "Quarkus", "Mockito", "Python", "TypeScript", "DynamoDB"],
            company: "Delta Air Lines",
            impact: "Improved data reading speed by 400% and cleaned 20TB redundant data"
        },
        {
            title: "Image Based Classification Service",
            description: [
                "Launched a Distributed System in 14 Markets Worldwide on Amazon.com for image-based classification of catalog items.",
                "Optimized data storage migration from SageMaker to Amazon S3."
            ],
            technologies: ["Python", "TypeScript", "AWS S3", "SageMaker", "Machine Learning"],
            company: "Amazon.com Services",
            impact: "Memory cost reduction of $100K/month"
        },
        {
            title: "Catalog Data Validation Service",
            description: [
                "Designed and implemented end-to-end service for data quality validation of catalog items.",
                "Reduced Applied Science team's workload from weeks to hours through automation."
            ],
            technologies: ["Java", "Scala", "TypeScript", "AWS", "Data Engineering"],
            company: "Amazon.com Services",
            impact: "Increased org revenue by $5M/year and reduced operational load by 10x"
        },
        {
            title: "Student Database Management System",
            description: [
                "A comprehensive Java-based application for managing student records with MySQL database integration.",
                "Features CRUD operations, search functionality, and data validation."
            ],
            technologies: ["Java", "MySQL", "JDBC", "Swing"],
            company: "Academic Project",
            impact: "Efficient student record management system"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-company">
                                    <i className="fas fa-building"></i> {project.company}
                                </p>
                                <ul className="project-description">
                                    {project.description.map((item, descIdx) => (
                                        <li key={descIdx}>{item}</li>
                                    ))}
                                </ul>
                                <div className="project-impact">
                                    <i className="fas fa-chart-line"></i> <strong>Impact:</strong> {project.impact}
                                </div>
                                <div className="project-tech">
                                    {project.technologies.map((tech, techIdx) => (
                                        <span key={techIdx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Section Component
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, 
                            or opportunities to be part of your visions.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>parin.dalwadi@email.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+1 (XXX) XXX-XXXX</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>Location</h4>
                                    <p>Your City, Country</p>
                                </div>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                <i className="fas fa-paper-plane"></i> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2025 Parin Dalwadi. All rights reserved.</p>
                <p>Built with React & ❤️</p>
            </div>
        </footer>
    );
};

// Main App Component
const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
