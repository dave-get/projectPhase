<title>Job Portal Web Application - README</title>

<h1>Job Portal Web Application</h1>
<h2>Author</h2>
<p>Dawit Getachew</p>

<p>This is a Next.js-based web application for a job portal that allows users to search and apply for job opportunities, and also includes authentication via Google and credentials.</p>

<h2>Features</h2>
<ul>
    <li><strong>Job Listings:</strong> Fetch and display all available jobs.</li>
    <li><strong>Job Details:</strong> View detailed information about a specific job.</li>
    <li><strong>User Authentication:</strong> Sign in using Google or email/password.</li>
    <li><strong>Job Application:</strong> Users can apply for jobs after signing in.</li>
    <li><strong>Form Validation:</strong> Client-side form validation using Zod and React Hook Form.</li>
    <li><strong>Dynamic Routing:</strong> Dynamic pages for job details.</li>
</ul>

<h2>Tech Stack</h2>
<ul>
    <li><strong>Next.js:</strong> React framework for building server-side rendered applications.</li>
    <li><strong>TypeScript:</strong> For type safety.</li>
    <li><strong>NextAuth.js:</strong> Authentication with Google and custom credentials.</li>
    <li><strong>React Hook Form:</strong> For form handling and validation.</li>
    <li><strong>Zod:</strong> For schema validation.</li>
    <li><strong>Tailwind CSS:</strong> Utility-first CSS framework for styling.</li>
</ul>

<h2>Setup</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js (v14.x or later)</li>
    <li>NPM (v6.x or later) or Yarn (v1.x or later)</li>
    <li>Environment variables for authentication and API endpoints</li>
</ul>

<h3>Installation</h3>
<ol>
    <li><strong>Clone the repository:</strong>
        <pre>
            <code>
                git clone https://github.com/your-username/job-portal.git 
                cd job-portal
            </code>
        </pre>
    </li>
    <li><strong>Install dependencies:</strong>
        <pre><code>npm install
            <!-- or -->
            yarn install
        </code></pre>
    </li>
    <li><strong>Set up environment variables:</strong>
        <p>Create a <code>.env.local</code> file in the root directory and add the following:</p>
        <pre><code>
            NEXT_PUBLIC_BASE_URL=your_api_base_url
            GOOGLE_CLIENT_ID=your_google_client_id
            GOOGLE_CLIENT_SECRET=your_google_client_secret
        </code></pre>
    </li>
    <li><strong>Run the development server:</strong>
        <pre><code>npm run dev
            <!-- or -->
            yarn dev
        </code></pre>
        <p>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser.</p>
    </li>
</ol>

<h2>Project Structure</h2>
<ul>
    <li><code>pages/</code>: Contains the Next.js pages for the application.</li>
    <li><code>components/</code>: Reusable React components.</li>
    <li><code>styles/</code>: Global styles and Tailwind configuration.</li>
    <li><code>actions/</code>: API calls for fetching job data.</li>
    <li><code>schema/</code>: Zod schemas for form validation.</li>
</ul>

<h2>API Endpoints</h2>
<ul>
    <li><strong>Get All Jobs:</strong>
        <pre><code>const jobs = await getAllJobs();
        </code></pre>
    </li>
    <li><strong>Get Job by ID:</strong>
        <pre><code>const job = await getJobById(jobId);
        </code></pre>
    </li>
</ul>

<h2>Authentication</h2>
<p>This project uses NextAuth.js for authentication. It supports:</p>
<ul>
    <li><strong>Google Authentication:</strong> Users can sign in using their Google accounts.</li>
    <li><strong>Credentials Authentication:</strong> Users can sign in with email and password.</li>
</ul>

<h3>Customizing Authentication</h3>
<p>To customize the authentication providers or pages, modify the <code>AuthOptions</code> in <code>AuthOptions.ts</code>.</p>

<h2>Forms</h2>
<ul>
    <li><strong>Login Form:</strong> Validated using Zod and React Hook Form.</li>
    <li><strong>Signup Form:</strong> Includes full name, email, password, and password confirmation fields.</li>
</ul>

<h3>Form Validation</h3>
<p>Zod is used to define the validation schemas in <code>schema/Schema.ts</code>. These schemas are applied to the forms using React Hook Form's <code>zodResolver</code>.</p>

<h2>Bookmark Feature</h2>
<p>This feature allows users to bookmark job postings, making it easier to return to them later. The bookmarking functionality is available on job detail pages and can be managed through a dedicated "My Bookmarks" page.</p>
<h3>Components</h3>
<ul>
    <li><strong>BookButton Component:</strong> This button lets users bookmark or unbookmark a job posting. The button's state changes based on whether the job is currently bookmarked or not. It also shows a loading spinner while the bookmark action is being processed.</li>
    <li><strong>MyBookmarks Page:</strong> Displays a list of all jobs that the user has bookmarked. Users can view details of each bookmarked job on this page.</li>
</ul>
<h3>How It Works</h3>
<ul>
    <li><strong>BookButton Component:</strong> This component uses a button to toggle the bookmark state of a job. It handles bookmark actions via API requests and updates the button's appearance based on the bookmark state. The component also handles loading states and displays relevant feedback to the user.</li>
    <li><strong>MyBookmarks Page:</strong> This page fetches and displays all jobs bookmarked by the user. It uses server-side authentication to ensure only the authenticated user's bookmarks are shown.</li>
</ul>
<h3>Testing</h3>
<p>Cypress tests have been added to ensure the bookmark feature works correctly. The tests cover user login, bookmarking a job, and navigating between pages.</p>