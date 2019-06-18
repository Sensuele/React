import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onLikeImportant}) => {

  const elements = posts.map((item) => {
      
    const {id, ...itemProps} = item;
    if (id) {
      return (
        <li key={id} className="list-group-item">
          <PostListItem 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleImportant={() => onLikeImportant(id, "important")}
            onToggleLiked={() => onLikeImportant(id, "like")} />
        </li>
      )}
      return false;
  })

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}
export default PostList;