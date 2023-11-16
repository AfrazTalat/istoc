import { StringDate } from "./io";

export type IPreviewableFile = {
  file?: any,
  id: number,
  name: string,
  preview: string,
  type: string,
} | undefined;

export type ISetting = {
  id: number
  key: string
  group: string
  value?: string,
  attachment?: IPreviewableFile,
}

export type IAlertType = 'error' | 'success' | 'warning' | 'info';
export default IAlert;


