import { useRef } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import styles from './PriceList.module.scss';

export type PricesProps = {
  prices:
    | {
        '1-2 days': number;
        '3-5 days': number;
        '6-10 days': number;
        '10-30 days': number;
      }
    | undefined;
  active: boolean;
  activePriceList: (category: string) => void;
};

const PriceList = ({ prices, active, activePriceList }: PricesProps) => {
  const pricesListRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${styles.priceList} price`}>
      <div
        className={styles.priceList__title}
        onClick={() => {
          activePriceList('.price');
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            activePriceList('.price');
          }
        }}
        role="button"
        tabIndex={0}
      >
        <p> Price List</p>
        {active ? <SlArrowUp /> : <SlArrowDown />}
      </div>
      <div
        ref={pricesListRef}
        className={styles.priceList__prices}
        style={
          active && pricesListRef.current
            ? {
                height: `${pricesListRef.current.scrollHeight}px`,
              }
            : { height: '0px' }
        }
      >
        <table>
          <thead>
            <tr>
              <th>Rental period</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {prices &&
              Object.entries(prices).map(([period, price]) => (
                <tr key={period}>
                  <td>{period}</td>
                  <td>{price} $ for day</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceList;
