import PropTypes from 'prop-types';
import Modal from '../../../../components/Modal';
import { useEffect, useState } from 'react';
import api from '../../../../service/api.js';
import styles from './LearnMoreModal.module.css';
import Badges from '../Badges';
import Button from '../../../../components/ui/Button/index.js';

const LearnMoreModal = ({ id, onClose }) => {
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    (async () => {
      setAdvert(await api.fetchAdvertById(id));
    })();
  }, [id]);

  if (!advert) return <Modal onClose={onClose}>Loading...</Modal>;

  const {
    img,
    make,
    model,
    year,
    address,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
    rentalPrice,
  } = advert;
  const [, city, country] = address.split(', ');

  return (
    <Modal className={styles.modal} onClose={onClose}>
      <img className={styles.img} src={img} alt={`${make} ${model} picture`} />

      <h2 className={styles.title}>
        {make} <span className={styles.accent}>{model}</span>, {year}
      </h2>
      <Badges
        className={styles.badges}
        badges={[
          [city, country, `Id: ${id}`, `Year: ${year}`, `Type: ${type}`],
          [
            `Fuel Consumption: ${fuelConsumption}`,
            `Engine Size: ${engineSize}`,
          ],
        ]}
      />

      <p className={styles.description}>{description}</p>

      <h3 className={styles.subtitle}>Accessories and functionalities:</h3>
      <Badges
        className={styles.accessories}
        badges={[accessories, functionalities]}
      />

      <h3 className={styles.subtitle}>Rental Conditions:</h3>
      <ul className={styles.rentalConditions}>
        {rentalConditions
          .split('\n')
          .concat([
            `Mileage: ${mileage.toLocaleString('en-US')}`,
            `Price: ${rentalPrice}`,
          ])
          .map((condition) => (
            <li key={condition}>
              {condition.split(':').map((txt, i, arr) => (
                <span key={txt}>
                  {arr.length > 1 && i === 0 ? txt + ':' : txt}
                </span>
              ))}
            </li>
          ))}
      </ul>

      <Button as="a" href="tel:+380730000000">
        Rental car
      </Button>
    </Modal>
  );
};

LearnMoreModal.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LearnMoreModal;
