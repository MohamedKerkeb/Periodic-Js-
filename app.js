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
  console.log(data);
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

    if (element.atomicNumber >= 57 && element.atomicNumber <= 71) {
      console.log(element.atomicMass);
      div.classList.add("quatre");
    }

    if (element.atomicNumber >= 89 && element.atomicNumber <= 102) {
      div.classList.add("cinq");
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

    div.addEventListener("click", () => {
      affiche.innerHTML = `
        <div class="mo">
          <div>
            <h1>${element.name}</h1>
            <div class="symbol">
              ${element.symbol}
            </div>
          </div>
          <div>
          <ul>
            <li>atomic mass: ${element.atomicMass}</li>
            <li>atomic number: ${element.atomicNumber}</li>
            <li>atomic radius: ${element.atomicRadius}</li>
            <li>boiling point: ${element.boilingPoint}</li>
            <li>bonding type: ${element.bondingType}</li>
            <li>density : ${element.density}</li>
            <li>electron affinity : ${element.electronAffinity}</li>
          </ul>
          </div>
          <div>

            <li>electron negativity : ${
              element.electronegativity ? element.electronegativity : ""
            }</li>

          <ul>
            <li>electronic configuration: ${
              element.electronicConfiguration
            }</li>
            <li>bgroup Block: ${element.groupBlock}</li>
            <li>ion radius: ${element.ionRadius ? element.ionRadius : ""}</li>
            <li>ionization energy : ${element.ionizationEnergy}</li>
            <li>melting point : ${element.meltingPoint}</li>
            <li>oxidation States : ${element.oxidationStates}</li>
            <li>standard State: ${element.standardState}</li>
            <li>vanDel waals radius: ${element.vanDelWaalsRadius}</li>
            <li>year discovered:  ${element.yearDiscovered}</li>
          </ul>
          </div>
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
