import portrait from '../assets/about-portrait.png'

type Stat = {
  value: string
  label: string
}

type FloatingLabel = {
  text: string
  position: string
}

const stats: Stat[] = [
  { value: '10+', label: 'Research Publications' },
  { value: '1000+', label: 'Students Mentored' },
  { value: '50+', label: 'Industry Projects' },
  { value: '10+', label: 'Awards & Recognitions' },
]

const floatingLabels: FloatingLabel[] = [
  { text: 'Publications', position: 'top-6 right-4 sm:right-6 lg:-right-5' },
  { text: 'Students', position: 'top-1/2 left-2 -translate-y-1/2 sm:left-4 lg:-left-7' },
  { text: 'Projects', position: 'bottom-8 right-6 sm:right-10 lg:-right-3' },
]

// Swap this import to replace the portrait shown in the About section.
const PORTRAIT_SRC = portrait

function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="about-section bg-white py-20 sm:py-24 lg:py-28">
      <div className="about-layout mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-[52%_48%] lg:gap-20 lg:px-12">
        {/* Left column: copy + stats */}
        <div className="about-copy">
          <p data-about-copy className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">About</p>

          <h2
            id="about-heading"
            data-about-copy
            className="mt-4 text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0b1a2f]"
          >
            Transforming Research Into{' '}
            <span className="bg-gradient-to-r from-[#5da1ff] to-[#3645e8] bg-clip-text text-transparent">
              Real-World Innovation
            </span>
          </h2>

          <p data-about-copy className="mt-6 max-w-[560px] text-sm leading-6 text-gray-600 sm:text-[15px]">
            I combine academic research, artificial intelligence, data science, cloud computing, and modern
            software engineering to design practical solutions for real-world challenges. My work focuses on
            transforming complex ideas into reliable, scalable, and user-centred digital products.
          </p>

          <dl className="about-stats mt-10 grid max-w-lg grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-about-stat
                className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-lg hover:shadow-blue-100/60"
              >
                <dt className="text-3xl font-extrabold text-[#0b1a2f] sm:text-4xl">
                  <span data-about-counter data-value={stat.value.replace('+', '')}>{stat.value.replace('+', '')}</span>
                  <span aria-hidden="true">+</span>
                </dt>
                <dd className="mt-2 text-xs font-medium leading-5 text-gray-600">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column: portrait card */}
        <div className="about-visual relative mx-auto w-full max-w-[420px] lg:max-w-none">
          <div
            data-about-card
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_50%_28%,rgba(93,161,255,0.35),transparent_60%),linear-gradient(180deg,#0e1f38_0%,#0a1626_55%,#020407_100%)] shadow-2xl shadow-slate-900/20 lg:aspect-[3/4]"
          >
            <img
              src={PORTRAIT_SRC}
              alt="Portrait of Chameera De Silva"
              className="absolute bottom-0 left-1/2 h-[92%] w-auto -translate-x-1/2 object-contain object-bottom"
            />
          </div>

          {floatingLabels.map((item) => (
            <span
              key={item.text}
              data-about-label
              className={`absolute ${item.position} rounded-full border border-white/15 bg-[#0d1b2a]/70 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-black/30 backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 sm:text-sm`}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
