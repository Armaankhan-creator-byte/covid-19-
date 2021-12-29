// var url="https://api.covid19india.org/data.json";
// var url="https://api.covid19india.org/v4/min/data.min.json, mode: {'no-cors'}"
let tc=document.getElementById('tc');
let nc=document.getElementById('nc');
let td=document.getElementById('td');
var country=[];
var totalcase=[];
fetch("https://api.covid19api.com/summary").then((response)=>{
    
    return response.json();
  }).then((data)=>{
    //   console.log(data.JSON.stringfy);
    //  console.log(data.HR.total);
    console.log(data);
    tc.innerHTML=data.Global.TotalConfirmed;
    nc.innerHTML=data.Global.NewConfirmed;
    td.innerHTML=data.Global.TotalDeaths;
    for(let index=0;index<data.Countries.length/2;index++){
        country.push(data.Countries[index].Country); 
        totalcase.push(data.Countries[index].TotalConfirmed)
    }
    console.log(country);
    console.log(totalcase);

    // console.log(data.Global.TotalConfirmed);
    // console.log(data.Countries[0].TotalConfirmed)
    

    
  
  })
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data:{
        labels:country,
        datasets:[{
            label:"totalcase",
            data:totalcase,
            backgroundColor:"#f1c40f",
        }]
    },
   
})