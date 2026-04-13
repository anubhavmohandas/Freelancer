const projects = [
  {
    name: 'Ledger',
    description:
      'Multilingual business accounting tool with Trading A/c, P&L, Balance Sheet',
    tags: ['Vanilla JS', 'Accounting', 'Multilingual'],
    link: 'https://anubhavmohandas1.github.io/Ledger/',
  },
  {
    name: 'Nyxine Resume Maker',
    description: 'AI-powered resume builder with ATS optimization',
    tags: ['React', 'AI', 'Privacy-first'],
    link: 'https://myresumei.netlify.app/',
  },
  {
    name: 'Musicians Den India',
    description: 'Music school platform for instrument classes and music teaching',
    tags: ['React', 'Music', 'Education'],
    link: 'https://musiciansdenindia.com',
  },
  {
    name: 'Guitar Tools',
    description: 'Chord practice + transposition tools for guitarists',
    tags: ['Vanilla JS', 'Music Tools'],
    link: 'https://musiciansdenindia.com/tools/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 fade-in">
          My Work
        </h2>
        <p className="text-muted text-center mb-14 fade-in">
          Real projects, real results
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="fade-in card bg-surface border border-border rounded-2xl p-8 flex flex-col hover:border-accent/40 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-muted mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-medium hover:underline"
              >
                Live Demo →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
