import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button/index.js';
import HeartIcon from '../../../../assets/icons/heart.svg?react';
import styles from './CatalogItem.module.css';
import { useId } from 'react';

const CatalogItem = ({
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
      <p className={styles.badges}>
        {[
          city,
          country,
          rentalCompany,
          type,
          make,
          mileage,
          functionalities[0],
        ].map((txt, i) => (
          <span key={i}>{txt}</span>
        ))}
      </p>
      <Button>Learn more</Button>
    </li>
  );
};

CatalogItem.propTypes = {
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
