const article = {
  name: 'article',
  title: 'Articles',
  type: 'document',
  fields: [
    {
    name: 'title',
    title: 'Title',
    type: 'string'
    },
    {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {source: 'title'}
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}

export default article
