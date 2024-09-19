import styles from './Product.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  // console.log(props.sizes)

  const[currentColor, setCurrentColor] = useState(props.colors[0])
  // console.log(currentColor)
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)
  // console.log(currentSize)

  const getPrice = () => {
    const selectedSize = props.sizes.find((size) => size.name === currentSize);
    const addCost = selectedSize ? selectedSize.additionalPrice : 0;
    const newPrice = props.basePrice + addCost;
    return newPrice;
  }
  
  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          title={props.title}
          getPrice={getPrice}
          sizes={props.sizes}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
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