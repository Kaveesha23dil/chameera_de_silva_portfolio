import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import portrait from './assets/portrait-reference.png'
import AboutSection from './components/AboutSection'
import './App.css'

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

const HomeIcon = () => (
  <svg className="home-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m4 10 8-7 8 7v10h-6v-6h-4v6H4V10Z" />
  </svg>
)

const SparkIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 3 1.2 4.1L17 9l-3.8 1.9L12 15l-1.2-4.1L7 9l3.8-1.9L12 3Z" />
    <path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
  </svg>
)

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 18h10a4 4 0 0 0 .6-8A6 6 0 0 0 6.2 9 4.5 4.5 0 0 0 7 18Z" />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 20V10m5 10V5m5 15v-8m5 8V3M2 20h20" />
  </svg>
)

function App() {
  const root = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }
    window.addEventListener('resize', closeMenu)
    window.addEventListener('keydown', closeOnEscape)

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
      timeline
        .from('.site-nav', { y: -28, opacity: 0, duration: 0.7 })
        .from('.portrait-wrap', { y: 35, opacity: 0, scale: 0.96, duration: 1 }, '-=0.35')
        .from('.floating-card', { opacity: 0, scale: 0.88, stagger: 0.12, duration: 0.65 }, '-=0.65')
        .from('.hero-copy > *', { y: 22, opacity: 0, stagger: 0.08, duration: 0.6 }, '-=0.45')

      gsap.to('.float-one', { y: -9, rotation: -3.5, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.float-two', { y: 8, rotation: 1.5, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.float-three', { y: -7, rotation: -1, duration: 2.6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }, root)
    return () => {
      context.revert()
      window.removeEventListener('resize', closeMenu)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return (
    <>
      <main ref={root} className="page-shell">
      <section className="hero-section">
        <div className="grid-overlay" />
        <nav className="site-nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Chameera De Silva home">CD.</a>
          <button
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span />
          </button>
          <div id="primary-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a className="active" href="#home" onClick={() => setMenuOpen(false)}><HomeIcon /> Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#publications" onClick={() => setMenuOpen(false)}>Publications</a>
            <a href="#consultation" onClick={() => setMenuOpen(false)}>Consultation</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
          <a className="nav-cta" href="#consultation">Book Consultation <Arrow /></a>
        </nav>

        <div className="hero-stage">
          <div className="orb orb-left" />
          <div className="orb orb-right" />

          <article className="floating-card float-one card-ai">
            <span className="card-icon"><SparkIcon /></span>
            <span><strong>AI &amp; Machine Learning</strong><small>Intelligent Analytics</small></span>
          </article>
          <article className="floating-card float-two card-cloud">
            <span className="card-icon"><CloudIcon /></span>
            <span><strong>Cloud &amp; Blockchain</strong><small>Scalable Solutions</small></span>
          </article>
          <article className="floating-card float-three card-data">
            <span className="card-icon"><ChartIcon /></span>
            <span><strong>Data Science</strong><small>Research &amp; Insights</small></span>
          </article>

          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <img src={portrait} alt="Chameera De Silva" />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">AI Researcher <i /> Lecturer <i /> Technology Consultant</p>
            <h1>Chameera De Silva</h1>
            <p className="tagline">Building Intelligent Solutions Through AI, Data Science &amp; Emerging Technologies.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">Explore Research <Arrow /></a>
              <a className="button button-secondary" href="#consultation">Book Consultation <Arrow /></a>
            </div>
          </div>
        </div>
      </section>
      </main>
      <AboutSection />
    </>
  )
}

export default App
