import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SketchPicker } from "react-color";
import {
  addColor,
  removeColor,
  closeColorPicker,
  editColor,
  openColorPicker,
} from "../../features/todosReducer";

const PalettePage = () => {
  const colors = useSelector((state) => state.colors);
  console.log(colors);
  const [setInvalid] = useState(false);
  const [hoveredColorId, setHoveredColorId] = useState(null);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [selectedColor] = useState("#000000");
  const colorPickerRef = useRef(null);
  const dispatch = useDispatch();

  const generateRandomColor = () => {
    dispatch(addColor(selectedColor));
    setDisplayColorPicker(true);
  };

  const handleChangeComplete = (color, newColor) => {
    console.log(newColor);
    dispatch(editColor({ colorId: color.id, newColor: newColor }));
  };
  const handleClickOpen = (color) => {
    dispatch(openColorPicker({ colorId: color.id }));
    setDisplayColorPicker(true);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = (event) => {
    if (
      colorPickerRef.current &&
      colorPickerRef.current.contains &&
      !colorPickerRef.current.contains(event.target)
    ) {
      dispatch(closeColorPicker());
      setDisplayColorPicker(false);
    } else {
      setInvalid(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="palette_section">
      <button className="button" onClick={generateRandomColor}>
        Добавить цвет
      </button>
      <div className="color_container">
        {colors.length
          ? colors?.map((color, index) => (
              <div
                className="color_item"
                key={color.id}
                style={{ backgroundColor: color.color }}
                ref={colorPickerRef}
                onMouseEnter={() => setHoveredColorId(color.id)}
                onMouseLeave={() => setHoveredColorId(null)}
                onClick={() => handleClickOpen(color)}
              >
                <>
                  {hoveredColorId === color.id && (
                    <button
                      className="delete_button"
                      onClick={() => dispatch(removeColor(color.id))}
                    >
                      ✖
                    </button>
                  )}

                  {color.pickerOpen && displayColorPicker && (
                    <SketchPicker
                      key={color.id}
                      color={color.color}
                      onChangeComplete={(selectedColor) =>
                        handleChangeComplete(color, selectedColor.hex)
                      }
                    />
                  )}
                </>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default PalettePage;
