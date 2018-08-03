import React from 'react'
import styles from './RefComponent.css'
// import Content from '../Content'
import Contents from '../Contents'
const PropTypes = require('prop-types');
class RefComponent extends React.Component{
  constructor(props){
    super(props)
    this.foc=this.foc.bind(this)
  }
  foc(){
    // console.log(this.textInput)
    // console.log(this.textInput.value)
    // this.textInput.value='cc'; 
    // this.textInput.focus();
    //历史遗留api 不建议使用，建议使用回调
    console.log(this.refs.input.value)
    // console.log(this.refs.person.state.name)
  }
  getChildContext(){
    return {color: "purple"};
  }
  render(){
    
    return (
      <div className={styles.container}>
      {/* ref传入一个Dom对象 */}
        {/* <input type='text' ref={(input)=>{this.textInput=input; }}/> */}
        <input type='text' ref="input" />
        <input type='button' onClick={this.foc}  value='aa'/>
        {/* <Content ref='person' /> */}
        <Contents >Contents </Contents>
      </div>
    )
  }
}
RefComponent.childContextTypes = {
  color: PropTypes.string
};
export default RefComponent