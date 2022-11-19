let tableBody=document.querySelector(".container");
let makerselector=document.querySelector(".maker");
let modelselector=document.querySelector(".model");
let sortselector=document.querySelector(".sort");
let searchButton=document.querySelector(".btn-search");
let nameinput=document.querySelector(".name");

let makerselectoradd=document.querySelector(".add-maker");
let modelselectoradd=document.querySelector(".add-model");
let yearselectoradd=document.querySelector(".add-year");
let vinselectoradd=document.querySelector(".add-vin");
let usedselectoradd=document.querySelector(".add-used");
let btnpostselector=document.querySelector(".btnpost");

update(masini);


function update(masini){

tableBody.innerHTML=createRows(masini);
makerselector.innerHTML=createOptions(filterMakeOnce(masini));

}

searchButton.addEventListener("click",(e)=>{
    let val=nameinput.value;
    tableBody.innerHTML=createRows(filterForMake(masini,val));
})


makerselector.addEventListener("change",e=>{

     console.log(makerselector.value);
     tableBody.innerHTML=createRows(filterForMake(masini,makerselector.value));
     modelselector.innerHTML=createOptions(filterModelsOfTheCar(masini,makerselector.value));

  
})

sortselector.addEventListener("change",(e)=>{
     
      tableBody.innerHTML=createRows(sort(masini,sortselector.value));

})

btnpostselector.addEventListener("click",e=>{
    let masina=
        {
          make: makerselectoradd.value,
          model: modelselectoradd.value,
          year: yearselectoradd.value,
          vin: vinselectoradd.value,
          used: usedselectoradd.value
        };

        console.log(masina);
        masini.push(masina);
        update(masini);


})


tableBody.addEventListener("click",(e)=>{

  let obj=e.target;


  if(obj.classList.contains("delete-btn")){

    
    obj.classList.add("anim");


   
    setTimeout(()=>{
      let vin=obj.classList[1].split("-")[1];
      update(removeCarByVin(masini,vin));
    },900)
    // console.log(vin);
  }
 


})