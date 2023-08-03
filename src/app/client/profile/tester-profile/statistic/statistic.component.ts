import { Component, ViewChild } from "@angular/core";


@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent {
  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Tester Statistic"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Rejections" },
		  { y: 28.2, name: "Acception" },
		  { y: 14.4, name: "Something " },
		  { y: 43.3, name: "Furniture" }
		]
	  }]
	}	
}
