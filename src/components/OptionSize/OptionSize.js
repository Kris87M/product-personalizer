import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import shortid from 'shortid';

function OptionSize(props) {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size) => <li key={shortid()}><button type="button" className={clsx(props.currentSize === size.name && styles.active)} onClick={()=>props.setCurrentSize(size.name)}>{size.name}</button></li>)}
      </ul>
    </div>
  )
}

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
}

export default OptionSize;
