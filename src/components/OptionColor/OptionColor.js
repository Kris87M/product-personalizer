import styles from './OptionColor.module.scss';
import clsx from 'clsx';

function OptionColor(props) {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map((color, index) => <li key={index}><button  type="button" className={clsx(prepareColorClassName(color), props.currentColor === color && styles.active)} onClick={()=>props.setCurrentColor(color)}></button></li>)}   
      </ul>
    </div>
  )
}

export default OptionColor;
