interface ContentChild {
  _key: string;
  _type: string;
  text: string;
}

interface ContentBlock {
  _key: string;
  _type: string;
  children: ContentChild[];
  markDefs: any[]; // Consider defining a more specific type if possible
  style: string;
}

export type Article = {
  _id: string;
  _createdAt: string;
  meta_title: string;
  meta_description: string;
  title: string;
  slug: string;
  image: string;
  link: string;
  content: ContentBlock[];
  [key: string]: string | ContentBlock[];
};

export type Geyser = {
  _id: string;
  _createdAt: Date;
  title: string;
  price: number;
  composition: string;
  slug: string;
  subTitle: string;
  description: string;
  outlets: string;
  geyser: {
    description: string;
    price: number;
  };
  installation: {
    description: string;
    price: number;
  };
  certificateOfCompliance: {
    description: string;
    price: number;
  };
  plumbing: {
    description: string;
    price: number;
  };
  warranty: string;
  specifications: ContentBlock[];
  maxFlowRate: string;
  minFlowRate: string;
  minWaterPressure: string;
  maxWaterPressure: string;
  dimensions: string;
  brand: string;
  image: string;
};
