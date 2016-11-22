var state = {
    items: []
};

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


function addItem(item) {
	state.items.push({
		displayName: item,
		checkedOff: false
	});
};

function renderList() {
	var itemsHtml = [];
	for (var i = 0; i < state.items.length; i++) {
		itemsHtml.push(renderItem(state.items[i]));
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
    	addItem($('#shopping-list-entry').val());
    	renderList();
        // need to call this function every time an item is added to the DOM
        registerItemCheckHandler();
	});
});

// function to register a click handler function for all elements with a 'js-shopping-item-toggle'
// class. Everytime an element is added to the DOM, we must re-register.
// The problem initially was that when the code below ran, no elements were in the DOM. We need to re-run
// this code everytime we add an element to the DOM.
function registerItemCheckHandler() {
    $('.js-shopping-item-toggle').click(function(event) {
        // This will check all elements in the list as they all have the class.
    	//$('.js-shopping-item').closest('li').addClass('shopping-item__checked');
        // $(this) is the clicked one, so we get it's closest li element and add our class to it.
        $(this).closest('li').addClass('shopping-item__checked');
	});
}
