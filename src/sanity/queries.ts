export const servicesQuery = `*[_type == "service"] {
  _id,
  title,
  "slug": slug.current,
  description,
  content,
  image {
    asset->{
      url
    },
    alt
  }
}`;