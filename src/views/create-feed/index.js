import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from './actionCreators';

import './index.css'

class CreateFeed extends Component {
    state = {
        description: null,
        solution:null
    }

    handleCreateFeed = async () =>  {
        await this.props.createFeedCallAction(this.state.description, this.state.solution);
        if(this.props.feed.isSuccess) {
            this.props.history.push('/feed')
        }
    }

    render () {
        return (
            <div className="feed-wrapper">
                <div className="create-feed-wrapper">
                    <textarea 
                        onChange={(e) => this.setState({description:e.target.value})}
                        className="create-feed-textarea" 
                        placeholder="Description" 
                    /> <br />
                    <textarea 
                        onChange={(e) => this.setState({solution:e.target.value})}
                        className="create-feed-textarea" 
                        placeholder="Solution" 
                    />
                    <button
                        onClick={this.handleCreateFeed}
                        type="button" 
                        className="btn-create-feed"
                    >Create Post</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createFeedCallAction: (description, solution) => dispatch(actions.createFeed(description, solution))
});
  
const mapStateToProps = state => {
    return {
        feed: state.home.feed
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateFeed);