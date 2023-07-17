import styles from './BrandLink.module.scss';

interface BrandLinkType {
  carBrand: string;
  brand: string;
  handlerBrand: (newBrand: string) => void;
}

const BrandLink = ({ carBrand, brand, handlerBrand }: BrandLinkType) => {
  return (
    <div
      className={`${styles.brandLink} ${brand === carBrand && styles.active} `}
      onClick={() => {
        handlerBrand(carBrand);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          handlerBrand(carBrand);
        }
      }}
      tabIndex={0}
      role="link"
    >
      {carBrand}
    </div>
  );
};

export default BrandLink;
