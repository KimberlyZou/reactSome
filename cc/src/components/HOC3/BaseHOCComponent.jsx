import React from 'react';
export default function HOC(WrappedComponent){
    return class HOC extends React.Component {
        render(){
            const newProps = {type:'HOC'};
            return <div>
                <WrappedComponent {...this.props} {...newProps}/>
            </div>
        }
    }
}