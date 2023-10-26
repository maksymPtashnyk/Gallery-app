const CLIENT_ID = 'VoK9PPQDq_qJIY8r4idXUAiE08FzKj-HhnqleIVTH1Y';

export const fetchPhotos = async () => {
  const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=12`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
