// F:\hamza\portfolio\src\sanity\schemaTypes\contact.ts
import { defineType, defineField } from 'sanity';

const contactSchema = defineType({
  name: 'contact',
  title: 'Contact Submissions',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'ipAddress',
      title: 'IP Address',
      type: 'string',
      readOnly: true,
    })
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'email',
    },
  },
});

export default contactSchema;