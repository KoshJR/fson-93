import React from 'react';
import css from '../AppHTTPRequests.module.css';

export const PostList = ({ posts }) => {
  return (
    <div>
      <ul className={css.postList}>
        {posts?.map(post => {
          return (
            <li key={post.id} className={css.postListItem}>
              <h2 className={css.itemTitle}>{post.title}</h2>
              <p className={css.itemId}>{post.id}</p>
              <p className={css.itemBody}>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
