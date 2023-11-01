import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  text?: string;
  children?: ReactNode;
}

const Container: FunctionComponent<Props> = (props) => {
  return <div className="container">{ props.children }</div>;
};

export default Container;
