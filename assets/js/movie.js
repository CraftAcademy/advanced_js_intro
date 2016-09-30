function _EventEmitter() {
   this.events = [];
};
_EventEmitter.prototype.on = function(event, fn) {
  this.events[event] = this.events[event] || [];
  this.events[event].push(fn);
}

_EventEmitter.prototype.fire = function(event) {
  if (this.events[event]) {
    this.events[event].forEach(function(fn) {
      fn();
    })
  }
}

function Logger(){
  this.log = function(entry){
    console.log(entry);
  }
}

function Movie(title, year, duration){
  _EventEmitter.apply(this, arguments);
  var logger = new Logger();
  this.title = title;
  this.year = year;
  this.duration = duration;
  this.on('play', function(){
    logger.log("The 'play' event has been emitted")
  });
  this.on('pause', function() {
    logger.log("The 'pause' event has been emitted");
  });
  this.on('resume', function() {
    logger.log("The 'resume' event has been emitted");
  });
}

Movie.prototype = Object.create(_EventEmitter.prototype)
Movie.prototype.play = function(){
  this.fire('play');
 }
Movie.prototype.pause = function(){  }
Movie.prototype.resume = function(){  }
