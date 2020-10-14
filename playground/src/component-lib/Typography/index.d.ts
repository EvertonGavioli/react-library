import React from "react";
declare type Variants = "h4" | "h5" | "h6" | "subtitle1" | "body1" | "body2" | "caption";
declare type FontWeight = "ultra-light" | "light" | "medium" | "regular" | "semi-bold" | "bold" | "extra-bold" | "black";
interface TypographyProps {
    variant?: Variants;
    weight?: FontWeight;
}
declare const Typography: React.FC<TypographyProps>;
export { TypographyProps, Typography };
