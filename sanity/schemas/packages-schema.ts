const geysers = {
  name: 'geysers',
  title: 'Geyser Packages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Geyser Package Title',
      type: 'string',
    },
    {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {source: 'title'}
    },
    {
      name: 'description',
      title: 'Geyser Package Description',
      type: 'text',
    },
    {
      name: 'outlets',
      title: 'How many outlets',
      type: 'string',
    },
     {
      name: 'geyser',
      title: 'Geyser',
      type: 'object',
          fields: [
            {
              type: 'string',
              name: 'description',
            },
            {
              type: 'number',
              name: 'price',
            }
          ]
     },
     {
      name: 'installation',
      title: 'Installation',
      type: 'object',
          fields: [
            {
              type: 'string',
              name: 'description',
            },
            {
              type: 'number',
              name: 'price',
            }
          ]
     },
     {
      name: 'certificateOfCompliance',
      title: 'Certificate of compiance',
      type: 'object',
          fields: [
            {
              type: 'string',
              name: 'description',
            },
            {
              type: 'number',
              name: 'price',
            }
          ]
     },
     {
      name: 'plumbing',
      title: 'Plumbing',
      type: 'object',
          fields: [
            {
              type: 'string',
              name: 'description',
            },
            {
              type: 'number',
              name: 'price',
            }
          ]
     },
    {
      name: 'warranty',
      title: 'Warranty',
      type: 'string',
    },
    {
      name: "specifications",
      title: "Geyser Specifications",
      type: "array",
      of: [{type: 'block'}]
    },
    {
      name: 'maxFlowRate',
      title: 'Maximum Flow Rate',
      type: 'string',
    },
    {
      name: 'minFlowRate',
      title: 'Minimum Flow Rate',
      type: 'string',
    },
    {
      name: 'minWaterPressure',
      title: 'Minimum Water Pressure',
      type: 'string',
    },
    {
      name: 'maxWaterPressure',
      title: 'Maximum Water Pressure',
      type: 'string',
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
    },
    {
      name: 'brand',
      title: 'Geyser Brand',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Geyser Price',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Geyser Image',
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
  ],
};

export default geysers
