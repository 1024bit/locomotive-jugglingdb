locomotive-jugglingdb
=====================

Jugglingdb datastore adapter for Locomotive.

Installation
------
    $ npm install locomotive-mongoose

Usage
------
Configure Locomotive
In config/environments/all.js, add the following within the exported configuration function:

    this.datastore(require('locomotive-jugglingdb'));
