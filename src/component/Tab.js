import { useState } from "react";
function Tab({ children, activeTab }) {
  console.log(children);
  const [active, setActive] = useState(activeTab);

  return (
    <div className=" container">
      <nav>
        {children.map((data, index) => {
          return (
            <button
              onClick={() => setActive(index)}
              key={index}
              className={
                active === index ? "bg-green-800 p-2" : "bg-slate-400 p-2"
              }
            >
              {data.props.title}
            </button>
          );
        })}
      </nav>

      {children[active]}
    </div>
  );
}

export default Tab;
