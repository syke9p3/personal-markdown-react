export function getDateFromTimestamp(timestamp) {
  const date = new Date(timestamp);

  // Format the date as "June 24, 2024"
  const optionsDate = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", optionsDate);

  return formattedDate;
}

export function getTimeFromTimestamp(timestamp) {
  const date = new Date(timestamp);

  // Format the time as "08:32 PM"
  const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };
  const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

  return formattedTime;
}
