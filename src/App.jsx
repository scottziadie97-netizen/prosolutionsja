import './App.css';

import { useRef, useEffect } from 'react';

import emailjs from '@emailjs/browser';

import championsleague from './assets/championsleague.png';
import worldcup from './assets/worldcup.png';
import kartel from './assets/kartel.png';
import wedding from './assets/wedding.png';
import resume from './assets/resume.png';
import portfolio from './assets/portfolio.png';

function App() {

    const form = useRef();

    useEffect(() => {

        const service =
            document.getElementById('quoteService');

        const price =
            document.getElementById('quotePrice');

        if (service) {

            service.addEventListener('change', () => {

                const value = service.value;

                price.innerHTML =
                    `Estimated Price: JMD ${value}+`;

            });
        }

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

    return (

        <>

            <div className="scroll-progress"></div>

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

                    <button>
                        Get Started
                    </button>

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
                        <img src={championsleague} alt="" />
                    </div>

                    <div className="portfolio-card">
                        <img src={worldcup} alt="" />
                    </div>

                    <div className="portfolio-card">
                        <img src={kartel} alt="" />
                    </div>

                    <div className="portfolio-card">
                        <img src={wedding} alt="" />
                    </div>

                    <div className="portfolio-card">
                        <img src={resume} alt="" />
                    </div>

                    <div className="portfolio-card">
                        <img src={portfolio} alt="" />
                    </div>

                </div>

            </section>

            {/* STATS */}

            <section className="stats">

                <div className="stat-box">
                    <h1>500+</h1>
                    <p>Projects Completed</p>
                </div>

                <div className="stat-box">
                    <h1>300+</h1>
                    <p>Happy Clients</p>
                </div>

                <div className="stat-box">
                    <h1>1000+</h1>
                    <p>Designs Created</p>
                </div>

                <div className="stat-box">
                    <h1>5+</h1>
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

            <section className="contact" id="contact">

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