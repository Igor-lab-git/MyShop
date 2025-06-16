import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { StarRating } from "../../StarRating";
import { Comment } from "../../../types";

const COMMENTS_KEY = "comments";

export const NewComment = (): React.JSX.Element => {
  // Инициализация состояния из localStorage
  const [comments, setComments] = useState<Comment[]>(() => {
    const data = window.localStorage.getItem(COMMENTS_KEY);
    return data ? JSON.parse(data) : [];
  });

  const [username, setUsername] = useState<string>("");
  const [text, setText] = useState<string>("");

  // Сохраняем комментарии в localStorage при каждом изменении
  useEffect(() => {
    window.localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
  }, [comments]);

  // Добавление комментария
  const addComment = () => {
    if (!username.trim() || !text.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), username: username.trim(), text: text.trim() },
    ]);
    setUsername("");
    setText("");
  };

  // Удаление комментария по id
  const removeComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };
  const date = new Date();
   const dateString = date.toLocaleDateString();

  return (
    <div className={style.wrapperMain}>
      <h2 className={style.titleComment}>Оставить комментарий</h2>
      <div className={style.wrapperForm}>
        <input
          className={style.input}
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          className={style.textarea}
          placeholder="Комментарий"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={style.btnAdd} onClick={addComment}>
          Оставить отзыв
        </button>
        </div>

        <div>
        <ul className={style.boxComments}>
          {comments.map((comment) => (
            <li className={style.listComments} key={comment.id}>
                <div className={style.wrapperNameBtn}>
              <span className={style.nameComments}>{comment.username}</span>
              <button className={style.btnAdd} onClick={() => removeComment(comment.id)}>Удалить</button>
                </div>
              <p className={style.textComments}>{comment.text}</p>
              <div className={style.wrapperDetailes}>
                <StarRating/>
                <span className={style.date}>{dateString}</span>
              </div>
            </li>
          ))}
        </ul>
        </div>
    </div>
  );
};
