var currentDate = new Date();

function toDoItem(name, description, time, group, duedate) {
  this.itemName = name;
  this.itemDescription = description;
  this.itemTime = time;
  this.itemGroup = group;
  this.itemDueDate = duedate;
  this.dateCreated = [currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay()];
}

function groupList(name, description) {
  this.groupName = name;
  this.groupDescription = description;
}

$(document).ready(function() {
  $('form#addNewItem').submit(function(event) {
    event.preventDefault();

    var addName = $('input#addName').val();
    var addDescription = $('input#addDescription').val();
    var addEstTime = $('input#addEstTime').val();
    var addGroup = $('input#addGroup').val();



  })

}
