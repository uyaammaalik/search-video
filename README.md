# Search Video

Search Video is a React.js project that allows users to search and watch for videos using the Youtube API. It uses Axios to interact with the API and provides a simple and responsive interface for video search.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Features](#features)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - download and install Node.js

### Installation

1. Get Youtube API
   [Get your Youtube Data V3 API] (https://console.cloud.google.com)

2. Clone the repository:

   ```bash
   git clone https://github.com/uyaammaalik/search-video.git
   cd search-image

   ```
3. **Create a `.env` file:**
   In the root of your project, create a file named `.env`.

4. **Add the following variables to your `.env` file:**

   ```env
   REACT_APP_API_KEY=your_api_key_here
   REACT_APP_API_URL=https://www.googleapis.com/youtube/v3

   ```

5. Install dependencies:

   ```bash
   npm install

   ```

### Running the Project

To run the project locally, use the following command:

```bash
npm start

```

Visit [http://localhost:3000](http://localhost:3000) in your web browser to access the application.

## Usage

1. Enter your search query in the provided search bar.
2. Press "Enter" or click the search button.
3. View the results of the video search.

## Features

- Search for videos using the Youtube API.
- Simple and responsive user interface.
