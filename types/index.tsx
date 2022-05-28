export interface IData {
  question: string;
  choices: IChoice[];
  published_at: string;
  url: string;
}

export interface IChoice {
  choice?: string;
  votes?: number;
  url?: string;
}

export interface IQuestion {
  question: string;
  newChoice: string[];
}

export interface IProps {
  res: IData[];
}

export interface ICardProps {
  item: IData | any;
  redirect?: boolean | any;
}
