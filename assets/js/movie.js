function _EventEmitter() {};

_EventEmitter.prototype.play = function() {

}

_EventEmitter.prototype.pause = function () {

}

_EventEmitter.prototype.resume = function () {

}

function Movie(title, year, duration){
  _EventEmitter.apply(this, arguments);
  this.title = title;
  this.year = year;
  this.duration = duration;
}

Movie.prototype = new _EventEmitter()
