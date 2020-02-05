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
                  buildHookId: '5e3a9919a868ee3af71be9af',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9z29avap',
                  apiId: '84589aa8-43cf-4be2-8c46-377142a71e2a'
                },
                {
                  buildHookId: '5e3a991929eb543bd4f57dfc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pphngrqe',
                  apiId: '2cfae54f-0691-42ec-82d7-6ddceda334c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sinitsa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pphngrqe.netlify.com', category: 'apps'}
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
