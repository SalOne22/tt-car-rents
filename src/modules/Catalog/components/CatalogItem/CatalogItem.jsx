import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button/index.js';
import HeartIcon from '../../../../assets/icons/heart.svg?react';
import styles from './CatalogItem.module.css';
import { useId, useState } from 'react';
import LearnMoreModal from '../LearnMoreModal';
import Badges from '../Badges';

const CatalogItem = ({
  id,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  img,
  mileage,
  functionalities,
  favorite,
  onFavoriteChange,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favoriteId = useId();

  const [, city, country] = address.split(', ');

  return (
    <li className={styles.item}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={img}
          alt={`${make} ${model} picture`}
        />
        <div className={styles.imgOverlay}>
          <div className={styles.heartBtn}>
            <input
              className="visually-hidden"
              type="checkbox"
              name="favorite"
              id={favoriteId}
              checked={favorite}
              onChange={onFavoriteChange}
            />
            <label htmlFor={favoriteId}>
              <HeartIcon className={styles.heartIcon} width={18} height={18} />
            </label>
          </div>
        </div>
      </div>
      <h3 className={styles.title}>
        <span>
          {make} <span className={styles.accent}>{model}</span>, {year}
        </span>
        <span>{rentalPrice}</span>
      </h3>
      <Badges
        className={styles.badges}
        badges={[
          [
            city,
            country,
            rentalCompany,
            type,
            make,
            mileage.toLocaleString('en-US'),
            functionalities[0],
          ],
        ]}
      />

      <Button onClick={() => setIsModalOpen(true)}>Learn more</Button>
      {isModalOpen && (
        <LearnMoreModal id={id} onClose={() => setIsModalOpen(false)} />
      )}
    </li>
  );
};

CatalogItem.propTypes = {
  id: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  functionalities: PropTypes.arrayOf(PropTypes.string),
  favorite: PropTypes.bool.isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
};

export default CatalogItem;
