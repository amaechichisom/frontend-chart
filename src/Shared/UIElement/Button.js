import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`btn-${props.size || 'default'} ${props.inverse &&
          'button--inverse'} ${props.danger && 'button--danger'} ${props.class}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`btn-${props.size || 'default'} ${props.inverse &&
          'button--inverse'} ${props.danger && 'button--danger'} ${props.class}`}
          data-aos="fade-up-right"
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`btn-login w-full md:w-5/5  sm:mx-0 lg:w-4/5 font-bold mt-8 text-grey-dark  lg:ml-0`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
