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
	});

});

$(document).ready(function() {
	$('.js-shopping-item-toggle').click(function(event) {
    	$('.js-shopping-item').closest('li').addClass('shopping-item__checked');
    	renderList();
	});

});