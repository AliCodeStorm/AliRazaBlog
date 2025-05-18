// utils/markdown.js
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'; // Or your preferred theme

marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  mangle: false,
  highlight: function (code, lang) {
    try {
      return lang && hljs.getLanguage(lang)
        ? hljs.highlight(code, { language: lang }).value
        : hljs.highlightAuto(code).value;
    } catch (err) {
      console.error('Highlighting error:', err);
      return code;
    }
  }
});

export function convertMarkdownToHtml(markdown) {
  const html = marked(markdown);

  const enhancedHtml = html
    .replace(/<h1/g, '<h1 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white"')
    .replace(/<h2/g, '<h2 class="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100"')
    .replace(/<h3/g, '<h3 class="text-2xl font-bold mb-3 text-gray-700 dark:text-gray-200"')
    .replace(/<p/g, '<p class="mb-4 text-gray-600 dark:text-gray-300"')
    .replace(/<ul/g, '<ul class="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300"')
    .replace(/<ol/g, '<ol class="list-decimal list-inside mb-4 text-gray-600 dark:text-gray-300"')
    .replace(/<li/g, '<li class="mb-2"')
    .replace(/<a/g, '<a class="text-blue-600 dark:text-blue-400 hover:underline"')
    .replace(/<code(?! class)/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm"')
    .replace(/<pre/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4"')
    .replace(/<blockquote/g, '<blockquote class="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4"');

  return enhancedHtml;
}
