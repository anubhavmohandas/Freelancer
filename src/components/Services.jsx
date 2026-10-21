const services = [
  {
    icon: '🌐',
    title: 'Website Development',
    description: 'Landing pages, business sites',
    price: '₹5,000–15,000 / $60–180',
    timeline: '3–5 days',
  },
  {
    icon: '⚙️',
    title: 'Web App / Tool',
    description: 'Custom tools, dashboards, calculators',
    price: '₹10,000–30,000 / $120–360',
    timeline: '5–10 days',
  },
  {
    icon: '🤖',
    title: 'Automation Setup',
    description: 'WhatsApp, form, workflow automation',
    price: '₹3,000–8,000 / $35–95',
    timeline: '1–3 days',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-5 fade-in">
          What I Do
        </h2>
        <p className="text-muted text-center text-xl mb-16 fade-in">
          End-to-end solutions, delivered fast
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="fade-in card bg-surface border border-border rounded-2xl p-10 hover:border-accent/50 transition-colors"
            >
              <div className="text-5xl mb-6">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted text-lg mb-8">{s.description}</p>
              <div className="pt-6 border-t border-border flex justify-between items-center text-sm">
                <div>
                  {s.price.split(' / ').map((p, i) => (
                    <div key={i} className={i === 0 ? 'text-accent font-semibold text-base' : 'text-muted text-sm'}>{p}</div>
                  ))}
                </div>
                <span className="text-muted shrink-0 ml-4">{s.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
