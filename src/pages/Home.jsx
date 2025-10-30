import { useEffect, useState, useRef } from 'react'
import { upcomingEvents, achievements } from '../data/events.js'

const quotes = [
  {
    text: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.',
    cite: 'Dr. A. P. J. Abdul Kalam'
  },
  {
    text: 'Excellence happens not by accident. It is a process.',
    cite: 'Dr. A. P. J. Abdul Kalam'
  },
  {
    text: 'You have to dream before your dreams can come true.',
    cite: 'Dr. A. P. J. Abdul Kalam'
  }
]

const announcementsInitial = [
  { id: 1, text: 'Science Exhibition scheduled for October 31, 2025.'},
  { id: 2, text: '100% pass in Class X & XII Board Examinations last year.'},
  { id: 3, text: 'Admissions open for 2025–26 (LKG to XI).'}
]

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [pauseTicker, setPauseTicker] = useState(false)
  const tickerRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => setQuoteIndex((i) => (i + 1) % quotes.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      {/* Announcement card removed as requested */}
      {/* Hero */}
      <section className="relative">
        <div className="container-wide py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="section-title">Thangamani Matriculation Higher Secondary School</h1>
            <p className="mt-4 text-lg leading-relaxed">Founded in 1984 in Pattabiram, Chennai — nurturing holistic development and academic excellence.</p>
            <div className="mt-6 flex gap-3">
              <a href="/admissions" className="btn-primary">Apply Now</a>
              <a href="/about" className="inline-flex items-center justify-center rounded-md border border-[var(--brand-accent)] px-5 py-2.5 text-[var(--brand-dark)] hover:bg-white transition">Learn More</a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/Images/IMG_0.jpg"
              alt="School campus"
              className="w-full aspect-[4/3] object-cover rounded-xl shadow"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Announcements ticker */}
      <section className="border-y border-[var(--surface-border)]">
  <div className="container-wide py-3 md:py-4">
    <div className="flex items-center gap-4 md:gap-6 overflow-hidden rounded-full border border-[var(--surface-border)] surface px-6 py-2 md:px-8">
      <span className="subtitle whitespace-nowrap shrink-0">Announcements</span>
      <div
        className="relative flex-1 overflow-hidden"
        onMouseEnter={() => setPauseTicker(true)}
        onMouseLeave={() => setPauseTicker(false)}
      >
        <div
          ref={tickerRef}
          className={`flex gap-12 whitespace-nowrap ${pauseTicker ? '' : 'animate-[scroll_20s_linear_infinite]'}`}
        >
          {announcementsInitial.map((a) => (
            <span
              key={a.id}
              className="text-[var(--brand-dark)]/80 text-sm md:text-base"
            >
              {a.text}
            </span>
          ))}
          {announcementsInitial.map((a) => (
            <span
              key={`dup-${a.id}`}
              className="text-[var(--brand-dark)]/80 text-sm md:text-base"
            >
              {a.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* APJ Abdul Kalam rotating quote */}
      <section className="container-wide py-12 md:py-16">
        <figure className="rounded-xl border border-[var(--surface-border)] surface p-6 md:p-10 shadow-sm">
          <blockquote className="text-xl md:text-2xl leading-relaxed">“{quotes[quoteIndex].text}”</blockquote>
          <figcaption className="mt-4 subtitle">— {quotes[quoteIndex].cite}</figcaption>
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center justify-center rounded-md border border-[var(--brand-accent)] px-4 py-2" onClick={() => setQuoteIndex((i) => (i - 1 + quotes.length) % quotes.length)}>Prev</button>
            <button className="btn-primary" onClick={() => setQuoteIndex((i) => (i + 1) % quotes.length)}>Next</button>
          </div>
        </figure>
      </section>

     {/* Highlights */}
      <section className="container-wide pb-16 grid md:grid-cols-3 gap-6">
  {[
    {
      title: 'Academic Excellence',
      text: 'Striving for the highest standards in learning and achievement.',
    },
    {
      title: 'Co-curricular Focus',
      text: 'Encouraging creativity and teamwork beyond the classroom.',
    },
    {
      title: 'Values & Discipline',
      text: 'Building strong character through respect and responsibility.',
    },
  ].map(({ title, text }) => (
          <div
        key={title}
        className="rounded-lg surface border border-[var(--surface-border)] p-6"
      >
      <div className="font-semibold mb-2">{title}</div>
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  ))}
</section>

      {/* Events & Achievements */}
      <section className="container-wide pb-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-lg surface border border-[var(--surface-border)] p-6">
          <h3 className="font-semibold text-lg">Upcoming Events</h3>
          <ul className="mt-3 space-y-2">
            {upcomingEvents.map((e) => (
              <li key={e.id} className="flex items-start gap-3">
                <span className="subtitle shrink-0 w-24">{new Date(e.date).toLocaleDateString()}</span>
                <div>
                  <div className="font-medium">{e.title}</div>
                  <div className="text-sm text-[var(--brand-dark)]/70">{e.venue}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg surface border border-[var(--surface-border)] p-6">
          <h3 className="font-semibold text-lg">Achievements</h3>
          <ul className="mt-3 space-y-2">
            {achievements.map((a) => (
              <li key={a.id}>
                <div className="font-medium">{a.title}</div>
                <div className="text-sm text-[var(--brand-dark)]/70">{a.detail}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}



