import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import activeBook from '../actions/index';

class BookDetail extends React.Component {
    render(){
        if(!this.props.activeBook){
            return <div>Please select a book to get started!</div>
        }

        return (
            <div>
                <h3>Details for active book : </h3>
                <div>
                    {this.props.activeBook.title}
                    <br />
                    {this.props.activeBook.pages}
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        activeBook : state.activeBook
    };
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({activeBook : activeBook}, dispatch);
// }

export default connect(mapStateToProps)(BookDetail);