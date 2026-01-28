import './App.css'

const experience = [
  {
    title: 'Software Development Engineer',
    company: 'Amazon Web Services',
    companyUrl: 'https://aws.amazon.com',
    date: '2023 - present',
    location: 'Vancouver',
    highlights: [
      'IPv6 compliance across 30+ AWS regions (20B+ requests/month)',
      'Multi-Region Replication for 500M+ identity records',
      'CMK-compliant search engine with sub-second P99 latency',
    ],
  },
  {
    title: 'Backend Engineer',
    company: 'foodpanda',
    companyUrl: 'https://foodpanda.com',
    date: '2022 - 2023',
    location: 'Taiwan',
    highlights: [
      'Launched Dine-in vertical, expanding into new business line',
      'Unified incentive domain across delivery and dine-in',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Garena',
    companyUrl: 'https://garena.com',
    date: '2018 - 2022',
    location: 'Taiwan',
    highlights: [
      'Global event platform handling 2B+ requests/day',
      'Improved API throughput 80% via Redis + protobuf',
      'Led frontend team of 10 engineers',
    ],
  },
]

function App() {
  return (
    <>
      <header>
        <div className="header-top">
          <img className="avatar" src="/avatar.jpg" alt="Andrew Wu" />
          <div className="header-info">
            <h1>Andrew Wu</h1>
            <p className="title">Senior Software Engineer</p>
          </div>
        </div>
        <p className="intro">
          Hello, I'm a backend engineer based in Vancouver, Canada.
        </p>
        <p className="intro">
          I enjoy building scalable distributed systems, with 8+ years of experience at AWS, foodpanda, and Garena.
        </p>
      </header>

        <section>
        <h2>Experience</h2>
        <div className="experience">
          {experience.map((e, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-row">
                <div className="exp-left">
                  <span className="exp-title">{e.title}, </span>
                  <a href={e.companyUrl} target="_blank" rel="noopener noreferrer">{e.company}</a>
                </div>
                <div className="exp-right">
                  <span>{e.date}</span>
                  <span className="exp-location">{e.location}</span>
                </div>
              </div>
              <ul className="exp-highlights">
                {e.highlights.map((h, j) => <li key={j}>{h}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="experience">
          <div className="exp-row">
            <div className="exp-left">
              <span className="exp-title">M.S. Computer Science, </span>
              <a href="https://www.ntu.edu.tw" target="_blank" rel="noopener noreferrer">National Taiwan University</a>
            </div>
            <div className="exp-right">
              <span>2016 - 2018</span>
              <span className="exp-location">Taiwan</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <div className="contact">
          <a href="https://github.com/wuddder" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
          <a href="https://linkedin.com/in/aycwu" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="mailto:andrew90622@gmail.com"><i className="fas fa-envelope"></i> Email</a>
        </div>
      </section>
    </>
  )
}

export default App
