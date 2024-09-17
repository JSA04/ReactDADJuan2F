import React from 'react';
import styles from './Card.module.css'; 
import v from "../../assets/v.svg";
import x from "../../assets/x.svg";
 
function getStyleByStatus(status) {
    return status ? styles.active_func : styles.inactive_func;
}

function getIconByStatus(status) {
    return status ? v : x;
}


const Card = ({ titulo, png_template, responsive_comps, constant_updates, custom_templates, price, green_button }) => {
  
    return (
    <div className={styles.card}>
      
        <h1 className={styles.card_title}>{titulo}</h1>
        <ul className={styles.card_funcs}>
            <div>
                <img src={getIconByStatus(png_template) } />
                <li className={ getStyleByStatus(png_template) }>PNG templates</li>
            </div>
            <div>
                <img src={getIconByStatus(responsive_comps) } />
                <li className={ getStyleByStatus(responsive_comps) }>Figma responsive components</li>
            </div>
            <div>
                <img src={getIconByStatus(constant_updates) } />
                <li className={ getStyleByStatus(constant_updates) }>Constant updates</li>
            </div>
            <div>
                <img src={getIconByStatus(custom_templates) } />
                <li className={ getStyleByStatus(custom_templates) }>Custom templates</li>
            </div>
        </ul>
        <div className={styles.card_price}>
            <h1>${price}</h1>
            <p>Per month</p>
        </div>
        <button className={green_button ? styles.card_button_green : styles.card_button_red}>Try now</button>
    </div>
  );
};
 
export default Card;