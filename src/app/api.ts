import { IApiRepos } from '@app/types';

export const apiFetchRepos = (): Promise<IApiRepos> => {
  return fetch('https://api.github.com/search/repositories?q=JavaScript&sort=stars&order=desc').then((response) =>
    response.json()
  );
};
