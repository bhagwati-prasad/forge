/**
 * Creates a DOM element with specified attributes and children
 * @param tag - HTML tag name
 * @param attrs - Element attributes
 * @param children - Child elements or text content
 * @returns The created element
 */
export function createElement(
  tag: string,
  attrs: Record<string, any> = {},
  ...children: (HTMLElement | string)[]
): HTMLElement {
  const element = document.createElement(tag);

  // Set attributes
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(element.style, value);
    } else if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.slice(2).toLowerCase();
      element.addEventListener(eventName, value);
    } else {
      element.setAttribute(key, value);
    }
  });

  // Append children
  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

/**
 * Selects a single element from the DOM
 * @param selector - CSS selector
 * @param parent - Parent element to search within
 * @returns The selected element or null
 */
export function select<T extends HTMLElement = HTMLElement>(
  selector: string,
  parent: Document | HTMLElement = document
): T | null {
  return parent.querySelector<T>(selector);
}

/**
 * Selects multiple elements from the DOM
 * @param selector - CSS selector
 * @param parent - Parent element to search within
 * @returns Array of selected elements
 */
export function selectAll<T extends HTMLElement = HTMLElement>(
  selector: string,
  parent: Document | HTMLElement = document
): T[] {
  return Array.from(parent.querySelectorAll<T>(selector));
}

/**
 * Adds event listener to an element
 * @param element - Target element
 * @param event - Event name
 * @param handler - Event handler
 * @param options - Event listener options
 * @returns Function to remove the event listener
 */
export function on<K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Document | Window,
  event: K,
  handler: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): () => void {
  element.addEventListener(event, handler as any, options);
  return () => element.removeEventListener(event, handler as any, options);
}

/**
 * Adds event listener that fires only once
 * @param element - Target element
 * @param event - Event name
 * @param handler - Event handler
 */
export function once<K extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  event: K,
  handler: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
): void {
  element.addEventListener(event, handler as any, { once: true });
}

/**
 * Event delegation helper
 * @param parent - Parent element
 * @param event - Event name
 * @param selector - CSS selector for target elements
 * @param handler - Event handler
 * @returns Function to remove the event listener
 */
export function delegate<K extends keyof HTMLElementEventMap>(
  parent: HTMLElement | Document,
  event: K,
  selector: string,
  handler: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
): () => void {
  const listener = (e: Event) => {
    const target = (e.target as HTMLElement).closest(selector);
    if (target && parent.contains(target as Node)) {
      handler.call(target as HTMLElement, e as any);
    }
  };

  parent.addEventListener(event, listener as any);
  return () => parent.removeEventListener(event, listener as any);
}

/**
 * Adds or removes a class from an element
 * @param element - Target element
 * @param className - Class name
 * @param force - Force add (true) or remove (false)
 */
export function toggleClass(
  element: HTMLElement,
  className: string,
  force?: boolean
): void {
  element.classList.toggle(className, force);
}

/**
 * Adds classes to an element
 * @param element - Target element
 * @param classes - Class names to add
 */
export function addClass(element: HTMLElement, ...classes: string[]): void {
  element.classList.add(...classes);
}

/**
 * Removes classes from an element
 * @param element - Target element
 * @param classes - Class names to remove
 */
export function removeClass(element: HTMLElement, ...classes: string[]): void {
  element.classList.remove(...classes);
}

/**
 * Checks if element has a class
 * @param element - Target element
 * @param className - Class name to check
 * @returns True if element has the class
 */
export function hasClass(element: HTMLElement, className: string): boolean {
  return element.classList.contains(className);
}

/**
 * Sets or gets element attributes
 * @param element - Target element
 * @param name - Attribute name
 * @param value - Attribute value (undefined to get)
 * @returns Attribute value when getting, void when setting
 */
export function attr(
  element: HTMLElement,
  name: string,
  value?: string
): string | null | void {
  if (value === undefined) {
    return element.getAttribute(name);
  }
  element.setAttribute(name, value);
}

/**
 * Sets or gets element styles
 * @param element - Target element
 * @param styles - Style object
 */
export function css(
  element: HTMLElement,
  styles: Partial<CSSStyleDeclaration>
): void {
  Object.assign(element.style, styles);
}

/**
 * Removes an element from the DOM
 * @param element - Element to remove
 */
export function remove(element: HTMLElement): void {
  element.parentNode?.removeChild(element);
}

/**
 * Appends children to an element
 * @param parent - Parent element
 * @param children - Children to append
 */
export function append(
  parent: HTMLElement,
  ...children: (HTMLElement | string)[]
): void {
  children.forEach((child) => {
    if (typeof child === 'string') {
      parent.appendChild(document.createTextNode(child));
    } else {
      parent.appendChild(child);
    }
  });
}

/**
 * Prepends children to an element
 * @param parent - Parent element
 * @param children - Children to prepend
 */
export function prepend(
  parent: HTMLElement,
  ...children: (HTMLElement | string)[]
): void {
  children.reverse().forEach((child) => {
    if (typeof child === 'string') {
      parent.insertBefore(document.createTextNode(child), parent.firstChild);
    } else {
      parent.insertBefore(child, parent.firstChild);
    }
  });
}

/**
 * Checks if document is ready
 * @param callback - Function to call when ready
 */
export function ready(callback: () => void): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

/**
 * Animates element using requestAnimationFrame
 * @param element - Target element
 * @param keyframes - Animation keyframes
 * @param duration - Animation duration in ms
 * @returns Promise that resolves when animation completes
 */
export function animate(
  element: HTMLElement,
  keyframes: Keyframe[],
  duration: number
): Promise<void> {
  return new Promise((resolve) => {
    const animation = element.animate(keyframes, {
      duration,
      fill: 'forwards',
    });
    animation.onfinish = () => resolve();
  });
}
