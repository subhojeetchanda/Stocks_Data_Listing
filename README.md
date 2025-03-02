# Stock Data Analysis Project

## Overview

This project provides a simple web interface to visualize stock data for different companies.  It fetches data from a local CSV file using a Node.js/Express backend and displays it in a user-friendly chart using React and Chart.js.  Users can select a company from a dropdown, and the corresponding stock data will be rendered in a line chart showing closing, high, low, and open index values over time.

## Technologies Used

*   **Frontend:**
    *   React
    *   Chart.js (for charting)
    *   Axios (for making HTTP requests)
    *   Bootstrap (for basic styling)
*   **Backend:**
    *   Node.js
    *   Express.js
    *   cors (for Cross-Origin Resource Sharing)
    *   csv-parser (for parsing the CSV file)

## Setup Instructions

Follow these steps to set up the project locally:

1.  **Clone the Repository:**

    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd <YOUR_PROJECT_DIRECTORY>
    ```

2.  **Install Dependencies (Frontend):**

    ```bash
    cd client  # or the directory where your React app is (if not root)
    npm install
    ```

3.  **Install Dependencies (Backend):**

    ```bash
    cd server  # or the directory where your Node.js server is (if not root)
    npm install
    ```

4.  **Place the CSV Data:**

    *   Ensure that you have the `dump.csv` file.
    *   Place the `dump.csv` file in the root directory of your `server` folder. If not, make sure you change the file path on the server.js.

5.  **Run the Backend Server:**

    ```bash
    cd server # Navigate to server directory
    node server.js
    ```

    The server should start and listen on port 3000.  You should see a message in the console:  `Server running on http://localhost:3000` and `CSV file successfully processed`.

6.  **Run the Frontend Application:**

    ```bash
    cd client # Navigate to client directory
    npm start
    ```

    This will start the React development server. The application should open in your browser, usually at `http://localhost:5173`.

## Project Structure

The project directory structure is organized as follows:

```markdown
stock-data-analysis/
├── client/ # Frontend React application
│ ├── src/ # Source code
│ │ ├── App.jsx # Main application component
│ │ ├── main.jsx # Entry point
│ │ ├── index.css
│ │ ├── App.css # Styling
│ │ ├── Header.jsx # Header component
│ │ └── ...
│ ├── public/
│ │ └── uptrend.svg #Logo image.
│ ├── package.json
│ └── ...
├── server/ # Backend Node.js/Express server
│ ├── server.js # Main server file
│ ├── dump.csv # CSV data file
│ └── package.json
├── README.md # This file
└── .gitignore
```

## Screenshot

 <img width="1440" alt="Screenshot 2025-03-02 at 7 54 42 PM" src="https://github.com/user-attachments/assets/3932f6a0-32bd-4918-938d-93b113bd1e5c" />

## Data Format

The `dump.csv` file should contain the following columns:

*   `index_name`: The name of the company or stock index (e.g., "Nifty 50").
*   `index_date`: The date of the stock data.
*   `open_index_value`: The opening index value for the day.
*   `high_index_value`: The highest index value for the day.
*   `low_index_value`: The lowest index value for the day.
*   `closing_index_value`: The closing index value for the day.

Make sure the headers of your `dump.csv` match these column names exactly (case-sensitive).

## API Endpoints

The backend provides the following API endpoints:

*   `GET /companies`: Returns a list of all unique company names found in the `dump.csv` file.
*   `GET /company/:name`: Returns the stock data for a specific company, where `:name` is the company name.  For example: `/company/Nifty%2050`

## Usage

1.  Open the application in your browser.
2.  Use the dropdown menu to select a company.
3.  The chart will update to display the stock data for the selected company.
4.  The chart displays closing, high, low, and open index values over time.
5.  A search input is available at the right top of the screen. The input is fully functioning and integrated with the server to retrieve search stock data.

## Future Enhancements

*   **Error Handling:** Implement more robust error handling on both the frontend and backend.
*   **Search Functionality:**  Add a search bar to filter the list of companies.
*   **Data Filtering:**  Allow users to filter data by date range.
*   **More Chart Types:** Offer different chart types (e.g., bar chart, candlestick chart).
*   **Database Integration:**  Store data in a database instead of a CSV file for better performance and scalability.
*   **Deployment:** Deploy the application to a cloud platform (e.g., Heroku, Netlify, AWS).
*   **Add Unit Test:** Add a unit test using a testing framework such as jest.
*   **Complete Search Functionality:** Create backend functionality for the search input using data filtering.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
