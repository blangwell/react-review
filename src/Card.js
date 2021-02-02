import {Component} from 'react';
import Image from './Image';


class Card extends Component {
  render() {
    return(
      <div style={{border: '10px solid black', width: '250px', height: '300px'}}>
        <Image alt={"React Logo"} />
        <p> hello </p>
      </div>
    )
  }
}

export default Card;