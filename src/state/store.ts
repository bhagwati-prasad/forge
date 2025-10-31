type Listener<T> = (state: T) => void;
type Unsubscribe = () => void;

/**
 * Creates a reactive store for state management
 * @param initialState - The initial state
 * @returns A store object with methods to interact with the state
 */
export function createStore<T extends Record<string, any>>(initialState: T) {
  let state = { ...initialState };
  const listeners = new Set<Listener<T>>();

  return {
    /**
     * Gets the current state
     */
    getState(): T {
      return { ...state };
    },

    /**
     * Sets the state
     * @param newState - The new state or a function that returns the new state
     */
    setState(newState: Partial<T> | ((state: T) => Partial<T>)): void {
      const updates = typeof newState === 'function' ? newState(state) : newState;
      state = { ...state, ...updates };
      this.notify();
    },

    /**
     * Subscribes to state changes
     * @param listener - Function to be called when state changes
     * @returns Unsubscribe function
     */
    subscribe(listener: Listener<T>): Unsubscribe {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },

    /**
     * Notifies all listeners of state changes
     */
    notify(): void {
      listeners.forEach((listener) => listener({ ...state }));
    },

    /**
     * Resets the state to initial state
     */
    reset(): void {
      state = { ...initialState };
      this.notify();
    },
  };
}

/**
 * Creates a computed value that automatically updates when dependencies change
 * @param compute - Function to compute the value
 * @param dependencies - Array of stores or values to watch
 * @returns An object with the computed value, subscribe method, and cleanup function
 */
export function computed<T, D extends any[]>(
  compute: (...deps: D) => T,
  ...dependencies: any[]
): {
  get: () => T;
  subscribe: (listener: (value: T) => void) => Unsubscribe;
  dispose: () => void;
} {
  let value: T;
  const listeners = new Set<(value: T) => void>();

  const recalculate = () => {
    const deps = dependencies.map((dep) =>
      typeof dep.getState === 'function' ? dep.getState() : dep
    );
    value = compute(...(deps as D));
    listeners.forEach((listener) => listener(value));
  };

  // Subscribe to all dependencies
  const unsubscribers: Unsubscribe[] = dependencies.map((dep) => {
    if (typeof dep.subscribe === 'function') {
      return dep.subscribe(recalculate);
    }
    return () => {};
  });

  // Initial calculation
  recalculate();

  return {
    get: () => value,
    subscribe: (listener: (value: T) => void) => {
      listeners.add(listener);
      listener(value); // Immediately call with current value
      return () => {
        listeners.delete(listener);
      };
    },
    dispose: () => {
      unsubscribers.forEach((unsub) => unsub());
      listeners.clear();
    },
  };
}

/**
 * Creates an action that can be dispatched to modify state
 * @param store - The store to create actions for
 * @param actions - Object containing action functions
 * @returns Object with bound action functions
 */
export function createActions<T extends Record<string, any>, A extends Record<string, any>>(
  store: ReturnType<typeof createStore<T>>,
  actions: {
    [K in keyof A]: (state: T, ...args: any[]) => Partial<T>;
  }
): {
  [K in keyof A]: (...args: any[]) => void;
} {
  const boundActions = {} as any;

  for (const key in actions) {
    boundActions[key] = (...args: any[]) => {
      const currentState = store.getState();
      const updates = actions[key](currentState, ...args);
      store.setState(updates);
    };
  }

  return boundActions;
}

/**
 * Middleware type for store enhancers
 */
export type Middleware<T extends Record<string, any>> = (
  store: ReturnType<typeof createStore<T>>
) => (next: (state: Partial<T>) => void) => (state: Partial<T>) => void;

/**
 * Logger middleware for debugging state changes
 */
export function loggerMiddleware<T extends Record<string, any>>(): Middleware<T> {
  return (store) => (next) => (state) => {
    console.group('State Update');
    console.log('Previous State:', store.getState());
    console.log('Updates:', state);
    next(state);
    console.log('New State:', store.getState());
    console.groupEnd();
  };
}

/**
 * Persistence middleware to save state to localStorage
 */
export function persistenceMiddleware<T extends Record<string, any>>(key: string): Middleware<T> {
  return (store) => (next) => (state) => {
    next(state);
    try {
      localStorage.setItem(key, JSON.stringify(store.getState()));
    } catch (e) {
      console.error('Failed to persist state:', e);
    }
  };
}

/**
 * Load persisted state from localStorage
 */
export function loadPersistedState<T>(key: string, defaultState: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultState;
  } catch (e) {
    console.error('Failed to load persisted state:', e);
    return defaultState;
  }
}
