# Directory App

A simple directory app built with React, designed to manage user data using local storage. This project utilizes `react-router-dom` for navigation and provides functionality for adding and retrieving user information.

## Features

1. **Add User:**
   - Input user details and store them in local storage.
   - Display the entered user data on the same page.
   - Replace the "Save" button with a "Delete" button after saving the data.

2. **Retrieve User:**
   - Fetch and display user data based on the Aadhaar number provided.

## File Structure

- `AddPerson.jsx`:
  - Provides a form for adding user details.
  - Stores user data in local storage.
  - Displays data dynamically and toggles between "Save" and "Delete" buttons.
  - Click "Delete" next to a user to remove their data from the list and local storage.

- `RetrieveInfo.jsx`:
  - Allows searching for user details by Aadhaar number.
  - Retrieves data from local storage and displays it.

## Technologies Used

- **React**: Frontend framework for building UI components.
- **React Router DOM**: For managing routes and navigation.
- **Local Storage**: For storing and retrieving user data persistently in the browser.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/directory-app.git
