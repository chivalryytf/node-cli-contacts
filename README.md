
# Nodejs Simple Contacts-keeping CLI Project

- [Contents](#what's-nodejs?)
  - [Installing Node](#installing-node)
  - [CLI (npm)](#cli-yarn)

## What's Nodejs?
> Nodejs is an environment to run javascript outside browser.

*Features:*
- Open Source Runtime System
- Built on Chrome's V8 javascript engine
*Applications:*
- Tooling (build, automation, etc.)
- APIs (REST,Realtime/Streaming, etc.)
- CDNs
- Shareable libraries
- Desktop Applications
- IOT

### Installing Node

Install node with [nodenv](https://github.com/nodenv/nodenv). 
See all the versions installable:
```bash
nodenv install -l
```

Install the version of your choice (for eg. version 14.15.1)
```bash
nodenv install 14.15.1
```

Important: After installing node, please run `npm install i` or `npm install` to install the dependencies located in the `package.json` file.



### CLI (yarn)
* commands
  * new - `node src/index.js new`
  * list - `node src/index.js list`

it runs a CLI program that saves and retrieves contacts from and address book.
