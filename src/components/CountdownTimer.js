import React from "react";
import "../components/countdowntimer.css";

let timer;
export default class CountdownTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: "",
      minutes: "",
      seconds: "",
      isTimerStarted: false,
      isTimerPaused: false
    };
  }

  setHours = (event) => {
    const value = parseInt(event.target.value);
    console.log("value is ", event.target.value);
    this.setState({ hours: value >= 10 ? value : "0" + value });
  };

  setMinutes = (event) => {
    const value = parseInt(event.target.value);
    this.setState({ minutes: value >= 10 ? value : "0" + value });
  };

  setSeconds = (event) => {
    const value = parseInt(event.target.value);
    this.setState({ seconds: value >= 10 ? value : "0" + value });
  };

  startTime = () => {
    this.setState(
      (prevState, props) => {
        return {
          isTimerStarted: true
        };
      },
      () => {
        if (this.state.isTimerStarted) {
          timer = setInterval(() => {
            this.setState(
              (prevState, props) => {
                let seconds = parseInt(prevState.seconds);
                return {
                  seconds: seconds >= 10 ? seconds - 1 : "0" + (seconds - 1)
                };
              },
              () => {
                console.log("callback state is executing...");
                if (parseInt(this.state.seconds) === 0) {
                  if (parseInt(this.state.minutes) === 0) {
                    if (parseInt(this.state.hours) === 0) {
                      console.log("timer completed");
                      this.setState({
                        hours: 0,
                        minutes: 0,
                        seconds: 0,
                        isTimerStarted: false
                      });
                      this.clearTime();
                    } else {
                      this.setState((prevState, props) => {
                        let hours = parseInt(prevState.hours);
                        return {
                          hours: hours - 1,
                          seconds: 60,
                          minutes: 60
                        };
                      });
                    }
                  } else {
                    this.setState((prevState, props) => {
                      let minutes = parseInt(prevState.minutes);
                      return {
                        minutes:
                          minutes >= 10 ? minutes - 1 : "0" + (minutes - 1),
                        seconds: 60
                      };
                    });
                  }
                }
              }
            );
          }, 1000);
        } else {
          this.clearTime();
        }
      }
    );
  };

  pauseTime = () => {
    this.setState(
      (prevState, props) => {
        return {
          isTimerPaused: !prevState.isTimerPaused
        };
      },
      () => {
        if (this.state.isTimerPaused === true) {
          this.clearTime();
        } else {
          this.startTime();
        }
      }
    );
  };

  clearTime = () => {
    clearInterval(timer);
  };

  resetTime = () => {
    this.setState({
      hours: "",
      minutes: "",
      seconds: "",
      isTimerStarted: false
    });
    clearInterval(timer);
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>Countdown Timer</h1>
          <div className="timer-container">
            <div className={this.state.isTimerStarted ? "hide" : "show"}>
              <input
                type="text"
                value={this.state.hours}
                onChange={(e) => this.setHours(e)}
                placeholder="HH"
              />
              <span>:</span>
              <input
                type="text"
                value={this.state.minutes}
                onChange={(e) => this.setMinutes(e)}
                placeholder="MM"
              />
              <span>:</span>
              <input
                type="text"
                value={this.state.seconds}
                onChange={(e) => this.setSeconds(e)}
                placeholder="SS"
              />
            </div>
            <div className={this.state.isTimerStarted ? "show" : "hide"}>
              <span>
                {this.state.hours} : {this.state.minutes} : {this.state.seconds}
              </span>
            </div>
            <div>
              <button
                className={this.state.isTimerStarted ? "hide" : "show"}
                onClick={this.startTime}
              >
                {this.state.isTimerStarted ? "Pause" : "Start"}
              </button>
              <button
                className={this.state.isTimerStarted ? "show" : "hide"}
                onClick={this.pauseTime}
              >
                {this.state.isTimerPaused ? "Resume" : "Pause"}
              </button>
              <button
                className={this.state.isTimerStarted ? "show" : "hide"}
                onClick={this.resetTime}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
