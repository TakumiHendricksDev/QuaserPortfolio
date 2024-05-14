import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { storage } from "src/firebase/firebase";

export function formatDate(timestamp) {
  let date;
  if (typeof timestamp === "number") {
    // timestamp is milliseconds
    date = new Date(timestamp);
  } else if (timestamp.seconds) {
    // timestamp is an object with seconds and nanoseconds
    date = new Date(
      timestamp.seconds * 1000 + (timestamp.nanoseconds || 0) / 1000000
    );
  } else {
    throw new Error("Invalid timestamp");
  }

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return `${month} ${day}, ${year} at ${time}`;
}

export async function getFile(filePath) {
  const fileRef = storageRef(storage, filePath);
  const fileURL = await getDownloadURL(fileRef);
  console.log(fileURL);
  return fileURL;
}

export async function fetchFile(filePath) {
  const fileURL = await getFile(filePath);
  const response = await fetch(fileURL);
  const text = await response.text();
  return text;
}
