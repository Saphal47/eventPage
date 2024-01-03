import React from "react";

export const useToggle = (initValue = false) => {
  const [on, setOn] = React.useState(initValue);

  function onToggle() {
    setOn(!on);
  }

  return [on, onToggle];
};
