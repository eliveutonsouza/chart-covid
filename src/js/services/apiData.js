const apiReports = axios.create({
  baseURL: "https://covid-api.com/api/reports/",
});

export async function getApiDataFromReportsTotal(period, country) {
  const request = await apiReports.get(`total?date=${period}&iso=${country}`);
  return request;
}

// Report
// export async function getApiDataFromReports(
//   date,
//   q,
//   iso,
//   region_name,
//   region_province,
//   city_name,
//   per_page
// ) {
//   let typeStructure = {
//     date: `date=${date}`,
//     q: `q=${q}`,
//     iso: `iso=${iso}`,
//     region_name: `region_name=${region_name}`,
//     region_province: `region_province=${region_province}`,
//     city_name: `city_name=${city_name}`,
//     per_page: `per_page=${per_page}`,
//   };

//   await api
//     .get(`total?date=${period}&iso=${country}`)
//     .then((res) => {
//       const report = res.data.data;
//       generateChart(report);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// Region
// export async function getApiDataFromRegions() {}
// export async function getApiDataFromProvinces() {}
