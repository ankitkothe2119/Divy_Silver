# Divy Silver - Sacred Silver Murtis

This is a Next.js web application for Divy Silver, a brand specializing in exquisite silver religious figurines. The website showcases products, tells the company's story, and includes an interactive AI-powered feature for generating personalized blessings.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **AI/Generative**: [Firebase Genkit](https://firebase.google.com/docs/genkit) (with Google Gemini)
- **Fonts**: Google Fonts (Playfair Display & PT Sans)

## Features

- **Multi-page Layout**: Separate, routed pages for Home, Products, About, and Contact.
- **Responsive Design**: Adapts to different screen sizes, from mobile to desktop.
- **AI-Powered Blessings**: A unique feature on the contact page that generates personalized blessings for users based on their input.
- **Component-Based Architecture**: Built with reusable React components for maintainability.

---

## Local Development Setup

Follow these steps to get the project running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### 1. Create a `.env.local` file

For the AI features to work, you need a Google AI API key.

1.  Create a new file named `.env.local` in the root of your project directory.
2.  Add your API key to this file:

    ```
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

    You can get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 2. Install Dependencies

Open your terminal, navigate to the project directory, and run the following command to install all the necessary packages defined in `package.json`:

```bash
npm install
```

### 3. Run the Development Server

Once the dependencies are installed, you can start the local development server:

```bash
npm run dev
```

This will start two processes:
- The Next.js application, typically available at **http://localhost:9002**.
- The Genkit developer UI, typically available at **http://localhost:4000/flows**.

Open [http://localhost:9002](http://localhost:9002) in your browser to see the website. Any changes you make to the code will automatically reload the page.

---

This project was built in [Firebase Studio](https://firebase.google.com/studio).
