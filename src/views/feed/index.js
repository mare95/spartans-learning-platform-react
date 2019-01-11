import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import * as actions from './actionCreators';
import { server } from '../../server';

import Post from '../../comonents/Post';

import './index.css';


class Feed extends Component {
    state = {
        posts: null
    }

    async componentDidMount () {
        await this.props.getAllFeedsCallAction();
        if(this.props.allFeeds.isSuccess) {
            this.setState({posts: this.props.allFeeds.posts})
        }
    }

    renderFeed = () => {
        let posts = [];
        this.state.posts.map((post, i) => {
            posts.push(<Post post={post} key={i} />)
        })
        return posts;
    }

    render() {
        return (
                <div className="feed-wrapper">
                    <button 
                        type="button" 
                        className="btn-create-post" 
                        onClick={() => this.props.history.push('/create-feed')}
                    >
                        Create Post
                    </button>

                    {this.state.posts ?
                        <div className="post-wrapper">
                            {this.renderFeed()}
                        </div>
                    :
                        <p className="feed-loading">Loading...</p>
                    }
                </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    getAllFeedsCallAction: () => dispatch(actions.getAllFeeds())
});
  
const mapStateToProps = state => {
    return {
        allFeeds: state.home.allFeeds
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);