//   return (response = await fetch(
//     'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/090639df-57c7-4fd7-9472-67e00f8aa05f/MOCK_DATA_%282%29.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210101T224636Z&X-Amz-Expires=86400&X-Amz-Signature=e11169ac4cf77fec5f5149d2100fe738bf8859aab340cb9255178466cb7025fb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22MOCK_DATA%2520%282%29.json%22'
//   )
//     .then((response) => response.json())
//     .then((users) => {
//       this.setState({ robots: users });
//     }));
// };

export const onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {};

// export const repositoryFetch = (
//   queryText: string,
//   queryLicense: string,
//   queryFork: boolean,
//   queryStars: string
// ): Promise<any> => {
//   return fetch(
//     `${GITHUB_BASE_URL}/search/repositories?q=${encodeURIComponent(queryText)}+license:${encodeURIComponent(
//       queryLicense
//     )}+stars:${encodeURIComponent(queryStars)}+fork:${queryFork}&sort=${SORT_BY}&order=${ORDER}`
//   );
// };
