
// HTML sanitization utility to prevent XSS attacks
export const sanitizeHtml = (html: string): string => {
  // Create a temporary div to parse HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  // Allow only safe TikTok embed elements and attributes
  const allowedTags = ['blockquote', 'section', 'a', 'script'];
  const allowedAttributes = [
    'class', 'cite', 'data-video-id', 'style', 'target', 'title', 'href', 'async', 'src'
  ];
  
  // Function to clean elements recursively
  const cleanElement = (element: Element): void => {
    // Remove elements not in allowed list
    if (!allowedTags.includes(element.tagName.toLowerCase())) {
      element.remove();
      return;
    }
    
    // Clean attributes
    const attributesToRemove: string[] = [];
    for (let i = 0; i < element.attributes.length; i++) {
      const attr = element.attributes[i];
      if (!allowedAttributes.includes(attr.name.toLowerCase())) {
        attributesToRemove.push(attr.name);
      }
    }
    
    attributesToRemove.forEach(attrName => {
      element.removeAttribute(attrName);
    });
    
    // Validate specific attributes
    if (element.tagName.toLowerCase() === 'script') {
      const src = element.getAttribute('src');
      if (!src || !src.includes('tiktok.com/embed.js')) {
        element.remove();
        return;
      }
    }
    
    if (element.tagName.toLowerCase() === 'a') {
      const href = element.getAttribute('href');
      if (href && !href.startsWith('https://www.tiktok.com/')) {
        element.remove();
        return;
      }
    }
    
    // Clean child elements
    Array.from(element.children).forEach(child => cleanElement(child));
  };
  
  // Clean all elements
  Array.from(tempDiv.children).forEach(child => cleanElement(child));
  
  return tempDiv.innerHTML;
};

export const isTrustedTikTokEmbed = (html: string): boolean => {
  // Verify the HTML contains only trusted TikTok embed code
  const trustedDomains = ['tiktok.com', 'www.tiktok.com'];
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  const scripts = tempDiv.querySelectorAll('script');
  const links = tempDiv.querySelectorAll('a');
  
  // Check all scripts are from TikTok
  for (const script of scripts) {
    const src = script.getAttribute('src');
    if (src && !trustedDomains.some(domain => src.includes(domain))) {
      return false;
    }
  }
  
  // Check all links are TikTok links
  for (const link of links) {
    const href = link.getAttribute('href');
    if (href && !trustedDomains.some(domain => href.includes(domain))) {
      return false;
    }
  }
  
  return true;
};
