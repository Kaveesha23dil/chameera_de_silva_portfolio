import type { ReactNode } from 'react'

type Expertise = {
  title: string
  description: string
  icon: ReactNode
}

const iconClass = 'h-6 w-6 fill-none stroke-current [stroke-width:1.7]'

const expertise: Expertise[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Building intelligent systems and predictive models that learn, adapt, and deliver real-world value.',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
        <path d="M9 4V2m6 2V2M9 22v-2m6 2v-2M4 9H2m2 6H2m20-6h-2m2 6h-2M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" />
        <path d="M9 9.5a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 1 1-3 0m6-6v7m-1.5-3.5h3" />
      </svg>
    ),
  },
  {
    title: 'Data Science & Analytics',
    description: 'Extracting meaningful insights from complex data to drive better decisions.',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
        <path d="M5 19V9m5 10V5m5 14v-7m5 7V3" />
        <path d="M3 19h19" />
      </svg>
    ),
  },
  {
    title: 'Cloud Computing & DevOps',
    description: 'Designing scalable cloud solutions and implementing DevOps practices for high-performance systems.',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
        <path d="M7 18h10a4 4 0 0 0 .6-8A6 6 0 0 0 6.2 9 4.5 4.5 0 0 0 7 18Z" />
      </svg>
    ),
  },
  {
    title: 'Blockchain Technology',
    description: 'Developing secure, transparent, and decentralized applications for the digital future.',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
        <path d="m8 3 4 2.3L8 7.6 4 5.3 8 3Zm8 6.7 4 2.3-4 2.3-4-2.3 4-2.3ZM8 16.4l4 2.3L8 21l-4-2.3 4-2.3Z" />
        <path d="M8 7.6v3.2m4-5.5v3.2m4 5.8v2.9m-4-5.2v3.2" />
      </svg>
    ),
  },
  {
    title: 'AI & Machine Learning',
    description: 'Advancing knowledge through rigorous research and contributing to global academic communities.',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
        <path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z" />
        <path d="M7 20V8h12M9 8h6M9 12h7" />
      </svg>
    ),
  },
  {
    title: 'AI & Machine Learning',
    description: 'Helping organizations adopt emerging technologies and achieve strategic goals.',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="7" r="2.5" />
        <path d="M3 20v-2a5 5 0 0 1 10 0v2m1-5.5a4 4 0 0 1 7 2.5v3" />
      </svg>
    ),
  },
]

function ExpertiseSection() {
  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="reveal-section relative overflow-hidden bg-[#0b162c] py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,rgba(51,96,185,0.16),transparent_45%)]" />
      <div data-reveal className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-[560px]">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#4380ff]">
            Expertise <span className="h-1.5 w-1.5 rounded-full bg-[#3478ff]" />
          </p>
          <h2 id="expertise-heading" className="mt-4 text-[clamp(2rem,3vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.035em]">
            Areas of Expertise &amp;
            <span className="block text-[#4380ff]">Research Focus</span>
          </h2>
          <p className="mt-6 max-w-[510px] text-sm leading-6 text-slate-400 sm:text-[15px]">
            Combining academic research, industry experience, and emerging technologies to deliver innovative solutions and meaningful impact.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group min-h-[178px] rounded-2xl border border-white/[0.09] bg-[linear-gradient(135deg,rgba(28,45,78,0.9),rgba(18,31,57,0.86))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3978ff]/40 hover:bg-[linear-gradient(135deg,rgba(31,54,96,0.96),rgba(19,35,67,0.94))] hover:shadow-[0_18px_38px_rgba(3,10,27,0.3)]"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 text-[#3478ff] transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold leading-[1.15] sm:text-xl tracking-[-0.02em] text-slate-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection