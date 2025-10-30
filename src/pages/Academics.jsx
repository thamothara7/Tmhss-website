export default function Academics() {
  const streams = ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology','English','Tamil','Social Science','French', 'Hindi', 'Business Studies','Commerce']
  return (
    <div className="container-wide py-12 md:py-16">
      <h2 className="section-title">Academics</h2>
      <p className="mt-4 leading-relaxed">Matriculation stream up to Class X and Tamil Nadu State Board for Classes XI–XII.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {streams.map((s) => (
          <div key={s} className="rounded-lg surface border border-[var(--surface-border)] p-6">
            <div className="font-semibold mb-2">{s}</div>
            <p className="text-sm leading-relaxed"></p>
          </div>
        ))}
      </div>
    </div>
  )
}



