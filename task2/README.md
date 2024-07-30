```markdown
# Typescript To-Do List

This project is a simple to-do list application built with HTML, CSS, and TypeScript. It allows users to add, edit, and delete items from a list.

## Features

- **Add Items**: Enter an item into the input field and click "Add" to add it to the list.
- **Edit Items**: Click "Edit" next to an item to update it.
- **Delete Items**: Click "Delete" next to an item to remove it from the list.

## Project Structure

- `index.html`: The HTML file containing the structure of the application.
- `style.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file containing the logic for adding, editing, and deleting items.

## Usage

1. **Open the Project:**
   - Open the `index.html` file in a web browser to view the application.

2. **Add an Item:**
   - Enter text into the input field and click the "Add" button.

3. **Edit an Item:**
   - Click the "Edit" button next to the item you want to edit. The input field will be populated with the item’s current value, and you can update it by clicking "Update".

4. **Delete an Item:**
   - Click the "Delete" button next to the item you want to remove.

## Code Explanation

The application uses the following JavaScript code:

- **Variables:**
  - `item`: Reference to the input element where users enter text.
  - `add_btn`: Reference to the button used for adding or updating items.
  - `output`: Reference to the div where the list is displayed.
  - `list`: An array storing the list items.
  - `editindex`: Index of the item being edited.

- **Event Listeners:**
  - `add_btn` click event adds or updates items based on `editindex`.
  - `.edit_btn` click event sets the item to be edited and updates the button text.
  - `.delete_btn` click event removes items from the list.

- **Functions:**
  - `renderList()`: Updates the displayed list based on the current `list` array.