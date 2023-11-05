import { Link } from 'react-router-dom';

import Button from '../../components/ui/Button';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>Car Rental Services</h1>
        <p className={styles.subtitle}>
          Explore our diverse fleet of cars and find the perfect one for your
          needs.
          <br /> Whether it&apos;s a short trip or a long journey, we&apos;ve
          got you covered.
        </p>
        <Button as={Link} to="/catalog">
          View Catalog
        </Button>
      </div>
    </section>
  );
};

export default Hero;
