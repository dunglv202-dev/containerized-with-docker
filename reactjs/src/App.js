import { useState } from "react";
import { BACKEND_URL } from "./configs/configs";

function App() {
  const [lang, setLang] = useState("en");
  const [name, setName] = useState();
  const [hello, setHello] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BACKEND_URL}/hello?name=${name}&lang=${lang}`);
    setHello(await response.text());
  };

  return hello ? (
    <div>
      <h1>{hello}</h1>
      <button onClick={() => setHello(null)}>Back</button>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Summit</button>
    </form>
  );
}

export default App;
