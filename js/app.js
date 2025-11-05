/*
 * This script adds a splash of color to the page when it loads. On every
 * load, the background colour cycles through random pastel hues to catch
 * the user's eye. The functions are written in a way that they can be
 * tested in Node via Jest and still attach themselves to the browser
 * window when running in a browser.
 */

/**
 * Generates a random pastel colour using the HSL colour space. The hue is
 * chosen randomly, while saturation and lightness are fixed to values
 * that produce a soft colour. The result is a CSS-ready string.
 *
 * @returns {string} a CSS colour string in hsl() format
 */
function generateRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70;
  const lightness = 80;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

/**
 * Starts cycling the background colour of the document's body through
 * random pastel hues once every second. Returns the interval ID so the
 * cycle can be cancelled if needed.
 *
 * @returns {number} the ID of the interval timer
 */
function startColorCycle() {
  // Immediately set the initial colour
  document.body.style.backgroundColor = generateRandomColor();
  // Then update the colour every second
  const intervalId = setInterval(() => {
    document.body.style.backgroundColor = generateRandomColor();
  }, 1000);
  return intervalId;
}

/**
 * Entry point function that runs when the DOM has finished loading. It
 * starts the colour cycle, making the page background change colours.
 */
function runOnLoad() {
  startColorCycle();
}

// When running in the browser, attach the runOnLoad callback to the DOM
// ready event so it executes automatically once the page has loaded.
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', runOnLoad);
}

// Expose functions for testing in Node via Jest
if (typeof module !== 'undefined') {
  module.exports = { generateRandomColor, startColorCycle, runOnLoad };
}
