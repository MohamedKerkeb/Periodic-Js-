const url = "https://neelpatel05.pythonanywhere.com";

const myInit = {
  method: "GET",
  mode: "cors",
  cache: "default"
};

const table = document.querySelector(".table");
const affiche = document.querySelector(".affiche");
const plus = document.createElement("div");

const roule = data => {
  for (let element of data) {
    const div = document.createElement("div");
    div.classList.add("element");

    if (element.atomicNumber === 2) {
      div.classList.add("deux");
    }

    if (element.atomicNumber === 5 || element.atomicNumber === 13) {
      div.classList.add("trois");
    }

    // if (element.atomicNumber >= 58 && element.atomicNumber <= 71) {
    //   const lant = document.createElement("div");
    //   const elem = document.querySelector("div");
    //   lant.classList.add("quatre");
    //   lant.append();
    //   table.append(lant);
    //   div.classList.add("quatre");
    // }

    if (element.atomicNumber == 58) {
      console.log(element.atomicMass);
    }

    // if (element.atomicNumber >= 90 && element.atomicNumber <= 103) {
    //   div.classList.add("cinq");
    // }

    if (element.groupBlock === "nonmetal") {
      div.classList.add("gas");
    } else if (element.groupBlock === "noble gas") {
      div.classList.add("nobleGas");
    } else if (element.groupBlock === "alkali metal") {
      div.classList.add("alkali");
    } else if (element.groupBlock === "alkaline earth metal") {
      div.classList.add("alkaline");
    } else if (element.groupBlock === "metalloid") {
      div.classList.add("metalloid");
    } else if (element.groupBlock === "halogen") {
      div.classList.add("halogen");
    } else if (element.groupBlock === "metal") {
      div.classList.add("metal");
    } else if (element.groupBlock === "transition metal") {
      div.classList.add("transition");
    } else if (element.groupBlock === "lanthanoid") {
      div.classList.add("lanthanoid");
    } else if (element.groupBlock === "actinoid") {
      div.classList.add("actinoid");
    } else if (element.groupBlock === "post-transition metal") {
      div.classList.add("postTransition");
    }

    // div.addEventListener("mouseenter", evt => {
    //   const name = document.createElement("span");
    //   name.append(element.name);
    //   const numero = document.createElement("span");
    //   numero.append(element.atomicNumber);
    //   //numero.classList.add("border");
    //   const symbol = document.createElement("h1");
    //   symbol.append(element.symbol);
    //   //symbol.classList.add("border");
    //   const massAtomic = document.createElement("span");
    //   massAtomic.append(element.atomicMass);
    //   massAtomic.classList.add("small");
    //   // plus.append(name, numero, symbol, massAtomic);
    //   plus.append(name);
    //   affiche.innerHTML = name;
    // });

    div.addEventListener("mouseenter", () => {
      affiche.innerHTML = `
        <div class="mo">
          <h1>${element.name}</h1>

        </div>
      `;
    });

    // div.addEventListener("mouseleave", evt => {
    //   affiche.remove(plus);
    // });

    const name = document.createElement("span");
    name.append(element.name);
    //name.classList.add("border");
    const numero = document.createElement("span");
    numero.append(element.atomicNumber);
    //numero.classList.add("border");
    const symbol = document.createElement("h1");
    symbol.append(element.symbol);
    //symbol.classList.add("border");
    const massAtomic = document.createElement("span");
    massAtomic.append(element.atomicMass);
    massAtomic.classList.add("small");
    div.append(name, numero, symbol, massAtomic);
    table.append(div);
  }
};

const apiCall = async () => {
  let response = await fetch(url, myInit);
  let data = await response.json();
  // console.log(data);
  roule(data);
  //return data;
};

apiCall();

// console.log(table);
