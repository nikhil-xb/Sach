module.exports = {
  SiteTitle: 'SachAI',
  Sitelogo: '',
  SiteLogoText: '#',
  SiteAuthor: 'Nikhil Kumar',
  SiteDescription: 'Hey there! I am Nikhil Kumar, an undergrad in Information Science. I participate in Kaggle to enhance my skills and be competitive in Deep Learning and CV. I love reading History and Foreign Relations.',
  defaultDescription: 'Computer Scientist', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/nikhil__xb',
    github: 'https://github.com/nikhil-xb',
  },
  SiteAddress: {
    city: 'Bangalore',
    region: '#',
    country: 'India',
    zipCode: '#',
  },
  SiteContact: {
    email: 'nikhil.kumar707128@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2022',
};
