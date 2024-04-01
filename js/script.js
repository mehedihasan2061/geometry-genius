function triangleBtn() {
    const baseInput = getInputElement("triangleInputBase");
    const heightInput = getInputElement("triangleInputHeight");
    const area = (0.5 * baseInput * heightInput);
    
    // console.log( area)
     setInnerTextElement("inputResult", area);
    
    const listContainer = document.getElementById("list-container");
    const li = document.createElement("li");
    li.innerText = area;
    listContainer.appendChild(li);
}
//  Ractangle
function ractangleBtn() {
    const widthInput = getInputElement("ractangleInputWidth");
    const heightInput = getInputElement("ractangleInputHeight");
    const area = widthInput * heightInput;
    setInnerTextElement("ractangleInputResult", area);
    

     const listContainer = document.getElementById("list-container");
     const li = document.createElement("li");
     li.innerText = area;
     listContainer.appendChild(li);

}

//   Parallelogram;
function parallelogramBtn() {
    const parallelogramBase = getInputElement("parallelogramInputBase");
    const parallelogramHeight = getInputElement("parallelogramInputHeight");
    const area = parallelogramBase * parallelogramHeight;
    setInnerTextElement("parallelogramInputResult", area);


     const listContainer = document.getElementById("list-container");
     const li = document.createElement("li");
     li.innerText = area ,'triangle:';
     listContainer.appendChild(li);

}
 
// rhombus 
function rhombusBtn() {
    const rhombusD1 = getInputElement("rhombusInputD1");
    const rhombusD2 = getInputElement("rhombusInputD2");
    const area = 0.5 * rhombusD1 * rhombusD2;
    setInnerTextElement("rhombusInputResult", area);


     const listContainer = document.getElementById("list-container");
     const li = document.createElement("li");
     li.innerText = area;
     listContainer.appendChild(li);
}

// pentagon 
function pentagonBtn() {
    const pentagonP = getInputElement("pentagonInputP");
    const pentagonBase = getInputElement("pentagonInputBase");
    const area = 0.5 * pentagonP * pentagonBase;
    setInnerTextElement("pentagonInputResult", area)
    


     const listContainer = document.getElementById("list-container");
     const li = document.createElement("li");
     li.innerText = area;
     listContainer.appendChild(li);
  }

// Ellipse 
function ellipseBtn() {
      const ellipseA=getInputElement('ellipseInputA')
    const ellipseB = getInputElement('ellipseInputB')
    const area = 3.14 * ellipseA * ellipseB;
    setInnerTextElement('ellipseInputResult', area)




     const listContainer = document.getElementById("list-container");
     const li = document.createElement("li");
     li.innerText = area;
     listContainer.appendChild(li);
  }


function getInputElement(inputValue) {
    const geometryInputId = document.getElementById(inputValue)
    const geometryInputNumber = parseFloat(geometryInputId.value);
    geometryInputId.value = "";
    return geometryInputNumber;
}

function setInnerTextElement(innerTextResult,area) {
    const inputElement = document.getElementById(innerTextResult);
    inputElement.innerText = area;

}