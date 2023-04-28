import { useState } from "react";

const colors = [
  { name: "أحمر", hex: "#F30B0B" },
  { name: "برتقالي", hex: "#ba4f07" },
  { name: "اصفر", hex: "#ba9707" },
  { name: "اخضر", hex: "#44ba07" },
  { name: "سماوي", hex: "#07ba8e" },
  { name: "ازرق", hex: "#0753ba" },
  { name: "بنفسجي", hex: "#5807ba" },
  { name: "وردي", hex: "#de33a9" },
  { name: "اسود", hex: "#222" },
  { name: "ابيض", hex: "#fefefe" },
];

export const ProductColorsSelectHook = () => {
  const [availColors, setAvailColors] = useState([]); //> Available Colors State

  const addColor = (hex) => setAvailColors((prev) => [...prev, hex]); //> Add Color
  const deleteColor = (hex) =>
    setAvailColors([...availColors.filter((clr) => clr !== hex)]); //> Delete Color

  return { availColors, deleteColor, addColor, colors };
};
