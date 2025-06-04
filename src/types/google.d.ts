
declare global {
  interface Window {
    gapi: {
      load: (api: string, callback: () => void) => void;
      auth2: {
        init: (config: {
          client_id: string;
          scope: string;
        }) => Promise<GoogleAuth>;
        getAuthInstance: () => GoogleAuth;
      };
    };
  }

  interface GoogleAuth {
    isSignedIn: {
      get: () => boolean;
    };
    currentUser: {
      get: () => GoogleUser;
    };
    signIn: () => Promise<GoogleUser>;
    signOut: () => Promise<void>;
  }

  interface GoogleUser {
    getAuthResponse: () => {
      access_token: string;
      expires_in: number;
    };
  }
}

export {};
