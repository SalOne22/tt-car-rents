import PropTypes from 'prop-types';
import { Label } from '@radix-ui/react-label';
import Button from '../../../../components/ui/Button/index.js';
import Select from '../../../../components/Select';
import styles from './Control.module.css';
import makes from './data/makes.json';
import { Controller, useForm } from 'react-hook-form';

const prices = (() => {
  const prices = [];

  for (let i = 30; i <= 350; i += 10) {
    prices.push(`$${i}`);
  }

  return prices;
})();

const Control = ({ onSubmit }) => {
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Label className={styles.label}>
        Car brand
        <Controller
          name="make"
          control={control}
          render={({ field }) => (
            <Select
              className={styles.makeSelect}
              values={makes}
              label="Make"
              placeholder="Enter the text"
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
      </Label>
      <Label className={styles.label}>
        Price / 1 hour
        <Controller
          name="rentalPrice"
          control={control}
          render={({ field }) => (
            <Select
              h={188}
              values={prices}
              label="Rental price"
              placeholder="To $"
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
      </Label>
      <Label className={styles.label}>
        <span>
          Сar mileage / km &nbsp;&nbsp;
          {errors.mileage && (
            <span className={styles.err}>
              {errors.mileage.to?.message || errors.mileage.from?.message}
            </span>
          )}
        </span>

        <div className={styles.mileage}>
          <Label className={styles.mileageLabel}>
            <span>From</span>

            <input
              type="number"
              min={0}
              max={watch('mileage.to')}
              {...register('mileage.from', {
                min: { value: 0, message: 'Mileage "from" must be positive' },
                max: {
                  value: Number.parseInt(watch('mileage.to')),
                  message: 'Mileage "from" cant be more than "to"',
                },
              })}
            />
          </Label>
          <Label className={styles.mileageLabel}>
            <span>To</span>
            <input
              type="number"
              min={watch('mileage.from')}
              {...register('mileage.to', {
                min: {
                  value: Number.parseInt(watch('mileage.from')) || 0,
                  message: 'Mileage "to" cant be less than "from"',
                },
              })}
            />
          </Label>
        </div>
      </Label>

      <Button className={styles.submitBtn}>Search</Button>
    </form>
  );
};

Control.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Control;
