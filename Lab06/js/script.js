var i = 1;

function AddNew() {
    let divPOS = document.getElementById("pos");
    
    let pNode = document.createElement("p");
    let textNode = document.createTextNode((i++) + ". Item");
    pNode.appendChild(textNode);

    divPOS.appendChild(pNode);
}

function DeleteOne() {
    let divPOS = document.getElementById("pos");
    if(divPOS.childElementCount > 0)
    {
        let lastChild = divPOS.lastChild;
        
        divPOS.removeChild(lastChild);
        i--;
    }
    else
    {
        console.log("=> Cannot delete");
    }
}

function DeleteAll(){
    let divPOS = document.getElementById("pos");
    // while(0 < divPOS.childElementCount) {
    //     DeleteOne();
    // }

    divPOS.innerHTML = ""
    i = 1;
}