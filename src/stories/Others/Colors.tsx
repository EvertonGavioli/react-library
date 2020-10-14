import React from "react";
import { Typography } from "../../Typography";

const Colors: React.FC<{ color: string; description: string }> = ({
  color,
  description,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginRight: 32 }}>
      <div style={{ height: 100, width: 100, backgroundColor: `${color}` }} />
      <Typography>{description}</Typography>
    </div>
  );
};

export default Colors;
