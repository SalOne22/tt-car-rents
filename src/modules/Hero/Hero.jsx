import { Link } from 'react-router-dom';

import Button from '../../components/ui/Button';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>Car Rents</h1>
        <p className={styles.subtitle}>
          Explore the open road with our premium rental cars.
        </p>
        <Button as={Link} to="/catalog">
          See cars
        </Button>
      </div>
    </section>
  );
};

export default Hero;
