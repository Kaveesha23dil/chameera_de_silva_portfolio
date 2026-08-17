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
          <h2 id="projects-heading" className="mt-4 max-w-[470px] text-[clamp(2rem,3vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.035em]">
            Featured <span className="text-[#3974f6]">Research &amp;<br />Innovation</span> Projects
          </h2>
          <p className="mt-6 max-w-[440px] text-sm leading-6 text-slate-500 sm:text-[15px]">
            A selection of research initiatives, technology solutions, and industry projects focused on creating real-world impact.
          </p>
          <a href="#projects-grid" className="button button-primary button-compact mt-8">
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
              <h3 className="relative z-10 max-w-[280px] text-lg font-bold leading-[1.12] sm:text-xl tracking-[-0.025em]">{project.title}</h3>
              <p className="relative z-10 mt-3 text-xs font-semibold text-slate-500 transition-colors duration-500 group-hover:text-blue-300">{project.category}</p>
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 scale-75 rounded-full border border-blue-300/10 opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100" />
              <a href="#contact" className="relative z-10 mt-auto flex items-center justify-end gap-3 text-[13px] font-semibold">
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
    <section id="publications" aria-labelledby="publications-heading" className="reveal-section relative overflow-hidden bg-[#09152b] py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(47,95,187,0.13),transparent_48%)]" />
      <div data-reveal className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#3978ff]">Publications <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-[#3978ff]" /></p>
          <h2 id="publications-heading" className="mt-4 text-[clamp(2rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.035em]">
            Research <span className="text-[#3978ff]">Publications &amp; Academic Contributions</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[780px] text-sm leading-6 text-slate-400 sm:text-[15px]">
            Exploring emerging technologies through impactful research, peer-reviewed publications, and academic contributions that bridge the gap between innovation and real-world applications.
          </p>
        </div>

        <div className="mt-12 border-y border-blue-400/20">
          {publications.map((publication) => (
            <article key={publication.title} className="grid gap-4 border-b border-blue-400/25 py-6 last:border-b-0 sm:grid-cols-[1fr_110px_145px] sm:items-center">
              <div>
                <h3 className="text-base font-semibold leading-6 text-slate-100">{publication.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {publication.tags.map((tag, index) => (
                    <span key={tag} className={`rounded-md px-2.5 py-1.5 text-[10px] font-semibold ${index === 2 ? 'bg-emerald-500/15 text-emerald-400' : 'bg-blue-500/15 text-blue-400'}`}>{tag}</span>
                  ))}
                </div>
              </div>
              <strong className="text-3xl font-bold text-slate-100 sm:border-l sm:border-blue-400/20 sm:pl-6">{publication.year}</strong>
              <a href="#contact" className="flex items-center justify-start gap-3 text-xs font-semibold text-slate-300 sm:justify-end">Read Publication <Arrow className="h-3 w-3" /></a>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="button button-primary button-compact mx-auto">View All Publications <Arrow /></a>
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
          <h2 id="testimonials-heading" className="mx-auto mt-4 max-w-[760px] text-[clamp(2rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.035em]">
            <span className="text-[#3974f6]">Trusted By</span> Students,<br />Researchers &amp; Industry Leaders
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-sm leading-6 text-slate-500 sm:text-[15px]">Over the years, I have collaborated with students, researchers, and organizations to deliver innovative solutions, academic excellence, and real-world impact.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#081426] p-7 sm:p-8 text-white shadow-lg shadow-slate-200">
              <span className="absolute right-5 top-2 font-serif text-7xl leading-none text-white/[0.08]">“</span>
              <span className="font-serif text-5xl leading-none text-white/20">“</span>
              <p className="relative mt-2 text-sm leading-6 text-slate-300">{item.quote}</p>
              <div className="mt-auto flex items-center gap-3 pt-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#6284ff] to-[#243982] text-[10px] font-bold">{item.initials}</span>
                <span><strong className="block text-sm">{item.name}</strong><small className="mt-1 block text-[11px] leading-4 text-slate-500">{item.role}</small></span>
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
    <section id="contact" aria-labelledby="contact-heading" className="reveal-section relative overflow-hidden bg-[#0a1830] pt-20 text-white sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(54,103,214,0.16),transparent_38%),radial-gradient(circle_at_82%_62%,rgba(48,79,186,0.1),transparent_32%)]" />
      <div data-reveal className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-start gap-12 px-6 sm:px-8 lg:grid-cols-[44%_56%] lg:gap-16 lg:px-12">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#557cff]">Contact <span className="h-1.5 w-1.5 rounded-full bg-[#557cff]" /></p>
          <h2 id="contact-heading" className="mt-4 max-w-[520px] text-[clamp(2rem,3vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.035em]">
            Let's Connect &amp;<span className="block text-[#557cff]">Build The Future Together</span>
          </h2>
          <p className="mt-6 max-w-[470px] text-sm leading-6 text-slate-400">I'm always open to discussing research collaborations, consulting opportunities, academic projects, and innovative ideas that create real-world impact.</p>

          <div className="mt-9 grid max-w-[500px] gap-3">
            {contactOptions.map((option) => (
              <div key={option.title} className="group flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:translate-x-1 hover:border-blue-400/25 hover:bg-blue-500/[0.06]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-xs font-bold text-[#5e82ff] transition-transform duration-300 group-hover:scale-105">{option.symbol}</span>
                <span><strong className="text-base font-semibold leading-6 text-slate-100">{option.title}</strong><small className="mt-1 block max-w-[360px] text-xs leading-5 text-slate-400">{option.text}</small></span>
              </div>
            ))}
          </div>
        </div>

        <form id="consultation" className="relative overflow-hidden rounded-[26px] border border-blue-300/[0.14] bg-[#020711] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25),0_0_0_5px_rgba(75,105,190,0.03)] sm:p-8 lg:p-10" onSubmit={(event) => event.preventDefault()}>
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="relative flex items-center gap-4 border-b border-white/[0.08] pb-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-lg text-[#6586ff]" aria-hidden="true">&#9993;</span>
            <span><h3 className="text-xl font-semibold tracking-[-0.02em]">Send Me a Message</h3><p className="mt-1 text-xs text-slate-400">I will get back to you as soon as possible.</p></span>
          </div>
          <div className="relative mt-7 grid gap-4 sm:grid-cols-2">
            <label className="sr-only" htmlFor="name">Your name</label>
            <input id="name" type="text" placeholder="Your Name" className="rounded-xl border border-white/[0.08] bg-[#071121] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-white/15 focus:border-blue-400/50 focus:bg-[#09162a]" />
            <label className="sr-only" htmlFor="email">Your email</label>
            <input id="email" type="email" placeholder="Your Email" className="rounded-xl border border-white/[0.08] bg-[#071121] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-white/15 focus:border-blue-400/50 focus:bg-[#09162a]" />
            <label className="sr-only" htmlFor="subject">Subject</label>
            <input id="subject" type="text" placeholder="Subject" className="rounded-xl border border-white/[0.08] bg-[#071121] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-white/15 focus:border-blue-400/50 focus:bg-[#09162a] sm:col-span-2" />
            <label className="sr-only" htmlFor="message">Your message</label>
            <textarea id="message" rows={6} placeholder="Your Message" className="resize-none rounded-xl border border-white/[0.08] bg-[#071121] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-white/15 focus:border-blue-400/50 focus:bg-[#09162a] sm:col-span-2" />
          </div>
          <button type="submit" className="button button-primary button-fluid mt-5">Send Message <Arrow /></button>
        </form>
      </div>
      <footer className="relative mt-16 w-full pb-0 sm:mt-20">
        <div data-reveal className="relative w-full overflow-hidden border-y border-blue-300/[0.14] bg-[#020711] shadow-[0_-20px_70px_rgba(0,0,0,0.2)]">
          <div className="pointer-events-none absolute inset-x-[12%] bottom-[-180px] h-[360px] rounded-full bg-[#315cf4]/25 blur-[90px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(68,104,255,0.14),transparent_48%)]" />

          <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-10 sm:px-8 sm:pt-12 lg:px-12 lg:pt-14">
            <div className="flex flex-col gap-8 border-b border-white/[0.09] pb-10 sm:flex-row sm:items-end sm:justify-between sm:pb-12">
              <div>
                <p className="text-sm text-slate-300 sm:text-base">Let's collaborate. Say hello</p>
                <a href="#consultation" className="mt-2 inline-block text-[clamp(30px,4vw,54px)] font-semibold leading-none tracking-[-0.045em] text-white transition-colors duration-300 hover:text-[#7792ff]">
                  Start a conversation<span className="text-[#5878ff]">.</span>
                </a>
              </div>
              <a href="#consultation" className="button button-primary button-compact shrink-0">Book a consultation <Arrow /></a>
            </div>

            <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.85fr_1fr_0.9fr] lg:gap-14 lg:py-14">
              <div className="max-w-[310px]">
                <a href="#home" className="text-2xl font-bold tracking-[-0.04em] text-white transition-colors hover:text-[#7792ff]">CHAMEERA<span className="text-[#5878ff]">.</span></a>
                <p className="mt-4 text-xs leading-5 text-slate-400">AI researcher, lecturer, and technology consultant creating intelligent solutions with meaningful real-world impact.</p>
                <a href="#contact" className="button button-secondary button-compact mt-6">Download CV <Arrow /></a>
              </div>

              <FooterLinks title="Quick Links" links={[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Expertise', href: '#expertise' },
                { label: 'Projects', href: '#research' },
                { label: 'Publications', href: '#publications' },
              ]} />
              <FooterLinks title="Research Focus" links={[
                { label: 'Artificial Intelligence', href: '#expertise' },
                { label: 'Data Science', href: '#expertise' },
                { label: 'Cloud Computing', href: '#expertise' },
                { label: 'Blockchain', href: '#expertise' },
                { label: 'Academic Research', href: '#publications' },
              ]} />
              <div>
                <h3 className="text-base font-semibold leading-6 text-slate-100">Connect</h3>
                <ul className="mt-5 space-y-3.5 text-xs text-slate-400">
                  <li><a href="#contact" className="transition-colors hover:text-white">LinkedIn</a></li>
                  <li><a href="#contact" className="transition-colors hover:text-white">Google Scholar</a></li>
                  <li><a href="#contact" className="transition-colors hover:text-white">ResearchGate</a></li>
                  <li><a href="#contact" className="transition-colors hover:text-white">GitHub</a></li>
                </ul>
                <p className="mt-7 text-[10px] uppercase tracking-[0.14em] text-slate-600">Available for</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">Research collaborations<br />Consulting &amp; speaking</p>
              </div>
            </div>

            <div className="relative z-10 grid items-center gap-4 border-t border-white/[0.08] py-6 text-center text-[10px] text-slate-500 sm:grid-cols-[1fr_auto_1fr] sm:text-left">
              <span>&copy; 2026 Chameera De Silva</span>
              <a href="#home" className="mx-auto inline-flex items-center gap-2 transition-colors hover:text-white">Back to top <span aria-hidden="true">&#8593;</span></a>
              <span className="sm:text-right">Privacy &nbsp;·&nbsp; All Rights Reserved</span>
            </div>
          </div>

          <div className="relative h-[105px] overflow-hidden sm:h-[145px] lg:h-[175px]" aria-hidden="true">
            <p className="absolute inset-x-0 top-5 whitespace-nowrap text-center text-[clamp(62px,12vw,170px)] font-black leading-none tracking-[-0.065em] text-white/[0.07]">CHAMEERA</p>
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
      <h3 className="text-base font-semibold leading-6 text-slate-100">{title}</h3>
      <ul className="mt-5 space-y-3.5 text-xs text-slate-400">
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
