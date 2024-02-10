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


export type Geyser = {
  _id: string
  _createdAt: Date
  title: string
  price: number
  slug: string
  subTitle: string
  description: string
  outlets: string
  geyser: {
    description: string
    price: number
  }
  installation: {
    description: string
    price: number
  }
  certificateOfCompliance: {
    description: string
    price: number
  }
  plumbing: {
    description: string
    price: number
  }
  warranty: string
  specifications: PortableTextBlock[]
  maxFlowRate: string
  minFlowRate: string
  minWaterPressure: string
  maxWaterPressure: string
  dimensions: string
  brand: string
  image: string
}
