import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h2 className="title">Dynamic List Manager</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter an item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input"
          />
          <button onClick={handleAdd} className="button">
            Add Item
          </button>
        </div>

        <div className="list-container">
          {items.length === 0 ? (
            <p className="empty-text">No items yet</p>
          ) : (
            <ul className="list">
              {items.map((item, index) => (
                <li key={index} className="list-item">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

