import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Description.module.css';
import adventureImg from '../../assets/images/adventure.jpg';
import filterImg from '../../assets/images/filter.jpg';
import favoritesImg from '../../assets/images/favorites.jpg';
import Button from '../../components/ui/Button/index.js';

const DescriptionSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.title}>Discover the Features</h2>

        <div className={clsx(styles.item, styles.reversed)}>
          <figure className={styles.imageWrapper}>
            <img src={adventureImg} alt="Explore" />
            <figcaption>
              Photo by{' '}
              <a href="https://unsplash.com/@tyler_clemmensen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Tyler Clemmensen
              </a>{' '}
              on{' '}
              <a href="https://unsplash.com/photos/black-bmw-m-3-on-road-during-daytime-d1Jum1vVLew?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </figcaption>
          </figure>
          <div>
            <h3 className={styles.subtitle}>Explore</h3>
            <p className={styles.description}>
              Discover a diverse fleet of cars for any adventure, from city
              exploration to long road trips.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <figure className={styles.imageWrapper}>
            <img src={filterImg} alt="Filter" />
            <figcaption>
              Photo by{' '}
              <a href="https://unsplash.com/@johnschno?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                John Schnobrich
              </a>{' '}
              on{' '}
              <a href="https://unsplash.com/photos/red-coupe-Aqt08E8JzEc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </figcaption>
          </figure>

          <div>
            <h3 className={styles.subtitle}>Filter & Find</h3>
            <p className={styles.description}>
              Use our advanced filters to find the perfect car based on brand,
              hourly rental price, or mileage.
            </p>
          </div>
        </div>

        <div className={clsx(styles.item, styles.reversed)}>
          <figure className={styles.imageWrapper}>
            <img src={favoritesImg} alt="Favorites" />
            <figcaption>
              Photo by{' '}
              <a href="https://unsplash.com/@introspectivedsgn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Erik Mclean
              </a>{' '}
              on{' '}
              <a href="https://unsplash.com/photos/a-white-car-parked-on-the-side-of-a-road-AaYAElNOxsQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </figcaption>
          </figure>
          <div>
            <h3 className={styles.subtitle}>Save Favorites</h3>
            <p className={styles.description}>
              Save your favorite car listings for quick access and easy
              comparison.
            </p>
          </div>
        </div>

        <div className={styles.ready}>
          <p>
            Ready to hit the road? Explore our catalog, save your favorites, and
            find the perfect car for your journey.
          </p>
          <Button as={Link} to="/catalog">
            View Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
