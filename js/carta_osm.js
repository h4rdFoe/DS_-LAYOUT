document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems,{
      constrainWidth:false
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, {
    format: 'dd.mm.yyyy'
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems,{
    outDuration: 0
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('#time');
  var instances = M.Tooltip.init(elems,{
    outDuration: 0,
    margin: -30
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('#time1');
  var instances = M.Tooltip.init(elems,{
    outDuration: 0,
    margin: -11
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems)
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('#error_save');
  var instances = M.Modal.init(elems, {
    startingTop: '35%',
    endingTop: '35%'
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tabs');
  var instance = M.Tabs.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

$(function() {
  $('#hide-right-info').click(function() {
    $('#right-info').toggleClass('scale-out absol');
    $('#main-info').toggleClass('push-card');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top',
    hoverEnabled: false
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.chips');
  var instances = M.Chips.init(elems, {
    placeholder: 'начните ввод'
  });
});