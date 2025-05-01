import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'technology',
  type: 'document',
  title: 'Technology',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Technology Name',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'name'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
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
      name: 'description',
      type: 'text',
      title: 'Short Description',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Database', value: 'database' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'aboutContent',
      type: 'array',
      title: 'About Content',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'whyWeUse',
      type: 'array',
      title: 'Why We Use This Technology',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(3)
    }),
    defineField({
      name: 'experienceLevel',
      type: 'string',
      title: 'Experience Level',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
          { title: 'Expert', value: 'expert' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'projectsCompleted',
      type: 'number',
      title: 'Projects Completed',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'preferredFor',
      type: 'array',
      title: 'Preferred For',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo'
    }
  }
})