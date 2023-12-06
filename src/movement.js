// movements.js
const movement = {};

const isPressed = (keyCode) => {
  return movement[keyCode] || false;
};

const onKeyDown = (e) => {
  if (!movement[e.keyCode]) {
    movement[e.keyCode] = true;
    console.log("KeyDown: ", e.key, "KeyCode: ", e.keyCode);
  }
};

const onKeyUp = (e) => {
  movement[e.keyCode] = false;
  console.log("KeyUp: ", e.key, "KeyCode: ", e.keyCode);
};

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

export { isPressed, onKeyDown, onKeyUp };
