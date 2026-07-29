type FooterLink = { label: string; href: string }

const linkGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/#home' },
      { label: 'About', href: '/about' },
      { label: 'Expertise', href: '/#expertise' },
      { label: 'Projects', href: '/#research' },
      { label: 'Publications', href: '/#publications' },
    ],
  },
  {
    title: 'Research Focus',
    links: [
      { label: 'Artificial Intelligence', href: '/#expertise' },
      { label: 'Data Science', href: '/#expertise' },
      { label: 'Cloud Computing', href: '/#expertise' },
      { label: 'Blockchain', href: '/#expertise' },
      { label: 'Academic Research', href: '/#publications' },
    ],
  },
]

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

function PortfolioFooter() {
  return (
    <footer className="relative w-full bg-[#0a1830] text-white">
      <div className="relative w-full overflow-hidden border-y border-blue-300/[0.14] bg-[#020711] shadow-[0_-20px_70px_rgba(0,0,0,0.2)]">
        <div className="pointer-events-none absolute inset-x-[12%] bottom-[-180px] h-[360px] rounded-full bg-[#315cf4]/25 blur-[90px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(68,104,255,0.14),transparent_48%)]" />

        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-10 sm:px-8 sm:pt-12 lg:px-12 lg:pt-14">
          <div className="flex flex-col gap-8 border-b border-white/[0.09] pb-10 sm:flex-row sm:items-end sm:justify-between sm:pb-12">
            <div>
              <p className="text-sm text-slate-300 sm:text-base">Let's collaborate. Say hello</p>
              <a href="/#consultation" className="mt-2 inline-block text-[clamp(30px,4vw,54px)] font-semibold leading-none tracking-[-0.045em] text-white transition-colors duration-300 hover:text-[#7792ff]">
                Start a conversation<span className="text-[#5878ff]">.</span>
              </a>
            </div>
            <a href="/#consultation" className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full border border-blue-300/30 bg-gradient-to-r from-[#5879ff] to-[#3549e8] px-5 py-3 text-[11px] font-semibold text-white shadow-[0_8px_30px_rgba(52,73,232,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(52,73,232,0.42)]">
              Book a consultation
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-sm transition-transform duration-300 group-hover:rotate-45">↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.85fr_1fr_0.9fr] lg:gap-14 lg:py-14">
            <div className="max-w-[310px]">
              <a href="/" className="text-2xl font-bold tracking-[-0.04em] text-white transition-colors hover:text-[#7792ff]">CHAMEERA<span className="text-[#5878ff]">.</span></a>
              <p className="mt-4 text-xs leading-5 text-slate-400">AI researcher, lecturer, and technology consultant creating intelligent solutions with meaningful real-world impact.</p>
              <a href="/#contact" className="group mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-[10px] font-semibold text-slate-300 transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#4968ee] text-[10px] transition-transform group-hover:rotate-45">↗</span>
                Download CV
              </a>
            </div>

            {linkGroups.map((group) => <FooterLinks key={group.title} {...group} />)}

            <div>
              <h3 className="text-base font-semibold leading-6 text-slate-100">Connect</h3>
              <ul className="mt-5 space-y-3.5 text-xs text-slate-400">
                <li><a href="/#contact" className="transition-colors hover:text-white">LinkedIn</a></li>
                <li><a href="/#contact" className="transition-colors hover:text-white">Google Scholar</a></li>
                <li><a href="/#contact" className="transition-colors hover:text-white">ResearchGate</a></li>
                <li><a href="/#contact" className="transition-colors hover:text-white">GitHub</a></li>
              </ul>
              <p className="mt-7 text-[10px] uppercase tracking-[0.14em] text-slate-600">Available for</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">Research collaborations<br />Consulting &amp; speaking</p>
            </div>
          </div>

          <div className="relative z-10 grid items-center gap-4 border-t border-white/[0.08] py-6 text-center text-[10px] text-slate-500 sm:grid-cols-[1fr_auto_1fr] sm:text-left">
            <span>© 2026 Chameera De Silva</span>
            <a href="#about-top" className="mx-auto inline-flex items-center gap-2 transition-colors hover:text-white">Back to top <span aria-hidden="true">↑</span></a>
            <span className="sm:text-right">Privacy &nbsp;·&nbsp; All Rights Reserved</span>
          </div>
        </div>

        <div className="relative h-[105px] overflow-hidden sm:h-[145px] lg:h-[175px]" aria-hidden="true">
          <p className="absolute inset-x-0 top-5 whitespace-nowrap text-center text-[clamp(62px,12vw,170px)] font-black leading-none tracking-[-0.065em] text-white/[0.07]">CHAMEERA</p>
        </div>
      </div>
    </footer>
  )
}

export default PortfolioFooter
