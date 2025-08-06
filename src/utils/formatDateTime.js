// src/utils/formatDateTime.js
export const formatDateTime = (timezoneOffsetInSeconds) => {
  const nowUTC = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000);
  const localTime = new Date(nowUTC.getTime() + timezoneOffsetInSeconds * 1000);

  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  const date = localTime.toLocaleDateString("en-US", options);
  const time = localTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return { date, time };
};
