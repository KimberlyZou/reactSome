import React from 'react'
import styles from './Content.css'
import { Contents } from './Contents'
import fetch from 'cross-fetch'

class Content extends React.Component {

  constructor(props) {
    super(props)

    this.state = { name: '' };
    Contents(this);
  }

  // get lawrenceName(){
  //   return this.state.lawrenceName || ''
  // }
  // set lawrenceName(v){
  //   this.setState({lawrenceName:v})
  // }


  // cc (value) {
  //   this.setState({
  //     name:this.p.name ||''
  //   })
  // }
  render() {
    
    fetch('/json/aa.json').then(response => response.json()).then(data=>console.log(data))

    return (
      <div className={styles.container}>
        <div>
          {/* <input value={this.lawrenceName} onChange={(e)=>{this.lawrenceName=e.target.value}}/> */}
          <input value={this.name} onChange={(e) => { this.name = e.target.value }} />
          <label>{this.name}</label>
        </div>
      </div>
    )
  }
}
export default Content