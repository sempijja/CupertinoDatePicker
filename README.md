# Cupertino DatePicker (Web Implementation)

This project is a simple HTML, CSS, and JavaScript-based implementation of a Cupertino-style date picker that mimics the look and feel of an iOS picker. The project features selectable date, time, and hour pickers with customizable scroll behavior.

## Features

- **Date Picker**: Displays selectable dates (30 days starting from today).
- **Time Picker**: Automatically adjusts to 12-hour or 24-hour format depending on the device.
- **Dynamic Input Update**: Updates a text field to show the selected date or time in a format like "Today at [time]" if the date is today.
- **Scrollable UI**: Simulates the iOS-style scrollable picker.


## Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/sempijja/CupertinoDatePicker

   Open index.html in your web browser to view the picker.

### Use the date and time pickers to select values. The selected date/time will be displayed in the input field above the picker.

### Customization
You can easily customize the pickers by:

- Modifying the number of dates: Change the loop in the generateDates() function.
- Customizing the time format: Adjust the logic in the generateTimeOptions() function to match your desired time format (12-hour or 24-hour).
