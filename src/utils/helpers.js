export function getRandomItems(array, numberOfItems) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfItems);
}

export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}
