const datePicker = document.getElementById('date-picker');
const timePicker = document.getElementById('time-picker');
const hourPicker = document.getElementById('hour-picker');
const selectedValueInput = document.getElementById('selected-value');

// Generate dates for Date Picker
function generateDates() {
  const currentDate = new Date();
  for (let i = 0; i < 30; i++) {
    let date = new Date();
    date.setDate(currentDate.getDate() + i);
    let dateStr = date.toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' });
    let option = new Option(dateStr, date.toISOString());
    datePicker.appendChild(option);
  }
}

// Generate time options (12-hour or 24-hour format)
function generateTimeOptions() {
  let currentTime = new Date();
  let is24HourFormat = currentTime.toLocaleTimeString().includes('AM') ? false : true;
  let hours = is24HourFormat ? 24 : 12;

  for (let i = 0; i < hours; i++) {
    let time = new Date(2020, 0, 1, i, 0, 0);
    let timeStr = is24HourFormat
      ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      : time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    let option = new Option(timeStr, i);
    timePicker.appendChild(option);
  }
}

// Generate hour options (depending on device's 12-hour or 24-hour clock)
function generateHourOptions() {
  for (let i = 1; i <= 12; i++) {
    let hourStr = i + " Hour";
    let option = new Option(hourStr, i);
    hourPicker.appendChild(option);
  }
}

// Display selected value in the input field
function updateSelectedValue() {
  let selectedDate = datePicker.options[datePicker.selectedIndex].text;
  let selectedTime = timePicker.options[timePicker.selectedIndex].text;
  let currentDate = new Date();
  let selectedDateValue = new Date(datePicker.value);

  if (currentDate.toDateString() === selectedDateValue.toDateString()) {
    selectedValueInput.value = `Today at ${selectedTime}`;
  } else {
    selectedValueInput.value = selectedDate;
  }
}

// Event listeners to detect changes in date or time pickers
datePicker.addEventListener('change', updateSelectedValue);
timePicker.addEventListener('change', updateSelectedValue);

// Load pickers on window load
window.onload = function () {
  generateDates();
  generateTimeOptions();
  generateHourOptions();
};
