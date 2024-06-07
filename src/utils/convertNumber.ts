/**
 * Format a number with a specified precision and suffix based on magnitude.
 * @param num - The number to format.
 * @param precision - The number of decimal places to include in the formatted output. Default is 1.
 * @returns The formatted number with suffix.
 */
export default function formatNumber(num: number, precision: number = 1): string {
  // Define a mapping of suffixes and corresponding magnitude thresholds
  const map = [
    { suffix: ' T', threshold: 1e12 },
    { suffix: ' B', threshold: 1e9 },
    { suffix: ' M', threshold: 1e6 },
    { suffix: ' K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ];

  // Find the first mapping that matches the magnitude of the number
  const found = map.find((x) => Math.abs(num) >= x.threshold);

  // If a matching mapping is found, format the number with the suffix
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  }

  // If no matching mapping is found, return the number as a string
  return num.toString();
}
