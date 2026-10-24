"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const projects = [
  {
    id: "arham-industrial-estate",
    name: "Arham Industrial Estate",
    image: "/images/projects/arham.jpeg",
    category: "Industrial",
    status: "Ongoing",
    location: "Gauddara, Pune",
    area: "4.25 Acres",
    featured: true,
  },
  {
    id: "jaywant-realica",
    name: "Jaywant Realica",
    image: "/images/projects/Jaywant-realica-image1.png",
    category: "Industrial",
    status: "Ongoing",
    location: "Arvi, Pune",
    area: "2 Acres",
    featured: true,
  },
  {
    id: "jaywant-i-bay",
    name: "Jaywant I-Bay",
    image: "/images/projects/Jaywant-I-Bay.png",
    category: "Industrial",
    status: "Ongoing",
    location: "Ranje, Pune",
    area: "2.06 Acres",
    featured: true,
  },
  {
    id: "bhavya-industrial",
    name: "Bhavya Industrial Hub (Phase-I)",
    image: "/images/projects/bhavya-industrial.webp",
    category: "Industrial",
    status: "Completed",
    location: "Gauddara, Pune",
    area: "3000 sqft",
    featured: false,
  },
  {
    id: "jaynagar",
    name: "Jay Nagar",
    image: "/images/projects/jaynagar.png",
    category: "Industrial",
    status: "Completed",
    location: "Kelavade, Pune",
    area: "3000 - 12000 sqft",
    featured: false,
  },
  {
    id: "jaywant-elite",
    name: "Jaywant Elite",
    image: "/images/projects/Jaywant-elite.png",
    category: "Development",
    status: "Ongoing",
  },
  {
    id: "jh-industrial-estate-phase-2",
    name: "JH Industrial Estate Phase 2",
    image: "/images/projects/jh-industrial-estate-phase-2.png",
    category: "Industrial",
    status: "Ongoing",
  },
  {
    id: "long-2",
    name: "Jaywant Estate",
    image: "/images/projects/long-2.png",
    category: "Industrial",
    status: "Completed",
    location: "Velu, Pune",
    area: "24000 - 120000 sqft",
    featured: false,
  },
  {
    id: "velu",
    name: "Velu Industrial Development",
    image: "/images/projects/velu-01.png",
    category: "Industrial",
    status: "Ongoing",
  },
  {
    id: "project-10",
    name: "Bhavya Industrial Hub (Phase-2)",
    image: "/images/projects/1-01.png",
    category: "Industrial",
    status: "Completed",
    location: "Gauddara, Pune",
    area: "6.5 Acres",
    featured: false,
  },
];

const filters = ["All Projects", "Ongoing", "Completed"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") return projects;

    return projects.filter((project) => project.status === activeFilter);
  }, [activeFilter]);

  return (
    <main className="jg-project-page">
      <section className="jg-project-page-hero">
        <div className="jg-project-page-hero-inner">
          <div className="jg-project-page-eyebrow">
            <span />
            JAYWANT GROUP / OUR PORTFOLIO
          </div>

          <div className="jg-project-page-heading-row">
            <div className="jg-project-page-heading">
              <h1>
                Spaces Built
                <br />
                <span>for Progress.</span>
              </h1>

              <p>
                Discover our developments, shaped by thoughtful planning,
                quality construction and a vision for lasting value.
              </p>
            </div>

            <div className="jg-project-page-count">
              <strong>{String(projects.length).padStart(2, "0")}</strong>
              <span>
                PROJECTS
                <br />
                IN OUR PORTFOLIO
              </span>
            </div>
          </div>

          <div className="jg-project-page-bottom-rule">
            <span />
            <span>BUILT ON VISION. DEFINED BY QUALITY.</span>
          </div>
        </div>
      </section>

      <section className="jg-project-listing">
        <div className="jg-project-listing-inner">
          <div className="jg-project-listing-heading">
            <div>
              <span className="jg-project-listing-eyebrow">
                EXPLORE OUR WORK
              </span>
              <h2>
                Our <span>Projects.</span>
              </h2>
            </div>

            <p>
              Every development reflects our commitment to building purposeful
              spaces for businesses and communities.
            </p>
          </div>

          <div className="jg-project-filters" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`jg-project-filter ${
                  activeFilter === filter ? "is-active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
                {activeFilter === filter && (
                  <span className="jg-project-filter-count">
                    {filteredProjects.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="jg-projects-grid jg-all-projects-grid">
            {filteredProjects.map((project, index) => (
              <article
                className="jg-project-card jg-all-project-card"
                key={project.id}
                id={project.id}
                style={{ "--project-index": index }}
              >
                <a
                  className="jg-project-image-link jg-all-project-image-link"
                  href={`/projects#${project.id}`}
                  aria-label={`Explore ${project.name}`}
                >
                  <div className="jg-project-image-wrap jg-all-project-image">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                      className="jg-project-image"
                    />

                    {/* <span className="jg-project-status jg-all-project-status"> */}
                    <span className="jg-project-status">
                      <span className="jg-project-status-dot" />
                      {project.status}
                    </span>

                    <span className="jg-all-project-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="jg-project-image-action"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </a>

                <div className="jg-project-card-content jg-all-project-content">
                  <div className="jg-project-category jg-all-project-category">
                    {project.category} Development
                  </div>

                  <h3 className="jg-project-name jg-all-project-name">
                    {project.name}
                  </h3>

                  {(project.location || project.area) && (
                    <div className="jg-project-meta jg-all-project-meta">
                      {project.location && (
                        <span className="jg-project-location">
                          <span aria-hidden="true">⌖</span>
                          {project.location}
                        </span>
                      )}

                      {project.area && (
                        <span className="jg-project-area">
                          <span className="jg-project-area-mark" />
                          {project.area}
                        </span>
                      )}
                    </div>
                  )}

                  <a
                    href={`/projects#${project.id}`}
                    className="jg-project-details jg-all-project-explore"
                  >
                    <span>EXPLORE PROJECT</span>
                    <span className="jg-project-details-arrow jg-all-project-explore-arrow">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="jg-project-empty">
              <h3>No projects in this category yet.</h3>
              <p>Explore all projects to see our portfolio.</p>
              <button
                type="button"
                onClick={() => setActiveFilter("All Projects")}
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
