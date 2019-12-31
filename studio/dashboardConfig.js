export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0b7f418f8744b4d4006a4f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-4mfdcq7r',
                  apiId: 'df3de662-588e-457c-ba82-995f22aac865'
                },
                {
                  buildHookId: '5e0b7f42bb3406a42f4e0c78',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ro45osux',
                  apiId: '0c99c35d-c5b2-4fc8-9a8b-122a3d80c890'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Arogyaraj-De-Joseph/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ro45osux.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
