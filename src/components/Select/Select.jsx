import PropTypes from 'prop-types';

import * as SelectPrimitive from '@radix-ui/react-select';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import ChevronDownIcon from '../../assets/icons/chevron-down.svg?react';
import styles from './Select.module.css';
import clsx from 'clsx';

const Select = ({
  className,
  values = [],
  label,
  placeholder,
  onChange,
  h = 272,
  ...props
}) => {
  return (
    <SelectPrimitive.Root onValueChange={onChange} {...props}>
      <SelectPrimitive.Trigger
        className={clsx(styles.trigger, className)}
        aria-label={label}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon className={styles.icon}>
          <ChevronDownIcon width={20} height={20} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          style={{ '--_height': `${h}px` }}
          className={styles.content}
          position="popper"
          side="bottom"
          sideOffset={4}
        >
          <ScrollArea.Root className={styles.scrollRoot} type="auto">
            <SelectPrimitive.Viewport asChild>
              <ScrollArea.Viewport
                style={{ overflowY: null }}
                className={styles.scrollViewport}
              >
                <SelectPrimitive.Item className={styles.item} value={null}>
                  <SelectPrimitive.ItemText>_</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
                {values.map((value) => (
                  <SelectPrimitive.Item
                    className={styles.item}
                    key={value}
                    value={value}
                  >
                    <SelectPrimitive.ItemText>{value}</SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </ScrollArea.Viewport>
            </SelectPrimitive.Viewport>
            <ScrollArea.Scrollbar
              className={styles.scrollbar}
              orientation="vertical"
            >
              <ScrollArea.Thumb className={styles.scrollbarThumb} />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  h: PropTypes.number,
};

export default Select;
