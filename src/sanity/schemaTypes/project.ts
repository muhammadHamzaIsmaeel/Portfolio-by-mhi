import { defineField, defineType } from 'sanity';
import { FaLaptop, FaMobile, FaLink, FaCode } from 'react-icons/fa';


export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: FaCode,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Detailed Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            }
          ]
        },

      ]
    }),
    defineField({
      name: 'desktopVideo',
      title: 'Desktop Video',
      type: 'file',
      options: {
        accept: 'video/mp4'
      },
      validation: Rule => Rule.required(),
      icon: FaLaptop
    }),
    defineField({
      name: 'mobileVideo',
      title: 'Mobile Video',
      type: 'file',
      options: {
        accept: 'video/mp4'
      },
      validation: Rule => Rule.required(),
      icon: FaMobile
    }),
    defineField({
      name: 'link',
      title: 'Project Link',
      type: 'url',
      validation: Rule => Rule.required(),
      icon: FaLink
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url'
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1),
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(3)
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges Faced',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0
    })
  ],
  orderings: [
    {
      title: 'Manual Order',
      name: 'manualOrder',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'desktopVideo'
    }
  }
});