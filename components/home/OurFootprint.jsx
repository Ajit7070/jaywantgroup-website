"use client";

import { useMemo, useState } from "react";
import FootprintMap from "./FootprintMap";

const footprintProjects = [
  {
    id: "arham-industrial-estate",
    name: "Arham Industrial Estate",
    location: "Gauddara, Pune",
    category: "Industrial",
    area: "4.25 Acres",
    // coordinates: null,
    coordinates: [73.841029, 18.357008],
  },

  {
    id: "jaywant-realica",
    name: "Jaywant Realica",
    location: "Arvi, Pune",
    category: "Industrial",
    area: "2 Acres",
    coordinates: null,
  },
  {
    id: "jaywant-i-bay",
    name: "Jaywant I-Bay",
    location: "Ranje, Pune",
    category: "Industrial",
    area: "2.06 Acres",
    coordinates: null,
  },
  {
    id: "bhavya-industrial",
    name: "Bhavya Industrial Hub (Phase-I)",
    location: "Gauddara, Pune",
    category: "Industrial",
    area: "3000 sqft",
    coordinates: null,
  },
  {
    id: "jaynagar",
    name: "Jay Nagar",
    location: "Kelavade, Pune",
    category: "Industrial",
    area: "3000 - 12000 sqft",
    coordinates: null,
  },
  {
    id: "jaywant-elite",
    name: "Jaywant Elite",
    location: "Location to be confirmed",
    category: "Development",
    area: "",
    coordinates: null,
  },
  {
    id: "jh-industrial-estate-phase-2",
    name: "JH Industrial Estate Phase 2",
    location: "Location to be confirmed",
    category: "Industrial",
    area: "",
    coordinates: null,
  },
  {
    id: "jaywant-estate",
    name: "Jaywant Estate",
    location: "Velu, Pune",
    category: "Industrial",
    area: "24000 - 120000 sqft",
    coordinates: null,
    // coordinates: [73.85322383356565, 18.3625304700014],
  },
  {
    id: "velu-industrial-development",
    name: "Velu Industrial Development",
    location: "Location to be confirmed",
    category: "Industrial",
    area: "",
    coordinates: null,
  },
  {
    id: "bhavya-industrial-phase-2",
    name: "Bhavya Industrial Hub (Phase-2)",
    location: "Gauddara, Pune",
    category: "Industrial",
    area: "6.5 Acres",
    coordinates: null,
  },
];

const categories = ["All Projects", "Industrial", "Development"];

export default function OurFootprint() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProjectId, setSelectedProjectId] = useState(
    footprintProjects[0].id
  );

  const selectedProject = footprintProjects.find(
    (project) => project.id === selectedProjectId
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return footprintProjects;
    }

    return footprintProjects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    const firstProject =
      category === "All Projects"
        ? footprintProjects[0]
        : footprintProjects.find((project) => project.category === category);

    if (firstProject) {
      setSelectedProjectId(firstProject.id);
    }
  };

  return (
    <section className="jg-footprint" id="our-footprint">
      <div className="jg-footprint-inner">
        <div className="jg-footprint-heading">
          <span className="jg-footprint-eyebrow">
            <span className="jg-footprint-eyebrow-line" />
            JAYWANT GROUP / OUR REACH
          </span>

          <h2 className="jg-footprint-title">
            Our <span>Footprint.</span>
          </h2>

          <p className="jg-footprint-description">
            Discover the locations shaping our journey and explore the
            developments contributing to our growing presence.
          </p>
        </div>

        <div className="jg-footprint-layout">
          <div className="jg-footprint-panel">
            <div className="jg-footprint-panel-heading">
              <div>
                <span className="jg-footprint-panel-label">
                  EXPLORE LOCATIONS
                </span>
                <h3>Our Developments</h3>
              </div>

              <span className="jg-footprint-total">
                {String(filteredProjects.length).padStart(2, "0")}
              </span>
            </div>

            <div
              className="jg-footprint-categories"
              role="group"
              aria-label="Filter developments by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`jg-footprint-category ${
                    activeCategory === category ? "is-active" : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="jg-footprint-project-list">
              {filteredProjects.map((project, index) => (
                <button
                  type="button"
                  key={project.id}
                  className={`jg-footprint-project ${
                    selectedProjectId === project.id ? "is-selected" : ""
                  }`}
                  onClick={() => setSelectedProjectId(project.id)}
                  aria-pressed={selectedProjectId === project.id}
                >
                  <span className="jg-footprint-project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="jg-footprint-project-copy">
                    <span className="jg-footprint-project-name">
                      {project.name}
                    </span>

                    <span className="jg-footprint-project-location">
                      <span aria-hidden="true">⌖</span>
                      {project.location}
                    </span>
                  </span>

                  {/* <span
                    className="jg-footprint-project-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span> */}
                  <span
                    className="jg-footprint-project-arrow"
                    aria-hidden="true"
                    title={
                      project.coordinates
                        ? "View project on map"
                        : "Project coordinates pending"
                    }
                  >
                    {project.coordinates ? "↗" : "•"}
                  </span>
                </button>
              ))}
            </div>

            <div className="jg-footprint-panel-footer">
              <span className="jg-footprint-footer-dot" />
              BUILDING ACROSS POSSIBILITIES
            </div>
          </div>

          <div className="jg-footprint-map-panel">
            <div className="jg-footprint-map-label">
              <span className="jg-footprint-map-label-dot" />
              PUNE &amp; SURROUNDING REGIONS
            </div>

            <FootprintMap
              projects={footprintProjects}
              selectedProject={selectedProject}
              onMarkerSelect={(projectId) => setSelectedProjectId(projectId)}
            />

            <div className="jg-footprint-map-caption">
              <span>JAYWANT GROUP</span>
              <span>OUR DEVELOPMENTS, OUR REACH.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
