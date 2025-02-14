window.chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)",
};

var ctx = document.getElementById("bft-timing").getContext("2d");
var chartBFTTiming = new Chart(ctx, {
    type: "line",
    options: {
        responsive: true,

        title: {
            display: true,
            text: "BFT Timing Analytic",
        },
        tooltips: {
            position: "nearest",
            mode: "index",
            intersect: false,
        },
    },
});

// var ctx = document.getElementById("bft-block-producing").getContext("2d");
// var chartBFTProducing = new Chart(ctx, {
//   type: "line",
//   options: {
//     responsive: true,
//     title: {
//       display: true,
//       text: "BFT Block Producing",
//     },
//     tooltips: {
//       position: "nearest",
//       mode: "index",
//       intersect: false,
//     },
//   },
// });

function updateBFTTiming() {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status != 200) {
                console.log(this);
                alert("Cannot get data");
                return;
            }
            let data = {
                labels: this.response.x,
                datasets: [
                    {
                        label: "Produce",
                        borderColor: window.chartColors.green,
                        data: this.response.produce,
                        pointRadius: 0,
                        fill: false,
                    },
                    {
                        label: "Propose",
                        borderColor: window.chartColors.red,
                        data: this.response.propose,
                        pointRadius: 0,
                        fill: false,
                    },
                    {
                        label: "Majority",
                        borderColor: window.chartColors.blue,
                        data: this.response.majorityvote,
                        pointRadius: 0,
                        fill: false,
                    },
                    {
                        label: "Last",
                        borderColor: window.chartColors.yellow,
                        data: this.response.lastvote,
                        pointRadius: 0,
                        fill: false,
                    },
                ],
            };
            chartBFTTiming.data = data;
            chartBFTTiming.update();
            console.log(this.response);
        }
    };
    xhttp.open("GET", "/bfttiming/dataseries?cid=-1", true);
    xhttp.send();
}

// function updateBFTBlockProducing() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.responseType = "json";
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4) {
//       if (this.status != 200) {
//         console.log(this);
//         alert("Cannot get data");
//         return;
//       }
//       let data = {
//         labels: this.response.x,
//         datasets: [
//           {
//             label: "Round",
//             borderColor: window.chartColors.red,
//             data: this.response.round,
//             fill: false,
//           },
//           {
//             label: "Fork",
//             borderColor: window.chartColors.blue,
//             data: this.response.fork,
//             fill: false,
//           },
//         ],
//       };
//       chartBFTProducing.data = data;
//       chartBFTProducing.update();
//       console.log(this.response);
//     }
//   };
//   xhttp.open("GET", "/bftproducing", true);
//   xhttp.send();
// }

updateBFTTiming();
// updateBFTBlockProducing();
