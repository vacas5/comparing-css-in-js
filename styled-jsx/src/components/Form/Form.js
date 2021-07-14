import { useReducer } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Briefcase } from "../../icons/briefcase.svg";
import { ReactComponent as Users } from "../../icons/users.svg";
import { ReactComponent as Question } from "../../icons/question.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import ControlWithLabel from "../ControlWithLabel/ControlWithLabel";
import "./Form.css";

const formTypes = [
  {
    type: "sales",
    Icon: Briefcase,
    title: "Sales Support",
  },
  {
    type: "user",
    Icon: Users,
    title: "User Support",
  },
  {
    type: "else",
    Icon: Question,
    title: "Something Else",
  },
];

const selectMenuOptions = {
  sales: [
    {
      value: "individual",
      title: "A one time purchase of widgets",
    },
    {
      value: "subscription",
      title: "A widget subscription",
    },
    {
      value: "other",
      title: "Something else",
    },
  ],
  user: [
    {
      value: "shipping",
      title: "Issue with my widget shipment",
    },
    {
      value: "warranty",
      title: "Question about widget warranty",
    },
    {
      value: "other",
      title: "Something else",
    },
  ],
};

const initialState = {
  formType: "sales",
  name: "",
  email: "",
  phone: "",
  interest: "",
  issue: "",
  message: "",
  validate: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setFormType":
      return state.formType !== action.value
        ? {
            ...state,
            formType: action.value,
            interest: "",
            issue: "",
            validate: false,
          }
        : state;
    case "setFieldValue":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "toggleValidation":
      return {
        ...state,
        validate: !state.validate,
      };
    default:
      throw new Error();
  }
}

function Form() {
  let history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { formType, name, email, phone, interest, issue, message, validate } =
    state;

  const options = selectMenuOptions[formType] || [];

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "toggleValidation" });

    let requiredFields = ["name", "email", "message"];
    if (formType === "sales") {
      requiredFields.push("interest");
    } else if (formType === "user") {
      requiredFields.push("issue");
    }

    if (requiredFields.every((key) => state[key])) {
      history.push("/success");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "setFieldValue", name, value });
  };

  return (
    <ContentWrapper>
      <nav className="button-nav">
        <ul className="button-list">
          {formTypes.map(({ type, Icon, title }) => {
            return (
              <li className="button-list-item" key={type}>
                <button
                  type="button"
                  className={
                    formType === type
                      ? "button-list-button active"
                      : "button-list-button"
                  }
                  onClick={() => {
                    dispatch({ type: "setFormType", value: type });
                  }}
                >
                  <Icon className="button-list-button-icon" />
                  {title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <form className="form" onSubmit={handleSubmit}>
        <ControlWithLabel
          id="name"
          title="Name"
          required
          invalid={validate && !name}
        >
          <input
            type="text"
            name="name"
            placeholder="Jane Doe"
            value={name}
            onChange={handleChange}
          />
        </ControlWithLabel>
        <ControlWithLabel
          id="email"
          title="Email"
          required
          invalid={validate && !email}
        >
          <input
            type="email"
            name="email"
            placeholder="jane.doe@example.com"
            value={email}
            onChange={handleChange}
          />
        </ControlWithLabel>
        <ControlWithLabel id="phone" title="Phone">
          <input
            type="tel"
            name="phone"
            placeholder="(123) 456-7890"
            value={phone}
            onChange={handleChange}
          />
        </ControlWithLabel>
        {formType === "sales" && (
          <ControlWithLabel
            id="interest"
            title="Interest"
            required
            invalid={validate && !interest}
          >
            <select name="interest" value={interest} onChange={handleChange}>
              <option>I'm interested in...</option>
              {options.map(({ value, title }) => (
                <option value={value} key={value}>
                  {title}
                </option>
              ))}
            </select>
          </ControlWithLabel>
        )}
        {formType === "user" && (
          <ControlWithLabel
            id="issue"
            title="Issue"
            required
            invalid={validate && !issue}
          >
            <select name="issue" value={issue} onChange={handleChange}>
              <option>Select an issue</option>
              {options.map(({ value, title }) => (
                <option value={value} key={value}>
                  {title}
                </option>
              ))}
            </select>
          </ControlWithLabel>
        )}
        <ControlWithLabel
          id="message"
          title="Message"
          required
          invalid={validate && !message}
        >
          <textarea
            name="message"
            placeholder="Hi! I would like to..."
            rows="8"
            value={message}
            onChange={handleChange}
          />
        </ControlWithLabel>
        <p className="submit-button-wrapper">
          <button className="button" type="submit">
            Get in touch
          </button>
        </p>
      </form>
    </ContentWrapper>
  );
}

export default Form;
