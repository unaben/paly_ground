import React from "react";

const SelectedItem = (selectedItem) => {
  const { title, image } = selectedItem.selectedItem;
  return (
    <div>
      <div>
        <img src={image} alt="img" />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default SelectedItem;
