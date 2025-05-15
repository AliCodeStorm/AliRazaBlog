// Function to create URL-friendly IDs from headings text
export function createTag(text) {
  // Handle null, undefined or non-string inputs
  if (!text) return '';
  
  // Ensure we're working with a string
  const str = String(text);
  
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim() // Trim leading/trailing whitespace
    || 'tag'; // Provide a fallback value if the result is empty
}