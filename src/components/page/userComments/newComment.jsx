import React from "react";
import SelectField from "../../common/form/selectField";
import TextArea from "../../common/form/textArea";
import PropTypes from "prop-types";
// import api from "../../../api";

const NewComment = ({ id, users, data, onAdd, onChange }) => {
  return (
    <>
      <SelectField
        defaultOption="Выберите пользователя"
        options={users}
        onChange={onChange}
        value={data.user}
        name="user"
        key="newComment"
      />
      <TextArea
        label={"Сообщение"}
        name={"text"}
        row={3}
        value={data.text}
        onChange={onChange}
      />
      <button
        type="submit"
        className="btn btn-primary float-end"
        onClick={() =>
          onAdd({
            userId: data.user,
            pageId: id,
            content: data.text,
          })
        }
      >
        Опубликовать
      </button>
    </>
  );
};

NewComment.propTypes = {
  id: PropTypes.string,
  users: PropTypes.array,
  data: PropTypes.object,
  onAdd: PropTypes.func,
  onChange: PropTypes.func,
};

export default NewComment;
