import "./styles.css";
import * as utils from "./utils.js";
import * as dataBusiness from "./data-business.js";

dataBusiness.getCharacters().then(data => {
    const characters = data;
    const nodes = [];

for(let character of characters) {
    const node = utils.createCharacterRow(character);
    node.onclick = () => utils.showCharacter(character);
    nodes.push(node);
    document.getElementById("root").appendChild(node);  
}

});



