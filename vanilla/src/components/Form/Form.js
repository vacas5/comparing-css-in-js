import { Fragment, useState } from "react";
import { ReactComponent as Briefcase } from "../../icons/briefcase.svg";
import { ReactComponent as Users } from "../../icons/users.svg";
import { ReactComponent as Question } from "../../icons/question.svg";
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
  ],
};

function Form() {
  const [formType, setFormType] = useState("sales");

  const options = selectMenuOptions[formType] || [];

  return (
    <Fragment>
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
                    setFormType(type);
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
      <form className="form">
        <div className="responsive-field-wrapper">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Jane Doe"
            className="control"
          />
        </div>
        <div className="responsive-field-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="jane.doe@example.com"
            className="control"
          />
        </div>
        <div className="responsive-field-wrapper">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="(123) 456-7890"
            className="control"
          />
        </div>
        {formType === "sales" && (
          <div className="responsive-field-wrapper">
            <label htmlFor="interest">Interest</label>
            <select id="interest" className="control">
              <option>I'm interested in...</option>
              {options.map(({ value, title }) => (
                <option value={value}>{title}</option>
              ))}
            </select>
          </div>
        )}
        {formType === "user" && (
          <div className="responsive-field-wrapper">
            <label htmlFor="issue">Issue</label>
            <select id="issue" name="issue" className="control">
              <option>Select an issue</option>
              {options.map(({ value, title }) => (
                <option value={value}>{title}</option>
              ))}
            </select>
          </div>
        )}
        <div className="responsive-field-wrapper">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Hi! I would like to..."
            rows="8"
            className="control"
          ></textarea>
        </div>
        <p className="submit-button-wrapper">
          <button className="button" type="submit">
            Get in touch
          </button>
        </p>
      </form>
    </Fragment>
  );
}

export default Form;
