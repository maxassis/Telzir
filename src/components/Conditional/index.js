import React from "react";

export default function Conditional({ when, children }) {
  return <>{when && children}</>;
}
