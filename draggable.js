$(document).ready(function() {
	$('#drag1').draggable({containment: 'document', revert: true, cursor: 'pointer', opacity: 0.60, grid: [50, 50]});
	// instead of '[0,0,200,200]', it can also be 'parent'
	// (needs div area), document or 'window'
	// 'pointer' makes hand appear when dragging item
	// 'opacity' makes opaque when dragging item
	// 'grid' only allows item to move in the grid formation.
	// 'revert' returns item back to original position.(revert: true, revertDuration: 5000)
	$('#drop').droppable({hoverClass: 'border', tolerance: "fit" });

	// 'alert('Dropped');'' created an alert after the item is dropped


});


$(document).ready(function() {
	$('#drag2').draggable({containment: [0,0,600,600], cursor: 'pointer', opacity: 0.60, grid: [50, 50]});
	$('#drop').droppable({ hoverClass:'border' });
});

$(document).ready(function() {
	$('#drag3').draggable({containment: [0,0,600,600], cursor: 'pointer', opacity: 0.60, grid: [50, 50]});
	$('#drop').droppable({ hoverClass:'border' });
});

$(document).ready(function() {
	$('#drag4').draggable({containment: [0,0,600,600], cursor: 'pointer', opacity: 0.60, grid: [50, 50]});
	$('#drop').droppable({ hoverClass:'border' });
});


