<h1>Job Posting Application</h1>

<h2>Author</h2>
<p><strong>Dawit Getachew</strong></p>

<h2>Description</h2>
<p>This is a React application built with Next.js that displays a list of job postings. Each job posting can be clicked to view more detailed information.</p>

<h2>Features</h2>
<ul>
  <li><strong>Job Listing:</strong> Displays a list of job postings.</li>
  <li><strong>Detailed Job Information:</strong> Clicking on a job posting shows detailed information about the job, including description, responsibilities, ideal candidate traits, location, and important dates.</li>
  <li><strong>Styling:</strong> Uses Tailwind CSS for styling the components.</li>
</ul>

<h2>Code Overview</h2>

<h3>MM Component</h3>
<p>This component is responsible for displaying the list of job postings.</p>
<ul>
  <li><strong>Imports:</strong></li>
  <ul>
    <li><code>React</code> for building the UI.</li>
    <li><code>Link</code> from Next.js for client-side navigation.</li>
    <li><code>Header</code> component for the page header.</li>
    <li><code>useGetAllOpportunityQuery</code> from the data service to fetch job postings.</li>
    <li><code>Cards</code> component to display job information in card format.</li>
  </ul>
  <li><strong>Structure:</strong></li>
  <ul>
    <li>Fetches the job postings data using <code>useGetAllOpportunityQuery</code>.</li>
    <li>Handles loading and error states.</li>
    <li>Maps through the job postings to display each job in a card format.</li>
    <li>Each job card is a link that navigates to the job's detailed description.</li>
  </ul>
</ul>

<h3>Fetchpage Component</h3>
<p>This component displays detailed information about a specific job posting.</p>
<ul>
  <li><strong>Imports:</strong></li>
  <ul>
    <li><code>React</code> for building the UI.</li>
    <li><code>Image</code> from Next.js for displaying images.</li>
    <li><code>useGetOpportunityByIdQuery</code> from the data service to fetch job details.</li>
  </ul>
  <li><strong>Structure:</strong></li>
  <ul>
    <li>Fetches the job details based on the job ID from the URL parameters using <code>useGetOpportunityByIdQuery</code>.</li>
    <li>Handles loading state.</li>
    <li>Displays detailed information about the job, including description, responsibilities, ideal candidate traits, location, important dates, categories, and required skills.</li>
  </ul>
</ul>

<h2>Components</h2>
<ul>
  <li><strong>Header Component:</strong> The <code>Header</code> component is responsible for rendering the header of the page.</li>
  <li><strong>Cards Component:</strong> The <code>Cards</code> component is used to display the job information in a card format. It receives job data as props.</li>
</ul>

<h2>API</h2>
<p>The application uses Redux Toolkit Query to interact with the backend API.</p>
<ul>
  <li><code>getAllOpportunity</code>: Fetches all job postings.</li>
  <li><code>getOpportunityById</code>: Fetches a specific job posting by ID.</li>
</ul>
<h1>Video</h1>
https://github.com/user-attachments/assets/7e76d641-c3fe-461e-94fb-f93f9bf1de5b
