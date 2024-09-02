export interface IPresentation {
  profileImg: string;
  name: string;
  tags: string;
  hv: { url: string; text: string };
  video: {
    url: string;
    text: string;
  };
}
