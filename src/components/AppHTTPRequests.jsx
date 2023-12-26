import React, { Component } from 'react';
import { requestPosts } from 'services/api';
import { STATUSES } from 'utils/constans';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { PostList } from './postList/PostList';

//  "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

export default class AppHTTPRequests extends Component {
  state = {
    posts: null,
    status: STATUSES.idle, // idle \ pending \ success\ error - 4 statuses.
    error: null,
  };

  componentDidMount() {
    const fetchPosts = async () => {
      try {
        this.setState({ status: STATUSES.success });
        const posts = await requestPosts();
        console.log('posts', posts);
        this.setState({ posts, status: STATUSES.success });
      } catch (error) {
        this.setState({ error: error.message, status: STATUSES.error });
      }
    };

    fetchPosts();
  }

  render() {
    const showPosts =
      this.state.status === STATUSES.success && Array.isArray(this.state.posts);
    const showMissingPosts = showPosts && this.state.posts.length === 0;
    return (
      <div>
        <h1>Weekly Posts</h1>
        {this.state.status === STATUSES.pending && <Loader />}
        {this.state.status === STATUSES.error && (
          <ErrorMessage error={this.state.error} />
        )}
        {showMissingPosts && <p>You still don`t have posts!</p>}
        {showPosts && <PostList posts={this.state.posts} />}
      </div>
    );
  }
}
