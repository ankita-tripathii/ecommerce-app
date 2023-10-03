import { useState } from "react"



// functional components
function Test() {

  const clickEvent = () => {
console.log("You clicked the button");
}

const [initialText, setText] = useState("I am about to get changed!"); // ? Hooks ??
// usestate vs useeffect vs usereducer vs userefs
 
  const changeText = () => {
    setText("I am changed");
  }

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
  imageSize: 90,
};

  return (
    <div >

      <h1> Ankita </h1>
      <button onClick={ clickEvent }> Button  </button>

      <h1>{ initialText }</h1>
      <button onClick={ changeText }>Click Me </button>

      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />

    </div>

  );
}


export default Test;
