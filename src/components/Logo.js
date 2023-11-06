import Luggage from '../icons/travel-luggage.png';
import Travel from '../icons/travel.png';

export default function Logo() {
  return (
    <h1>
      <img src={Travel} alt="World icon" className="logoIcon" />
      Pack Wise
      <img src={Luggage} alt="Luggage icon" className="logoIcon" />
    </h1>
  );
}
