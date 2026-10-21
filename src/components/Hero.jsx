const WHATSAPP_URL = 'https://wa.me/917486854380'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
          I build web tools that{' '}
          <span className="text-accent">actually work</span>
        </h1>
        <p className="mt-8 text-xl sm:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
          Fast delivery. Clean code. Real results.
          <br />
          Based in India, serving globally.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-accent text-accent-fg font-semibold px-10 py-4 rounded-xl text-lg hover:brightness-110 transition"
          >
            See My Work
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent text-accent font-semibold px-10 py-4 rounded-xl text-lg hover:bg-accent/10 transition"
          >
            WhatsApp Me
          </a>
        </div>
      </div>
    </section>
  )
}
