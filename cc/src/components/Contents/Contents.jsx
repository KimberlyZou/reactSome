import React from 'react'
import styles from './Contents.css'
const PropTypes = require('prop-types');
class Contents extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <button style={{background:this.context.color}} >{this.props.children}</button>
    )
  }
}
Contents.contextTypes = {
  color: PropTypes.string
};
export default Contents