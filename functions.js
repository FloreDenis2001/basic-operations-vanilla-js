//functie ce afieaza doar marca


function show(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].make);

    }
}


function lastnewcar(arr){
    let carnewyear=arr[0];
    for(let i=0;i<arr.length;i++){
        if(carnewyear.year<arr[i].year){
            carnewyear=arr[i];
        }
    }
    console.log(carnewyear);
}

function addnewcar(arr,newcar){

    arr.push(newcar);

}

function filterForMake(arr,maker){
    let filterCar=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].make.toLowerCase().includes(maker.toLowerCase())){
          filterCar.push(arr[i]);
        }
    }
   return filterCar;
}

function filterOverYear(arr,year){
    let filterCar=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].year>=year && !filterCar.includes(arr[i].year)){
            filterCar.push(arr[i].year);
        }
    }
    return filterCar.sort();
}

function filterOverYearCar(arr,year){
    let filterCar=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].year>=year){
            filterCar.push(arr[i]);
        }
    }
    return filterCar;
}



function filterUsed(arr,option){
    let filterCar=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].used===option){
            filterCar.push(arr[i]);
        }
    }
    return filterCar;
}

function filterMakeOnce(arr){
    let filterMaker=[];
    for(let i=0;i<arr.length;i++){

            if(!filterMaker.includes(arr[i].make)){

                filterMaker.push(arr[i].make);
            }   
    }
    return filterMaker.sort();
}

function filterModelsOfTheCar(arr,maker){
    let filterModelCar=[];
    for(let i=0;i<arr.length;i++){
        if(maker===arr[i].make){
            if(!filterModelCar.includes(arr[i].model))
                  filterModelCar.push(arr[i].model);
        }
    }
    return filterModelCar.sort();
}


function removeCarByVin(arr,vin){
    let filterVin=[];
    for(let i=0;i<arr.length;i++){
        if(!(arr[i].vin===vin)){
           filterId.push(arr[i]);
        }
    }

    return filterVin;
}

function removeCarById(arr,id){
    let filterId=[];
    for(let i=0;i<arr.length;i++){
        if(!(arr[i].id===id)){
           filterId.push(arr[i]);
        }
    }

    return filterId;
}

function findCarByVin(arr,vin){
    for(let i=0;i<arr.length;i++){
        if(arr[i].vin===vin){
            return arr[i];
        }
    }
    return null;
}


function filterByModel(arr,model){
    let filterByModel =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].model===model){
           filterByModel.push(arr[i]);
        }
    }
    return filterByModel;
}


function filterByModelandMaker(arr,model,maker){
    let filterByModel =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].model===model && arr[i].make===maker){
           filterByModel.push(arr[i]);
        }
    }
    return filterByModel;
}

function sortYear(a,b){
     
    if(a.year > b.year){
    return 1;
 } else if (a.year < b.year){
    return -1;
 } else {
    return 0;
 }
}

function updateUsed(arr,vin){
    let car=findCarByVin(arr,vin);
    if(car.used===false){
        car.used=true;
    }else {
        car.used=false;
    }
}


function filterThisYear(arr,year){
    let filterThisYear=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].year===year){
            filterThisYear.push(arr[i]);
        }
    }
    return filterThisYear;
}

function filterBetweenYears(arr,overyear,underyear){
    let filterThisYear=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].year>=overyear && arr[i].year<=underyear){
            filterThisYear.push(arr[i]);
        }
    }
    return filterThisYear;
}

function createRow(masina){
   

    return `
   
    <tr>
    <td class="masina ${masina.id}">${masina.id}</td>
    <td>${masina.make}</td>
    <td>${masina.model}</td>
    <td>${masina.year}</td>
    <td>${masina.vin}</td>
    <td>${masina.used}</td>
    <td><button  class="delete-btn id-${masina.id}">DELETE</button></td>
    
    </tr>
    
    `
}

function createRows(arr){
    let text="";
    for(let i=0;i<arr.length;i++){
        text+=createRow(arr[i]);
    }

    return text;
}

function createOption(option){
    return `
       <option value="${option}">${option}</option>
    `
}

function createOptions(options){
    let text='<option value="" disable selected>Select a option</option>';
    for(let i=0;i<options.length;i++){
        text+=createOption(options[i]);
        // console.log(options[i]);
    }
    return text;
}

function sort(arr ,field){
    let aux ;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i][`${field}`]>arr[j][`${field}`]){
                aux = arr[i];
                arr[i]=arr[j];
                arr[j]=aux;
            }
        }
    }
    return arr;
}

function minyearCars(arr){
   let minCar=arr[0].year;
   for(let i =1;i<arr.length;i++){
    if(minCar>arr[i].year){
        minCar=arr[i].year;
    }
   }
   return minCar;
}

function maxyearCars(arr){
    let maxCar=arr[0].year;
    for(let i =1;i<arr.length;i++){

     if(maxCar<arr[i].year){
         maxCar=arr[i].year;
     }

    }
    return maxCar;
}

function allyearsCar(arr){
    let min=minyearCars(arr);
    let max=maxyearCars(arr);
    let number=min;
    let allyears='<option value="" disable selected>Select a year</option>';
    while(number<=max){
         allyears += createOption(number);
         number++;
    }

    return allyears;
}

function findCarById(arr,id){
    for(let i=0;i<arr.length;i++){
        if(arr[i].id===id){
            return arr[i];
        }
    }
    return null;
}


function lastCarId(arr,id){
    let lastId;
    for(let i=0;i<arr.length;i++){
        lastId=arr[i].id;
    }
    return lastId;
}

function specialCarId(masini){

    let randomNumber=Math.round(Math.random()*1000000+1);

    while(findCarById(masini,randomNumber)!==null){
         randomNumber=Math.round(Math.random()*1000000+1);
    }

  return randomNumber;
}

function update(masini) {
    tableBody.innerHTML = createRows(masini);
    makerselector.innerHTML = createOptions(filterMakeOnce(masini));
}