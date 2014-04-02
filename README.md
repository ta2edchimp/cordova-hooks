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
Prepare the following folder structure within the cordova project's base dir:

  config
    + android
    |   + res
    |       + drawable
    |       |   + icon.png
    |       |   + splash.9.png
    |       |
    |       + drawable-(l|m|h|xh)dpi
    |           + icon.png
    |           + splash.9.png
    |
    + ios
       + Resources
           + icons
           |   + icon(|-small|-(40|50|60|72|76))(@2x).png
           |
           + splash
               + Default(|-568h|-Landscape|-Portrait)(|@2x)~(iphone|ipad).png

Clear out the destination paths once, for iOS:
  ./platforms/ios/{projectName}/Recources/(icons|splash)
for Android
  ./platforms/android/res/drawable(|-(l|m|h|xh)dpi)

Make sure, you have a reference in the project's config.xml
  <icon src="res/icons/" />
for app icon, and for the splash screens:
  <preference name="SplashScreen" value="splash" />
  <preference name="SplashScreenDelay" value="10000" />
