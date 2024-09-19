import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const[currentColor, setCurrentColor] = useState(props.colors[0])
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)

  const price = useMemo(() => {
    const selectedSize = props.sizes.find((size) => size.name === currentSize);
    const addCost = selectedSize ? selectedSize.additionalPrice : 0;
    const newPrice = props.basePrice + addCost;
    return newPrice;
  },[props.basePrice, props.sizes, currentSize])
  
  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          title={props.title}
          price={price}
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