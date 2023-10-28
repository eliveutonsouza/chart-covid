import api from "../services/api.js";

const formFilter = document.querySelector("form");
let chartApiCOVID = null;

async function generateDataForDateAndLocation(event) {
  event.preventDefault();

  let period = document.querySelector("#period").value;
  const country = "BRA";

  await api
    .get(`total?date=${period}&iso=${country}`)
    .then((res) => {
      const report = res.data.data;
      generateChart(report);
    })
    .catch((error) => {
      console.error(error);
    });
}

formFilter.addEventListener("submit", generateDataForDateAndLocation);

function generateChart({ confirmed, deaths, recovered }) {
  const chartDoughnut = document.getElementById("ChartComponent");

  if (chartApiCOVID) {
    chartApiCOVID.destroy();
  }

  const dataChart = {
    labels: ["Confirmado", "Mortes", "Recuperações"],
    datasets: [
      {
        label: "Status COVID",
        data: [confirmed, deaths, recovered],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  chartApiCOVID = new Chart(chartDoughnut, {
    type: "doughnut",
    data: dataChart,
  });
}
