# macOS Notes

A simplified copy of the Notes program from
Apple macOS operating system using Reactjs.
The program was created using create-react-app.

---

## Built With

**Client:** React, TS, Dexie, styled-components.

## Features

- When you select a note on the left, the right is displayed
  rendered text from the browser's local database
  (indexeddb).
- There is an add ("+") button, as well as two buttons - "Delete" and "Edit", which, if there is no selection, are inactive.
- When you click on the "+" button, a new empty note appears.
- When you click on the "Delete" button to happen
  confirmation of deletion using a modal window.
- During text editing, content is saved automatically.
- Notes search is carried out by partial occurrence of characters.

## Demo

Open the [demo](https://mac-os-notes.vercel.app/) to view it in a browser.

## How To Use

### Installation

1. First clone the repo

   ```sh
   git clone https://github.com/sapar6ek0v/macOS-notes.git
   ```

2. Go to the project directory

   ```sh
   cd macOS-notes
   ```

3. Install all packages

   ```sh
   npm install
   ```

### Running the app

##### In development mode

- After installing all packages, run locally

  ```sh
  # development
  npm start
  ```

##### In production mode

- After installing all packages, run locally

  ```sh
  # production build
  npm run build
  ```
