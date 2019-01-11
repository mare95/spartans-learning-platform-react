import React, { Component } from 'react';
import moment from 'moment';

import './index.css';

class Post extends Component {
    componentDidMount () {
        console.log(this.props.post)
    }
    render () {
        return (
            <div className="single-post-wrapper">
                <span>Posted By<span className="single-post-description">{this.props.post.user}</span></span> <br /> <br />
                <span>Title</span>
                <p className="single-post-description">{this.props.post.title}</p>
                <span>Description</span>
                <p className="single-post-description">{this.props.post.text}</p>
                <span className="single-post-creation-time">{moment(this.props.post.createdAt).fromNow()}</span>
            </div>  
        )
    }
}

export default Post;