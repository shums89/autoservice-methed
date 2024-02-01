export const fetchData = async () => {
  try {
    let response = await fetch('https://planet-picayune-mousepad.glitch.me/api');

    if (!response.ok) {
      response = await fetch('./data.json');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }

    return await response.json();

  } catch (error) {
    console.log(`Ошибка при получении данных: ${error}`);
  }
};