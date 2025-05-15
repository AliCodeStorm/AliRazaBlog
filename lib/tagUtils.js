/**
 * Safely creates a tag by avoiding direct browser API usage
 * This allows the function to work in both client and server environments
 */
export function createTag(tag) {
  return tag ? tag.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : '';
}

/**
 * Client-side only function for tag-related operations that need the DOM
 * This should only be used in components with the "use client" directive
 */
export function clientSideTagOperations(tag) {
  if (typeof window === 'undefined' || !document) {
    return tag;
  }
  
  // Here you can add any client-side only tag operations
  // This function is safe to call from any component,
  // but will only execute browser-specific code when in the browser
  
  return tag;
} 