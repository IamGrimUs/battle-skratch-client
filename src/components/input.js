import React from 'react';

export default function Input(props) {
  return (
    <input type={props.type} ref={props.ref} placeholder={props.placeholder} />
  );
}
