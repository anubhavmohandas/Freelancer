const steps = [
  {
    icon: '💬',
    title: 'Share Your Idea',
    description: 'WhatsApp or quick call, tell me what you need',
  },
  {
    icon: '🛠️',
    title: 'I Build It',
    description: 'Clean, fast, 3–10 days depending on scope',
  },
  {
    icon: '🚀',
    title: 'You Go Live',
    description: 'Get your product, source code, and full ownership',
  },
]

export default function Process() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-5 fade-in">
          How It Works
        </h2>
        <p className="text-muted text-center text-xl mb-16 fade-in">
          Simple, transparent, no BS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="fade-in text-center p-10">
              <div className="text-6xl mb-6">{step.icon}</div>
              <div className="text-sm text-accent font-semibold mb-3 uppercase tracking-widest">
                Step {i + 1}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
