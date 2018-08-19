import React from 'react';
import HOC from './BaseHOCComponent'
// @HOC
class OriginComponent extends React.Component {
    render(){
        return <div>
                    <h2>这是原始组件</h2>
                    <p>{this.props.type}</p>
                    <p>{this.props.say}</p>
                </div>
    }
}
const newComponent = HOC(OriginComponent)
export default newComponent;