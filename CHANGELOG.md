## 0.1.8 (28 November 2012)

### Bug Fixes
* Paths with spaces are now supported

## 0.1.7 (28 November 2012)
This is a minor release with slightly tweaked output to aid in debugging, and a new document for tracking the status of unit tests

## 0.1.6 (26 November 2012)

### New Features
* Human readable output
	* You can still get JSON output with the new -j/--json flag
* Silent output with the -s flag. Only the results are displayed
* -o flag is now required. In practice this flag is necessary for all but the most basic of apps, so I feel that making it required will help users avoid a common pitfall

### Bug Fixes
* Node 0.6 support (not fully tested)
* Added error checking around the 'titanium project' command and making failures more obvious that a 3.0 or newer SDK is not installed