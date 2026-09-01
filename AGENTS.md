# AGENTS.md — couchdb-import

## What this is
Node.js npm CLI module that imports a couchdb-export dump back into a CouchDB database.

## Stack
- Node.js
- CouchDB / PouchDB
- yargs (CLI)

## Build
```bash
npm install
```

## Run
```bash
couchdb-import http://localhost:5984/mydb -f file.txt -u username -p password
```

## Structure
- `index.js` — CLI entry / import logic (bin)
- `package.json` — npm metadata/deps

## Conventions
- No comments in code unless asked.
- No credentials in committed files.
- Verify: `node -c index.js`