const WHATSAPP_URL = 'https://wa.me/917486854380'

const tiers = [
  {
    name: 'Starter',
    price: '₹5,000–15,000',
    priceUsd: '$60–180',
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
    price: '₹10,000–30,000',
    priceUsd: '$120–360',
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
    priceUsd: null,
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
    <section id="pricing" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-5 fade-in">
          Pricing
        </h2>
        <p className="text-muted text-center text-xl mb-16 fade-in">
          Transparent pricing, no hidden costs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`fade-in card rounded-2xl p-10 flex flex-col border transition-colors ${
                tier.highlighted
                  ? 'bg-accent/5 border-accent'
                  : 'bg-surface border-border hover:border-accent/50'
              }`}
            >
              <h3 className="text-base font-semibold text-muted uppercase tracking-widest mb-4">
                {tier.name}
              </h3>
              <div className="mb-1">
                <span className="text-2xl sm:text-3xl font-bold">{tier.price}</span>
              </div>
              {tier.priceUsd && (
                <p className="text-muted text-lg mb-8">{tier.priceUsd}</p>
              )}
              {!tier.priceUsd && <div className="mb-8" />}
              <ul className="flex-1 space-y-4 mb-10">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted text-lg">
                    <svg
                      className="w-5 h-5 text-accent shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center font-semibold py-4 rounded-xl text-lg transition ${
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
