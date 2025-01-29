import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods'
import chef from './chef'
import blogs from './blogs'
import faq from './faq'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods, chef,blogs,faq]
}
