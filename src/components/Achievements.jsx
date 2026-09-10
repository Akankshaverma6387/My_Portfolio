const achievements = [
  {
    title: "3rd Position - IBM Bob Hackathon",
    description:
      "Secured 3rd position in the IBM Bob Hackathon by building and presenting a working solution.",
    certificate: "https://your-certificate-link.com/ibm-bob",
  },
  {
    title: "UP Board State Rank 6",
    description:
      "Achieved State Rank 6 with 96.4% marks in the UP Board Class 12th examinations 2023.",
    certificate: "https://your-certificate-link.com/up-board",
  },
  {
    title: "Avinya 2026 - Final Round",
    description:
      "Reached the Final Round of the Avinya 2026, an IIT Guwahati Hackathon conducted by Prakriti Club.",
    certificate: "\certificates\AvinyaCertificate.jpeg",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Achievements</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-700 p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 mb-5">
                {item.description}
              </p>

              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white hover:text-blue font-medium "
                style={{textDecoration:"none"}}
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
