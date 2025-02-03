import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods'
import chef from './chef'
import blogs from './blogs'
import faq from './faq'
import tesimonials from './testimonials'
import latestBlog from './latestBlog'
import menuSchema from './menu'
import heroMenu from './heroMenu'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods, chef,blogs,faq,tesimonials,latestBlog, menuSchema, heroMenu]
}
