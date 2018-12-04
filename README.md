
# Electron React TypeScript Starter + Redux

A Simple Boiler plate to get started on making Electron Apps using React + TypeScript. Redux is also pre-configured on this project.

## Folder Structure

 - **app:** Here lies all you application logic. Here lies index.tsx. Let me explain about it.
	 - **index.tsx:** Here lies the root of the react app. From here the react start rendering the application.
 - **config:** Here lies all the web-pack configurations. There are separate for electron and react bundling.
 - **resource:** All pictures must be placed in this folder.
 - **server.js:** It is only used when we are executing in dev mode. Its purpose is hot reloading of modules.
 - **main.js:** Here lies the initialization of electron app. You will not have to change it unless you are changing some thing related specific to electron.
  

## Prerequisite

  

```

Node.js v7.0+

```

  

## How To Install

  

If you are using Windows or MAC 0S

  

```

npm install -g electron

npm install

```

  

If you are on linux

  

```

sudo npm install -g electron --unsafe-perm=true

sudo npm install --unsafe-perm=true

```

  

## Run in Dev environment

  

```

npm run dev

```

  

## Package the app in all 3 Operating System

  

```

npm run package-all

```

The files will appear in the release folder.

  

**Note: You cannot make a release for MacOS on Windows Machine.**