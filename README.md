## Movie Excercise
Create a Movie object:

Movie
- title
- year
- duration
+ play()
+ pause()
+ resume()
Instantiate some of your favorite movies and play with them in the console.

Create an `EventEmitter` class with the following methods: `on`, `emit`, `off`. The `on` method will allow to pass a callback or listener that will be executed each time a given event is triggered. The emit method will allow a class to trigger events to be consumed by other functions/objects. The off method will delete the listener.

Make `Movie` a subclass of `EventEmitter`. Publish "play" event on `Movie.play()`, "pause" event on `Movie.pause()`, and "resume" event on `Movie.resume()``

Create a `Logger` class with a `log(info)` method that will output info to the console. Make log listen to a Movie's 'play' event. You should be able to do something like this in the console:

```javascript
let terminator = new Movie('Terminator', 1984, 90);
let logger = new Logger();
terminator.on('play', logger.log);
// ...
terminator.play(); // output: The 'play' event has been emitted
```
Create an object called `Social` with methods `share(friendName)` and `like(friendName)` that will generate the following output `"{friendName} likes/share {Movie Name}"`. Hint: declare `Social` as an object literal, use `Object.assign` to mix `Social` methods into a `Movie` instance. Use Template Literals to generate the like/share method output. You should be able to do something like this in the console:

```javascript
ironman.share('Mike Blossom'); // output: Share Iron Man with Mike Blossom
```
Create an `Actor` class and create some actors from one of your favorite movies.

Add a method to `Movie` that will allow to add one or more actors at the same time.

```
let terminator = new Movie('Terminator I', 1985, 60);
let arnold = new Actor('Arnold Schwarzenegger', 50);
let otherCast = [
 new Actor('Paul Winfield', 50),
 new Actor('Michael Biehn', 50),
 new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(otherCast); //Movie must contain an array of 4 actors
```

####Dependencies
* [Jasmine](https://github.com/jasmine/jasmine)
* [Karma](https://github.com/karma-runner/karma)
  - [Karma Jasmine](https://github.com/karma-runner/karma-jasmine)
  - [Karma Jasmine JQuery](https://github.com/bessdsv/karma-jasmine-jquery)
  - [Karma Chrome Launcher](https://github.com/karma-runner/karma-chrome-launcher)
  - [Karma Coverage](https://github.com/karma-runner/karma-coverage)
  - [Karma Coveralls](https://github.com/caitp/karma-coveralls)
  - [Karma Spec Reporter](https://github.com/mlex/karma-spec-reporter)

####Services
* [Travis](https://travis-ci.org/) for Continuous Integration
* [Coveralls](https://coveralls.io/) for Test Coverage

####Set up
Fork or download this repo (using `git clone`) and modify the files to suite your testing needs.

You can also use SVN to download this repo to your new project folder. On OSX you can install SVN using Homebrew.
```
$ brew install subversion
```

Create a new folder and `cd` into it. Run the `svn export` command to download files.

```
$ svn export https://github.com/CraftAcademy/karma-jquery-jasmine_boilerplate/trunk . --force
```
Once downloaded, you need to install all dependencies. Run
```
$ npm install
```

####Usage
You can use this setup to test your units and your jQuery events. Place your JavaScript code in `assets/js/` folder and partials in `spec/fixtures/` folder.

Your specs need to be end with `_spec.js` (e.g. `fizz_buzz_spec.js`)

Run tests with
```
$ npm test

# or

$ karma start karma.conf.js
```

####Adding tests
I have included some basic specs and `js` code for you to examine. Basically you need to build up your test environment and tear it down afterwards.
You can have different setups by nesting your `describe` blocks/functions.

```javascript
# spec/my_spec.js
describe("Given my code", function () {

	beforeEach(function () {
		/* ... Set up your test ... */
	});

	afterEach(function () {
		/* ... Tear it down ... */
	});

	describe("When ...", function () {

		beforeEach(function () {
		  /* ... Context specific setup ... */
		});

		it("Then...", function () {
			expect(true).toEqual(true);
		});
	});
});
```
