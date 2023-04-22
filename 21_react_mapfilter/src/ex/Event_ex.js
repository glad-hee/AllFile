import { useState } from "react";

function Event() {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const [list, setList] = useState([
    { id: 1, name: "코디", email: "codi@gmail.com" },
    { id: 2, name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);

  const insert = () => {
    const newList = list.concat({
      id: list.length + 1,
      name: name,
      email: email,
    });
    setList(newList);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      insert();
    }
  };

  const shift = (id) => {
    const dlt = list.filter((value) => value.id !== id);
    setList(dlt);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={insert}>등록</button>
      <br />
      {list.map((v) => (
        <h2 onDoubleClick={() => shift(v.id)}>
          {v.name}:{v.email}
        </h2>
      ))}
    </>
  );
}

export default Event;
