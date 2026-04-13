const WHATSAPP_URL = 'https://wa.me/917486854380'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          I build web tools that{' '}
          <span className="text-accent">actually work</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted max-w-xl mx-auto">
          Fast delivery. Clean code. Real results.
          <br />
          Based in India, serving globally.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-accent text-bg font-semibold px-8 py-3.5 rounded-lg text-lg hover:brightness-110 transition"
          >
            See My Work
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent text-accent font-semibold px-8 py-3.5 rounded-lg text-lg hover:bg-accent/10 transition"
          >
            WhatsApp Me
          </a>
        </div>
      </div>
    </section>
  )
}
