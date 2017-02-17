$(document).ready(function () {

$('#step12').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    data: {},
    dataType: 'text'
  }).done(function (responseData) {
  })
})
$('#step3456').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/pong',
    method: 'GET',
}).done(function (responseData) {
  $('#step3456').append(responseData)
  console.log('Wow what a ride! I came all the way from the server!')
}).fail(function () {
  $('#step3456').append('I will try hard next time buddy!!')
}).always(function () {
  console.log('Your request is finished buddy!!')
})
})
$('#step7').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET'
  }).done(function (responseData){
    $('#step7').append(responseData)
  })
})
$('#step8').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/time',
    method: 'GET',
    data: {timezone: 'Pacific/Honolulu'}
  }).done(function (responseData) {
  $('#step8').append(responseData)
})

})
$('#step9').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/a_car',
    method: 'GET'
  }).done(function (responseData) {
    $('#emptyunorderedlist').append(responseData)
  })

})



})
