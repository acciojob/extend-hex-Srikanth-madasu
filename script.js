const extendHex = (shortHex) => {
  // Remove the # if it exists and convert to lowercase
  shortHex = shortHex.replace(/^#/, "").toLowerCase();

  // Check if the input is a valid short hex code
  if (!/^[0-9a-f]{3}$/i.test(shortHex)) {
    console.error("Invalid short hex code");
    return;
  }

  // Extend the short hex code to the full hex code
  const fullHex =
    shortHex
      .split("")
      .map((char) => char.repeat(2))
      .join("");

  // Add the # prefix and return the full hex code
  return `#${fullHex}`;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
