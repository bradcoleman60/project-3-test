const express = require('express');
const axios = require('axios');
const app = express();
cikTickerData = require('./seed/ticker-cik-seed')

//Endpoints to  SEC.GOV
const urlRevenue = 'https://data.sec.gov/api/xbrl/frames/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax/USD/CY2022Q3.json';
const urlNetIncome = 'https://data.sec.gov/api/xbrl/frames/us-gaap/NetIncomeLoss/USD/CY2022Q3.json';
const urlCash ='https://data.sec.gov/api/xbrl/frames/us-gaap/CashAndCashEquivalentsAtCarryingValue/USD/CY2022Q3I.json';
// const urlCash ='https://data.sec.gov/api/xbrl/frames/us-gaap/Cash/USD/CY2022Q3I.json';

const urlCashFlow ='https://data.sec.gov/api/xbrl/frames/us-gaap/NetCashProvidedByUsedInOperatingActivities/USD/CY2022Q1.json';


const tickers = ['AAL', 'MQ', 'AMZN', 'OKTA']

const companies = ['American Airlines Group Inc.', 'Marqeta, Inc.', 'AMAZON.COM, INC.', 'Okta, Inc.'];

var storiesArray =[];

const CIK = tickers.map((el) => {
  return cikTickerData.filter(item => item.ticker === el).map(item => item.cik)
 })

 const Names1 = tickers.map((el) => {
  return cikTickerData.filter(item => item.ticker === el).map(item => item.entityName)
 })

console.log("CIK:", CIK)
console.log("Names:", Names1)

// console.log(cikTickerData)



tickers.forEach((el) => {
const options = {
  method: 'GET',
  url: 'https://yh-finance.p.rapidapi.com/auto-complete',
  params: {q: el, region: 'US'},
  headers: {
    'X-RapidAPI-Key': 'aef2874490mshcdc643d40f36d95p1f1416jsn10af74644bac',
    'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {

  //Get 3 Stories Per Company
  for (i=1; i<4; i++){
    storiesArray.push({ticker: el, title: response.data.news[i].title, link: response.data.news[i].link})

  }
  
  console.log("STORIES ARRAY ====> ", storiesArray)
  
  
	// console.log(`TITLE for ${el}`, response.data.news[0].title) 
  // console.log(`LINK for ${el}`, response.data.news[0].link);
	// console.log(`TITLE for ${el}`, response.data.news[1].title) 
  // console.log(`LINK for ${el}`, response.data.news[1].link);
	// console.log(`TITLE for ${el}`, response.data.news[2].title) 
  // console.log(`LINK for ${el}`, response.data.news[2].link);
	// console.log(`TITLE for ${el}`, response.data.news[3].title) 
  // console.log(`LINK for ${el}`, response.data.news[3].link);
	// console.log(`TITLE for ${el}`, response.data.news[4].title) 
  // console.log(`LINK for ${el}`, response.data.news[4].link);
	
	
  
}).catch(function (error) {
	console.error(error);
});
})



app.get('/', async (req, res) => {
    try {
      //Fetch Revenues  
      const response = await axios.get(urlRevenue);
      const data = response.data.data;

      //Fetch Net Income / (Loss)
      const responseNet = await axios.get(urlNetIncome);
      const dataNet = responseNet.data.data;
      
      //Fetch Cash Balance
      const responseCash = await axios.get(urlCash);
      const dataCash = responseCash.data.data;

      //Fetch Cash Flow 
      const responseCashFlow = await axios.get(urlCashFlow);
      const dataCashFlow = responseCashFlow.data.data;

      const tableData = {};
  
      // Initialize the table data object with empty arrays for each company
      for (const company of companies) {
        tableData[company] = {
          revenue: null,
          netIncome: null,
          cash: null,
          cashFlow: null



        };
      }
  
      // Populate the table data object with the revenue values for each company
      for (const item of data) {
        const company = item['entityName'];
        const value = parseInt(item['val'])/1000000000;
        if (tableData.hasOwnProperty(company)) {
          tableData[company].revenue = value;
        }
      }
      
      //Populate the table data object with the net income/ loss values for each company
      for (const item of dataNet) {
        const company = item['entityName'];
        const value = parseInt(item['val'])/1000000000;
        if (tableData.hasOwnProperty(company)) {
          tableData[company].netIncome =value;
        }
      };

      //Populate the table data object with cash values for each company
      for (const item of dataCash) {
        const company = item['entityName'];
        const value = parseInt(item['val'])/1000000000;
        if (tableData.hasOwnProperty(company)) {
          tableData[company].cash = value;
        }
      };

        //Populate the table data object with cash values for each company
        for (const item of dataCashFlow) {
            const company = item['entityName'];
            const value = parseInt(item['val'])/1000000000;
            if (tableData.hasOwnProperty(company)) {
            tableData[company].cashFlow = value;
            }
        };

      console.log("table data: ",tableData)

//////////////////////////////////////
// // Initialize the table data object with empty arrays for each company
// for (const company of companies) {
//   tableData[company] = [];
// }

// // Populate the table data object with the revenue values for each company
// for (const item of data) {
//   const company = item['entityName'];
//   const value = parseInt(item['val'])/1000000000;
//   if (tableData.hasOwnProperty(company)) {
//     tableData[company].push(value);
//   }
// }

// //Populate the table data object with the net income/ loss values for each company
// for (const item of dataNet) {
//   const company = item['entityName'];
//   const value = parseInt(item['val'])/1000000000;
//   if (tableData.hasOwnProperty(company)) {
//     tableData[company].push(value);
//   }
// };

// //Populate the table data object with cash values for each company
// for (const item of dataCash) {
//   const company = item['entityName'];
//   const value = parseInt(item['val'])/1000000000;
//   if (tableData.hasOwnProperty(company)) {
//     tableData[company].push(value);
//   }
// };

//   //Populate the table data object with cash values for each company
//   for (const item of dataCashFlow) {
//       const company = item['entityName'];
//       const value = parseInt(item['val'])/1000000000;
//       if (tableData.hasOwnProperty(company)) {
//       tableData[company].push(value);
//       }
//   };

// console.log("table data: ",tableData)

/////////////////////////////////////

  
      const html = `
        <html>
          <head>
            <title>Revenue Table</title>
            <style>
            table {
                border-collapse: collapse;
                width: 100%;
                margin-bottom: 1em;
                border: 1px solid black;
            }
            th, td {
                padding: 8px;
                text-align: left;
                border: 1px solid black;
            }
            th {
                background-color: #ccc;
                font-weight: bold;
                text-transform: uppercase;
            }
        </style>
            </head>
          <body>
            <table>
              <thead>
                <tr>
                  <th>(In Billions)</th>
                  ${companies.map(company => `<th>${company}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Revenue</td>
                  ${companies.map(company => `<td>${tableData[company][0] || 'N/A'}</td>`).join('')}
                </tr>
                <td>Net Income/(Loss)</td>
                ${companies.map(company => `<td>${tableData[company][1] || 'N/A'}</td>`).join('')}
              </tr>
              <td>Cash Balance</td>
                ${companies.map(company => `<td>${tableData[company][2] || 'N/A'}</td>`).join('')}
              </tr>
              <td>Cash Flow</td>
                ${companies.map(company => `<td>${tableData[company][3] || 'N/A'}</td>`).join('')}
              </tr>
              </tbody>
            </table>
          </body>
        </html>
      `;
  
      res.send(html);
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occurred: ${error.message}`);
    }
  });
  
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });



































// app.get('/', async (req, res) => {
//   try {
//     const response = await axios.get(url);
//     const data = response.data.data;

//     // console.log(data);
    
//     const tableData = companies.map(company => {
//       const value = parseInt(data.find(item => item['entityName'] === company)['val'])/1000000000;
//       return { company, value };
//     });

//     const html = `
//       <html>
//         <head>
//           <title>Revenue Table</title>
//         </head>
//         <body>
//           <table>
//             <thead>
//               <tr>
//                 <th>Company</th>
//                 <th>Revenue</th>
//               </tr>
//             </thead>
//             <tbody>
//               ${tableData.map(row => `<tr><td>${row.company}</td><td>${row.value}</td></tr>`).join('')}
//             </tbody>
//           </table>
//         </body>
//       </html>
//     `;

//     res.send(html);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(`An error occurred: ${error.message}`);
//   }
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });







