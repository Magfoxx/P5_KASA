import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import accommodationData from "../data/accommodations.json";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import "../assets/styles/components/_accommodationDetails.scss";

function AccommodationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const accommodation = accommodationData.find(
    (accommodation) => accommodation.id === id
  );

  // Redirection vers la page d'erreur si le logement n'est pas trouvé
  useEffect(() => {
    if (!accommodation) {
      navigate("/nopage", { replace: true });
    }
  }, [accommodation, navigate]);

  // Suppression du retour null - le reste du composant sera rendu
  return (
    <div className="accommodation__page">
      <Header />
      <main>
        {accommodation && (
          <>
            <div className="gallery">
              <Slideshow pictures={accommodation.pictures} />
            </div>

            <div className="infos-host-container">
              <div className="infos-host-content">
                <div className="infos">
                  <h1 className="infos__title">{accommodation.title}</h1>
                  <p className="infos__location">{accommodation.location}</p>
                  <div className="tags">
                    {accommodation.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="host__container">
                  <div className="host__info">
                    <p className="host__info-text">{accommodation.host.name}</p>
                    <img
                      className="host__info-image"
                      src={accommodation.host.picture}
                      alt={accommodation.host.name}
                    />
                  </div>
                  <div className="rating">
                    <Rating rating={accommodation.rating} />
                  </div>
                </div>
              </div>
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
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default AccommodationDetails;