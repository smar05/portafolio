export interface IPresentation {
  _id: string;
  name: string;
  tags: string;
  hv: { url: string; text: string };
  video: {
    url: string;
    text: string;
  };
}
