import { type SchemaTypeDefinition } from 'sanity'
import contact from './contact'
import project from './project'
import service from './service'
import technology from './technology'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contact, project, service, technology],
}
