import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

function ProductForm(props) {
  // console.log(props)



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`
      Summary
      ===========
      Name: ${props.title}
      Price: ${props.getPrice()}
      Size: ${props.currentSize}
      Color: ${props.currentColor}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
      <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

export default ProductForm;
