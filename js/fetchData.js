export const fetchData = async () => {
  try {
    const response = await fetch('https://planet-picayune-mousepad.glitch.me/api');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(`Ошибка при получении данных: ${error}`);
  }
};