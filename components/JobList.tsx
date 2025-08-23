import React from "react";

type Job = {
  title: string;
  location: string;
  type: string;
  description: string;
};

const jobs: Job[] = [
  {
    title: "Frontend Engineer (React/TypeScript)",
    location: "Remote",
    type: "Full-time",
    description: "Work on zillion.ai’s core UI and cross-platform experiences.",
  },
  {
    title: "AI Research Engineer",
    location: "Tokyo, Japan / Remote",
    type: "Full-time",
    description: "Build generative AI systems powering gaming and anime content.",
  },
  {
    title: "Community Manager",
    location: "Remote",
    type: "Part-time",
    description: "Grow and engage our global anime and gaming community.",
  },
];

const JobList: React.FC = () => (
  <section
    style={{
      maxWidth: "900px",
      margin: "2rem auto",
      padding: "2rem",
      background: "#232946cc",
      borderRadius: "1.5rem",
      boxShadow: "0 2px 16px #00ffe733",
    }}
  >
    <h2 style={{ color: "#00ffe7", marginBottom: "1.5rem" }}>Current Openings</h2>
    {jobs.map((job, idx) => (
      <div
        key={idx}
        style={{
          marginBottom: "2rem",
          padding: "1.5rem",
          borderRadius: "1rem",
          background: "#181c2f",
          boxShadow: "0 2px 8px #00ffe733",
        }}
      >
        <h3 style={{ color: "#ff00c8", marginBottom: "0.5rem" }}>{job.title}</h3>
        <p style={{ margin: "0.2rem 0", fontWeight: 600 }}>
          📍 {job.location} | 💼 {job.type}
        </p>
        <p style={{ marginTop: "0.5rem", color: "#e0e6f7" }}>{job.description}</p>
        <a
          href={`mailto:careers@zillion.ai?subject=Application: ${job.title}`}
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.8rem 1.5rem",
            borderRadius: "1rem",
            background: "linear-gradient(90deg, #00ffe7 0%, #ff00c8 100%)",
            color: "#181c2f",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 2px 8px #00ffe755",
          }}
        >
          Apply Now
        </a>
      </div>
    ))}
  </section>
);

export default JobList;
