import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portrait from '../assets/about-portrait.png'
import PortfolioFooter from './PortfolioFooter'

gsap.registerPlugin(ScrollTrigger)

const roles = [
  {
    title: 'Faculty Member & Lecturer / Group AI Consultant',
    organisation: 'Westford University, UAE',
    detail: 'Faculty of Computing · Department of Data Analytics & Data Science',
  },
  {
    title: 'Artificial Intelligence & Cloud Consultant',
    organisation: 'Atos, United Kingdom',
    detail: 'AI strategy, cloud technologies and intelligent digital solutions',
  },
  {
    title: 'Module Leader & Consultant',
    organisation: 'National Institute of Business Management (NIBM)',
    detail: 'Coventry BSc (Hons) Data Science · Databases, cloud computing, machine learning and deep learning',
  },
  {
    title: 'Course Director & Leader',
    organisation: 'Kensley Graduate School',
    detail: 'Postgraduate Diploma in Artificial Intelligence and Data Science',
  },
  {
    title: 'Visiting Lecturer',
    organisation: 'Nawaloka College of Higher Studies',
    detail: 'Swinburne University of Technology programmes · IT, computing and networking',
  },
  {
    title: 'Cyber Security Consultant',
    organisation: 'Fuji, Japan',
    detail: 'Security-focused technology consultation and digital systems',
  },
]

const qualifications = ['Microsoft Azure', 'Google Cloud', 'AWS', 'Kubernetes']
const memberships = ['BCS, United Kingdom', 'ACS, Australia', 'IEEE, USA', 'IEEE Young Professionals', 'ACM Professional Member']
const focuses = [
  ['01', 'Artificial Intelligence', 'Designing intelligent systems, machine-learning models and practical AI solutions.'],
  ['02', 'Data Science & Bioinformatics', 'Turning complex biological and real-world datasets into meaningful, actionable insight.'],
  ['03', 'Cloud & Blockchain', 'Exploring secure, scalable platforms for healthcare data and decentralised systems.'],
  ['04', 'Teaching & Mentorship', 'Making emerging technology understandable and inspiring the next generation of innovators.'],
]

function AboutPage() {
  const page = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (!page.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('[data-about-hero]', { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.09 })
        .fromTo('[data-about-portrait]', { x: 45, opacity: 0, scale: 0.96 }, { x: 0, opacity: 1, scale: 1, duration: 1 }, '-=0.7')

      gsap.utils.toArray<HTMLElement>('[data-about-section]').forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll('[data-about-reveal]'),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.09,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 78%', once: true },
          },
        )
      })

      gsap.to('[data-about-portrait]', {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: { trigger: '.about-page-hero', start: 'top top', end: 'bottom top', scrub: 1.2 },
      })
    }, page)

    return () => context.revert()
  }, [])

  return (
    <main ref={page} className="about-page bg-white text-[#0b1a2f]">
      <section id="about-top" className="about-page-hero relative overflow-hidden bg-[#061326] pb-20 pt-36 text-white sm:pb-24 sm:pt-40 lg:min-h-[760px] lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(61,100,255,0.2),transparent_31%),radial-gradient(circle_at_18%_12%,rgba(44,92,194,0.13),transparent_34%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(113,142,203,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(113,142,203,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid w-full max-w-[1240px] items-center gap-14 px-6 sm:px-8 lg:grid-cols-[55%_45%] lg:px-12">
          <div>
            <p data-about-hero className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6487ff]">About me <span className="h-1.5 w-1.5 rounded-full bg-[#6487ff]" /></p>
            <h1 data-about-hero className="mt-5 max-w-[720px] text-[clamp(3rem,6vw,5.8rem)] font-black leading-[0.96] tracking-[-0.055em]">Researching ideas.<br /><span className="text-[#6480ff]">Building impact.</span></h1>
            <p data-about-hero className="mt-7 max-w-[650px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">I’m Chameera De Silva—an AI researcher, data engineer, lecturer and technology consultant working where artificial intelligence, data science, bioinformatics, cloud and blockchain meet real-world challenges.</p>
            <div data-about-hero className="mt-9 flex flex-wrap gap-3">
              <a href="#journey" className="button button-primary">Explore my journey <span aria-hidden="true">↘</span></a>
              <a href="/#contact" className="button button-secondary">Start a conversation <span aria-hidden="true">↗</span></a>
            </div>
            <div data-about-hero className="mt-12 grid max-w-[650px] grid-cols-3 gap-5 border-t border-white/10 pt-7">
              <div><strong className="block text-2xl font-bold text-white sm:text-3xl">AI</strong><span className="mt-1 block text-[10px] uppercase tracking-[0.14em] text-slate-500">Research</span></div>
              <div><strong className="block text-2xl font-bold text-white sm:text-3xl">Data</strong><span className="mt-1 block text-[10px] uppercase tracking-[0.14em] text-slate-500">Engineering</span></div>
              <div><strong className="block text-2xl font-bold text-white sm:text-3xl">Impact</strong><span className="mt-1 block text-[10px] uppercase tracking-[0.14em] text-slate-500">Education</span></div>
            </div>
          </div>
          <div data-about-portrait className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -inset-5 rounded-[34px] bg-[#4165ff]/15 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_50%_28%,rgba(82,122,255,.35),transparent_52%),linear-gradient(180deg,#132c59,#071323)]">
              <img src={portrait} alt="Chameera De Silva" className="absolute bottom-0 left-1/2 h-[94%] w-auto -translate-x-1/2 object-contain object-bottom" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071323] to-transparent" />
              <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.16em] text-blue-200">AI researcher · Lecturer</p>
            </div>
          </div>
        </div>
      </section>

      <section data-about-section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-6 sm:px-8 lg:grid-cols-[34%_66%] lg:gap-20 lg:px-12">
          <div data-about-reveal><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4d72f4]">Biography</p><h2 className="mt-4 text-[clamp(2.2rem,4vw,4rem)] font-black leading-[1.02] tracking-[-0.045em]">Curiosity with a clear purpose.</h2></div>
          <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
            <p data-about-reveal>My work is driven by an unbridled passion for artificial intelligence and the belief that advanced technology should create measurable human value. I develop algorithms, data-driven applications and complex neural networks, translating ambitious requirements into sustainable technical solutions.</p>
            <p data-about-reveal>At the intersection of AI, bioinformatics and healthcare, I explore patterns in biological data that can support medical research and personalised medicine. I also investigate blockchain applications for secure healthcare data management and decentralised systems.</p>
            <p data-about-reveal>Beyond engineering, I am an educator and mentor. I enjoy charging through steep learning curves, sharing what I learn, empowering others and leading teams through complex technical and business challenges.</p>
          </div>
        </div>
      </section>

      <section data-about-section className="bg-[#f4f7fb] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div data-about-reveal className="max-w-[680px]"><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4d72f4]">What I focus on</p><h2 className="mt-4 text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-[1.04] tracking-[-0.045em]">Technology is most powerful when it serves people.</h2></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {focuses.map(([number, title, description]) => <article data-about-reveal key={number} className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60 sm:p-8"><span className="text-xs font-bold text-[#5579f4]">{number}</span><h3 className="mt-8 text-2xl font-bold tracking-[-0.03em]">{title}</h3><p className="mt-3 max-w-[480px] text-sm leading-6 text-slate-600">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section id="journey" data-about-section className="bg-[#07152a] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div data-about-reveal className="grid gap-5 lg:grid-cols-[34%_66%]"><div><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6487ff]">Professional journey</p><h2 className="mt-4 text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-[1.04] tracking-[-0.045em]">Across academia and industry.</h2></div><p className="max-w-[640px] self-end text-base leading-7 text-slate-400">My experience connects university teaching, programme leadership and specialised technology consulting across international organisations.</p></div>
          <div className="mt-14 border-t border-white/10">
            {roles.map((role, index) => <article data-about-reveal key={role.title} className="grid gap-3 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.025] sm:grid-cols-[54px_1fr_1fr] sm:items-start sm:gap-6"><span className="text-xs font-bold text-[#5f82ff]">0{index + 1}</span><div><h3 className="text-lg font-semibold text-white sm:text-xl">{role.title}</h3><p className="mt-2 text-sm text-[#7190ff]">{role.organisation}</p></div><p className="text-sm leading-6 text-slate-400">{role.detail}</p></article>)}
          </div>
        </div>
      </section>

      <section data-about-section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div><div data-about-reveal><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4d72f4]">Qualifications</p><h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Cloud & platform credentials</h2></div><div className="mt-8 grid grid-cols-2 gap-3">{qualifications.map((item, index) => <div data-about-reveal key={item} className="rounded-xl border border-slate-200 bg-[#f7f9fc] p-5"><span className="text-xs font-bold text-[#5579f4]">0{index + 1}</span><strong className="mt-5 block text-base">{item}</strong><small className="mt-1 block text-xs text-slate-500">Professional badges</small></div>)}</div></div>
          <div><div data-about-reveal><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4d72f4]">Memberships</p><h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Connected to global communities</h2></div><div className="mt-8 space-y-3">{memberships.map((item) => <div data-about-reveal key={item} className="flex items-center justify-between rounded-xl border border-slate-200 px-5 py-4"><span className="text-sm font-semibold">{item}</span><span className="text-[#5579f4]">↗</span></div>)}</div></div>
        </div>
      </section>

      <section data-about-section className="bg-[#0a1830] px-6 py-20 text-center text-white sm:px-8 sm:py-24">
        <p data-about-reveal className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6487ff]">Let’s work together</p>
        <h2 data-about-reveal className="mx-auto mt-5 max-w-[900px] text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1] tracking-[-0.05em]">Have a complex idea worth exploring?</h2>
        <p data-about-reveal className="mx-auto mt-6 max-w-[620px] text-base leading-7 text-slate-400">I’m open to research collaborations, academic partnerships, consulting engagements and conversations about emerging technology.</p>
        <div data-about-reveal className="mt-9 flex flex-wrap justify-center gap-3"><a href="/#contact" className="button button-primary">Start a conversation <span>↗</span></a><a href="/" className="button button-secondary">Return home</a></div>
      </section>

      <PortfolioFooter />
    </main>
  )
}

export default AboutPage
