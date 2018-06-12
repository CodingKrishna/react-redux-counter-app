import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCounter } from '../actions';
import { bindActionCreators } from 'redux';

class RemoveCounter extends Component {
  constructor(props) {
    super(props);
  }
   render() {
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" onClick={(e) => {
                    e.preventDefault();
                    this.props.removeCounter()
                    }
                    }>Remove</button>
                </div>
              </div>
            </form>
            </div>
     )
   }
}
/* function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(removeCounter, dispatch) }
}
this.props.dispatch(removeCounter())
*/
const mapDispatchToProps = (dispatch)=> {
  return {
    removeCounter: ()=>{
      dispatch(removeCounter())
    }
  }
}

export default connect(null,mapDispatchToProps)(RemoveCounter);
