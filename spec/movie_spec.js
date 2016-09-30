describe("Movie", function() {
  var subject;

  beforeEach(function() {
    subject = new Movie('Terminator', '1984', 120);
  });

  it("is constucted by EventEmitter", function() {
    expect(subject.constructor.name).toEqual('_EventEmitter');
  });

  it("has a on listener", function() {
    expect(subject.on).toBe("function")
  });

  it("has a title", function() {
    expect(subject.title).toEqual('Terminator');
  });

  it("has a year", function() {
    expect(subject.year).toEqual('1984');
  });

  it("has a duration", function() {
    expect(subject.duration).toEqual(120);
  });



  it("responds to #play", function() {
    expect(typeof subject.play).toBe("function")
  })

  it("responds to #pause", function() {
    expect(typeof subject.pause).toBe("function")
  })

  it("responds to #resume", function() {
    expect(typeof subject.resume).toBe("function")
  })

});
