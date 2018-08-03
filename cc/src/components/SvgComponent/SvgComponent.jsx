import React from 'react'
import styles from './SvgComponent.css'
import Vivus from 'vivus';
class SvgComponent extends React.Component {
  constructor(props) {
    super(props)
    
  }
  componentDidMount(){
    new Vivus('cc', {type: 'delayed', duration: 200});
  }
  render() {
    
    return (
      <div className={styles.container}  >
        <svg  id='cc' xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline  points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" stroke="black" fill='none' stroke-width='3'/>
        <polyline  points="0,50 50,40 40,80 80,80 80,120 120,120 120,160" stroke="black" fill='none' stroke-width='3'/>
        </svg>

      </div>
    )
  }
}
export default SvgComponent