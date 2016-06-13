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

function allToDoItems(itemobject) {
  this.itemName = itemobject;
}

function allGroupLists(groupobject) {
  this.groupName = nameobject;
}

$(document).ready(function() {
  $('form#addNewItem').submit(function(event) {
    event.preventDefault();

    var addName = $('input#addName').val();
    var addDescription = $('input#addDescription').val();
    var addEstTime = $('input#addEstTime').val();
    var addGroup = $('input#addGroup').val();
    console.log(addName);

  });

  $('form#addNewGroup').submit(function(event) {
    event.preventDefault();

    var addGroupName = $('input#addGroupName').val();
    var addGroupDescription = $('input#Group[Description').val();
    console.log(addGroupName);
  });

});
