import "./Counter.css";
import { Component, useState } from "react";

class Counter extends Component {
  constructor(props) {
    console.log(`constructor`);
		super(props);
		this.state = {
			counter: 0,
		};
	}

	increase = () => {
		if (this.state.counter < 10) {
			this.setState((prevState) => ({ counter: prevState.counter + 1 }));
		}
	};

	decrease = () => {
		if (this.state.counter > 0) {
			this.setState((prevState) => ({ counter: prevState.counter - 1 }));
		}
	};

	reset = () => {
		this.setState({ counter: 0 });
	};
	componentDidMount() {
		console.log("Component did mounted");
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("Component updated");
		console.log("Previous counter:", prevState.counter);
		console.log("Current counter:", this.state.counter);
	}
	componentWillUnmount() {
		console.log("Component will mount");
	}
	render() {
		const { counter } = this.state;
		return (
			<div className="counter">
				<h1>REACT COUNTER</h1>
				<div className="counter_result">
					<span className="counter_output">{counter}</span>
					<div className="btn_container">
						<button className="control_btn" onClick={this.increase}>
							+
						</button>
						<button className="control_btn" onClick={this.decrease}>
							-
						</button>
						<button className="reset" onClick={this.reset}>
							Reset
						</button>
					</div>
				</div>
			</div>
		);
	}
}

// function Counter() {
//   const [counter, setCounter] = useState(0);
//   const increase = () => {
//     if (counter < 10) {
//       setCounter(count => count + 1);
//     }
//   };
//   const decrease = () => {
//     if (counter > 0) {
//       setCounter(count => count - 1);
//     }
//   };
//   const reset = () => {
//     setCounter(0);
//   };

// }

export default Counter;
