import React from 'react';
import Card from './components/Card/Card';
import styles from "./App.module.css";

const App = () => {
  return (
    <div>    
      <div className={styles.plan_container}>
        <h1>Plans +</h1>
        <div className={styles.cards_container}>
          <Card
            titulo="FREE"
            png_template={true}
            responsive_comps={false}
            constant_updates={false}
            custom_templates={false}
            price="0"
            green_button={false}/>
            <Card
            titulo="PREMIUM"
            png_template={true}
            responsive_comps={true}
            constant_updates={false}
            custom_templates={false}
            price="99"
            green_button={false}/>
            <Card
            titulo="PRO"
            png_template={true}
            responsive_comps={true}
            constant_updates={true}
            custom_templates={true}
            price="199"
            green_button={false}/>
        </div>
      </div>
      <div className={styles.plan_container}>
        <h1>NEW MEMBERS</h1>

        <div className={styles.cards_container}>
          <Card
            titulo="FREE"
            png_template={true}
            responsive_comps={false}
            constant_updates={false}
            custom_templates={false}
            price="0"
            green_button={true}/>
            <Card
            titulo="PREMIUM"
            png_template={true}
            responsive_comps={true}
            constant_updates={false}
            custom_templates={false}
            price="199"
            green_button={true}/>
            <Card
            titulo="PRO"
            png_template={true}
            responsive_comps={true}
            constant_updates={true}
            custom_templates={true}
            price="399"
            green_button={true}/>
        </div>
      </div>
    </div>
  );
};
 
export default App;