// importation
import { generateChart } from "./module/chart.js";
import { getApiDataFromReportsTotal } from "./services/apiData.js";
import { addLoadingInPage } from "./module/loading.js";

// Enforcement of imports
function initializeApp() {
  // Initialize Default
  const formFilter = document.querySelector("form");

  let dataReportsTotal = {
    confirmed: 1,
    deaths: 1,
    recovered: 1,
    active: 1,
  };

  const ChartComponentHTML = document.querySelector("#ChartComponent");
  generateChart(ChartComponentHTML, dataReportsTotal, "doughnut");

  // Capture Submit event in the form
  formFilter.addEventListener("submit", async (event) => {
    // Prevent submit form
    event.preventDefault();

    // API query (ROUTE TOTAL REPORTS)
    const period = document.querySelector("#period").value;
    const country = "BRA";

    addLoadingInPage(true); // Indicates to the user that the data is being loaded

    const dataApi = await getApiDataFromReportsTotal(period, country)
      .catch((error) => console.error(error))
      .finally(() => {
        addLoadingInPage(false);
      });

    // Processing the data for Chart
    const { confirmed, deaths, recovered, active } = dataApi.data.data;
    dataReportsTotal = { confirmed, deaths, recovered, active };

    // Initialize Chart
    generateChart(ChartComponentHTML, dataReportsTotal, "doughnut");
  });
}

initializeApp();
