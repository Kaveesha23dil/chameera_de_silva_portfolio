import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portrait from './assets/portrait-reference.png'
import AboutSection from './components/AboutSection'
import ExpertiseSection from './components/ExpertiseSection'
import RemainingSections from './components/RemainingSections'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

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
  const progressRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.style.overflow = ''
      const skipTimer = window.setTimeout(() => setLoading(false), 0)
      return () => window.clearTimeout(skipTimer)
    }

    const loaderTimeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        document.body.style.overflow = ''
        setLoading(false)
      },
    })

    loaderTimeline
      .from('.loader-mark', { scale: 0.72, opacity: 0, duration: 0.65 })
      .from('.loader-name, .loader-role', { y: 14, opacity: 0, stagger: 0.08, duration: 0.45 }, '-=0.3')
      .to('.loader-progress-fill', { scaleX: 1, duration: 1.05, ease: 'power2.inOut' }, '-=0.25')
      .to('.loader-content', { y: -12, opacity: 0, duration: 0.45, ease: 'power2.in' }, '+=0.12')
      .to('.portfolio-loader', { opacity: 0, duration: 0.45, ease: 'power2.inOut' }, '-=0.18')

    return () => {
      loaderTimeline.kill()
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const updateScrollUI = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
      setShowBackToTop(window.scrollY > window.innerHeight * 0.75)
      setNavScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', updateScrollUI, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollUI)
  }, [])

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

      gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((section) => {
        gsap.from(section.querySelectorAll('[data-reveal]'), {
          scrollTrigger: { trigger: section, start: 'top 78%', once: true },
          y: 34,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
        })
      })
    }, root)
    return () => {
      context.revert()
      window.removeEventListener('resize', closeMenu)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return (
    <>
      <div className="page-progress-track" aria-hidden="true"><span ref={progressRef} className="page-progress-fill" /></div>
      {loading && (
        <div className="portfolio-loader" role="status" aria-live="polite" aria-label="Loading portfolio">
          <div className="loader-grid" />
          <div className="loader-glow" />
          <div className="loader-content">
            <div className="loader-mark" aria-hidden="true">C<span>D</span><i>.</i></div>
            <p className="loader-name">Chameera De Silva</p>
            <p className="loader-role">AI Researcher Â· Technology Consultant</p>
            <div className="loader-progress" aria-hidden="true">
              <span className="loader-progress-fill" />
            </div>
            <span className="loader-status">Loading experience</span>
          </div>
        </div>
      )}
      <nav className={`site-nav ${navScrolled ? 'is-scrolled' : ''}`} aria-label="Main navigation">
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
      <main ref={root} className="page-shell">
      <section id="home" className="hero-section">
        <div className="grid-overlay" />


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
      <ExpertiseSection />
      <RemainingSections />
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Arrow />
      </button>
    </>
  )
}

export default App
