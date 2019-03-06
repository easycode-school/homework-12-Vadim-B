export interface Comment {
  image: string;
  owner: {
    avatar: string;
    _id: string;
    full_name: string
  };
  sub_comments: {
    owner: {
      avatar: string;
      _id: string;
      full_name: string;
    };
    text: string;
    time_update: string;
    _id: string;
  }[];
  text: string;
  time_update: string;
  __v: number;
  _id: string;
}
