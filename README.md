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

## credits

- *versioning.js* written by [Andreas Windt](http://andreaswindt.de) aka [ta2edchimp](http://github.com/ta2edchimp).
- *resource_files.js* written by Dan Moore, presented on [devgirl's blog](http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/)
