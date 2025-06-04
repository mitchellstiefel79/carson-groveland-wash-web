
interface GooglePhotosConfig {
  clientId: string;
  apiKey: string;
  scope: string;
}

interface GooglePhoto {
  id: string;
  baseUrl: string;
  filename: string;
  mimeType: string;
  mediaMetadata?: {
    width: string;
    height: string;
  };
}

class GooglePhotosService {
  private config: GooglePhotosConfig;
  private accessToken: string | null = null;

  constructor() {
    this.config = {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      apiKey: process.env.GOOGLE_API_KEY || '',
      scope: 'https://www.googleapis.com/auth/photoslibrary.readonly'
    };
  }

  async authenticate(): Promise<boolean> {
    return new Promise((resolve) => {
      if (!window.gapi) {
        console.error('Google API not loaded');
        resolve(false);
        return;
      }

      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: this.config.clientId,
          scope: this.config.scope
        }).then(() => {
          const authInstance = window.gapi.auth2.getAuthInstance();
          
          if (authInstance.isSignedIn.get()) {
            this.accessToken = authInstance.currentUser.get().getAuthResponse().access_token;
            resolve(true);
          } else {
            authInstance.signIn().then(() => {
              this.accessToken = authInstance.currentUser.get().getAuthResponse().access_token;
              resolve(true);
            }).catch(() => {
              resolve(false);
            });
          }
        });
      });
    });
  }

  async getRecentPhotos(pageSize: number = 50): Promise<GooglePhoto[]> {
    if (!this.accessToken) {
      throw new Error('Not authenticated');
    }

    try {
      const response = await fetch('https://photoslibrary.googleapis.com/v1/mediaItems', {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        },
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch photos');
      }

      const data = await response.json();
      return data.mediaItems || [];
    } catch (error) {
      console.error('Error fetching Google Photos:', error);
      throw error;
    }
  }

  async downloadPhoto(photo: GooglePhoto): Promise<Blob> {
    const downloadUrl = `${photo.baseUrl}=d`;
    
    const response = await fetch(downloadUrl);
    if (!response.ok) {
      throw new Error(`Failed to download photo: ${photo.filename}`);
    }
    
    return response.blob();
  }
}

export const googlePhotosService = new GooglePhotosService();
export type { GooglePhoto };
