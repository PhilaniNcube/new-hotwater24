import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import article from './sanity/schemas/article-schema'
import schemas from './sanity/schemas'


const config = defineConfig({
  projectId: 'anh1uho1',
  dataset: 'production',
  apiVersion: '2023-07-31',
  title: 'Hotwater24 News',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {types: schemas},
})


export default config
