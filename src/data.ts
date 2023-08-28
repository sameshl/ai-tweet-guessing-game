export interface SampleTweet {
  tweet: string;
  isReal: boolean;
  handle: string;
  name: string;
  pfpImageLink: string;
}

export const data: Array<SampleTweet> = [
  {
    tweet: "SpaceX go brr",
    isReal: false,
    handle: "elonmusk",
    name: "Elon Musk",
    pfpImageLink:
      "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
  },
  {
    tweet: "Some real farza tweet",
    isReal: true,
    handle: "FarzaTV",
    name: "Farza",
    pfpImageLink:
      "https://pbs.twimg.com/profile_images/1323391305834143745/4zqOJh66_400x400.jpg",
  },
];
