import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './mainSect1.css';
import brasilImg from '../assets/BRASIL.jpg';
import mexicoImg from '../assets/mexico.jpg';
import franciaImg from '../assets/francia.webp';

function MainSect1() {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const destinations = [
    { name: "Brasil", image: brasilImg },
    { name: "México", image: mexicoImg },
    { name: "Francia", image: franciaImg }
  ];

  return (
    <div className="container">
      {destinations.map((dest, index) => (
        <div
          key={index}
          className="card fade-in"
          style={{ backgroundImage: `url(${dest.image})` }}
          onClick={() => navigate(`/viajes/${dest.name}`)}
        >
          <div className="overlay">
            <div className="center-content">
              <h2>{dest.name}</h2>
              <button
                className="center-button"
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainSect1;
