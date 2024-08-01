<h2>Author</h2>
<p><strong>Dawit Getachew</strong></p>

<h1>Todo List Application</h1>

<h2>Description</h2>
<p>This is a simple React application that allows users to add, edit, and delete items from a list. The application uses functional components and React hooks for state management.</p>

<h2>Features</h2>
<ul>
    <li><strong>Add Items:</strong> Users can add new items to the list.</li>
    <li><strong>Edit Items:</strong> Users can edit existing items.</li>
    <li><strong>Delete Items:</strong> Users can delete items from the list.</li>
</ul>

<h2>Usage</h2>
<ol>
    <li><strong>Start the Development Server</strong>
        <pre><code>npm run dev</code></pre>
    </li>
    <li><strong>Open Your Browser</strong>
        <p>Go to <code>http://localhost:3000</code> to view the application.</p>
    </li>
</ol>

<h2>Code Overview</h2>
<p><strong>Add_todo Component:</strong> This component provides functionality for adding, editing, and deleting items.</p>
<ul>
    <li><strong>isEdit:</strong> State to determine if an item is being edited.</li>
    <li><strong>item:</strong> State to hold the current item input value.</li>
    <li><strong>index:</strong> State to track the index of the item being edited.</li>
    <li><strong>Fruits:</strong> State to manage the list of items.</li>
</ul>
<p><strong>Functions:</strong></p>
<ul>
    <li><strong>handleOnclickAdd:</strong> Adds a new item to the list.</li>
    <img src="https://github.com/user-attachments/assets/28f52c02-f9d8-408f-81a3-e87f71c26e92" alt="Screenshot 2024-07-31 191328" style="max-width: 100%; height: auto;" />
    <img src="https://github.com/user-attachments/assets/f769f6d8-67d0-4118-8715-9a86a1e7a54c" alt="Screenshot 2024-07-31 191439" style="max-width: 100%; height: auto;" />
    <li><strong>handleOnclickUpdate:</strong> Updates an existing item.</li>
    <img src="https://github.com/user-attachments/assets/c0c4cc4e-b770-4c45-9697-91a04c963bc1" alt="Screenshot 2024-07-31 191547" style="max-width: 100%; height: auto;" />
    <li><strong>handleDelete:</strong> Deletes an item from the list.</li>
    <img src="https://github.com/user-attachments/assets/4634eedc-d12d-499b-a46a-3899fb1e3d4e" alt="Screenshot 2024-07-31 191607" style="max-width: 100%; height: auto;" />
    <li><strong>handleEdit:</strong> Sets up the item for editing.</li>
    <img src="https://github.com/user-attachments/assets/79cda928-4ce3-4ae6-b679-a4dac7e933ac" alt="Screenshot 2024-07-31 191454" style="max-width: 100%; height: auto;" />
</ul>

<h2>Components</h2>
<ul>
    <li><strong>Input Component:</strong> A reusable input field for adding or editing items.</li>
    <li><strong>Button Component:</strong> A reusable button component used for add and update actions.</li>
</ul>

<h2>Styles</h2>
<p>The application uses SCSS for styling, defined in <code>styles/style.scss</code>.</p>
