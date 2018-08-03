import React from 'react'
import styles from './LocalStorage.css'
class LocalStorage extends React.Component {
  constructor(props) {
    super(props)
    this.knowlocalStorage = this.knowlocalStorage.bind(this);
    this.state = {
      password: window.localStorage.getItem("a")
    }
  }
  knowlocalStorage() {
    if (!window.localStorage) {
      alert('不支持');
    } else {
      var storage = window.localStorage;
      storage["a"] = this.input.value;
      // storage.setItem("c",8);
      // storage.setItem("b",0);
      // // console.log(typeof storage["a"]);//string
      // console.log(storage);
      var data = {
        name: 'kim',
        age: 2,
        sex: 'female'
      }
      var d = JSON.stringify(data);
      storage.setItem("data", d);
      console.log(storage)
      var json = storage.getItem("data");
      var jsonObj = JSON.parse(json);
      console.log(jsonObj);

    }
  }
  handleOnChange(e) {
    console.log(e.target.value)
    this.setState({
      password:e.target.value
    })

  }
 
  render() {


    return (
      <div className={styles.container}>
        <input type="text" value={this.state.password} ref={(input) => { this.input = input }} onChange={this.handleOnChange.bind(this)} placeholder="input to save the localStorage" />
        <button onClick={this.knowlocalStorage}>save</button>
        {/* <button onClick={this.knowlocalStorage}>password</button> */}
      </div>
    )
  }
}
export default LocalStorage