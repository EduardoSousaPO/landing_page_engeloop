declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      targetId: string,
      config?: {
        send_to?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        currency?: string;
        [key: string]: any;
      }
    ) => void;
  }
  
  function gtag(
    command: 'event' | 'config' | 'set' | 'js',
    targetId: string,
    config?: {
      send_to?: string;
      event_category?: string;
      event_label?: string;
      value?: number;
      currency?: string;
      [key: string]: any;
    }
  ): void;
}

export {};

