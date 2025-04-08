function formatReleaseDate(date) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function getCurrentYear() {
  return new Date().getFullYear();
}

export { formatReleaseDate, getCurrentYear };
