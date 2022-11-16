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
        if(arr[i].make===maker){
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




function removeCarByVin(arr,vin){
    for(let i=0;i<arr.length;i++){
        if(arr[i].vin===vin){
            arr.splice(arr[i],1);
        }
    }
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

