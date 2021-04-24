$(".js-range-slider").ionRangeSlider({
  from:25,
  onStart: function (data) {
    var sumelement = document.querySelector('.sum');
    var sum = 0;
    var odometer = document.querySelector('.odometer');
    odometer.innerHTML = data.from;

    var tr = document.querySelectorAll('.tr');
    for (var j = 0; j < tr.length; j++) {
      var td_value = tr[j].querySelector('.td-value');
      var td_result = tr[j].querySelector('.td-result');
      td_result.innerHTML =  Number(td_value.dataset.tdvalue * `${data.from}`);

      sum += td_value.dataset.tdvalue * `${data.from}`;
    }

    sumelement.innerHTML = sum;

    setTimeout(function(){
      $('.odometer').html(`${data.from}`);
    }, 500)
  },

  onChange: function (data) {

    var odometer = document.querySelector('.odometer');
    odometer.innerHTML = data.from;


    var tr = document.querySelectorAll('.tr');
    var sumelement = document.querySelector('.sum');
    var sum = 0;
    for (var j = 0; j < tr.length; j++) {
      var td_value = tr[j].querySelector('.td-value');
      var td_result = tr[j].querySelector('.td-result');
      td_result.innerHTML =  Number(td_value.dataset.tdvalue * `${data.from}`);

      sum += td_value.dataset.tdvalue * `${data.from}`;
    }
    sumelement.innerHTML = sum;
},
});
