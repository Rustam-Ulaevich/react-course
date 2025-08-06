import React from 'react';

const PostItem = (props) => {
  // console.log(props)
  function deletePost() {
    props.deletePost(props.number)
  }

  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post__btns">
          <button onClick={deletePost}>Delete</button>
        </div>
      </div>

    </div>
  );
};

export default PostItem;
