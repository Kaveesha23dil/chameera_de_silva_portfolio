const Arrow = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current [stroke-width:1.8]`} aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

const projects = [
  { title: 'AI-Powered Healthcare Analytics', category: 'Artificial Intelligence Research', dark: false },
  { title: 'Cloud-Based Patient Records', category: 'Cloud Computing', dark: false },
  { title: 'Blockchain Security Framework', category: 'Blockchain', dark: true },
  { title: 'Data Science Research Platform', category: 'Cloud Computing', dark: false },
]

const publications = [
  { title: 'Artificial Intelligence for Predictive Healthcare Analytics', year: '2025', tags: ['IEEE Journal', 'Artificial Intelligence', 'Peer Reviewed'] },
  { title: 'Blockchain-Based Security Framework for Digital Systems', year: '2024', tags: ['Springer', 'Blockchain Technology', 'Peer Reviewed'] },
  { title: 'Cloud-Based Patient Data Management Architecture', year: '2024', tags: ['Elsevier', 'Cloud Computing', 'Peer Reviewed'] },
  { title: 'Data Science Approaches for Educational Performance Analysis', year: '2023', tags: ['MDPI', 'Data Science', 'Peer Reviewed'] },
]

const testimonials = [
  {
    quote: 'Chameera is a proactive and a very committed individual who likes to seek new knowledge. He does not limit himself just to the given task, but always strives to achieve the best.',
    name: 'Malsha Fernando',
    role: 'Lecturer · APIIT',
    initials: 'MF',
  },
  {
    quote: 'Chameera is a hard working student and a good person who is keen on learning new things. His communication skills are great, and he is passionate about his work.',
    name: 'Ragu Shivarama',
    role: 'Lecturer · IIT',
    initials: 'RS',
  },
  {
    quote: 'Chameera is a hard working and dedicated researcher and an excellent academic. He works well in a dynamic research environment and always maintains high standards.',
    name: 'Dr. Thilina Halloluwa',
    role: 'Senior Lecturer · University of Colombo',
    initials: 'TH',
  },
]

const contactOptions = [
  { title: 'Research Collaboration', text: "Let's work together on impactful research that advances knowledge and innovation.", symbol: '••' },
  { title: 'Consulting Projects', text: 'Need expert guidance for your next technology or digital transformation project?', symbol: '▣' },
  { title: 'Academic Engagement', text: 'Invited talks, workshops, supervision, and mentoring opportunities.', symbol: '◇' },
]

function ProjectsSection() {
  return (
    <section id="research" aria-labelledby="projects-heading" className="reveal-section bg-white py-20 text-[#101828] sm:py-24 lg:py-28">
      <div data-reveal className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-[38%_62%] lg:gap-20 lg:px-12">
        <div className="lg:pt-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Portfolio</p>
          <h2 id="projects-heading" className="mt-4 max-w-[440px] text-3xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-4xl">
            Featured <span className="text-[#3974f6]">Research &amp;<br />Innovation</span> Projects
          </h2>
          <p className="mt-7 max-w-[410px] text-sm leading-6 text-slate-500">
            A selection of research initiatives, technology solutions, and industry projects focused on creating real-world impact.
          </p>
          <a href="#projects-grid" className="mt-8 inline-flex items-center gap-8 rounded-lg bg-gradient-to-r from-[#6687ff] to-[#3b4deb] px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-300/40 transition-transform duration-300 hover:-translate-y-1">
            View All Projects <Arrow />
          </a>
        </div>

        <div id="projects-grid" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-2xl border border-slate-300 bg-white p-6 text-[#111827] transition-all duration-500 hover:-translate-y-1 hover:border-[#243650] hover:bg-[#091426] hover:text-white hover:shadow-xl hover:shadow-slate-900/20"
            >
              <span className="relative z-10 mb-3 h-px w-14 bg-[#3974f6]" />
              <h3 className="relative z-10 max-w-[260px] text-xl font-bold leading-[1.06] tracking-[-0.025em]">{project.title}</h3>
              <p className="relative z-10 mt-3 text-[10px] font-semibold text-slate-500 transition-colors duration-500 group-hover:text-blue-300">{project.category}</p>
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 scale-75 rounded-full border border-blue-300/10 opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100" />
              <a href="#contact" className="relative z-10 mt-auto flex items-center justify-end gap-3 text-xs font-semibold">
                View Case Study <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PublicationsSection() {
  return (
    <section id="publications" aria-labelledby="publications-heading" className="reveal-section relative overflow-hidden bg-[#09152b] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(47,95,187,0.13),transparent_48%)]" />
      <div data-reveal className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#3978ff]">Publications <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-[#3978ff]" /></p>
          <h2 id="publications-heading" className="mt-4 text-2xl font-bold tracking-[-0.025em] sm:text-3xl">
            Research <span className="text-[#3978ff]">Publications &amp; Academic Contributions</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-xs leading-5 text-slate-500">
            Exploring emerging technologies through impactful research, peer-reviewed publications, and academic contributions that bridge the gap between innovation and real-world applications.
          </p>
        </div>

        <div className="mt-12 border-y border-blue-400/20">
          {publications.map((publication) => (
            <article key={publication.title} className="grid gap-4 border-b border-blue-400/25 py-5 last:border-b-0 sm:grid-cols-[1fr_110px_145px] sm:items-center">
              <div>
                <h3 className="text-sm font-semibold text-slate-100">{publication.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {publication.tags.map((tag, index) => (
                    <span key={tag} className={`rounded px-2 py-1 text-[8px] font-semibold ${index === 2 ? 'bg-emerald-500/15 text-emerald-400' : 'bg-blue-500/15 text-blue-400'}`}>{tag}</span>
                  ))}
                </div>
              </div>
              <strong className="text-2xl text-slate-100 sm:border-l sm:border-blue-400/20 sm:pl-6">{publication.year}</strong>
              <a href="#contact" className="flex items-center justify-start gap-3 text-[10px] font-semibold text-slate-300 sm:justify-end">Read Publication <Arrow className="h-3 w-3" /></a>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="inline-flex items-center gap-8 rounded-lg bg-gradient-to-r from-[#6687ff] to-[#3b4deb] px-6 py-3 text-xs font-semibold shadow-lg shadow-blue-900/30 transition-transform hover:-translate-y-1">View All Publications <Arrow /></a>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="reveal-section bg-white py-20 text-[#111827] sm:py-24 lg:py-28">
      <div data-reveal className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Testimonials</p>
          <h2 id="testimonials-heading" className="mx-auto mt-4 max-w-[650px] text-3xl font-bold leading-[1.12] tracking-[-0.03em] sm:text-4xl">
            <span className="text-[#3974f6]">Trusted By</span> Students,<br />Researchers &amp; Industry Leaders
          </h2>
          <p className="mx-auto mt-6 max-w-[700px] text-xs leading-5 text-slate-500">Over the years, I have collaborated with students, researchers, and organizations to deliver innovative solutions, academic excellence, and real-world impact.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="relative flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#081426] p-6 text-white shadow-lg shadow-slate-200">
              <span className="absolute right-5 top-2 font-serif text-7xl leading-none text-white/[0.08]">“</span>
              <span className="font-serif text-5xl leading-none text-white/20">“</span>
              <p className="relative mt-1 text-[12px] leading-5 text-slate-300">{item.quote}</p>
              <div className="mt-auto flex items-center gap-3 pt-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#6284ff] to-[#243982] text-[10px] font-bold">{item.initials}</span>
                <span><strong className="block text-xs">{item.name}</strong><small className="mt-1 block text-[9px] text-slate-500">{item.role}</small></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="reveal-section relative overflow-hidden bg-[linear-gradient(120deg,#0a1830_0%,#10254c_100%)] pt-20 text-white sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(45,101,211,0.15),transparent_40%)]" />
      <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-[46%_54%] lg:gap-20 lg:px-12">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#3978ff]">Contact <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-[#3978ff]" /></p>
          <h2 id="contact-heading" className="mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-4xl">Let's Connect &amp;<span className="block text-[#4380ff]">Build The Future Together</span></h2>
          <p className="mt-6 max-w-[450px] text-sm leading-6 text-slate-400">I'm always open to discussing research collaborations, consulting opportunities, academic projects, and innovative ideas that create real-world impact.</p>
          <div className="mt-9 space-y-6">
            {contactOptions.map((option) => (
              <div key={option.title} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-blue-400/20 bg-blue-500/10 text-xs font-bold text-[#4380ff]">{option.symbol}</span>
                <span><strong className="text-sm">{option.title}</strong><small className="mt-1 block max-w-[350px] text-[10px] leading-4 text-slate-400">{option.text}</small></span>
              </div>
            ))}
          </div>
        </div>

        <form id="consultation" className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/15 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <div className="flex items-center gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-500/10 text-[#4380ff]">✉</span>
            <span><h3 className="text-xl font-semibold">Send Me a Message</h3><p className="mt-1 text-[10px] text-slate-400">I will get back to you as soon as possible.</p></span>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <label className="sr-only" htmlFor="name">Your name</label>
            <input id="name" type="text" placeholder="Your Name" className="rounded-xl border border-white/5 bg-white/[0.035] px-4 py-4 text-xs text-white outline-none transition focus:border-blue-400/50" />
            <label className="sr-only" htmlFor="email">Your email</label>
            <input id="email" type="email" placeholder="Your Email" className="rounded-xl border border-white/5 bg-white/[0.035] px-4 py-4 text-xs text-white outline-none transition focus:border-blue-400/50" />
            <label className="sr-only" htmlFor="subject">Subject</label>
            <input id="subject" type="text" placeholder="Subject" className="rounded-xl border border-white/5 bg-white/[0.035] px-4 py-4 text-xs text-white outline-none transition focus:border-blue-400/50 sm:col-span-2" />
            <label className="sr-only" htmlFor="message">Your message</label>
            <textarea id="message" rows={6} placeholder="Your Message" className="resize-none rounded-xl border border-white/5 bg-white/[0.035] px-4 py-4 text-xs text-white outline-none transition focus:border-blue-400/50 sm:col-span-2" />
          </div>
          <button type="submit" className="mt-5 flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#6587ff] to-[#3b4ded] px-5 py-3.5 text-xs font-semibold shadow-lg shadow-blue-900/40 transition-transform hover:-translate-y-0.5">Send Message <span aria-hidden="true">⌁</span></button>
        </form>
      </div>

      <footer className="relative mt-24 border-t border-white/[0.07]">
        <div data-reveal className="mx-auto w-full max-w-[1240px] px-6 pb-7 pt-14 sm:px-8 sm:pt-16 lg:px-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[1.55fr_0.9fr_1.1fr_0.9fr] lg:gap-14">
            <div className="max-w-[330px]">
              <a href="#home" className="inline-block text-xl font-bold tracking-[-0.035em] transition-colors hover:text-[#6f8cff]">CHAMEERA DE SILVA</a>
              <p className="mt-3 text-[10px] leading-5 text-slate-400">Lecturer <span className="mx-1 text-slate-600">|</span> AI Researcher <span className="mx-1 text-slate-600">|</span> Technology Consultant</p>
              <div className="mt-5 flex flex-wrap gap-2" aria-label="Social links">
                <a href="#contact" aria-label="LinkedIn" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[10px] font-bold text-slate-400 transition-all hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-white">in</a>
                <a href="#contact" aria-label="Research profile" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[11px] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-white">R</a>
                <a href="#contact" aria-label="External profile" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-sm text-slate-400 transition-all hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-white">↗</a>
              </div>
            </div>
            <FooterLinks title="Quick Links" links={[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Expertise', href: '#expertise' },
              { label: 'Projects', href: '#research' },
              { label: 'Publications', href: '#publications' },
              { label: 'Contact', href: '#contact' },
            ]} />
            <FooterLinks title="Research Areas" links={[
              { label: 'Artificial Intelligence', href: '#expertise' },
              { label: 'Data Science', href: '#expertise' },
              { label: 'Cloud Computing', href: '#expertise' },
              { label: 'Blockchain Technology', href: '#expertise' },
            ]} />
            <FooterLinks title="Resources" links={[
              { label: 'Publications', href: '#publications' },
              { label: 'Download CV', href: '#contact' },
              { label: 'Consultation', href: '#consultation' },
              { label: 'Workshops', href: '#contact' },
            ]} />
          </div>

          <div className="pointer-events-none mt-14 select-none overflow-hidden border-b border-white/[0.06] text-center">
            <p className="whitespace-nowrap text-[clamp(43px,8.4vw,112px)] font-black leading-[0.82] tracking-[-0.065em] text-white/[0.045]">CHAMEERA DE SILVA</p>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 pt-5 text-center text-[9px] text-slate-500 sm:flex-row sm:text-left">
            <span>© 2026 Chameera De Silva. All Rights Reserved.</span>
            <span>Designed &amp; Developed With Passion For Innovation.</span>
          </div>
        </div>
      </footer>
    </section>
  )
}

type FooterLink = { label: string; href: string }

function FooterLinks({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <h3 className="text-xs font-semibold text-slate-100">{title}</h3>
      <ul className="mt-5 space-y-3 text-[10px] text-slate-400">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="inline-flex transition-all duration-200 hover:translate-x-0.5 hover:text-white">{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
function RemainingSections() {
  return (
    <>
      <ProjectsSection />
      <PublicationsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}

export default RemainingSections