import React from "react";
import { Button } from "react-bootstrap";

const ListComp = ({ item, setSelectedItem }) => {
  return (
    <div>
      <img src={item.thumbnailUrl} alt="img" />
      <div>
        <Button
          variant="outline-info"
          className="mt-2"
          onClick={() =>
            setSelectedItem({ id: item.id, title: item.title, image: item.url })
          }
        >
          Click
        </Button>
      </div>
    </div>
  );
};

export default ListComp;
