import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Service Title',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Short Description',
      rows: 3,
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Detailed Content',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Featured Image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        })
      ]
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Key Features',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(10)
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies Used',
      of: [
        {
          type: 'reference',
          to: [{ type: 'technology' }]
        }
      ]
    }),
    defineField({
      name: 'priceRange',
      type: 'string',
      title: 'Price Range',
      options: {
        list: [
          { title: 'Budget ($)', value: 'budget' },
          { title: 'Mid-range ($$)', value: 'midrange' },
          { title: 'Premium ($$$)', value: 'premium' },
          { title: 'Custom Quote', value: 'custom' }
        ]
      },
      initialValue: 'custom'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image'
    }
  }
})