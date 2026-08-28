type Listener = (...args: unknown[]) => void;

const messageListeners = new Set<Listener>();

const browserStub = {
  runtime: {
    sendMessage: async (..._args: unknown[]) => undefined,
    getURL: (path: string) => path,
    onMessage: {
      addListener(listener: Listener) {
        messageListeners.add(listener);
      },
      removeListener(listener: Listener) {
        messageListeners.delete(listener);
      },
      hasListener(listener: Listener) {
        return messageListeners.has(listener);
      },
    },
  },
  storage: {
    local: {
      get: async () => ({} as Record<string, unknown>),
      set: async () => undefined,
      remove: async () => undefined,
      clear: async () => undefined,
    },
    sync: {
      get: async () => ({} as Record<string, unknown>),
      set: async () => undefined,
    },
  },
  tabs: {
    query: async () => [],
    sendMessage: async (..._args: unknown[]) => undefined,
  },
  i18n: {
    getMessage: (_key: string, defaultValue?: string) => defaultValue ?? "",
  },
};

export const browser = browserStub;
export default browserStub;
