let tableBody = document.querySelector(".container");
let makerselector = document.querySelector(".maker");
let modelselector = document.querySelector(".model");
let sortselector = document.querySelector(".sort");
let searchButton = document.querySelector(".btn-search");
let nameinput = document.querySelector(".name");

let makerselectoradd = document.querySelector(".add-maker");
let modelselectoradd = document.querySelector(".add-model");
let yearselectoradd = document.querySelector(".add-year");
let vinselectoradd = document.querySelector(".add-vin");
let usedselectoradd = document.querySelector(".add-used");
let btnpostselector = document.querySelector(".btnpost");

let delaselector = document.querySelector(".dela");
let panalaselector = document.querySelector(".panala");


update(masini);

delaselector.innerHTML = allyearsCar(masini);

delaselector.addEventListener("change", (e) => {
  panalaselector.innerHTML = createOptions(
    filterOverYear(masini, delaselector.value)
  );
  tableBody.innerHTML = createRows(
    filterOverYearCar(masini, delaselector.value)
  );
});

panalaselector.addEventListener("change", (e) => {
  tableBody.innerHTML = createRows(
    filterBetweenYears(masini, delaselector.value, panalaselector.value)
  );
});



searchButton.addEventListener("click", (e) => {
  let val = nameinput.value;
  tableBody.innerHTML = createRows(filterForMake(masini, val));
});

makerselector.addEventListener("change", (e) => {
  console.log(makerselector.value);
  tableBody.innerHTML = createRows(filterForMake(masini, makerselector.value));
  modelselector.innerHTML = createOptions(
    filterModelsOfTheCar(masini, makerselector.value)
  );
});

sortselector.addEventListener("change", (e) => {
  tableBody.innerHTML = createRows(sort(masini, sortselector.value));
});

btnpostselector.addEventListener("click", (e) => {
  if (btnpostselector.classList.contains("add")) {
    let masina = {
      id: specialCarId(masini),
      make: makerselectoradd.value,
      model: modelselectoradd.value,
      year: yearselectoradd.value,
      vin: vinselectoradd.value,
      used: usedselectoradd.value,
    };

    console.log(masina);
    masini.push(masina);
    update(masini);
  } else {
     let masina=findCarByVin(masini,vinselectoradd.value);
    masina.make=makerselectoradd.value;
    masina.model=modelselectoradd.value;
    masina.year=yearselectoradd.value;
    masina.vin=vinselectoradd.value;
    masina.used=usedselectoradd.value;
    update(masini);
    btnpostselector.classList.remove("upd");
    btnpostselector.classList.add("add");
    makerselectoradd.value="";
    modelselectoradd.value="";
    yearselectoradd.value="";
    vinselectoradd.value="";
    usedselectoradd.value="";
    btnpostselector.textContent = "Add";
  }
});

tableBody.addEventListener("click", (e) => {
  let obj = e.target;

  if (obj.classList.contains("delete-btn")) {
    let id = obj.classList[1].split("-")[1];
    obj.classList.add("anim");

    setTimeout(() => {
      masini = removeCarById(masini, +id);
      update(masini);
    }, 300);
  } else if (obj.classList.contains("masina")) {
    let id = obj.classList[1];
    let masina = findCarById(masini, +id);
    makerselectoradd.value = masina.make;
    modelselectoradd.value = masina.model;
    yearselectoradd.value = masina.year;
    vinselectoradd.value = masina.vin;
    usedselectoradd.value = masina.used;

    btnpostselector.textContent = "update";

    btnpostselector.classList.add("upd");

    btnpostselector.classList.remove("add");

    console.log(id);
    console.log(masina);
  }
});
