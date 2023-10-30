let chartApiCOVID = null;

export function generateChart(targetHTML, data, typeChart) {
  if (chartApiCOVID) {
    chartApiCOVID.destroy();
  }

  const dataChart = {
    labels: Object.keys(data).map((key) => {
      return key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
    }),
    datasets: [
      {
        label: "Status",
        data: Object.values(data),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 205, 335)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const optionsConfig = {
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 24,
            family: "'Roboto'",
          },
        },
      },
    },
  };

  chartApiCOVID = new Chart(targetHTML, {
    type: typeChart,
    data: dataChart,
    options: optionsConfig,
  });
}
