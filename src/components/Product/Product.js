import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Product = props => {
  // console.log(props.sizes)

  const[currentColor, setCurrentColor] = useState(props.colors[0])
  // console.log(currentColor)
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)
  // console.log(currentSize)

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {
    const selectedSize = props.sizes.find((size) => size.name === currentSize);
    const addCost = selectedSize ? selectedSize.additionalPrice : 0;
    const newPrice = props.basePrice + addCost;
    return newPrice;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`
      Summary
      ===========
      Name: ${props.title}
      Price: ${getPrice()}
      Size: ${currentSize}
      Color: ${currentColor}`)
  }
  
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="{props.title}"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => <li key={index}><button type="button" className={clsx(currentSize === size.name && styles.active)} onClick={()=>setCurrentSize(size.name)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color, index) => <li key={index}><button  type="button" className={clsx(prepareColorClassName(color), currentColor === color && styles.active)} onClick={()=>setCurrentColor(color)}></button></li>)}   
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;