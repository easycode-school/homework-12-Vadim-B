import { Comment } from './comment';

export interface PhotoInfo {
  challenges: [];
  comments: Comment[];
  create_date: string;
  description: string;
  glories: [];
  is_deleted: false;
  likes: [string];
  owner: {
    avatar: string;
    _id: string;
    full_name: string;
    city: string
  };
  title: string;
  total_votes: number;
  url: string;
  views: string[];
  _id: string;
}
