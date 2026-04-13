export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="fade-in text-accent font-semibold text-sm uppercase tracking-widest mb-5">
              About Me
            </p>
            <h2 className="fade-in text-4xl sm:text-5xl font-bold leading-tight mb-8">
              Not just a developer.{' '}
              <span className="text-accent">Someone who's been on your side of the table.</span>
            </h2>
            <div className="fade-in space-y-5 text-muted text-lg leading-relaxed">
              <p>
                I'm Anubhav — a cybersecurity researcher and web developer based in Ahmedabad, India.
              </p>
              <p>
                I've built OSINT tools, security systems, and web applications. But I've also run my own Instagram business, taught music, and built tools that real people actually use daily.
              </p>
              <p>
                That background means when you come to me with a problem, I don't just write code. I understand what you're trying to achieve — and I build exactly that. Fast, clean, and secure.
              </p>
            </div>
            <div className="fade-in mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 13c0 5.523-4.477 10-10 10S1 18.523 1 13c0-.68.069-1.345.2-1.988L12 14z" />
                </svg>
              </div>
              <p className="text-muted text-lg">
                B.Tech CS @ Ganpat University —{' '}
                <span className="text-text font-semibold">Cybersecurity & Digital Forensics</span>
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="fade-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-accent/20 blur-3xl scale-110" />
              <img
                src="https://avatars.githubusercontent.com/u/68500393?v=4"
                alt="Anubhav Mohandas"
                className="relative w-80 sm:w-96 lg:w-[420px] rounded-3xl object-cover shadow-2xl border border-border"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
