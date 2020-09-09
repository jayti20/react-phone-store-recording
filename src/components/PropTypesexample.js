import React,{Component} from 'react'
import PropTypes from 'prop-types';




export class PropTypesexample extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.name}</h1> 
            </div>
        )
    }
}
PropTypesexample.propTypes={
  name:PropTypes.string
}
export default PropTypesexample
