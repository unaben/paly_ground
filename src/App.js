import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ListComp from "./components/list/ListComp.jsx";
import SelectedItem from "./components/selectedItem/SelectedItem";
import useFetch from "./components/hooks/useFetch";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  console.log("Item State: ", selectedItem);
  const { apiItems } = useFetch();
  return (
    <div className="container app mt-4">
      <div className="d-flex flex-md-wrap gap-2">
        {apiItems &&
          apiItems.slice(0, 100).map((item) => {
            return (
              <>
                {!selectedItem && (
                  <ListComp
                    key={item.id}
                    item={item}
                    setSelectedItem={setSelectedItem}
                  />
                )}
              </>
            );
          })}
      </div>
      {selectedItem && <SelectedItem selectedItem={selectedItem} />}
    </div>
  );
};

export default App;
