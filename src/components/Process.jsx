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
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 fade-in">
          How It Works
        </h2>
        <p className="text-muted text-center mb-14 fade-in">
          Simple, transparent, no BS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="fade-in text-center p-8">
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="text-sm text-accent font-semibold mb-2">
                Step {i + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
