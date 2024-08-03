<h1>Job Posting Application</h1>
  <h2>Author</h2>
  <p><strong>Dawit Getachew</strong></p>

  <h2>Description</h2>
  <p>This is a React application built with Next.js that displays a list of job postings. Each job posting can be clicked to view more detailed information.</p>

  <h2>Features</h2>
  <p>Figma design: </p>![here](https://www.figma.com/design/igmFo7dypzpuM02KJi8cay/Task-1?node-id=0-1&t=fii14jtMKrh36z3W-0)
  <ul>
    <li><strong>Job Listing:</strong> Displays a list of job postings.</li>
    <li><strong>Detailed Job Information:</strong> Clicking on a job posting shows detailed information about the job, including description, responsibilities, ideal candidate traits, location, and important dates.</li>
    <li><strong>Styling:</strong> Uses Tailwind CSS for styling the components.</li>
  </ul>

  <h2>Code Overview</h2>
  <h3>Page Component</h3>
  <p>This component is responsible for displaying the list of job postings.</p>
  <ul>
    <li><strong>Imports:</strong></li>
    <ul>
      <li><code>React</code> for building the UI.</li>
      <li><code>Link</code> from Next.js for client-side navigation.</li>
      <li><code>Header</code> component for the page header.</li>
      <li><code>Data</code> and <code>File</code> from the <code>files</code> component for job data.</li>
      <li><code>Cards</code> component to display job information in card format.</li>
    </ul>
    <li><strong>Structure:</strong></li>
    <ul>
      <li>Fetches the job postings data.</li>
      <li>Maps through the job postings to display each job in a card format.</li>
      <li>Each job card is a link that navigates to the job's detailed description.</li>
    </ul>
  </ul>

  <h3>MoreInfo Component</h3>
  <p>This component displays detailed information about a specific job posting.</p>
  <ul>
    <li><strong>Structure:</strong></li>
    <ul>
      <li>Fetches and filters job postings based on the job ID from the URL parameters.</li>
      <li>Displays detailed information about the job, including description, responsibilities, ideal candidate traits, location, important dates, categories, and required skills.</li>
    </ul>
  </ul>

  <h2>Components</h2>
  <ul>
    <li><strong>Header Component:</strong> The <code>Header</code> component is responsible for rendering the header of the page.</li>
    <li><strong>Cards Component:</strong> The <code>Cards</code> component is used to display the job information in a card format. It receives job data as props.</li>
  </ul>
