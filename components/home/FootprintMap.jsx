"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function FootprintMap({
  projects = [],
  selectedProject,
  onMarkerSelect,
}) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  // Initialize the map once.
  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    if (!token || !mapContainerRef.current || mapRef.current) {
      return;
    }

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [73.8567, 18.5204],
      zoom: 9,
      pitch: 0,
      attributionControl: true,
    });

    map.addControl(
      new mapboxgl.NavigationControl({
        showCompass: true,
        showZoom: true,
      }),
      "top-right"
    );

    mapRef.current = map;

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Add markers only for projects with verified coordinates.
  useEffect(() => {
    const map = mapRef.current;

    if (!map) return;

    const updateMarkers = () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];

      projects.forEach((project) => {
        if (
          !Array.isArray(project.coordinates) ||
          project.coordinates.length !== 2 ||
          !project.coordinates.every(Number.isFinite)
        ) {
          return;
        }

        const marker = new mapboxgl.Marker({ color: "#ED701E" })
          .setLngLat(project.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 24 }).setText(project.name))
          .addTo(map);

        marker.getElement().addEventListener("click", () => {
          onMarkerSelect?.(project.id);
        });

        markersRef.current.push(marker);
      });
    };

    if (map.isStyleLoaded()) {
      updateMarkers();
    } else {
      map.once("load", updateMarkers);
    }

    return () => {
      map.off("load", updateMarkers);
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
    };
  }, [projects, onMarkerSelect]);

  // Focus the map only when the selected project has coordinates.
  useEffect(() => {
    const map = mapRef.current;

    if (!map || !selectedProject?.coordinates) return;

    map.flyTo({
      center: selectedProject.coordinates,
      zoom: 13,
      essential: true,
      duration: 1200,
    });
  }, [selectedProject]);

  return (
    <div className="jg-footprint-map">
      <div
        ref={mapContainerRef}
        className="jg-footprint-map-canvas"
        aria-label="Interactive map of Jaywant Group developments"
      />
    </div>
  );
}
