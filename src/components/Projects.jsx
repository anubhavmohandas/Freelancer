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
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-5 fade-in">
          My Work
        </h2>
        <p className="text-muted text-center text-xl mb-16 fade-in">
          Real projects, real results
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.name}
              className="fade-in card bg-surface border border-border rounded-2xl p-10 flex flex-col hover:border-accent/50 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-3">{p.name}</h3>
              <p className="text-muted text-lg mb-6 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-accent/10 text-accent px-4 py-1.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold text-lg hover:underline"
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
