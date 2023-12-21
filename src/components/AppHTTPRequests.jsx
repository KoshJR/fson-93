import React, { Component } from 'react';
import css from './AppHTTPRequests.module.css';

//  "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

export default class AppHTTPRequests extends Component {
  state = {
    posts: null,
    status: 'idle', // idle \ pending \ success\ error - 4 statuses.
    error: null,
  };
  render() {
    return (
      <div>
        <h1>Weekly Posts</h1>
        <ul className={css.postList}>
          <li className={css.postListItem}>
            <h2 className={css.itemTitle}>
              Title: sunt aut facere repellat provident occaecati excepturi
              optio reprehenderit
            </h2>
            <p className={css.itemId}>Post id: 1</p>
            <p className={css.itemBody}>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
          </li>
          <li className={css.postListItem}>
            <h2 className={css.itemTitle}>
              Title: sunt aut facere repellat provident occaecati excepturi
              optio reprehenderit
            </h2>
            <p className={css.itemId}>Post id: 1</p>
            <p className={css.itemBody}>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
          </li>
          <li className={css.postListItem}>
            <h2 className={css.itemTitle}>
              Title: sunt aut facere repellat provident occaecati excepturi
              optio reprehenderit
            </h2>
            <p className={css.itemId}>Post id: 1</p>
            <p className={css.itemBody}>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
          </li>
          <li className={css.postListItem}>
            <h2 className={css.itemTitle}>
              Title: sunt aut facere repellat provident occaecati excepturi
              optio reprehenderit
            </h2>
            <p className={css.itemId}>Post id: 1</p>
            <p className={css.itemBody}>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
          </li>
          <li className={css.postListItem}>
            <h2 className={css.itemTitle}>
              Title: sunt aut facere repellat provident occaecati excepturi
              optio reprehenderit
            </h2>
            <p className={css.itemId}>Post id: 1</p>
            <p className={css.itemBody}>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
          </li>
          <li className={css.postListItem}>
            <h2 className={css.itemTitle}>
              Title: sunt aut facere repellat provident occaecati excepturi
              optio reprehenderit
            </h2>
            <p className={css.itemId}>Post id: 1</p>
            <p className={css.itemBody}>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
