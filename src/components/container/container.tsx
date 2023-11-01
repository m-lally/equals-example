import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = (props) => {
  return <div className="container">{ props.children }</div>;
};

export default Container;
