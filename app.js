//after spending hours and hours just trying to understand the Thinkful solution to this, I'm moving on. James Duncan says
//what I've got is good enough.

//create an empty array for all added items
var state = {
    items: []
};

//add all html to the items
var itemTemplate = (
	'<li>' +
    '<span class="shopping-item js-shopping-item"></span>' +
    '<div class="shopping-item-controls">' +
      '<button class="js-shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="js-shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>'
);

//function for each item added
function addItem(item) {
	state.items.push({
		displayName: item,
	});
};

function renderList() {
	var itemsHtml = [];
	for (var i = 0; i < state.items.length; i++) {
		itemsHtml.push(renderItem(state.items[i]));
		console.log(itemsHtml);
	}
	$('.shopping-list').html(itemsHtml);
}

function renderItem(stateItem) {
	var item = $(itemTemplate);
	var displayName = stateItem.displayName;
	item.find('.shopping-item').text(displayName);
	return item;
}

$(function() {
	$('#js-shopping-list-form').submit(function(event) {
    	event.preventDefault();
    	registerItemCheckHandler();
    	addItem($('#shopping-list-entry').val());
    	renderList();
    	
	});

});

function registerItemCheckHandler() {
	$('ul').on('click', '.js-shopping-item-toggle', function(event) {
		console.log('click');
    	$(this).closest('li').addClass('shopping-item__checked');
	});

}