console.log(document.title);
// console.log(this.document.getElementById("MyParag"));
// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByName("MyText"));

this.document.getElementById("MyParag").style.color = "yellow";
this.document.getElementById("MyParag").style.fontSize = "xx-large";

let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    let element = paragraphs[i];
    element.style.color = "green";
}

let myClassElement = this.document.getElementsByClassName("myClass");
for (let i = 0; i < myClassElement.length; i++) {
    let element = myClassElement[i];
    element.style.color = "red";
    element.style.fontSize = "large";
    // let childs = element.childNodes;
    //     for (let j = 0; j < element.childNodes.length; j++) {
    //         if (element.childNodes[j].tagName === "P")
    //             element.childNodes[j].style.color = "red";


    //     }
    let node = element.firstChild;
    while (node != null) {
        if (node.tagName !== undefined && node.tagName.toLowerCase() === "p")
            node.style.color = "red";
        node = node.nextSibling;

    }
}