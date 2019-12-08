import React from "react";

const Money = props => {
  const { cost } = props;
  if (cost == null) return `$0`;
  return <div className="font-weight-bold d-inline"> ${(cost / 100).toFixed(2)} </div>;
};

export default Money;