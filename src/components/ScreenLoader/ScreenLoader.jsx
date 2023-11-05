import { InfinitySpin } from 'react-loader-spinner';
import styles from './ScreenLoader.module.css';

const ScreenLoader = () => {
  return (
    <div className={styles.wrapper}>
      <InfinitySpin width="220" color="hsl(var(--color-blue))" />
    </div>
  );
};

export default ScreenLoader;
