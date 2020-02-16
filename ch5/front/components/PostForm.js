import React, { useCallback, useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ADD_POST_REQUEST } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { imagePaths, isAddingPost, postAdded } = useSelector(
    state => state.post
  );

  useEffect(() => {
    if (postAdded) {
      setText("");
    }
  }, [postAdded]);

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      if (!text || !text.trim()) {
        // 문자열 양쪽 공백제거
        return alert("게시글을 작성하세요");
      }
      dispatch({
        type: ADD_POST_REQUEST,
        data: {
          content: text.trim()
        }
      });
    },
    [text]
  );

  const onChangeText = useCallback(e => {
    setText(e.target.value);
  }, []);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onSubmit={onSubmitForm}
    >
      <Input.TextArea
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
        value={text}
        onChange={onChangeText}
      />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button
          type="primary"
          style={{ float: "right" }}
          loading={isAddingPost}
          htmlType="submit"
        >
          SUBMIT
        </Button>
      </div>
      <div>
        {imagePaths.map(v => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={`http://localhost:3065/${v}`}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
