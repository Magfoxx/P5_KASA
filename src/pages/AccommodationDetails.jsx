import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../components/Collapse";
import Carousel from "../components/Caroussel";
import accommodationData from "../data/accommodations.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import NoPage from "../pages/NoPage";

import accommodationDetails from "../assets/styles/components/_accommodationDetails.scss";

function AccommodationDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialisation de navigate
  const accommodation = accommodationData.find(
    (accommodation) => accommodation.id === id
  );

  // Redirection vers la page d'erreur si le logement n'est pas trouvé
  useEffect(() => {
    if (!accommodation) {
      navigate("/nopage");
    }
  }, [accommodation, navigate]);

  if (!accommodation) {
    return null; // Retourne null pendant que la redirection s'effectue
  }

  return (
    <div className="accommodation__page">
      <Header />
      <main>
        <div className="gallery">
          <Carousel pictures={accommodation.pictures} />
        </div>

        <div className="infos-host-container">
          <div className="infos">
            <h1 className="infos__title">{accommodation.title}</h1>
            <p className="infos__location">{accommodation.location}</p>
          </div>
          <div className="host__info">
            <p className="host__info-text">{accommodation.host.name}</p>
            <img
              className="host__info-image"
              src={accommodation.host.picture}
              alt={accommodation.host.name}
            />
          </div>
        </div>

        <div className="tags-rating">
          <div className="tags">
            {accommodation.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
            <Rating rating={accommodation.rating} />
        </div>

        <div className="collapse-section">
          <Collapse title="Description">
            <p>{accommodation.description}</p>
          </Collapse>

          <Collapse title="Équipements">
            <ul>
              {accommodation.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AccommodationDetails;
