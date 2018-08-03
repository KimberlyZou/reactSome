import React from 'react'
import styles from './Person.css'
import {connect} from 'react-redux'
import {store} from '../../redux/store/store'
import {fetchPosts} from '../../redux/action/action'
class Person extends React.Component{
  // constructor(props){
  //   super(props)
  // }

  render(){
    return (
      <div className={styles.container}>
        <div>
        {this.props.name}
        </div>
        <button  onClick={()=>store.dispatch(fetchPosts('aa.json')).then(() => console.log(store.getState()))}>click to asyn redux</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    
    name:state.showAboutPerson.name
  }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch, ownProps) {
  return {}
}
const PersonX = connect(
  mapStateToProps,
  mapDispatchToProps
)(Person)
export default PersonX;