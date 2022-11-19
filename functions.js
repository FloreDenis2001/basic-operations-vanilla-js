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
    for(let i=0;i<arr.length;i++){
        if(arr[i].vin===vin){
            arr.splice(arr[i],1);
        }
    }

    return arr;
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
    <td>${masina.make}</td>
    <td>${masina.model}</td>
    <td>${masina.year}</td>
    <td>${masina.vin}</td>
    <td>${masina.used}</td>
    <td><button  class="delete-btn vin-${masina.vin}">DELETE</button></td>
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