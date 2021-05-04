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

/**
 * Sets the value attribute of the input and updates localStorage for the counter
 *
 * @param {string} value
 * @param {integer} count
 *
 * @returns null
 */
function counterUpdate(value, count) {
  counterInput.setAttribute(value, counterInputValue);
  trackerStorage.setItem(count, counterInputValue);
}

counterGroup.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    button.preventDefault;
    const action = button.getAttribute("data-type");
    const counterActions = {
      plus: () => {
        if (counterInputValue < maxValue) {
          counterInputValue++;
          counterUpdate("value", "interactionCount");
        }
      },
      minus: () => {
        if (counterInputValue > minValue) {
          counterInputValue--;
          counterUpdate("value", "interactionCount");
        }
      },
      reset: () => {
        counterInputValue = 0;
        counterUpdate("value", "interactionCount");
      },
    };

    counterActions[action]();
  }
});
