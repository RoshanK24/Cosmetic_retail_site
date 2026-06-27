// Verified Unsplash images mapped to product types
// UPDATE HERE: Add more image IDs per category if needed

const pools: Record<string, string[]> = {
  'Face Wash': [
    'photo-1556228720-195a672e8a03',
    'photo-1556228578-8c89e6adf883',
    'photo-1434389677669-e08b4cac3105',
  ],
  Moisturizer: [
    'photo-1616394584738-fc6e612e71b9',
    'photo-1571875257727-256c39da42af',
    'photo-1556228578-8c89e6adf883',
    'photo-1434389677669-e08b4cac3105',
  ],
  Sunscreen: [
    'photo-1556228578-8c89e6adf883',
    'photo-1616394584738-fc6e612e71b9',
    'photo-1571875257727-256c39da42af',
    'photo-1556228720-195a672e8a03',
  ],
  Serum: [
    'photo-1616394584738-fc6e612e71b9',
    'photo-1556228578-8c89e6adf883',
    'photo-1434389677669-e08b4cac3105',
  ],
  'Face Oil': [
    'photo-1616394584738-fc6e612e71b9',
    'photo-1571875257727-256c39da42af',
    'photo-1434389677669-e08b4cac3105',
  ],
  Toner: [
    'photo-1556228578-8c89e6adf883',
    'photo-1556228720-195a672e8a03',
    'photo-1616394584738-fc6e612e71b9',
  ],
  'Face Mask': [
    'photo-1556228578-8c89e6adf883',
    'photo-1434389677669-e08b4cac3105',
    'photo-1571875257727-256c39da42af',
  ],
  'Sheet Mask': [
    'photo-1556228578-8c89e6adf883',
    'photo-1616394584738-fc6e612e71b9',
  ],
  'Skin Care': [
    'photo-1556228720-195a672e8a03',
    'photo-1616394584738-fc6e612e71b9',
    'photo-1571875257727-256c39da42af',
  ],
  Foundation: [
    'photo-1596462502278-27bfdc403348',
    'photo-1512496015851-a90fb38ba796',
    'photo-1487412720507-e7ab37603c6f',
  ],
  Concealer: [
    'photo-1596462502278-27bfdc403348',
    'photo-1512496015851-a90fb38ba796',
  ],
  Compact: [
    'photo-1596462502278-27bfdc403348',
    'photo-1586495777744-4413f21062fa',
  ],
  'Face Powder': ['photo-1596462502278-27bfdc403348'],
  Lipstick: [
    'photo-1586495777744-4413f21062fa',
    'photo-1512496015851-a90fb38ba796',
    'photo-1559599101-f09722fb4948',
  ],
  'Lip Balm': [
    'photo-1586495777744-4413f21062fa',
    'photo-1559599101-f09722fb4948',
  ],
  'Lip Care': ['photo-1586495777744-4413f21062fa'],
  'Lip Tint': [
    'photo-1586495777744-4413f21062fa',
    'photo-1559599101-f09722fb4948',
  ],
  'Lip Gloss': [
    'photo-1586495777744-4413f21062fa',
    'photo-1512496015851-a90fb38ba796',
  ],
  Kajal: [
    'photo-1487412720507-e7ab37603c6f',
    'photo-1516975080664-ed2fc6a32937',
    'photo-1596462502278-27bfdc403348',
  ],
  Eyeliner: [
    'photo-1487412720507-e7ab37603c6f',
    'photo-1516975080664-ed2fc6a32937',
    'photo-1559599101-f09722fb4948',
  ],
  Mascara: [
    'photo-1487412720507-e7ab37603c6f',
    'photo-1516975080664-ed2fc6a32937',
    'photo-1559599101-f09722fb4948',
  ],
  Eyebrow: [
    'photo-1596462502278-27bfdc403348',
    'photo-1487412720507-e7ab37603c6f',
  ],
  Eyeshadow: [
    'photo-1596462502278-27bfdc403348',
    'photo-1512496015851-a90fb38ba796',
    'photo-1516975080664-ed2fc6a32937',
  ],
  Blush: [
    'photo-1596462502278-27bfdc403348',
    'photo-1559599101-f09722fb4948',
  ],
  Highlighter: [
    'photo-1596462502278-27bfdc403348',
    'photo-1512496015851-a90fb38ba796',
  ],
  Primer: ['photo-1596462502278-27bfdc403348', 'photo-1487412720507-e7ab37603c6f'],
  'Makeup Fixer': ['photo-1596462502278-27bfdc403348', 'photo-1516975080664-ed2fc6a32937'],
  Shampoo: [
    'photo-1522337360788-8b13dee7a37e',
    'photo-1560066984-138dadb4c035',
    'photo-1571781926291-c477ebfd024b',
  ],
  Conditioner: [
    'photo-1522337360788-8b13dee7a37e',
    'photo-1560066984-138dadb4c035',
    'photo-1571781926291-c477ebfd024b',
  ],
  'Hair Oil': [
    'photo-1571781926291-c477ebfd024b',
    'photo-1522337360788-8b13dee7a37e',
    'photo-1560066984-138dadb4c035',
  ],
  'Hair Serum': [
    'photo-1522337360788-8b13dee7a37e',
    'photo-1571781926291-c477ebfd024b',
  ],
  'Hair Mask': [
    'photo-1560066984-138dadb4c035',
    'photo-1522337360788-8b13dee7a37e',
  ],
  'Hair Care': [
    'photo-1571781926291-c477ebfd024b',
    'photo-1522337360788-8b13dee7a37e',
  ],
  'Body Lotion': [
    'photo-1556228578-0d85b1a4d571',
    'photo-1608571423902-eed4a5ad8108',
    'photo-1571875257727-256c39da42af',
  ],
  'Body Scrub': [
    'photo-1556228578-0d85b1a4d571',
    'photo-1608571423902-eed4a5ad8108',
  ],
  'Shower Gel': [
    'photo-1556228578-0d85b1a4d571',
    'photo-1608571423902-eed4a5ad8108',
  ],
  Soap: [
    'photo-1556228578-0d85b1a4d571',
    'photo-1556909114-f6e7ad7d3136',
  ],
  'Body Care': [
    'photo-1556228578-0d85b1a4d571',
    'photo-1608571423902-eed4a5ad8108',
  ],
  'Roll On': [
    'photo-1560472354-b33ff0c44a43',
    'photo-1556909114-f6e7ad7d3136',
  ],
  Deodorant: [
    'photo-1560472354-b33ff0c44a43',
    'photo-1556909114-f6e7ad7d3136',
  ],
  Fragrance: [
    'photo-1541643600914-78b084683601',
    'photo-1592945403244-b3fbafd7f539',
  ],
  'Beauty Tool': [
    'photo-1519699047748-de8e457a634e',
    'photo-1487412947147-5cebf100ffc2',
  ],
}

const keywordRules: { keywords: string[]; pool: string }[] = [
  { keywords: ['sunscreen', 'spf', 'sunblock', 'sun expert'], pool: 'Sunscreen' },
  { keywords: ['face wash', 'cleanser', 'cleansing'], pool: 'Face Wash' },
  { keywords: ['shampoo'], pool: 'Shampoo' },
  { keywords: ['conditioner'], pool: 'Conditioner' },
  { keywords: ['hair oil', 'coconut', 'almond hair', 'bhringraj', 'castor'], pool: 'Hair Oil' },
  { keywords: ['hair serum', 'livon'], pool: 'Hair Serum' },
  { keywords: ['hair mask', 'hair spa', 'creambath'], pool: 'Hair Mask' },
  { keywords: ['lipstick', 'lip color', 'lip crayon', 'liquid lip'], pool: 'Lipstick' },
  { keywords: ['lip balm', 'baby lips'], pool: 'Lip Balm' },
  { keywords: ['lip gloss', 'gloss bomb'], pool: 'Lip Gloss' },
  { keywords: ['lip sleeping', 'lip care'], pool: 'Lip Care' },
  { keywords: ['lip tint', 'cheek tint'], pool: 'Lip Tint' },
  { keywords: ['kajal', 'kohl'], pool: 'Kajal' },
  { keywords: ['eyeliner', 'eye liner'], pool: 'Eyeliner' },
  { keywords: ['mascara'], pool: 'Mascara' },
  { keywords: ['eyebrow', 'brow'], pool: 'Eyebrow' },
  { keywords: ['eyeshadow', 'shadow palette'], pool: 'Eyeshadow' },
  { keywords: ['foundation', 'compact'], pool: 'Foundation' },
  { keywords: ['concealer'], pool: 'Concealer' },
  { keywords: ['blush'], pool: 'Blush' },
  { keywords: ['highlighter'], pool: 'Highlighter' },
  { keywords: ['primer'], pool: 'Primer' },
  { keywords: ['serum', 'niacinamide', 'salicylic', 'hyaluronic', 'arbutin'], pool: 'Serum' },
  { keywords: ['toner', 'rose water'], pool: 'Toner' },
  { keywords: ['sheet mask'], pool: 'Sheet Mask' },
  { keywords: ['face pack', 'face mask', 'peel off', 'multani', 'haldi'], pool: 'Face Mask' },
  { keywords: ['moisturiz', 'moisture cream', 'gel cream', 'water gel'], pool: 'Moisturizer' },
  { keywords: ['aloe vera'], pool: 'Skin Care' },
  { keywords: ['face oil', 'kumkumadi'], pool: 'Face Oil' },
  { keywords: ['body lotion', 'body milk'], pool: 'Body Lotion' },
  { keywords: ['body scrub', 'coffee'], pool: 'Body Scrub' },
  { keywords: ['shower gel'], pool: 'Shower Gel' },
  { keywords: ['soap', 'beauty bar', 'pears', 'medimix'], pool: 'Soap' },
  { keywords: ['roll on', 'deo'], pool: 'Deodorant' },
  { keywords: ['perfume', 'fragrance', 'body spray'], pool: 'Fragrance' },
  { keywords: ['brush', 'dryer', 'straightener', 'blender', 'sponge'], pool: 'Beauty Tool' },
  { keywords: ['fixer spray', 'makeup fixer'], pool: 'Makeup Fixer' },
  { keywords: ['powder'], pool: 'Face Powder' },
]

function hashSlug(slug: string, length: number): number {
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = (hash + slug.charCodeAt(i) * (i + 1)) % length
  }
  return hash
}

function pickFromPool(poolKey: string, slug: string): string {
  const pool = pools[poolKey] ?? pools['Skin Care']
  return pool[hashSlug(slug, pool.length)]
}

function detectPoolKey(name: string, subCategory: string): string {
  const lower = name.toLowerCase()
  for (const rule of keywordRules) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return rule.pool
    }
  }
  return subCategory
}

export function getProductImageId(name: string, subCategory: string, slug: string): string {
  const poolKey = detectPoolKey(name, subCategory)
  return pickFromPool(poolKey, slug)
}

export function getProductImageUrl(name: string, subCategory: string, slug: string): string {
  const id = getProductImageId(name, subCategory, slug)
  return `https://images.unsplash.com/${id}?w=600&h=600&fit=crop&q=80`
}
