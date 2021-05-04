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

var Clock = {
  totalSeconds: 0,
  start: function () {
    if (!this.interval) {
      var self = this;
      function pad(val) {
        return val > 9 ? val : "0" + val;
      }
      this.interval = setInterval(function () {
        self.totalSeconds += 1;

        document.getElementById("min").innerHTML = pad(
          Math.floor((self.totalSeconds / 60) % 60)
        );
        document.getElementById("sec").innerHTML = pad(
          parseInt(self.totalSeconds % 60)
        );
      }, 1000);
    }
  },
  reset: function () {
    Clock.totalSeconds = null;
    clearInterval(this.interval);
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    delete this.interval;
  },
  pause: function () {
    clearInterval(this.interval);
    delete this.interval;
  },
  resume: function () {
    this.start();
  },
  restart: function () {
    this.reset();
    Clock.start();
  },
};

const timer = document.getElementById("timer");
timer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    button.preventDefault;
    const action = button.id;
    const buttonActions = {
      startButton: () => {
        Clock.start();
      },
      pauseButton: () => {
        Clock.pause();
      },
      resumeButton: () => {
        Clock.resume();
      },
      resetButton: () => {
        Clock.reset();
      },
      restartButton: () => {
        Clock.restart();
      },
    };
    buttonActions[action]();
  }
});
