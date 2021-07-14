import { useReducer } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { ReactComponent as Briefcase } from "../../icons/briefcase.svg";
import { ReactComponent as Users } from "../../icons/users.svg";
import { ReactComponent as Question } from "../../icons/question.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import ControlWithLabel from "../ControlWithLabel/ControlWithLabel";

const ORANGE = "#e37f3e";

const ButtonNav = styled.nav`
  background-color: #f8f6f7;
`;

const ButtonList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const ButtonListItem = styled.li`
  text-align: center;
  margin: 16px 24px;
`;

const ButtonListButton = styled.button`
  height: 40px;
  vertical-align: middle;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  border-radius: 4px;
  background-color: ${(props) => props.active && "white"};
  color: ${(props) => props.active && ORANGE};
`;

const StyledForm = styled.form`
  padding: 24px;
  margin: 0 auto;
  max-width: 540px;
`;

const SubmitButtonWrapper = styled.p`
  text-align: right;
  margin-top: 24px;
`;

const Button = styled.button`
  background: #e37f3e;
  color: white;
  text-transform: uppercase;
  padding: 16px;
  font-weight: bold;
  border-radius: 4px;
  font-size: 14px;
`;

const formTypes = [
  {
    type: "sales",
    Icon: styled(Briefcase)`
      margin-right: 8px;
    `,
    title: "Sales Support",
  },
  {
    type: "user",
    Icon: styled(Users)`
      margin-right: 8px;
    `,
    title: "User Support",
  },
  {
    type: "else",
    Icon: styled(Question)`
      margin-right: 8px;
    `,
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
      <ButtonNav>
        <ButtonList>
          {formTypes.map(({ type, Icon, title }) => {
            return (
              <ButtonListItem key={type}>
                <ButtonListButton
                  type="button"
                  active={formType === type}
                  onClick={() => {
                    dispatch({ type: "setFormType", value: type });
                  }}
                >
                  <Icon />
                  {title}
                </ButtonListButton>
              </ButtonListItem>
            );
          })}
        </ButtonList>
      </ButtonNav>
      <StyledForm onSubmit={handleSubmit}>
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
        <SubmitButtonWrapper>
          <Button type="submit">Get in touch</Button>
        </SubmitButtonWrapper>
      </StyledForm>
    </ContentWrapper>
  );
}

export default Form;
