export interface IRepo {
  id: number;
  name: string;
  description: string;
  owner: {
    login: string;
  };
  homepage: string;
  stargazers_count: number;
  forks: number;
  topics: string[];
}

export interface IApiRepos {
  total_count: number;
  incomplete_results: boolean;
  items: IRepo[];
}
