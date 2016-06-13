var currentDate = new Date();
var itemToAdd;
var addDueDate;
var filterStatus;
var groupStatus;

function toDoItem(name, description, time, group, duedate) {
  this.itemName = name;
  this.itemDescription = description;
  this.itemEstTime = time;
  this.itemGroup = group;
  this.itemDueDate = duedate;
  this.completeionStatus = false;
  this.dateCreated = [currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()];
}

function groupList(name, description) {
  this.groupName = name;
  this.groupDescription = description;
}

var allToDoItemsKeys = [];
var allToDoItems = {};
var allGroupListsKeys = [];
var allGroupLists = {};

function resetFields() {
  $('#toDoList').empty();
}

function moreInfo() {
  $('.moreinfo').click(function() {
    var nameForInfo = "";
    nameForInfo = $(this).prev().text();
    $('#viewName').text(nameForInfo);
    $('#viewDescription').text(allToDoItems[nameForInfo].itemDescription);
    $('#viewDueDate').text(allToDoItems[nameForInfo].itemDueDate);
    $('#viewTime').text(allToDoItems[nameForInfo].itemEstTime);
  });
}

function updateList() {
  allToDoItemsKeys.forEach(function(key) {
    $('#toDoList').append('<li><span class="name">' + allToDoItems[key].itemName + '</span><span class="moreinfo">more info</span><label for="check' + key + '">Complete</label> <input type="checkbox" id="button' + key + '" name="complete" value="" /></li>');
  });
  moreInfo();
}

$(document).ready(function() {

  $('form#addNewItem').submit(function(event) {
    event.preventDefault();
    resetFields();
    var addName = $('input#addName').val();
    var addDescription = $('input#addDescription').val();
    var addEstTime = $('input#addEstTime').val();
    var addGroup = $('select#addGroup option:selected').val();
    addDueDate = $('input#addDueDate').val();
    itemToAdd = new toDoItem(addName, addDescription, addEstTime, addGroup, addDueDate);
    allToDoItemsKeys.push(addName);
    allToDoItems[addName] = itemToAdd;
    updateList();
  });

  $('form#addNewGroup').submit(function(event) {
    event.preventDefault();

    var addGroupName = $('input#addGroupName').val();
    var addGroupDescription = $('input#Group[Description').val();
    console.log(addGroupName);
  });


});
