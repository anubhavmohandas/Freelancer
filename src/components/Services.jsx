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
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 fade-in">
          What I Do
        </h2>
        <p className="text-muted text-center mb-14 fade-in">
          End-to-end solutions, delivered fast
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="fade-in card bg-surface border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted mb-6">{s.description}</p>
              <div className="flex justify-between text-sm">
                <span className="text-accent font-medium">{s.price}</span>
                <span className="text-muted">{s.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
