import {Source} from './source.model';
import {ArticleComment} from './comments.model';

export interface Article {
  source: Source;
  id: number;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  comments?: ArticleComment[];
}
