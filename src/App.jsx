import './App.css';

import { useEffect, useRef, useState } from 'react'

import emailjs from '@emailjs/browser';

import championsleague from './assets/championsleague.png';
import worldcup from './assets/worldcup.png';
import kartel from './assets/kartel.png';
import wedding from './assets/wedding.png';
import resume from './assets/resume.png';
import portfolio from './assets/portfolio.png';


function App() {

    const form = useRef();

   const [showModal, setShowModal] = useState(false);
   const [loading, setLoading] = useState(true);
   const [selectedImage, setSelectedImage] = useState(null);

const [projects, setProjects] = useState(0);
const [clients, setClients] = useState(0);
const [designs, setDesigns] = useState(0);
const [experience, setExperience] = useState(0);

    useEffect(() => {

    const service =
        document.getElementById('quoteService');

    const price =
        document.getElementById('quotePrice');

        const loadingTimer = setTimeout(() => {
    setLoading(false);
}, 1800);

    if (service) {

        service.addEventListener('change', () => {

            const value = service.value;

            price.innerHTML =
                `Estimated Price: JMD ${value}+`;

                
        });
    }

/* SCROLL REVEAL */

const reveals =
    document.querySelectorAll(
        '.pricing-card, .package-card, .portfolio-card, .testimonial-card, .stat-box'
    );

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

            }
        });

    }, {
        threshold: 0.15
    });

reveals.forEach((el) => {
    observer.observe(el);
});

/* COUNTER ANIMATION */

let projectCount = 0;
let clientCount = 0;
let designCount = 0;
let experienceCount = 0;

const counter =
    setInterval(() => {

        if (projectCount < 500) {
            projectCount += 10;
            setProjects(projectCount);
        }

        if (clientCount < 300) {
            clientCount += 5;
            setClients(clientCount);
        }

        if (designCount < 1000) {
            designCount += 20;
            setDesigns(designCount);
        }

        if (experienceCount < 5) {
            experienceCount += 1;
            setExperience(experienceCount);
        }

    }, 30);

return () => {
    clearInterval(counter);
    clearTimeout(loadingTimer);
};

}, []);

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(
            'service_8037afg',
            'template_fl111hh',
            form.current,
            'cYdwRQ8U-EiS7Q_A6'
        )

            .then(() => {

                alert('Message Sent Successfully!');

                form.current.reset();

            })

            .catch((error) => {

                console.log(error);

                alert(error.text);

            });
    };

const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
});

useEffect(() => {

    const moveMouse = (e) => {

        setMousePosition({
            x: e.clientX,
            y: e.clientY
        });

    };

    window.addEventListener('mousemove', moveMouse);

    return () => {
        window.removeEventListener('mousemove', moveMouse);
    };

}, []);

    return (
        

        <>

        {loading && (
    <div className="loader">
        <h1>ProSolutionsJA</h1>
        <p>Loading Professional Solutions...</p>
    </div>
)}

        <div
  className="custom-cursor"
  style={{
    left: mousePosition.x,
    top: mousePosition.y
  }}
></div>

        <div
    className="mouse-glow"
    style={{
        left: mousePosition.x,
        top: mousePosition.y
    }}
></div>

            <div className="scroll-progress"></div>

            <div className="particles">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>

            {/* NAVBAR */}

            <nav className="navbar">

                <h1 className="logo">
                    ProSolutionsJA
                </h1>

                <input type="checkbox" id="menu-toggle" />

                <label
                    htmlFor="menu-toggle"
                    className="hamburger"
                >
                    ☰
                </label>

                <ul className="nav-links">

                    <li><a href="#home">Home</a></li>

                    <li><a href="#services">Services</a></li>

                    <li><a href="#portfolio">Portfolio</a></li>

                    <li><a href="#contact">Contact</a></li>

                </ul>

            </nav>

            {/* HERO */}

            <section className="hero" id="home">

                <div className="overlay">

                    <h2>PROFESSIONAL</h2>

                    <h1>SOLUTIONS</h1>

                    <p>
                        Creative designs, branding,
                        websites, flyers and digital
                        solutions designed to help
                        your business stand out.
                    </p>

                    {selectedImage && (
    <div
        className="image-modal"
        onClick={() => setSelectedImage(null)}
    >
        <img
            src={selectedImage}
            alt="Portfolio Preview"
        />
    </div>
)}
<>
  <button
    className="cta-button"
   onClick={() => setShowModal(true)}
  >
    Get Started
  </button>

  {showModal && (
    <div className="modal-overlay">
      <div className="quote-modal">

        <button
          className="close-modal"
          onClick={() => setShowModal(false)}
        >
          ×
        </button>

        <h2>Request A Quote</h2>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <select>
          <option>Select A Service</option>
          <option>Website Design</option>
          <option>Logo Design</option>
          <option>Flyer Design</option>
          <option>Business Cards</option>
          <option>Social Media Visuals</option>
        </select>

        <textarea
          rows="5"
          placeholder="Tell us about your project..."
        ></textarea>

        <button className="cta-button">
          Submit Request
        </button>

      </div>
    </div>
  )}
</>

                </div>

            </section>

            {/* SERVICES */}

            <section className="services" id="services">

                <h2>OUR SERVICES</h2>

                <div className="service-grid">

                    <div className="service-card">
                        <h3>Flyer Design</h3>
                        <p>Professional flyer designs.</p>
                    </div>

                    <div className="service-card">
                        <h3>Logo Design</h3>
                        <p>Premium logo branding.</p>
                    </div>

                    <div className="service-card">
                        <h3>Website Design</h3>
                        <p>Responsive websites.</p>
                    </div>

                    <div className="service-card">
                        <h3>Cover Art</h3>
                        <p>Professional cover art.</p>
                    </div>

                    <div className="service-card">
                        <h3>Business Cards</h3>
                        <p>Creative business cards.</p>
                    </div>

                    <div className="service-card">
                        <h3>Social Media Visuals</h3>
                        <p>Social media graphics.</p>
                    </div>

                </div>

            </section>

            {/* PRICING */}

            <section className="pricing">

                <h2>OUR PRICING</h2>

                <div className="pricing-grid">

                    <div className="pricing-card">
                        <h3>Website Creation</h3>
                        <h1>JMD 25,000+</h1>
                    </div>

                    <div className="pricing-card featured">
                        <h3>Logo & Brand Design</h3>
                        <h1>JMD 10,000+</h1>
                    </div>

                    <div className="pricing-card">
                        <h3>Poster Creation</h3>
                        <h1>JMD 4,000+</h1>
                    </div>

                    <div className="pricing-card">
                        <h3>Business Cards</h3>
                        <h1>JMD 2,500+</h1>
                    </div>

                    <div className="pricing-card">
                        <h3>Cover Art Designs</h3>
                        <h1>JMD 4,000+</h1>
                    </div>

                    <div className="pricing-card">
                        <h3>Social Media Visuals</h3>
                        <h1>JMD 2,000+</h1>
                    </div>

                </div>

            </section>

            {/* PACKAGE DEALS */}

            <section className="packages">

                <h2>PACKAGE DEALS</h2>

                <div className="packages-grid">

                    <div className="package-card">

                        <h3>Starter Pack</h3>

                        <h1>JMD 12,000</h1>

                        <ul>
                            <li>Logo Design</li>
                            <li>Business Card</li>
                            <li>2 Social Media Posts</li>
                        </ul>

                    </div>

                    <div className="package-card featured-package">

                        <h3>Business Boost Pack</h3>

                        <h1>JMD 25,000</h1>

                        <ul>
                            <li>5 Social Media Posts</li>
                            <li>Flyer Design</li>
                            <li>Business Card</li>
                        </ul>

                    </div>

                    <div className="package-card">

                        <h3>Brand Growth Pack</h3>

                        <h1>JMD 45,000</h1>

                        <ul>
                            <li>Logo + Brand Kit</li>
                            <li>10 Social Media Posts</li>
                            <li>Banner Design</li>
                        </ul>

                    </div>

                </div>

            </section>

            {/* PORTFOLIO */}

            <section className="portfolio" id="portfolio">

                <h2>OUR PORTFOLIO</h2>

                <div className="portfolio-grid">

    <div className="portfolio-card">

        <img
            src={championsleague}
            alt=""
            onClick={() =>
                setSelectedImage(championsleague)
            }
        />

    </div>

    <div className="portfolio-card">

        <img
            src={worldcup}
            alt=""
            onClick={() =>
                setSelectedImage(worldcup)
            }
        />

    </div>

    <div className="portfolio-card">

        <img
            src={kartel}
            alt=""
            onClick={() =>
                setSelectedImage(kartel)
            }
        />

    </div>

    <div className="portfolio-card">

        <img
            src={wedding}
            alt=""
            onClick={() =>
                setSelectedImage(wedding)
            }
        />

    </div>

    <div className="portfolio-card">

        <img
            src={resume}
            alt=""
            onClick={() =>
                setSelectedImage(resume)
            }
        />

    </div>

    <div className="portfolio-card">

        <img
            src={portfolio}
            alt=""
            onClick={() =>
                setSelectedImage(portfolio)
            }
        />

    </div>

</div>

            </section>

            {/* STATS */}

            <section className="stats">

    <div className="stat-box">
        <h1>{projects}+</h1>
        <p>Projects Completed</p>
    </div>

    <div className="stat-box">
        <h1>{clients}+</h1>
        <p>Happy Clients</p>
    </div>

    <div className="stat-box">
        <h1>{designs}+</h1>
        <p>Designs Created</p>
    </div>

    <div className="stat-box">
        <h1>{experience}+</h1>
        <p>Years Experience</p>
    </div>

</section>
            {/* TESTIMONIALS */}

            <section className="testimonials">

                <h2>CLIENT REVIEWS</h2>

                <div className="testimonials-grid">

    <div className="testimonial-card">
        <p>
            “Professional and creative service.”
        </p>
        <h3>- Jason M.</h3>
    </div>

    <div className="testimonial-card featured-testimonial">
        <p>
            “Excellent website and branding.”
        </p>
        <h3>- Samantha W.</h3>
    </div>

    <div className="testimonial-card">
        <p>
            “Very fast delivery and quality.”
        </p>
        <h3>- Kevin R.</h3>
    </div>

    <div className="testimonial-card">
        <p>
            “Completely transformed my business visuals.”
        </p>
        <h3>- Alicia T.</h3>
    </div>

    <div className="testimonial-card">
        <p>
            “The website exceeded my expectations.”
        </p>
        <h3>- Marcus D.</h3>
    </div>

    <div className="testimonial-card">
        <p>
            “Professional communication and amazing designs.”
        </p>
        <h3>- Danielle P.</h3>
    </div>

    <div className="testimonial-card">
        <p>
            “Fast turnaround and premium quality work.”
        </p>
        <h3>- Ricardo S.</h3>
    </div>

    <div className="testimonial-card">
        <p>
            “Best branding experience I’ve had.”
        </p>
        <h3>- Naomi L.</h3>
    </div>

</div>

            </section>

            {/* QUOTE CALCULATOR */}

            <section className="quote-calculator">

                <h2>INSTANT QUOTE ESTIMATOR</h2>

                <div className="calculator-box">

                    <select id="quoteService">

                        <option value="">
                            Select A Service
                        </option>

                        <option value="4000">
                            Poster Creation
                        </option>

                        <option value="10000">
                            Logo & Brand Design
                        </option>

                        <option value="2500">
                            Business Cards
                        </option>

                        <option value="4000">
                            Cover Art Designs
                        </option>

                        <option value="25000">
                            Website Creation
                        </option>

                        <option value="2000">
                            Social Media Visuals
                        </option>

                    </select>

                    <h1 id="quotePrice">
                        Estimated Price: JMD 0
                    </h1>

                </div>

            </section>

            {/* CONTACT */}

           <section id="contact" className="contact">

                <h2>CONTACT US</h2>

                <p>
                    Ready to elevate your brand?
                    Send us a message today.
                </p>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="contact-form"
                >

                    <div className="input-group">

                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            required
                        />

                        <label htmlFor="user_name">
                            Your Name
                        </label>

                    </div>

                    <div className="input-group">

                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            required
                        />

                        <label htmlFor="user_email">
                            Your Email
                        </label>

                    </div>

                    <div className="input-group">

                        <select
                            name="service"
                            required
                        >

                            <option value="">
                                Select A Service
                            </option>

                            <option>
                                Flyer Design
                            </option>

                            <option>
                                Logo Design
                            </option>

                            <option>
                                Website Design
                            </option>

                            <option>
                                Cover Art
                            </option>

                            <option>
                                Business Cards
                            </option>

                        </select>

                    </div>

                    <div className="input-group">

                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            required
                        ></textarea>

                        <label htmlFor="message">
                            Tell us about your project
                        </label>

                    </div>

                    <button type="submit">
                        Request Quote
                    </button>

                </form>

            </section>

            {/* FLOATING WHATSAPP */}

            <a
                href="https://wa.me/18765195900"
                className="floating-whatsapp"
                target="_blank"
                rel="noreferrer"
            >
                WhatsApp
            </a>

            {/* FOOTER */}

            <footer className="footer">

                <h1>ProSolutionsJA</h1>

                <p>
                    Professional Graphic Design,
                    Branding, Websites &
                    Digital Solutions
                </p>

                <div className="footer-links">

                    <a href="#home">Home</a>

                    <a href="#services">Services</a>

                    <a href="#portfolio">Portfolio</a>

                    <a href="#contact">Contact</a>

                </div>

                <p className="copyright">
                    © 2026 ProSolutionsJA.
                    All Rights Reserved.
                </p>

            </footer>

           

        </>

        

    );
}

export default App;