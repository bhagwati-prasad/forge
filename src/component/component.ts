import { createElement } from '../dom/manipulate';
import type { createStore } from '../state/store';

export interface ComponentOptions<T = any> {
  template?: (props: T, state?: any) => HTMLElement;
  state?: any;
  props?: T;
  mounted?: (element: HTMLElement) => void;
  updated?: (element: HTMLElement) => void;
  unmounted?: (element: HTMLElement) => void;
}

export interface Component<T = any> {
  render: () => HTMLElement;
  mount: (container: HTMLElement | string) => void;
  unmount: () => void;
  update: (newProps?: Partial<T>) => void;
  element: HTMLElement | null;
}

/**
 * Creates a reactive component
 * @param options - Component options
 * @returns Component instance
 */
export function createComponent<T = any>(options: ComponentOptions<T>): Component<T> {
  let element: HTMLElement | null = null;
  let container: HTMLElement | null = null;
  let currentProps = options.props || ({} as T);
  let currentState = options.state || {};

  const render = (): HTMLElement => {
    const newElement = options.template
      ? options.template(currentProps, currentState)
      : createElement('div', {}, 'Empty Component');

    if (element && container) {
      container.replaceChild(newElement, element);
      element = newElement;
      options.updated?.(element);
    } else {
      element = newElement;
    }

    return element;
  };

  const mount = (containerOrSelector: HTMLElement | string): void => {
    if (typeof containerOrSelector === 'string') {
      container = document.querySelector(containerOrSelector);
    } else {
      container = containerOrSelector;
    }

    if (!container) {
      throw new Error('Container not found');
    }

    element = render();
    container.appendChild(element);
    options.mounted?.(element);
  };

  const unmount = (): void => {
    if (element && container) {
      options.unmounted?.(element);
      container.removeChild(element);
      element = null;
      container = null;
    }
  };

  const update = (newProps?: Partial<T>): void => {
    if (newProps) {
      currentProps = { ...currentProps, ...newProps };
    }
    render();
  };

  return {
    render,
    mount,
    unmount,
    update,
    get element() {
      return element;
    },
  };
}

/**
 * Creates a component connected to a store
 * @param options - Component options
 * @param store - Store instance
 * @returns Connected component
 */
export function connectToStore<T, S extends Record<string, any>>(
  options: ComponentOptions<T>,
  store: ReturnType<typeof createStore<S>>
): Component<T> {
  const component = createComponent({
    ...options,
    state: store.getState(),
  });

  // Subscribe to store changes
  const unsubscribe = store.subscribe((state) => {
    (component as any).currentState = state;
    component.update();
  });

  // Extend unmount to unsubscribe
  const originalUnmount = component.unmount;
  component.unmount = () => {
    unsubscribe();
    originalUnmount();
  };

  return component;
}

/**
 * Creates a list component that renders items
 * @param options - List options
 * @returns List component
 */
export function createList<T>(options: {
  items: T[];
  renderItem: (item: T, index: number) => HTMLElement;
  containerTag?: string;
  containerAttrs?: Record<string, any>;
}): Component {
  return createComponent({
    props: { items: options.items },
    template: (props) => {
      const container = createElement(
        options.containerTag || 'div',
        options.containerAttrs || {}
      );

      props.items.forEach((item: T, index: number) => {
        const itemElement = options.renderItem(item, index);
        container.appendChild(itemElement);
      });

      return container;
    },
  });
}
