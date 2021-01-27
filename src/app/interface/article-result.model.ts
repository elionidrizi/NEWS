import {Article} from './article.model';

export interface ArticleResult {
status:string;
totalResults:number;
articles:Article[];
}
