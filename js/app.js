const counterGroup = document.getElementById("counterGroup");
const counterInput = document.getElementById("counterInput");
const trackerStorage = window.localStorage;
const interactionCountState = localStorage.getItem("interactionCount");
let counterInputValue = 0;
const minValue = counterInput.getAttribute("min");
const maxValue = counterInput.getAttribute("max");

if (!interactionCountState) {
  trackerStorage.setItem("interactionCount", 0);
} else {
  counterInputValue = parseInt(interactionCountState);
  counterInput.setAttribute("value", counterInputValue);
}

counterGroup.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    button.preventDefault;
    const action = button.getAttribute("data-type");
    if (action === "plus" && counterInputValue < maxValue) {
      counterInputValue++;
      counterInput.setAttribute("value", counterInputValue);
      trackerStorage.setItem("interactionCount", counterInputValue);
    } else if (action === "minus" && counterInputValue > minValue) {
      counterInputValue--;
      counterInput.setAttribute("value", counterInputValue);
      trackerStorage.setItem("interactionCount", counterInputValue);
    }
    // } else if (action === "reset") {
    //   counterInputValue = 0;
    //   counterInput.setAttribute("value", counterInputValue);
    //   trackerStorage.setItem("interactionCount", counterInputValue);
    // }

    const counterActions = {
      reset: () => {
        counterInputValue = 0;
        counterInput.setAttribute("value", counterInputValue);
        trackerStorage.setItem("interactionCount", counterInputValue);
      },
    };
    counterActions[action];
  }
});
