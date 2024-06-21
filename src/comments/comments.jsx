import React, { forwardRef } from "react";
import Button from "/src/button/button";
import { Ul } from "/src/tags";
import { CommentsHeading, CommentAuthor, CommentText } from "./styled";

export default function Comments({
  className,
  comments,
  onShowMore,
  allCommentsLength
}) {
  return (
    <section className={className}>
      <CommentsHeading as="h2">Комментарии</CommentsHeading>
      {Boolean(comments && comments?.length) ? (
        <>
          <Ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <CommentAuthor as="h3">{comment.author}</CommentAuthor>
                <CommentText>{comment.text}</CommentText>
              </li>
            ))}
          </Ul>
          {allCommentsLength > comments.length && (
            <Button onClick={onShowMore}>Показать ещё</Button>
          )}
        </>
      ) : null}
    </section>
  );
}
