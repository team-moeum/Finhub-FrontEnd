export interface Alarm {
  id: number;
  title: string;
  message: string;
  url: string;
  sentAt: string;
  receivedAt: string | null;
}
