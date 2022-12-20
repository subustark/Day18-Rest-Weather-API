var container=document.createElement("div");
container.setAttribute("class","container");

var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","m-3");
container.append(row);

restdata();
async function restdata(){
    let res=await fetch("https://restcountries.com/v2/all");
    let res1= await res.json();
    try{
        for(var i=0;i<res1.length;i++)
        {
        varname=res1[i].name;
        var latlong=res1[i].latlng;
        foo(res1);
        }
        if(latlong.length===undefined)
        {
            throw new Error("invalid coordinates for this country");
        }
        
    }
     catch (error) {
        console.log("invalid"+error.message);
    }
}
function foo(data1){
     
    for(var i=0;i<data1.length;i++){
        let name1=data1[i].name;
        let lat=data1[i].latlng[0];
        let lng=data1[i].latlng[1];
   row.innerHTML+=`<div class="col-lg-4">
         <div class="card" style="width:21rem ";>
         <div class="card-header">${data1[i].name}</div>
         <img src="${data1[i].flag}" class="card-img-top" alt="..." height="180px">
         <div class="card-body">
         <h6 class="card-title">Capital: ${data1[i].capital}</h6>
         <h6 class="card-title">Region: ${data1[i].region}</h6>
         <h6 class="card-title">Country code: ${data1[i].alpha3Code}</h6>
         <h5 class="card-title">Latitude: ${data1[i].latlng[0]}</h5>
         <h5 class="card-title">Longitude: ${data1[i].latlng[1]}</h5>
         <a href="#" class="btn btn-primary" onclick="opendata(${lat},${lng})">Click for weather</a>
         </div>
         </div>
         </div>
         </div>`
     document.body.append(container); 
    }
}

async function opendata(lat,lng){
    try {
    let result2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1b55f75dc8ebc4a44f808493820896b4`);
    let result3= await result2.json();
    alert(`Temp:${result3.main.temp} `)
    }
    catch (error) {
        console.log(error);
    }
    }