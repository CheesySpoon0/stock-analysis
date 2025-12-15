export type Pitch = {
  date: string;
  ticker: string;
  thesis: string;
  priceAtPublish: string;
  slug: string;
};

export const pitchLedger: Pitch[] = [
  {
    date: '2024-09-18',
    ticker: 'SHOP',
    thesis: 'Commerce platform with operating leverage from payments and fulfillment expansion.',
    priceAtPublish: '$72.10',
    slug: 'shopify-flywheel',
  },
  {
    date: '2024-07-02',
    ticker: 'GOOGL',
    thesis: 'Search and cloud scale driving resilient cash flows and AI optionality.',
    priceAtPublish: '$177.54',
    slug: 'alphabet-moats',
  },
  {
    date: '2024-05-10',
    ticker: 'HIMS',
    thesis: 'Direct-to-consumer health platform with expanding categories and improving retention.',
    priceAtPublish: '$17.45',
    slug: 'hims-demand-curve',
  },
];
