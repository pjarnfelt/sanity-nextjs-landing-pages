export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60c1ee24c2f07d1e0a2496f2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-puv5kn62',
                  apiId: '5fa2b084-a06d-48f8-89f3-668dcdeee938'
                },
                {
                  buildHookId: '60c1ee24ca3588000761309b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qskcmpbt',
                  apiId: '5edd1732-857a-4caf-810d-fc8750548c6d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pjarnfelt/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qskcmpbt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
