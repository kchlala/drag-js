var dragItem=document.querySelectorAll(".drag-item")
var dropArea = document.querySelector("#dropArea")
for (let i = 0; i < dragItem.length; i++) {
  dragItem[i].addEventListener("dragstart", function(e){
    e.dataTransfer.setData("dragId", this.id)
    this.style.background="green"
  })
}

dropArea.addEventListener("dragover", function(e) {
e.preventDefault()
this.style.background="aqua"
})

dropArea.addEventListener("dragleave", function(a) {
  a.preventDefault()
  this.style.background = "transparent"
})

dropArea.addEventListener("drop",function(j) {
  j.preventDefault()
  var myId= j.dataTransfer.getData("dragId")
  var dragItem = document.getElementById(myId)
  dropArea.appendChild(dragItem)
})





var dragItem=document.querySelectorAll(".drag-item")
var dropArea = document.querySelector("#dropArea")
for (let i = 0; i < dragItem.length; i++) {
  dragItem[i].addEventListener("dragstart", function(e){
    e.dataTransfer.setData("dragId", this.id)
    this.style.background="green"
  })
}

dropArea.addEventListener("dragover", function(e) {
e.preventDefault()
this.style.background="aqua"

})

dropArea.addEventListener("dragleave", function(a) {
  a.preventDefault()
  this.style.background = "transparent"
})

dropArea.addEventListener("drop",function(j) {
  j.preventDefault()
  var myId= j.dataTransfer.getData("dragId")
  var dragItem = document.getElementById(myId)
  dropArea.appendChild(dragItem)
})










