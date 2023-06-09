import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { validator } from "../../../utils/validator";
import api from "../../../api";
import TextField from "../form/textField";
import SelectField from "../form/selectField";
import RadioField from "../form/radioFeld";
import MultiSelectField from "../form/multiSelectField";
import { Link } from "react-router-dom";

const EditForm = ({ id }) => {
  const [data, setData] = useState();
  const [professions, setProfessions] = useState();
  const [qualities, setQualities] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      const professionsList = Object.keys(data).map((professionName) => ({
        label: data[professionName].name,
        value: data[professionName]._id,
      }));
      setProfessions(professionsList);
    });
    api.qualities.fetchAll().then((data) => {
      const qualitiesList = Object.keys(data).map((optionName) => ({
        label: data[optionName].name,
        value: data[optionName]._id,
        color: data[optionName].color,
      }));
      setQualities(qualitiesList);
    });
    api.users.getById(id).then((response) =>
      setData({
        ...response,
        profession: response.profession.name,
        qualities: Object.keys(response.qualities).map((optionName) => ({
          label: response.qualities[optionName].name,
          value: response.qualities[optionName]._id,
          color: response.qualities[optionName].color,
        })),
      })
    );
  }, []);

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
    },
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен не корректно",
      },
    },
    profession: {
      isRequired: {
        message: "Обязательно выберите вашу профессию",
      },
    },
    licence: {
      isRequired: {
        message:
          "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения",
      },
    },
  };

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const getProfessionById = (id) => {
    for (const prof of professions) {
      if (prof.value === id) {
        return { _id: prof.value, name: prof.label };
      }
    }
  };

  const getQualities = (elements) => {
    const qualitiesArray = [];
    for (const elem of elements) {
      for (const quality in qualities) {
        if (elem.value === qualities[quality].value) {
          qualitiesArray.push({
            _id: qualities[quality].value,
            name: qualities[quality].label,
            color: qualities[quality].color,
          });
        }
      }
    }
    // console.log("qualitiesArray", qualitiesArray);
    return qualitiesArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const { profession, qualities } = data;
    console.log({
      ...data,
      profession: getProfessionById(profession),
      qualities: getQualities(qualities),
    });
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const updateData = (id, data) => {
    // console.log("updateData", data.profession.name);
    const newData = {
      ...data,
      profession: getProfessionById(data.profession),
      qualities: getQualities(data.qualities),
    };
    api.users.update(id, newData).then((response) => setData(response));
  };

  return data ? (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <form onSubmit={handleSubmit}>
            <TextField
              label={"Имя"}
              name={"name"}
              value={data.name}
              onChange={handleChange}
              error={errors.name}
            />
            <TextField
              label={"Электронная почта"}
              name={"email"}
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
            <SelectField
              label={"Выбери свою профессию"}
              defaultOption={"Choose..."}
              options={professions}
              onChange={handleChange}
              value={data.profession}
              name="profession"
            />
            <RadioField
              label={"Выбери пол "}
              options={[
                { name: "Male", value: "male" },
                { name: "Female", value: "female" },
                { name: "Other", value: "other" },
              ]}
              onChange={handleChange}
              value={data.sex}
              name="sex"
            />
            <MultiSelectField
              onChange={handleChange}
              options={qualities}
              name={"qualities"}
              label={"Выбери качества "}
              defaultValue={data.qualities}
            />
            <Link
              to={"/users/" + data._id}
              type="submit"
              disabled={!isValid}
              className="btn btn-primary w-100 mx-auto"
              onClick={() => updateData(data._id, data)}
            >
              Обновить
            </Link>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <>Loading...</>
  );
};

EditForm.propTypes = {
  id: PropTypes.string,
};

export default EditForm;
