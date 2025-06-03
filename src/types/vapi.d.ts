
declare global {
  interface Window {
    vapiSDK: {
      start: () => void;
      stop: () => void;
      run: (config: {
        apiKey: string;
        assistant: string;
        config: any;
      }) => void;
    };
  }
}

export {};
