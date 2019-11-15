import React, {Component} from 'react';
import './App.css';
import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Statistics_Monthly extends Component {
    state = {
        stage_id: 3,
        
        dataRadar: {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(194, 116, 161, 0.5)",
                borderColor: "rgb(194, 116, 161)",
                data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                label: "My Second dataset",
                backgroundColor: "rgba(71, 225, 167, 0.5)",
                borderColor: "rgb(71, 225, 167)",
                data: [28, 48, 40, 19, 96, 27,100]
              }
            ]
          }
	}

	content () {
		return (
			<body className="BodyContent">
				abc
                {<MDBContainer>
                    <h3 className="mt-5">Radar chart</h3>
                    <Radar data={this.state.dataRadar} options={{ responsive: true }} />
                </MDBContainer>}
			</body>
		)
	}

	render () {
		return (
			this.content()
		);
	}
}

export default Statistics_Monthly;
