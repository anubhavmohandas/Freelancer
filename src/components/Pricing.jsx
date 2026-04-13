const WHATSAPP_URL = 'https://wa.me/917486854380'

const tiers = [
  {
    name: 'Starter',
    price: '₹5,000–15,000 / $60–180',
    features: [
      'Landing page',
      '3–5 day delivery',
      '1 revision',
      'Source code',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '₹10,000–30,000 / $120–360',
    features: [
      'Full web app',
      '5–10 day delivery',
      '3 revisions',
      'Source code',
      'Basic SEO',
    ],
    highlighted: true,
  },
  {
    name: 'Custom',
    price: "Let's Talk",
    features: [
      'Complex builds',
      'Timeline varies',
      'Unlimited revisions',
      'Source code',
      'Priority support',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 fade-in">
          Pricing
        </h2>
        <p className="text-muted text-center mb-14 fade-in">
          Transparent pricing, no hidden costs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`fade-in card rounded-2xl p-8 flex flex-col border transition-colors ${
                tier.highlighted
                  ? 'bg-accent/5 border-accent'
                  : 'bg-surface border-border hover:border-accent/40'
              }`}
            >
              <h3 className="text-lg font-semibold text-muted uppercase tracking-wider mb-2">
                {tier.name}
              </h3>
              <div className="text-2xl sm:text-3xl font-bold mb-6">{tier.price}</div>
              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted">
                    <svg
                      className="w-5 h-5 text-accent shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center font-semibold py-3 rounded-lg transition ${
                  tier.highlighted
                    ? 'bg-accent text-accent-fg hover:brightness-110'
                    : 'border border-accent text-accent hover:bg-accent/10'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
