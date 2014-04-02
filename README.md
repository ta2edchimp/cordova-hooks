cordova-hooks
=============

Reusable default hooks for [cordova cli](http://cordova.apache.org/docs/en/edge/guide_cli_index.md.html).

## handling

Download and dezip into the _"hooks"_ folder within the cordova project's base dir.

## contents

### before_prepare/versioning.js

Increments the last number of the package's version number from within the project's config.xml.

### after_prepare/resource_files.js

Copies project assets into the corresponding platforms' directories.
Prepare a folder structure corresponding to the target platforms' asset folders (see resource_files.js source code).

Clear out the destination paths once, for iOS:
*./platforms/ios/{projectName}/Recources/(icons|splash)*
for Android
*./platforms/android/res/drawable(|-(l|m|h|xh)dpi)*

Make sure, you have a reference in the project's config.xml
  <icon src="res/icons/" />
for app icon, and for the splash screens:
  <preference name="SplashScreen" value="splash" />
  <preference name="SplashScreenDelay" value="10000" />
