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
                  buildHookId: '615023704c6d86f94faebe74',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-88r9v7h5',
                  apiId: 'c34fdcb7-dc97-4b62-a650-46eff17922b6'
                },
                {
                  buildHookId: '61502371a5d4868e7ffa4180',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-yu4dmh8e',
                  apiId: 'f14246fa-e651-421c-b3f7-026b6665dc8a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/duyvu9999/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-yu4dmh8e.netlify.app', category: 'apps'}
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
