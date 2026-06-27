// ============================================================
// PRODUCT CATALOG — Add products one by one below
// ============================================================

import type { ProductCategory } from '@/types/product'
import type { ProductVariant } from '@/types/product'
import { product } from '@/lib/catalog-helpers'

export interface CatalogEntry {
  name: string
  brand: string
  subCategory: string
  price: number
  mrp?: number
  category: ProductCategory
  slug: string
  image?: string
  images?: string[]
  shortDescription: string
  fullDescription: string
  benefits: string[]
  ingredients?: string
  howToUse?: string
  variants: ProductVariant[]
  featured: boolean
  popular: boolean
  createdAt: string
}

const cetaphilCleanserImages = [
  '/products/cetaphil-gentle-skin-cleanser/main.png',
  '/products/cetaphil-gentle-skin-cleanser/promo.png',
  '/products/cetaphil-gentle-skin-cleanser/ingredients.png',
  '/products/cetaphil-gentle-skin-cleanser/packaging-update.png',
]

const cetaphilSyndetBarImages = [
  '/products/cetaphil-syndet-bar/main.png',
  '/products/cetaphil-syndet-bar/box-side.png',
  '/products/cetaphil-syndet-bar/promo.png',
  '/products/cetaphil-syndet-bar/shea-butter.png',
]

const cetaphilMoisturisingLotionImages = [
  '/products/cetaphil-moisturising-lotion/main.png',
  '/products/cetaphil-moisturising-lotion/promo.png',
  '/products/cetaphil-moisturising-lotion/hydration.png',
  '/products/cetaphil-moisturising-lotion/packaging-update.png',
]

const himalayaOilClearLemonImages = [
  '/products/himalaya-oil-clear-lemon-face-wash/main.png',
  '/products/himalaya-oil-clear-lemon-face-wash/promo-1.png',
  '/products/himalaya-oil-clear-lemon-face-wash/promo-2.png',
  '/products/himalaya-oil-clear-lemon-face-wash/promo-3.png',
]

const himalayaPurifyingNeemImages = [
  '/products/himalaya-purifying-neem-face-wash/main.png',
  '/products/himalaya-purifying-neem-face-wash/promo-1.png',
  '/products/himalaya-purifying-neem-face-wash/promo-2.png',
  '/products/himalaya-purifying-neem-face-wash/back.png',
]

const garnierBrightCompleteVitaminCImages = [
  '/products/garnier-bright-complete-vitamin-c-face-wash/main.png',
  '/products/garnier-bright-complete-vitamin-c-face-wash/promo-1.png',
  '/products/garnier-bright-complete-vitamin-c-face-wash/promo-2.png',
  '/products/garnier-bright-complete-vitamin-c-face-wash/promo-3.png',
]

const garnierBrightCompleteVitaminC160gImages = [
  '/products/garnier-bright-complete-vitamin-c-face-wash-160g/main.png',
  '/products/garnier-bright-complete-vitamin-c-face-wash-160g/promo-1.png',
  '/products/garnier-bright-complete-vitamin-c-face-wash-160g/promo-2.png',
  '/products/garnier-bright-complete-vitamin-c-face-wash-160g/promo-3.png',
]

const pondsPimpleClearFaceWashImages = [
  '/products/ponds-pimple-clear-face-wash/main.png',
  '/products/ponds-pimple-clear-face-wash/promo-1.png',
  '/products/ponds-pimple-clear-face-wash/promo-2.png',
  '/products/ponds-pimple-clear-face-wash/back.png',
]

const neutrogenaHydroBoostWaterGelImages = [
  '/products/neutrogena-hydro-boost-water-gel/main.png',
  '/products/neutrogena-hydro-boost-water-gel/promo-1.png',
  '/products/neutrogena-hydro-boost-water-gel/promo-2.png',
  '/products/neutrogena-hydro-boost-water-gel/promo-3.png',
]

const niveaSoftMoisturizingCreamImages = [
  '/products/nivea-soft-moisturizing-cream/main.png',
  '/products/nivea-soft-moisturizing-cream/promo-1.png',
  '/products/nivea-soft-moisturizing-cream/promo-2.png',
  '/products/nivea-soft-moisturizing-cream/promo-3.png',
]

const cetaphilBrighteningDayProtectionCreamImages = [
  '/products/cetaphil-brightening-day-protection-cream/main.png',
  '/products/cetaphil-brightening-day-protection-cream/packaging-update.png',
  '/products/cetaphil-brightening-day-protection-cream/promo-1.png',
  '/products/cetaphil-brightening-day-protection-cream/promo-2.png',
]

const garnierVitaminCSorbetMoisturizerImages = [
  '/products/garnier-vitamin-c-sorbet-moisturizer/main.png',
  '/products/garnier-vitamin-c-sorbet-moisturizer/promo-1.png',
  '/products/garnier-vitamin-c-sorbet-moisturizer/promo-2.png',
  '/products/garnier-vitamin-c-sorbet-moisturizer/promo-3.png',
]

const garnierNiacinamideSorbetMoisturizerImages = [
  '/products/garnier-niacinamide-sorbet-moisturizer/main.png',
  '/products/garnier-niacinamide-sorbet-moisturizer/promo-1.png',
  '/products/garnier-niacinamide-sorbet-moisturizer/promo-2.png',
  '/products/garnier-niacinamide-sorbet-moisturizer/promo-3.png',
]

const plumGreenTeaOilFreeMoisturizerImages = [
  '/products/plum-green-tea-oil-free-moisturizer/main.png',
  '/products/plum-green-tea-oil-free-moisturizer/packaging-update.png',
  '/products/plum-green-tea-oil-free-moisturizer/promo-1.png',
  '/products/plum-green-tea-oil-free-moisturizer/promo-2.png',
]

const minimalistCeramideMoisturizerImages = [
  '/products/minimalist-ceramide-moisturizer/main.png',
  '/products/minimalist-ceramide-moisturizer/promo-1.png',
  '/products/minimalist-ceramide-moisturizer/promo-2.png',
  '/products/minimalist-ceramide-moisturizer/promo-3.png',
]

const neutrogenaUltraSheerSunscreenImages = [
  '/products/neutrogena-ultra-sheer-sunscreen/main.png',
  '/products/neutrogena-ultra-sheer-sunscreen/promo-1.png',
  '/products/neutrogena-ultra-sheer-sunscreen/promo-2.png',
  '/products/neutrogena-ultra-sheer-sunscreen/promo-3.png',
]

const himalayaSunProtectUltraLightSunscreenImages = [
  '/products/himalaya-sun-protect-ultra-light-sunscreen/main.png',
  '/products/himalaya-sun-protect-ultra-light-sunscreen/promo-1.png',
  '/products/himalaya-sun-protect-ultra-light-sunscreen/promo-2.png',
  '/products/himalaya-sun-protect-ultra-light-sunscreen/back.png',
]

const garnierSuperUVInvisibleSerumSunscreenImages = [
  '/products/garnier-super-uv-invisible-serum-sunscreen/main.png',
  '/products/garnier-super-uv-invisible-serum-sunscreen/promo-1.png',
  '/products/garnier-super-uv-invisible-serum-sunscreen/promo-2.png',
  '/products/garnier-super-uv-invisible-serum-sunscreen/promo-3.png',
]

const minimalistSunscreenSPF50Images = [
  '/products/minimalist-sunscreen-spf-50/main.png',
  '/products/minimalist-sunscreen-spf-50/promo-1.png',
  '/products/minimalist-sunscreen-spf-50/promo-2.png',
  '/products/minimalist-sunscreen-spf-50/promo-3.png',
]

const minimalistNiacinamide10SerumImages = [
  '/products/minimalist-niacinamide-10-serum/main.png',
  '/products/minimalist-niacinamide-10-serum/promo-1.png',
  '/products/minimalist-niacinamide-10-serum/promo-2.png',
  '/products/minimalist-niacinamide-10-serum/promo-3.png',
]

const lorealRevitaliftHyaluronicAcidSerumImages = [
  '/products/loreal-revitalift-hyaluronic-acid-serum/main.png',
  '/products/loreal-revitalift-hyaluronic-acid-serum/promo-1.png',
  '/products/loreal-revitalift-hyaluronic-acid-serum/promo-2.png',
  '/products/loreal-revitalift-hyaluronic-acid-serum/promo-3.png',
]

const plumGreenTeaAlcoholFreeTonerImages = [
  '/products/plum-green-tea-alcohol-free-toner/main.png',
  '/products/plum-green-tea-alcohol-free-toner/promo-1.png',
  '/products/plum-green-tea-alcohol-free-toner/promo-2.png',
  '/products/plum-green-tea-alcohol-free-toner/promo-3.png',
]

const maybellineFitMeFoundationImages = [
  '/products/maybelline-fit-me-foundation/shade-115-ivory.png',
  '/products/maybelline-fit-me-foundation/shade-120-classic-ivory.png',
  '/products/maybelline-fit-me-foundation/shade-230-natural-buff.png',
  '/products/maybelline-fit-me-foundation/shade-310-sun-beige.png',
  '/products/maybelline-fit-me-foundation/shade-330-toffee.png',
]

const lakme9to5PowerplayFoundationImages = [
  '/products/lakme-9to5-powerplay-foundation/shade-c100-cool-ivory.png',
  '/products/lakme-9to5-powerplay-foundation/shade-w120-warm-creme.png',
  '/products/lakme-9to5-powerplay-foundation/shade-c140-cool-rose.png',
  '/products/lakme-9to5-powerplay-foundation/shade-w160-warm-sand.png',
  '/products/lakme-9to5-powerplay-foundation/shade-w180-warm-natural.png',
  '/products/lakme-9to5-powerplay-foundation/shade-chart.png',
]

const lakme9to5PowerplayMatteLipstickImages = [
  '/products/lakme-9to5-powerplay-matte-lipstick/shade-red-letter.png',
  '/products/lakme-9to5-powerplay-matte-lipstick/shade-chocolate-crush.png',
  '/products/lakme-9to5-powerplay-matte-lipstick/shade-red-coat.png',
  '/products/lakme-9to5-powerplay-matte-lipstick/shade-red-rust.png',
  '/products/lakme-9to5-powerplay-matte-lipstick/shade-berry-base.png',
  '/products/lakme-9to5-powerplay-matte-lipstick/shade-chart.png',
]

const nykaaAllDayMatteFoundationImages = [
  '/products/nykaa-all-day-matte-foundation/shade-ivory-01.png',
  '/products/nykaa-all-day-matte-foundation/shade-vanilla-02.png',
  '/products/nykaa-all-day-matte-foundation/shade-cashew-03.png',
  '/products/nykaa-all-day-matte-foundation/shade-petal-04.png',
  '/products/nykaa-all-day-matte-foundation/promo.png',
  '/products/nykaa-all-day-matte-foundation/shade-chart.png',
]

const maybellineFitMeConcealerImages = [
  '/products/maybelline-fit-me-concealer/shade-10-light.png',
  '/products/maybelline-fit-me-concealer/shade-15-fair.png',
  '/products/maybelline-fit-me-concealer/shade-20-sand.png',
  '/products/maybelline-fit-me-concealer/shade-25-medium.png',
  '/products/maybelline-fit-me-concealer/shade-36-golden.png',
]

const maybellineSensationalLiquidMatteImages = [
  '/products/maybelline-sensational-liquid-matte-lipstick/shade-nu01-bare-it-all.png',
  '/products/maybelline-sensational-liquid-matte-lipstick/shade-nu04-bare-temptation.png',
  '/products/maybelline-sensational-liquid-matte-lipstick/shade-06-best-babe.png',
  '/products/maybelline-sensational-liquid-matte-lipstick/shade-04-easy-berry.png',
  '/products/maybelline-sensational-liquid-matte-lipstick/shade-03-flush-it-red.png',
]

const maybellineSuperstayMatteInkImages = [
  '/products/maybelline-superstay-matte-ink-lipstick/shade-amazonian.png',
  '/products/maybelline-superstay-matte-ink-lipstick/shade-ambitious.png',
  '/products/maybelline-superstay-matte-ink-lipstick/shade-artist.png',
  '/products/maybelline-superstay-matte-ink-lipstick/shade-brooklyn-blush-enchanter.png',
  '/products/maybelline-superstay-matte-ink-lipstick/shade-dancer.png',
]

const nykaaSoCremeCreamyMatteLipstickImages = [
  '/products/nykaa-so-creme-creamy-matte-lipstick/shade-game-on.png',
]

export const catalog: CatalogEntry[] = [
  product({
    name: 'Gentle Skin Cleanser',
    brand: 'Cetaphil',
    subCategory: 'Face Wash',
    price: 390,
    mrp: 459,
    images: cetaphilCleanserImages,
    featured: true,
    popular: true,
    shortDescription:
      'Dermatologist-recommended gentle cleanser for dry to normal, sensitive skin. Hydrates as it cleanses.',
    fullDescription:
      'Designed with a science-backed blend of niacinamide (essential vitamin B3), panthenol (pro-vitamin B5) and hydrating glycerin to help improve the resilience of sensitive skin. This creamy formula is clinically proven to provide continuous hydration to protect against dryness. Formula that gently yet effectively removes dirt, makeup and impurities. Dermatologist tested and clinically proven to be gentle on sensitive skin.',
    benefits: [
      '94% of users felt the product gently cleansed their skin',
      'Defends against 5 signs of skin sensitivity',
      'Dryness, irritation, roughness, tightness, weakened skin barrier',
      'Hydrates as it cleanses for dry to normal, sensitive skin',
      'Dermatologist tested and recommended',
    ],
    ingredients:
      'Niacinamide (Vitamin B3), Panthenol (Pro-Vitamin B5), Hydrating Glycerin. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply to wet skin, massage gently and rinse. Use morning and evening. Suitable for face and body.',
    variants: [{ label: '118 ml', sku: 'cetaphil-gsc-118' }],
  }),
  product({
    name: 'Cleansing & Moisturising Syndet Bar',
    brand: 'Cetaphil',
    subCategory: 'Soap',
    price: 150,
    mrp: 200,
    images: cetaphilSyndetBarImages,
    featured: true,
    popular: true,
    shortDescription:
      'Gentle non-soap syndet bar for face and body. Enriched with shea butter for dry, sensitive skin.',
    fullDescription:
      'Cetaphil Cleansing and Moisturising Syndet Bar is a gentle, non-soap bar specially designed to cleanse and moisturize even the most sensitive skin. Formulated with Shea Blend helps moisturize even the most dry skin types. Ideal for dry, sensitive skin.',
    benefits: [
      'pH balanced',
      'Paraben-free',
      'Hypoallergenic',
      'Soap free',
      'Dermatologist tested',
      'Enriched with shea butter for soft & moisturized skin',
      'Non-irritating formula for face and body',
    ],
    ingredients:
      'Shea butter blend, syndet cleansing base. Paraben-free. Refer to packaging for full ingredient list.',
    howToUse:
      'Wet skin, lather the bar gently and rinse. Use on face and body during bath or shower. Suitable for daily use.',
    variants: [{ label: '100 g', sku: 'cetaphil-syndet-100g' }],
  }),
  product({
    name: 'Moisturising Lotion',
    brand: 'Cetaphil',
    subCategory: 'Moisturizer',
    price: 670,
    mrp: 789,
    images: cetaphilMoisturisingLotionImages,
    featured: true,
    popular: true,
    shortDescription:
      'Lightweight lotion for normal to combination, sensitive skin. 48-hour hydration with avocado oil & vitamins.',
    fullDescription:
      'Specially formulated with a dermatologist-backed blend of niacinamide (vitamin B3), panthenol (pro-vitamin B5) and hydrating glycerin to help improve the resilience of sensitive skin. This lightweight lotion is clinically proven to instantly soothe and provide lasting 48-hour hydration. Dermatologist tested and clinically proven to be gentle on sensitive skin.',
    benefits: [
      'Completely restores skin\'s natural moisture barrier in 1 week',
      '94% of users noted that skin felt fully hydrated after 1 use',
      '48-hour lasting hydration',
      'Defends against 5 signs of skin sensitivity',
      'Dryness, irritation, roughness, tightness, weakened skin barrier',
      'Dermatologist tested for sensitive skin',
    ],
    ingredients:
      'Avocado Oil, Niacinamide (Vitamin B3), Panthenol (Pro-Vitamin B5), Vitamin E, Hydrating Glycerin. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply generously to face and body after cleansing. Use morning and evening. Massage gently until absorbed.',
    variants: [{ label: '118 ml', sku: 'cetaphil-ml-118' }],
  }),
  product({
    name: 'Oil Clear Lemon Face Wash',
    brand: 'Himalaya',
    subCategory: 'Face Wash',
    price: 95,
    images: himalayaOilClearLemonImages,
    featured: true,
    popular: true,
    shortDescription:
      'Soap-free face wash with lemon & honey. Oil-free fresh look for up to 12 hours.',
    fullDescription:
      'Himalaya Oil Clear Lemon Face Wash is a clinically tested soap-free formulation enriched with Lemon, Honey, and natural beads. The oil-clearing formula with the double cleansing action of natural beads and botanical extracts effectively cleanses excess oil, leaving your skin feeling fresh and oil free for up to 12 hours.',
    benefits: [
      'Oil-free fresh look for up to 12 hours',
      'Double cleansing action of lemon & natural beads',
      'Soap-free formulation',
      'Paraben-free',
      'Skin-friendly pH',
      'Dermatologically tested',
      '100% recyclable tube',
    ],
    ingredients: 'Honey, Lemon, Natural cleansing beads. Refer to packaging for full ingredient list.',
    howToUse:
      'Moisten face, apply a small amount and massage gently avoiding the eye area. Rinse thoroughly. Use twice daily.',
    variants: [{ label: '50 ml', sku: 'himalaya-oclfw-50' }],
  }),
  product({
    name: 'Purifying Neem Face Wash',
    brand: 'Himalaya',
    subCategory: 'Face Wash',
    price: 187,
    mrp: 206,
    images: himalayaPurifyingNeemImages,
    featured: true,
    popular: true,
    shortDescription:
      'Soap-free herbal face wash with neem & turmeric. Clears pimples and prevents acne recurrence.',
    fullDescription:
      "Himalaya's Purifying Neem Face Wash is a soap-free, herbal formulation that cleans impurities and helps clear pimples. A natural blend of neem and turmeric brings together their antibacterial and antifungal properties to prevent the recurrence of acne over time. Neem improves general skin health and immunity, combating bacterial infections such as acne, boils and ulcers. Turmeric helps even out skin tone and color, making it an excellent ingredient in a face wash.",
    benefits: [
      'Clinically proven clears & prevents pimples',
      'Best for acne prone skin',
      'Soap-free, paraben & phthalates free',
      'Goodness of 5 parts of neem',
      'Acne prevention, oil control & hydrating',
      'Skin-friendly pH, 100% recyclable tube',
      'Dermatologically tested',
    ],
    ingredients:
      'Neem (Azadirachta indica) — leaves, stem, fruit, flower; Turmeric (Haridra). Refer to packaging for full ingredient list.',
    howToUse:
      'Moisten face and neck, apply a small amount and gently work up a lather in circular motion. Wash off and pat dry. Use twice daily.',
    variants: [{ label: '150 ml', sku: 'himalaya-pnfw-150' }],
  }),
  product({
    name: 'Bright Complete Vitamin C Face Wash',
    brand: 'Garnier',
    subCategory: 'Face Wash',
    price: 219,
    mrp: 378,
    images: garnierBrightCompleteVitaminCImages,
    featured: true,
    popular: true,
    shortDescription:
      'Vitamin C face wash with lemon for brighter, glowing skin. Clears dullness — suitable for all skin types.',
    fullDescription:
      'Garnier Skin Naturals Bright Complete Vitamin C Face Wash offers a boost of freshness by removing dirt, dust, sebum, and impurities. Enriched with lemon and Vitamin C, it helps reduce dullness, brighten skin from within, and lessen dark spots and acne marks. Dermatologically tested and suitable for all skin types.',
    benefits: [
      'Instant boost of freshness and radiance',
      'Reduces dullness with lemon & Vitamin C',
      'Brightens skin and helps clear dark spots',
      'Lessens acne marks over time',
      'Suitable for all skin types',
      'Dermatologically tested',
      'Contains salicylic acid (0.2% w/w)',
    ],
    ingredients:
      'Vitamin C, Lemon extract, Almond Oil, Salicylic Acid (0.2% w/w). Refer to packaging for full ingredient list.',
    howToUse:
      'Apply on wet face, massage gently and rinse. Use daily morning and evening. Pair with Garnier Vitamin C serum for best results.',
    variants: [{ label: '150 g', sku: 'garnier-bcvcfw-150g' }],
  }),
  product({
    name: 'Bright Complete Vitamin C Face Wash XL',
    brand: 'Garnier',
    subCategory: 'Face Wash',
    price: 209,
    mrp: 299,
    slug: 'bright-complete-vitamin-c-face-wash-160g-garnier',
    images: garnierBrightCompleteVitaminC160gImages,
    featured: true,
    popular: true,
    shortDescription:
      'XL pack Vitamin C face wash with lemon for brightening & glowing skin. Daily cleanser for all skin types.',
    fullDescription:
      'Garnier Bright Complete Vitamin C Face Wash offers a boost of freshness by removing dirt, dust, sebum, and impurities. Enriched with lemon and Vitamin C, it reduces dullness, brightens skin from within, and helps lessen dark spots and acne marks. Suitable for women and men, all skin types.',
    benefits: [
      'Instant boost of freshness and radiance',
      'Reduces dullness with lemon & Vitamin C',
      'Brightens skin — pair with Garnier Vitamin C serum',
      'Lessens dark spots and acne marks',
      'Suitable for all skin types',
      'Dermatologically tested',
      'XL pack — great value size',
    ],
    ingredients:
      'Vitamin C, Lemon extract. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply on wet face, massage gently and rinse. Use daily morning and evening. Pair with Garnier Vitamin C serum for best results.',
    variants: [{ label: '160 g', sku: 'garnier-bcvcfw-160g' }],
  }),
  product({
    name: 'Pimple Clear Face Wash',
    brand: "POND'S",
    subCategory: 'Face Wash',
    price: 295,
    images: pondsPimpleClearFaceWashImages,
    featured: true,
    popular: true,
    shortDescription:
      'Clears pimples in 3 days with active Thymo-T Essence and Lock + Clear Technology. Suitable for oily and dry skin.',
    fullDescription:
      "POND'S Pimple Clear Face Wash offers the best solution for pimples and acne thanks to its unique formula with active Thymo-T Essence. It penetrates deep into your skin's epidermis to lock pimple-causing germs at the root and helps clear them away. Formulated with the world's first Lock + Clear Technology, clinically proven to start showing results in just three days — giving you clearer, healthier, smoother skin.",
    benefits: [
      'Helps reduce pimples in 3 days',
      'Active Thymo-T Essence targets pimples at the root',
      "World's first Lock + Clear Technology",
      'Gentle exfoliating face wash',
      'Works for oily and dry skin types',
      'Clinically proven results',
      'Formulated by The POND\'S Institute',
    ],
    ingredients:
      'Active Thymo-T Essence (Thymol, Terpineol), Salicylic Acid, Niacinamide, Glycerin, Menthol. Refer to packaging for full ingredient list.',
    howToUse:
      'Wet face, take a small amount and rub with water until foamy. Apply to face and neck and gently massage. Rinse thoroughly. Use morning and evening for best results.',
    variants: [{ label: '100 g', sku: 'ponds-pcfw-100g' }],
  }),
  product({
    name: 'Hydro Boost Hyaluronic Acid Water Gel',
    brand: 'Neutrogena',
    subCategory: 'Moisturizer',
    price: 744,
    mrp: 1048,
    images: neutrogenaHydroBoostWaterGelImages,
    featured: true,
    popular: true,
    shortDescription:
      'Oil-free, non-sticky water gel with 24-hour hydration. Fast absorbing, weightless — for all skin types, men & women.',
    fullDescription:
      'Forget everything you have been told about moisturizing! Neutrogena Hydro Boost Water Gel delivers intense hydration with a unique lightweight, fresh texture that is instantly absorbed. Unlike traditional moisturizers that only seal moisture in, this hydrating gel increases the water content of your skin. Formulated with hyaluronic acid boosted with electrolytes for weightless hydration that goes deep. Dermatologist tested and non-comedogenic.',
    benefits: [
      '24 hours long-lasting hydration',
      '50% more hyaluronic acid formula',
      'Oil-free, non-sticky & fast absorbing',
      'Lightweight water gel texture',
      'Boosted with electrolytes',
      'Dermatologist tested & non-comedogenic',
      'Suitable for dry, normal & all skin types',
    ],
    ingredients:
      'Water, Glycerin, Dimethicone, Sodium Hyaluronate, Cetearyl Olivate, Sorbitan Olivate, Phenoxyethanol, Carbomer. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply evenly to face and neck after cleansing. Use morning and evening as part of your daily skincare routine.',
    variants: [{ label: '50 ml', sku: 'neutrogena-hbwg-50ml' }],
  }),
  product({
    name: 'Soft Light Moisturizing Cream',
    brand: 'NIVEA',
    subCategory: 'Moisturizer',
    price: 326,
    mrp: 660,
    images: niveaSoftMoisturizingCreamImages,
    featured: true,
    popular: true,
    shortDescription:
      'Lightweight non-sticky daily moisturizer with 72Hr hydration. Vitamin E & jojoba oil — for face, body & hands.',
    fullDescription:
      'NIVEA Soft Light Moisturizing Cream delivers 72-hour hydration and intensive moisturization for dry to normal skin. Enriched with Vitamin E and 100% natural Jojoba Oil, this vegan formula nourishes and refreshes skin for a soft, smooth, healthy-looking glow. Quick absorbing with a non-greasy, non-sticky texture — ideal for everyday use on face, body and hands.',
    benefits: [
      '72Hr hydration & intensive moisturization',
      'Vitamin E & 100% natural Jojoba Oil',
      'Lightweight, non-sticky & quick absorbing',
      '2X moisturizers with 300% hydration boost',
      'Non-comedogenic & dermatologically approved',
      'Vegan formula — no animal derived ingredients',
      'Multi-purpose: face, body & hands',
    ],
    ingredients:
      'Vitamin E, 100% Natural Jojoba Oil. Vegan formula. Refer to packaging for full ingredient list.',
    howToUse:
      'Take a small amount and massage gently into face, body or hands until absorbed. Use daily for soft, fresh, glowing skin.',
    variants: [{ label: '300 ml', sku: 'nivea-soft-300ml' }],
  }),
  product({
    name: 'Brightening Day Protection Cream SPF 15',
    brand: 'Cetaphil',
    subCategory: 'Moisturizer',
    price: 1189,
    mrp: 1201,
    images: cetaphilBrighteningDayProtectionCreamImages,
    featured: true,
    popular: true,
    shortDescription:
      'Day cream for dark spots & uneven skin tone with Niacinamide & Sea Daffodil. SPF 15, fragrance-free.',
    fullDescription:
      'Cetaphil Bright Healthy Radiance Brightening Day Protection Cream visibly corrects dark spots, evens skin tone and boosts brightness in 4 weeks without irritating or weakening the skin barrier. Formulated with GentleBright Technology — Natural Sea Daffodil Extract and Brightening Niacinamide — it illuminates skin, provides 24-hour hydration, and offers daily SPF 15 protection. Dermatologist developed, clinically tested and fragrance-free for sensitive skin.',
    benefits: [
      'Reduces dark spots & evens skin tone in 4 weeks',
      'GentleBright Technology with Niacinamide & Sea Daffodil',
      '24-hour hydration & illuminates skin',
      'Daily SPF 15 sun protection',
      'Fragrance-free, hypoallergenic & non-greasy',
      'Dermatologist developed for sensitive skin',
      'Clinically proven to respect skin barrier',
    ],
    ingredients:
      'Niacinamide, Natural Sea Daffodil Extract, GentleBright Technology. Fragrance-free. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply evenly to face and neck every morning as the last step of your skincare routine. Use daily for best results.',
    variants: [{ label: '50 g', sku: 'cetaphil-bdpc-50g' }],
  }),
  product({
    name: 'Fresh & Bright Vitamin C Sorbet Moisturizer',
    brand: 'Garnier',
    subCategory: 'Moisturizer',
    price: 299,
    images: garnierVitaminCSorbetMoisturizerImages,
    featured: true,
    popular: true,
    shortDescription:
      '4.5% Vit C + hyaluronic acid + niacinamide + BHA. 9x lighter sorbet cream for hydration & dark spot reduction.',
    fullDescription:
      'Garnier Vitamin C Fresh & Bright Sorbet Moisturizer delivers 48-hour hydration with a 9x lighter, fast-absorbing sorbet texture. Powered by 4.5% Vitamin C, Hyaluronic Acid, Niacinamide and BHA, it visibly brightens skin, reduces dullness, and helps fade dark spots. Oil-free and non-comedogenic — ideal for oily, normal and combination skin.',
    benefits: [
      '48-hour hydration',
      '9x lighter sorbet texture — fast absorbing',
      '4.5% Vit C + Niacinamide + Hyaluron + BHA',
      'Visible brightening & dark spot reduction',
      'Oil-free & non-comedogenic',
      'All-day oil control',
      'Dermatologically tested & hypoallergenic',
    ],
    ingredients:
      '4.5% Vitamin C, Hyaluronic Acid, Niacinamide, BHA. Oil-free formula. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply a small amount to cleansed face and neck morning and evening. Massage gently until absorbed.',
    variants: [{ label: '45 g', sku: 'garnier-vcsm-45g' }],
  }),
  product({
    name: 'Fresh & Plump Niacinamide Sorbet Moisturizer',
    brand: 'Garnier',
    subCategory: 'Moisturizer',
    price: 239,
    mrp: 299,
    images: garnierNiacinamideSorbetMoisturizerImages,
    featured: true,
    popular: true,
    shortDescription:
      '4.5% Niacinamide + Peptide + BHA + Vitamin C. 9x lighter sorbet cream for hydrated, plump skin.',
    fullDescription:
      'Garnier Niacinamide Fresh & Plump Sorbet Moisturizer provides 48-hour hydration with an ultra-light, 9x lighter sorbet texture that absorbs quickly without residue. Powered by 4.5% Niacinamide, Peptide, BHA and Vitamin C, it helps skin feel fuller, smoother and shine-free while reducing dullness. Oil-free, non-comedogenic and dermatologically tested for daily use.',
    benefits: [
      '48-hour hydration',
      '9x lighter sorbet texture — fast absorbing',
      '4.5% Niacinamide + Peptide + BHA + Vitamin C',
      '83% plumper skin in 1 week',
      'Plump, non-oily & all-day glow',
      'Oil-free & non-comedogenic',
      'Dermatologically tested & hypoallergenic',
    ],
    ingredients:
      '4.5% Niacinamide, Peptide, BHA, Vitamin C. Oil-free formula. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply a small amount to cleansed face and neck morning and evening. Massage gently until absorbed.',
    variants: [{ label: '45 g', sku: 'garnier-npsm-45g' }],
  }),
  product({
    name: 'Green Tea Oil-Free Face Moisturizer',
    brand: 'Plum',
    subCategory: 'Moisturizer',
    price: 423,
    mrp: 470,
    images: plumGreenTeaOilFreeMoisturizerImages,
    featured: true,
    popular: true,
    shortDescription:
      'Oil-free moisturizer with niacinamide & hyaluronic acid. Fights pimples, hydrates & brightens — non-sticky.',
    fullDescription:
      'Plum Green Tea Oil-Free Face Moisturizer is a lightweight, non-sticky cream perfect for oily, combination and acne-prone skin. Enriched with Green Tea, Niacinamide and Hyaluronic Acid, it fights pimples and excess oil, fades blemishes, brightens skin, and provides long-lasting hydration. 100% vegan formula.',
    benefits: [
      'Oil-free & non-sticky formula',
      'Fights pimples & controls excess oil',
      'Niacinamide fades blemishes & brightens',
      'Hyaluronic acid for long-lasting hydration',
      'Green tea antioxidant care',
      '100% vegan',
      'Suitable for oily, combination & sensitive skin',
    ],
    ingredients:
      'Green Tea extract, Niacinamide, Hyaluronic Acid. Oil-free formula. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply one dot each on forehead, cheeks, chin and nose. Gently massage in slow, upward-outward circular motions, including the neck. Use AM & PM.',
    variants: [{ label: '50 ml', sku: 'plum-gtom-50ml' }],
  }),
  product({
    name: '0.3% Ceramide Face Moisturizer',
    brand: 'Minimalist',
    subCategory: 'Moisturizer',
    price: 569,
    mrp: 599,
    images: minimalistCeramideMoisturizerImages,
    featured: true,
    popular: true,
    shortDescription:
      'Barrier repair moisturizer with 0.3% ceramides, madecassoside & ursolic acid. For oily & combination skin.',
    fullDescription:
      'Minimalist 0.3% Ceramide Face Moisturizer delivers deep moisturization and daily barrier repair for oily and combination skin. Formulated with 0.3% active concentration of 5 skin-essential ceramides along with Ursolic Acid, in a Ceramide:Cholesterol:Fatty Acid ratio of 3:1:1 proven to accelerate skin barrier recovery. Boosted with Madecassoside for soothing, and GABA & aquaporin-boosting ingredients for intense hydration. Features iActive Ceramide sourced from Kimika, USA.',
    benefits: [
      '0.3% ceramides — repairs damaged skin barrier',
      '5 essential ceramides + ursolic acid',
      '3:1:1 ceramide:cholesterol:fatty acid ratio',
      'Madecassoside soothes & hydrates',
      'GABA for intense skin hydration',
      'Non-comedogenic & dermatologist tested',
      'Fragrance-free, unscented formula',
    ],
    ingredients:
      '0.3% Ceramides (iActive Ceramide from Kimika USA), Madecassoside, Ursolic Acid, GABA. Free from fragrance, silicones, sulphates, parabens, dyes & essential oils. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply a small amount to cleansed face and neck. Massage gently until absorbed. Use morning and evening daily.',
    variants: [{ label: '50 g', sku: 'minimalist-cm-50g' }],
  }),
  product({
    name: 'Ultra Sheer Dry-Touch Sunblock SPF 50+',
    brand: 'Neutrogena',
    subCategory: 'Sunscreen',
    price: 775,
    images: neutrogenaUltraSheerSunscreenImages,
    featured: true,
    popular: true,
    shortDescription:
      'SPF 50+ PA++++ sunscreen with Helioplex XP. No white cast, water resistant — ultra light for all skin types.',
    fullDescription:
      'Neutrogena Ultra Sheer Dry-Touch Sunblock provides broad spectrum SPF 50+ PA++++ protection against UVA and UVB rays with Helioplex XP technology. Ultra-light, oil-free and non-comedogenic with a dry-touch, non-shiny finish and no white cast. Water and sweat resistant — suitable for oily, dry, normal and sensitive skin, for men and women.',
    benefits: [
      'SPF 50+ PA++++ broad spectrum protection',
      'Helioplex XP — superior photostability',
      'No white cast, dry-touch finish',
      'Water & sweat resistant',
      'Blue light protection',
      'Oil-free & non-comedogenic',
      'Dermatologist tested — all skin types',
    ],
    ingredients:
      'Homosalate, Ethylhexyl Salicylate, Octocrylene, Avobenzone (Butyl Methoxydibenzoylmethane), Helioplex XP. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply generously 15 minutes before sun exposure. Reapply every 2 hours or after swimming or sweating. Use daily on face and exposed skin.',
    variants: [{ label: '80 g', sku: 'neutrogena-uss-80g' }],
  }),
  product({
    name: 'Sun Protect+ Ultra Light Sunscreen Crème Gel',
    brand: 'Himalaya',
    subCategory: 'Sunscreen',
    price: 291,
    mrp: 449,
    images: himalayaSunProtectUltraLightSunscreenImages,
    featured: true,
    popular: true,
    shortDescription:
      'SPF 50 PA++++ crème gel with 90% natural origin. No white cast, sweat resistant — for all skin types.',
    fullDescription:
      'Himalaya Sun Protect+ Ultra Light Sunscreen Crème Gel provides SPF 50 PA++++ broad spectrum protection against UVA, UVB and blue light. Made with 90% natural origin new-gen UV and mineral filters. Ultra-light, fast-absorbing crème gel with zero white cast — ideal for hot and humid conditions. Enriched with Jojoba and Vitamin E for up to 24-hour lightweight moisturization. In vivo tested and dermatologically tested for all skin types.',
    benefits: [
      'SPF 50 PA++++ broad spectrum protection',
      '90% natural origin ingredients',
      'Ultra-light crème gel — no white cast',
      'Sweat & water resistant',
      'Jojoba & Vitamin E — 24Hr moisturization',
      'Prevents tanning, pigmentation & sun damage',
      'Dermatologically tested for all skin types',
    ],
    ingredients:
      'Jojoba Seed Oil, Vitamin E, Wheat Germ Oil, Titanium Dioxide, natural origin UV filters. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply generously 15 minutes before sun exposure on face and exposed skin. Reapply every 2 hours or after swimming or sweating.',
    variants: [{ label: '50 g', sku: 'himalaya-spuls-50g' }],
  }),
  product({
    name: 'Super UV Invisible Serum Sunscreen',
    brand: 'Garnier',
    subCategory: 'Sunscreen',
    price: 349,
    images: garnierSuperUVInvisibleSerumSunscreenImages,
    featured: true,
    popular: true,
    shortDescription:
      'SPF 50+ PA++++ invisible serum sunscreen with Vitamin C. No white cast, light-as-air — for all skin types.',
    fullDescription:
      'Garnier Super UV Invisible Serum Sunscreen SPF 50+ with Vitamin C protects from sun damage while leaving skin bright. Its serum-based broad-spectrum formula with AIR LOCK™ technology feels light-as-air, stays invisible on skin, and leaves zero white cast. Dual action formula — SPF 50+ PA++++ protects while Vitamin C corrects dullness and dark spots. No oil, no paraben, no oxybenzone — suitable for all skin types and Asian skin tones.',
    benefits: [
      'SPF 50+ PA++++ broad spectrum protection',
      'AIR LOCK™ technology — locks UV filters on skin',
      'Invisible finish — no white cast',
      'Vitamin C — brightens & fights sunspots',
      'Light-as-air serum texture',
      'No oil, no paraben, no oxybenzone',
      'Suitable for all skin types',
    ],
    ingredients:
      'Vitamin C (Ascorbyl Glucoside), Lemon Fruit Extract, Hyaluronic Acid, Peptides. No oil, paraben or oxybenzone. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply generously 15 minutes before sun exposure on face and neck. Reapply every 2 hours. Use daily as the last step of your skincare routine.',
    variants: [{ label: '30 ml', sku: 'garnier-suviss-30ml' }],
  }),
  product({
    name: 'Sunscreen SPF 50',
    brand: 'Minimalist',
    subCategory: 'Sunscreen',
    price: 378,
    mrp: 399,
    images: minimalistSunscreenSPF50Images,
    featured: true,
    popular: true,
    shortDescription:
      'Broad spectrum SPF 50 PA++++ with niacinamide & multi-vitamins. In vivo tested, no white cast — for all skin types.',
    fullDescription:
      'Minimalist Sunscreen SPF 50 provides broad spectrum protection with 4 highly effective UV filters — Uvinul T150, Avobenzone, Octocrylene and Titanium Dioxide. Boosted with Vitamins A, B3, B5, E and F plus Niacinamide to repair post-sun damage, soothe and nourish. Clinically in vivo tested in the US. Lightweight moisturizer-like texture with no white cast — suitable for all skin types.',
    benefits: [
      'SPF 50 PA++++ broad spectrum protection',
      '4 UV filters — Uvinul T150, Avobenzone, Octocrylene, TiO₂',
      'Multi-vitamins A, B3, B5, E & F + Niacinamide',
      'In vivo & ISO certified — clinically tested',
      'No white cast, no greasy residue',
      'Lightweight, fast-absorbing texture',
      'UV filters sourced from BASF & Royal DSM',
    ],
    ingredients:
      'Niacinamide, Vitamin B5, Vitamin F, Titanium Dioxide, Avobenzone, Octocrylene, Uvinul T150. Unscented. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply generously 15 minutes before sun exposure on face and neck. Reapply every 2 hours. Use daily as the last step of your skincare routine.',
    variants: [{ label: '50 g', sku: 'minimalist-ss50-50g' }],
  }),
  product({
    name: 'Bright Complete Vitamin C Serum',
    brand: 'Garnier',
    subCategory: 'Serum',
    price: 619,
    featured: true,
    popular: true,
    shortDescription:
      'Concentrated Vitamin C serum with lemon extract. Brightens from first use, reduces dark spots in 3 days.',
    fullDescription:
      'Garnier Bright Complete Vitamin C Serum is Garnier\'s most concentrated brightening and spot-reduction formula. Enriched with Vitamin C, Niacinamide and lemon extract, this antioxidant-rich serum brightens skin from the first application and reduces dark spots and acne marks in just three days. Lightweight, non-oily formula that penetrates instantly. Dermatologically tested and suitable for all skin types.',
    benefits: [
      'Brightens skin from first application',
      'Reduces dark spots & acne marks in 3 days',
      'Most concentrated spot-reduction formula',
      'Vitamin C + Niacinamide + lemon extract',
      'Lightweight, non-oily & fast absorbing',
      'Antioxidant-rich brightening care',
      'Dermatologically tested — all skin types',
    ],
    ingredients:
      '3-O-Ethyl Ascorbic Acid (Vitamin C), Niacinamide, Lemon Fruit Extract, Salicylic Acid, Hyaluronic Acid. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply a few drops to cleansed face morning and evening before moisturizer. Gently pat until absorbed. Pair with Garnier Bright Complete face wash for best results.',
    variants: [{ label: '30 ml', sku: 'garnier-bcvc-serum-30ml' }],
  }),
  product({
    name: '10% Niacinamide Face Serum',
    brand: 'Minimalist',
    subCategory: 'Serum',
    price: 568,
    mrp: 598,
    images: minimalistNiacinamide10SerumImages,
    featured: true,
    popular: true,
    shortDescription:
      '10% Niacinamide with Zinc & Matmarine. Reduces acne marks, controls oil & minimizes pores.',
    fullDescription:
      'Minimalist 10% Niacinamide Face Serum with Zinc and Matmarine visibly reduces acne marks, dark spots and blemishes in as little as 2 weeks. Balances excess sebum, minimizes enlarged pores, and fights acne-causing bacteria. Strengthens the skin barrier and repairs sun and pollution damage. Fragrance-free, oil-free and non-comedogenic — ideal for oily and acne-prone skin.',
    benefits: [
      'Fades acne marks & dark spots in 2 weeks',
      '10% Niacinamide (Vitamin B3) + Zinc',
      'Controls oil & minimizes pores',
      'Matmarine for oil control & enlarged pores',
      'Anti-acne — prevents breakouts',
      'Strengthens skin barrier',
      'Fragrance-free, non-comedogenic & hypoallergenic',
    ],
    ingredients:
      '10% Niacinamide, Zinc, Matmarine, Acetyl Glucosamine. Free from fragrance, silicones, sulphates, parabens & essential oils. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply 2–3 drops after cleansing and gently massage until absorbed. Use AM & PM daily.',
    variants: [{ label: '30 ml', sku: 'minimalist-nia10-30ml' }],
  }),
  product({
    name: 'Revitalift 1.5% Hyaluronic Acid Serum',
    brand: "L'Oreal Paris",
    subCategory: 'Serum',
    price: 529,
    images: lorealRevitaliftHyaluronicAcidSerumImages,
    featured: true,
    popular: true,
    shortDescription:
      '1.5% micro-epidermic hyaluronic acid serum. Replumps skin in 1H, reduces fine lines — dermatologist validated.',
    fullDescription:
      "L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum features a fast efficacy formula with 50x smaller micro-epidermic hyaluronic acid for deep, fast penetration. With 3 types of hyaluronic acid — macro, micro and micro-epidermic — it intensely hydrates, smooths and replumps skin in 1 hour while reducing fine lines by 60%. Fragrance-free, paraben-free and alcohol-free. Validated by dermatologists.",
    benefits: [
      'Replumps skin in 1 hour',
      'Reduces fine lines by 60%',
      '1.5% micro-epidermic hyaluronic acid',
      '3 types of HA — macro, micro & micro-epidermic',
      '50x smaller molecules for deep penetration',
      'Fragrance, paraben & alcohol free',
      'Validated by dermatologists',
    ],
    ingredients:
      '1.5% Hyaluronic Acid (Macro, Micro, Micro-Epidermic). Fragrance-free, paraben-free, alcohol-free. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply a few drops to cleansed face and neck morning and evening. Gently pat until absorbed. Use daily AM & PM.',
    variants: [{ label: '15 ml', sku: 'loreal-rv-ha-15ml' }],
  }),
  product({
    name: 'Green Tea Alcohol-Free Toner',
    brand: 'Plum',
    subCategory: 'Toner',
    price: 378,
    mrp: 420,
    images: plumGreenTeaAlcoholFreeTonerImages,
    featured: true,
    popular: true,
    shortDescription:
      'Pore-tightening toner with green tea & glycolic acid. Alcohol-free — for oily & acne-prone skin.',
    fullDescription:
      'Plum Green Tea Alcohol-Free Toner refreshes, rebalances and takes control of oily skin. Controls excess oil, fights pimples and tightens pores without the dryness alcohol can cause. Enriched with green tea extract, glycolic acid and glycerin. Alcohol-free, non-comedogenic and dermatologically tested.',
    benefits: [
      'Tightens pores & controls excess oil',
      'Fights pimples with green tea extract',
      'Glycolic acid exfoliates dead skin',
      'Glycerin hydrates & tones skin',
      'Alcohol-free & non-drying',
      'Non-comedogenic',
      'Dermatologically tested — 100% vegan',
    ],
    ingredients:
      'Green Tea (Camellia Sinensis) Leaf Extract, Glycolic Acid, Glycerin. Alcohol-free. Refer to packaging for full ingredient list.',
    howToUse:
      'After cleansing, dab or spritz onto face and neck. Gently pat until absorbed. Use AM & PM. Follow with moisturizer.',
    variants: [{ label: '200 ml', sku: 'plum-gtat-200ml' }],
  }),
  product({
    name: 'Fit Me Matte + Poreless Foundation',
    brand: 'Maybelline New York',
    subCategory: 'Foundation',
    price: 649,
    images: maybellineFitMeFoundationImages,
    featured: true,
    popular: true,
    shortDescription:
      'Lightweight matte foundation with SPF 22 & 16H oil control. 5 shades — fits Indian skin tones.',
    fullDescription:
      'Maybelline Fit Me Matte + Poreless Foundation is made to fit diverse Indian skin tones with seamless, lightweight coverage. Super-blendable water-based formula refines pores, offers 16 hours of oil control and a natural matte finish with SPF 22 sun protection. Dermatologically tested, allergy tested and non-comedogenic — ideal for normal to oily and acne-prone skin. Available in shades 115, 120, 230, 310 and 330 (30 ml each).',
    benefits: [
      '16 hours oil control — natural matte finish',
      'SPF 22 sun protection',
      'Mattifying, poreless & lightweight',
      'Water-based — super blendable',
      'Dermatologically & allergy tested',
      'Non-comedogenic — acne-prone skin safe',
      '5 shades for light to deep Indian skin tones',
    ],
    ingredients:
      'Water-based liquid formula with SPF 22. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply a small amount to face and blend outward with fingers, brush or sponge. Build coverage as needed. Use daily. Pair with Fit Me concealer for a complete look.',
    variants: [
      { label: '115 Ivory', sku: 'maybelline-fitme-115' },
      { label: '120 Classic Ivory', sku: 'maybelline-fitme-120' },
      { label: '230 Natural Buff', sku: 'maybelline-fitme-230' },
      { label: '310 Sun Beige', sku: 'maybelline-fitme-310' },
      { label: '330 Toffee', sku: 'maybelline-fitme-330' },
    ],
  }),
  product({
    name: '9to5 Powerplay Priming Foundation',
    brand: 'Lakmé',
    subCategory: 'Foundation',
    price: 594,
    mrp: 699,
    images: lakme9to5PowerplayFoundationImages,
    featured: true,
    popular: true,
    shortDescription:
      'Built-in primer + matte foundation with SPF 20. 24H long wear — 5 shades for Indian skin tones.',
    fullDescription:
      "Lakmé 9to5 Powerplay Priming Foundation is Lakmé's first foundation with a built-in primer that glides on for smooth, even coverage. Blends effortlessly for a natural, flawless matte finish with medium to high buildable coverage. SPF 20 and 24-hour long-wear formula keeps skin looking natural through the day. Pore-minimising formula available in warm, cool and neutral undertones. Available in shades C100, W120, C140, W160 and W180 (25 ml each).",
    benefits: [
      'Built-in primer + matte foundation',
      'SPF 20 sun protection',
      '24-hour long-wear formula',
      'Medium to high buildable coverage',
      'Pore-minimising, natural flawless finish',
      'Warm, cool & neutral undertone shades',
      'Suits Indian skin tones',
    ],
    ingredients:
      'Water, Dimethicone, Cyclopentasiloxane, Octyl Salicylate, Silica, Iron Oxides. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply a small amount to face and blend outward with fingers or sponge. Build coverage as needed. Use daily for a natural, flawless look.',
    variants: [
      { label: 'C100 Cool Ivory', sku: 'lakme-powerplay-c100' },
      { label: 'W120 Warm Crème', sku: 'lakme-powerplay-w120' },
      { label: 'C140 Cool Rose', sku: 'lakme-powerplay-c140' },
      { label: 'W160 Warm Sand', sku: 'lakme-powerplay-w160' },
      { label: 'W180 Warm Natural', sku: 'lakme-powerplay-w180' },
    ],
  }),
  product({
    name: 'All Day Matte Foundation',
    brand: 'Nykaa',
    subCategory: 'Foundation',
    price: 519,
    mrp: 649,
    images: nykaaAllDayMatteFoundationImages,
    featured: true,
    popular: true,
    shortDescription:
      '10h+ long-wear matte foundation for normal to combination skin. Lightweight — 4 light shades in stock.',
    fullDescription:
      'Nykaa All Day Matte Foundation cocoons your skin in velvety matte coverage that feels like second skin. Lightweight, medium buildable coverage with a soft matte finish — no touch-ups needed even after a 12-hour day. Non-cakey formula for normal to combination skin. Available in 15 shades across the full range; light shades Ivory 01, Vanilla 02, Cashew 03 and Petal 04 currently in stock.',
    benefits: [
      '10h+ all-day wear formula',
      'Second skin feel — lightweight & comfortable',
      'Soft matte, medium buildable coverage',
      'Non-cakey on skin',
      'For normal to combination skin',
      '15 shades in full range',
      'Flawless from work to play',
    ],
    ingredients:
      'Liquid matte foundation formula. Refer to packaging for full ingredient list.',
    howToUse:
      'Dot foundation all over face, then blend well with fingers, brush or sponge. Build coverage as needed. Pair with Nykaa Prep Me Up Primer and set with All Day Matte Compact.',
    variants: [
      { label: 'Ivory 01', sku: 'nykaa-matte-01' },
      { label: 'Vanilla 02', sku: 'nykaa-matte-02' },
      { label: 'Cashew 03', sku: 'nykaa-matte-03' },
      { label: 'Petal 04', sku: 'nykaa-matte-04' },
    ],
  }),
  product({
    name: 'Fit Me Concealer',
    brand: 'Maybelline New York',
    subCategory: 'Concealer',
    price: 599,
    images: maybellineFitMeConcealerImages,
    featured: true,
    popular: true,
    shortDescription:
      'Oil-free liquid concealer with chamomile extract. Natural coverage — 5 shades for Indian skin tones.',
    fullDescription:
      'Maybelline Fit Me Concealer delivers natural coverage for dark spots, dark circles, redness and blemishes. Oil-free, fragrance-free and non-comedogenic liquid formula with chamomile extract. Sponge applicator helps spot and cover imperfections for a "your skin but better" look. Dermatologist and ophthalmologist tested — suits oily and dry skin. Available in shades 10, 15, 20, 25 and 36 (6.8 ml each).',
    benefits: [
      'Natural coverage — zero flaws look',
      'Hides dark circles, redness & blemishes',
      'Oil-free & fragrance-free',
      'Non-comedogenic formula',
      'With chamomile extract',
      'Dermatologist & ophthalmologist tested',
      '5 shades for Indian skin tones',
    ],
    ingredients:
      'Chamomile extract. Oil-free, fragrance-free formula. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply with the sponge applicator to under-eyes, blemishes or imperfections. Blend gently with fingers or sponge. Pair with Fit Me Foundation for a complete look.',
    variants: [
      { label: '10 Light', sku: 'maybelline-fitme-conc-10' },
      { label: '15 Fair', sku: 'maybelline-fitme-conc-15' },
      { label: '20 Sand', sku: 'maybelline-fitme-conc-20' },
      { label: '25 Medium', sku: 'maybelline-fitme-conc-25' },
      { label: '36 Golden', sku: 'maybelline-fitme-conc-36' },
    ],
  }),
  product({
    name: '9to5 Powerplay Priming Matte Lipstick',
    brand: 'Lakmé',
    subCategory: 'Lipstick',
    price: 553,
    mrp: 650,
    images: lakme9to5PowerplayMatteLipstickImages,
    featured: true,
    popular: true,
    shortDescription:
      'Built-in primer matte lipstick with 14H long wear. Smudge-proof, lightweight — 5 rich shades in stock.',
    fullDescription:
      'Lakmé 9to5 Powerplay Priming Matte Lipstick features 2x built-in primer for a long-lasting, smooth matte finish. Glides on comfortably and feels lightweight on lips while the primer helps colour settle evenly. 14-hour long-stay power means fewer touch-ups through the day. Rich matte colour payoff across reds, browns and plums without drying lips. Available in shades Red Letter, Chocolate Crush, Red Coat, Red Rust and Berry Base (3.6 g each). Pair with Lakmé 9to5 Powerplay Priming Foundation for a complete look.',
    benefits: [
      '2x built-in primer for smooth matte finish',
      '14-hour long-stay power',
      'Smudge-proof & lightweight on lips',
      'High-impact matte colour payoff',
      'Rich colour without drying lips',
      'Even colour settlement',
      '5 intensely rich matte shades',
    ],
    ingredients:
      'Phenyl Trimethicone, Polyethylene, Dimethicone. Refer to packaging for full ingredient list.',
    howToUse:
      'Start at the centre of your upper lip and follow the contours. Glide across the bottom lip for a smooth finish. Pair with Lakmé 9to5 Powerplay Priming Foundation for all-day wear.',
    variants: [
      { label: 'Red Letter', sku: 'lakme-powerplay-lip-red-letter' },
      { label: 'Chocolate Crush', sku: 'lakme-powerplay-lip-chocolate-crush' },
      { label: 'Red Coat', sku: 'lakme-powerplay-lip-red-coat' },
      { label: 'Red Rust', sku: 'lakme-powerplay-lip-red-rust' },
      { label: 'Berry Base', sku: 'lakme-powerplay-lip-berry-base' },
    ],
  }),
  product({
    name: 'Sensational Liquid Matte Lipstick',
    brand: 'Maybelline New York',
    subCategory: 'Lipstick',
    price: 429,
    images: maybellineSensationalLiquidMatteImages,
    featured: true,
    popular: true,
    shortDescription:
      'Weightless full-coverage matte liquid lipstick. Non-sticky, non-drying — 5 shades in stock.',
    fullDescription:
      'Maybelline Sensational Liquid Matte Lipstick delivers bold matte colour with exceptional comfort. Velvety, lightweight formula spreads smoothly for rich, high-impact pigmentation in a single swipe. Non-sticky and non-drying — keeps lips feeling soft while maintaining a flawless matte look. Precision applicator for easy, controlled application. Long-wearing, full-coverage colour that stays vibrant through the day. Available in 19 shades across the full range; Bare It All, Bare Temptation, Best Babe, Easy Berry and Flush It Red currently in stock (7 g each).',
    benefits: [
      'Full-coverage matte colour in one swipe',
      'Lightweight, velvety & comfortable',
      'Non-sticky, non-drying formula',
      'Precision applicator for defined pout',
      'Long-lasting vibrant wear',
      'High-impact pigmentation',
      '19 shades in full range',
    ],
    ingredients:
      'Liquid matte lipstick formula. Refer to packaging for full ingredient list.',
    howToUse:
      'Glide the precision applicator from the centre of your upper lip outward, then across the bottom lip. Allow to set for a flawless matte finish. Layer for bolder colour if desired.',
    variants: [
      { label: 'NU01 Bare It All', sku: 'maybelline-sensational-nu01' },
      { label: 'NU04 Bare Temptation', sku: 'maybelline-sensational-nu04' },
      { label: '06 Best Babe', sku: 'maybelline-sensational-06' },
      { label: '04 Easy Berry', sku: 'maybelline-sensational-04' },
      { label: '03 Flush It Red', sku: 'maybelline-sensational-03' },
    ],
  }),
  product({
    name: 'Superstay Matte Ink Liquid Lipstick',
    brand: 'Maybelline New York',
    subCategory: 'Lipstick',
    price: 749,
    images: maybellineSuperstayMatteInkImages,
    featured: true,
    popular: true,
    shortDescription:
      '16-hour transfer-proof matte liquid lipstick. Precision arrow applicator — 5 iconic shades in stock.',
    fullDescription:
      'Maybelline Superstay Matte Ink Liquid Lipstick delivers intense, flawless matte colour locked in for up to 16 hours. Advanced formula resists fading, smudging and transfer — comfortable non-drying wear through sips, bites and kisses. Precision arrow applicator glides on evenly for bold, full-coverage colour in one swipe. Available in 25+ highly pigmented shades from nudes and peaches to iconic reds and mauves. Amazonian, Ambitious, Artist, Brooklyn Blush - Enchanter and Dancer currently in stock (5 ml each).',
    benefits: [
      'Up to 16-hour long wear',
      'Smudge-proof & transfer-resistant',
      '25+ iconic highly pigmented shades',
      'Precision arrow applicator',
      'Full-coverage intense colour payoff',
      'Comfortable non-drying matte formula',
      'Fade-resistant all-day wear',
    ],
    ingredients:
      'Dimethicone, Trimethylsiloxysilicate, Isododecane, Nylon-611/Dimethicone Copolymer. Refer to packaging for full ingredient list.',
    howToUse:
      'Glide the precision arrow applicator along the centre of your upper lip, following lip contours. Sweep across the bottom lip for a smooth, even finish. Allow to set — no touch-ups needed.',
    variants: [
      { label: 'Amazonian', sku: 'maybelline-superstay-amazonian' },
      { label: 'Ambitious', sku: 'maybelline-superstay-ambitious' },
      { label: 'Artist', sku: 'maybelline-superstay-artist' },
      { label: 'Brooklyn Blush - Enchanter', sku: 'maybelline-superstay-enchanter' },
      { label: 'Dancer', sku: 'maybelline-superstay-dancer' },
    ],
  }),
  product({
    name: 'So Creme! Creamy Matte Lipstick',
    brand: 'Nykaa',
    subCategory: 'Lipstick',
    price: 329,
    images: nykaaSoCremeCreamyMatteLipstickImages,
    featured: true,
    popular: true,
    shortDescription:
      'Creamy matte bullet lipstick with Vitamin E & almond oil. Smooth, comfortable wear — Game On shade in stock.',
    fullDescription:
      'Nykaa So Creme! Creamy Matte Lipstick glides on smoothly from the first swipe with a creamy texture that sits between classic cream and flat liquid matte. Delivers rich, buildable pigment with a soft matte finish — lips stay comfortable without the dry dragging feel of traditional mattes. Infused with Vitamin E and almond oil to nourish and hydrate. Game On is a bold, versatile dusty rose shade that works for day and evening looks. Available in 35 shades across the full range; Game On currently in stock (4.2 g).',
    benefits: [
      'Creamy matte — comfortable, not dry',
      'Smooth glide application',
      'Rich buildable pigment',
      'Infused with Vitamin E & almond oil',
      'Soft matte finish — not powdery',
      'Lightweight everyday wear',
      '35 shades in full range',
    ],
    ingredients:
      'Vitamin E, almond oil. Creamy matte bullet lipstick formula. Refer to packaging for full ingredient list.',
    howToUse:
      'Apply from the centre of your upper lip outward, then glide across the bottom lip. Build colour with additional swipes for a bolder look. Touch up as needed through the day.',
    variants: [{ label: 'Game On', sku: 'nykaa-so-creme-game-on' }],
  }),
]
