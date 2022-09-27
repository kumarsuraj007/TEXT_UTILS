import React, { useState } from "react";
import "./Textile.css";

const TextUtils = () => {
  const [Text, ChangeText] = useState("");
  const [Btn, ChangeBtn] = useState('Enable Dark Mode');

  const [Style, MyStyle] = useState({
      color: 'black',
      backgroundColor: "white"
    }
  )

  const ChangeColor = () => {
    if(Style.color == "black") {
      MyStyle({
        color: 'white',
        backgroundColor: "black"
      })
      ChangeBtn('Enable Light Mode')
    } else {
      MyStyle({
        color: 'black',
        backgroundColor: "white"
      })
      ChangeBtn('Enable Dark Mode')
    }
  };

  const CopyText = () => {
    const TextArea = document.getElementById('TextArea')
    TextArea.select()
    navigator.clipboard.writeText(TextArea.value)
  };

  const RemoveTxt = () => {
    ChangeText('')
  }


  const HandelSubmit = () => {
    const NewText = Text.toUpperCase();
    ChangeText(NewText);
  };


  return (
    <div className="Container-1" style={Style}>
      <nav style={Style}>
        <h1 className="Logo" style={Style}>Textile</h1>
        <input placeholder="Search Here..." className="Search-Bar"></input>
        <button className="Search-Btn">Search</button>
      </nav>
      <hr className="Line"></hr>
      <div>
        <button onClick={ChangeColor} className="Btn-3">{Btn}</button>
        <button onClick={CopyText} className="Btn-4">Copy Text</button>
        <button onClick={RemoveTxt} className="Btn-4">Remove Text</button>
      </div>
      <div className="container-2">
        <textarea id="TextArea"
          value={Text}
          onChange={(e) => ChangeText(e.target.value)}
          className="Text-Area"
          placeholder="Write Here..."
        ></textarea>
        <button className="Btn-2" onClick={HandelSubmit}>
          Click To UpperCase
        </button>
        <p className="Counter">
          {Text.split(" ").length} Word and {Text.length} Characters
        </p>
        <h2 className="Heading-2">Your Preview</h2>
        <div className="Container-3" style={Style}>
          <p className="www">{Text}</p>
        </div>
      </div>
    </div>
  );
};


export default TextUtils;
