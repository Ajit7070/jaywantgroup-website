import Image from "next/image";

const featuredProjects = [
  {
    id: "arham-industrial-estate",
    name: "Arham Industrial Estate",
    location: "Gauddara, Pune",
    area: "4.25 Acres",
    category: "Industrial Development",
    status: "Ongoing",
    image: "/images/projects/arham.jpeg",
    number: "01",
  },
  {
    id: "jaywant-realica",
    name: "Jaywant Realica",
    location: "Arvi, Pune",
    area: "2 Acres",
    category: "Industrial Development",
    status: "Ongoing",
    image: "/images/projects/Jaywant-realica-image1.png",
    number: "02",
  },
  {
    id: "jaywant-i-bay",
    name: "Jaywant I-Bay",
    location: "Ranje, Pune",
    area: "2.06 Acres",
    category: "Industrial Development",
    status: "Ongoing",
    image: "/images/projects/Jaywant-I-Bay.png",
    number: "03",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="jg-projects" id="featured-projects">
      <div className="jg-projects-inner">
        <div className="jg-projects-heading">
          <div className="jg-projects-eyebrow">
            <span className="jg-projects-eyebrow-line" />
            OUR DEVELOPMENTS
          </div>

          <div className="jg-projects-heading-row">
            <div>
              <h2 className="jg-projects-title">
                Featured <span>Projects.</span>
              </h2>
              <p className="jg-projects-description">
                Explore developments shaped by our commitment to quality,
                thoughtful planning and lasting value.
              </p>
            </div>

            <a className="jg-projects-view-all" href="/projects">
              <span>VIEW ALL PROJECTS</span>
              <span className="jg-projects-view-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="jg-projects-grid">
          {featuredProjects.map((project) => (
            <article className="jg-project-card" key={project.id}>
              <a
                className="jg-project-image-link"
                href={`/projects#${project.id}`}
                aria-label={`Explore ${project.name}`}
              >
                <div className="jg-project-image-wrap">
                  <Image
                    src={project.image}
                    alt={`${project.name} project in ${project.location}`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className="jg-project-image"
                  />

                  <span className="jg-project-status">
                    <span className="jg-project-status-dot" />
                    {project.status}
                  </span>

                  <span className="jg-project-image-action" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </a>

              <div className="jg-project-card-content">
                <div className="jg-project-category">{project.category}</div>

                <h3 className="jg-project-name">{project.name}</h3>

                <div className="jg-project-meta">
                  <span className="jg-project-location">
                    <span aria-hidden="true">⌖</span>
                    {project.location}
                  </span>

                  <span className="jg-project-area">
                    <span className="jg-project-area-mark" />
                    {project.area}
                  </span>
                </div>

                <a
                  className="jg-project-details"
                  href={`/projects#${project.id}`}
                >
                  <span>EXPLORE PROJECT</span>
                  <span className="jg-project-details-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="jg-projects-bottom">
          <span className="jg-projects-bottom-line" />
          <p>Building spaces. Creating possibilities.</p>
          <span className="jg-projects-bottom-line" />
        </div>
      </div>
    </section>
  );
}
