import { PortableTextBlock } from "sanity"

export type Article = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  image: string
  link: string
  content:PortableTextBlock[]
}
