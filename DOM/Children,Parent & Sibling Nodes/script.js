console.log("Hello World !");

// Hello World !
// document.body.childNodes
// NodeList(7) [text, div.container, text, script, text, div#torrent-scanner-popup, div#cb-connect-sidebar-main]
// document.body.childNodes[0]
// #text
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// let cont = document.body.childNodes[1]
// undefined
// cont.firstChild
// #text
// cont.lastChild
// #text
// cont.firstElementChild
// <div class=​"box">​Box1​</div>​
// cont.lastElementChild
// <div class=​"box">​Box5​</div>​
// cont.lastElementChild.style.color = "red"
// 'red'
// cont.lastElementChild.style.backgroundColor = "green"
// 'green'

// document.body.firstElementChild
// document.body.firstElementChild.firstElementChild
// document.body.firstElementChild.children
