import styles from './Greeter.css';
//import tests from './style.less';
import React, {Component} from 'react';
import config from './config.json';


class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.test}>
          {config.greetText}
        </div>
      </div>    
    );
  }
}

export default Greeter