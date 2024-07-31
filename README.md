couchdb-import
======
![logo](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/CouchDB.svg/290px-CouchDB.svg.png)

Import a couchdb-export dump into CouchDB

Usage
--------

To install:

```bash
$ npm install -g couchdb-import
```

To dump a CouchDB:

```bash
$ couchdb-import http://localhost:5984/mydb -f file.txt -u username -p password
```

```
Options:
  -h, --help         this help message        
  -i, --input file   file to import
  -u, --username     username for the CouchDB database (if it's protected)
  -p, --password     password for the CouchDB database (if it's protected)

Examples:
  couchdb-import http://foo:5984/mydb -i foo.txt  
  couchdb-import http://foo:5984/mydb -i foo.txt -u foo -p barbar import with authenfication
```


## License
GNU General Public License v3.0 -


