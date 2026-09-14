import { LookbookLook, RetailerPartner, Testimonial, RunwaySnapshot } from '../types';

export const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80';
export const LOGO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxCMHtHpho6Qp2Uq2tJa9CY2VytCfS8Q4u0Xy2OaNmnjGfDJIW_CoDtrwt8omQJRnsFdDO2J-CgyV5zd8ZGr5nPkUBTxRWF6tFFH45NigTe5eU1wTWQQY___-brzpL76NWNjX9PjWq2N_3mXZEXGjPij-6MJ10zprSfxP0miOukQmIW-zfzRxu6X60KpxMD_f5Obq188UmUd8KsDan0GEWHnCB7fLUhV9bB0-pqM1V9s36hdcvqXMb2A';

export const CURATED_LOOKS: LookbookLook[] = [
  {
    id: 'look-1',
    title: 'Modern City Streetwear',
    subtitle: 'Technical cropped jacket paired with relaxed cargo trousers',
    vibe: 'Casual Street Style',
    matchScore: 98,
    description: 'A stylish and comfortable outfit with a light cropped jacket, matching cargo pants, and silver accessories for urban exploration.',
    imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Streetwear', 'Casual', 'Everyday'],
    occasion: 'Weekend Outing / City Exploration',
    colorPalette: ['#1A102E', '#2A1B4D', '#B7A4D8', '#F2C94C', '#0C0F0F'],
    stylingTips: [
      'Wear the cropped jacket over a plain black top for an effortless look',
      'Pair with clean leather sneakers or low lug-sole boots',
      'Add a simple gold necklace for a nice touch of shine'
    ],
    items: [
      {
        id: 'item-1',
        name: 'Cropped Utility Flight Jacket',
        brand: 'Helmut Atelier',
        retailer: 'FARFETCH',
        price: 680,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Technical cotton-twill blend with brushed silver zip hardware',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['XS', 'S', 'M', 'L']
      },
      {
        id: 'item-2',
        name: 'Soft Silk Bralette Top',
        brand: 'Khaite',
        retailer: 'SSENSE',
        price: 420,
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: '100% heavyweight mulberry silk with comfortable elasticated hem',
        category: 'top',
        inStock: true,
        sizeAvailable: ['S', 'M']
      },
      {
        id: 'item-3',
        name: 'High-Waist Cargo Trousers',
        brand: 'Acne Studios',
        retailer: 'Net-a-Porter',
        price: 590,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Structured organic cotton with adjustable tapered toggle cuffs',
        category: 'bottom',
        inStock: true,
        sizeAvailable: ['26', '28', '30', '32']
      },
      {
        id: 'item-4',
        name: 'Gold Ring Pendant Necklace',
        brand: 'StyleCue Collection',
        retailer: 'StyleCue Store',
        price: 340,
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: '18K gold vermeil over recycled 925 sterling silver',
        category: 'jewelry',
        inStock: true,
        sizeAvailable: ['One Size']
      }
    ]
  },
  {
    id: 'look-2',
    title: 'Elegant Evening Silk Dress',
    subtitle: 'Smooth bias-cut silk slip dress with cashmere wrap coat',
    vibe: 'Classic Evening',
    matchScore: 99,
    description: 'An alluring long silk slip dress paired with a soft cashmere coat and gold clutch, perfect for dinner dates, cocktail parties, and galas.',
    imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Evening', 'Silk Dress'],
    occasion: 'Dinner Date, Cocktail Party & Evening Gala',
    colorPalette: ['#121414', '#D4AF37', '#38265A', '#E2E2E2', '#5F004F'],
    stylingTips: [
      'Keep your jewelry simple with small gold hoop earrings',
      'Wear with neutral heel sandals or classic pumps',
      'Drape the coat gently over your shoulders when entering the venue'
    ],
    items: [
      {
        id: 'item-5',
        name: 'Silk Slip Maxi Dress',
        brand: 'The Row',
        retailer: 'Net-a-Porter',
        price: 1890,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Bias-cut 100% Italian sand-washed silk charmeuse',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['S', 'M', 'L']
      },
      {
        id: 'item-6',
        name: 'Cashmere Evening Wrap Coat',
        brand: 'Brunello Cucinelli',
        retailer: 'Saks Fifth Avenue',
        price: 3450,
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Double-face pure Mongolian cashmere with subtle pick-stitch trim',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['XS', 'S', 'M']
      },
      {
        id: 'item-7',
        name: 'Gold Metal Evening Clutch',
        brand: 'Bottega Veneta',
        retailer: 'FARFETCH',
        price: 2600,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Hand-sculpted polished brass with magnetic snap closure',
        category: 'accessories',
        inStock: true,
        sizeAvailable: ['One Size']
      }
    ]
  },
  {
    id: 'look-3',
    title: 'Modern Business Power Suit',
    subtitle: 'Sharp tailored hourglass blazer with wide-leg trousers',
    vibe: 'Work & Business',
    matchScore: 96,
    description: 'A crisp, professional suit that makes you look and feel confident in boardroom meetings, executive presentations, and conferences.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Work', 'Formal', 'Business', 'Blazer'],
    occasion: 'Office Meetings & Keynote Presentations',
    colorPalette: ['#1C1E24', '#4A4551', '#EBE2DC', '#B7A4D8', '#100C1A'],
    stylingTips: [
      'Wear the blazer buttoned with trousers for meetings, or open over a silk blouse for casual days',
      'Pair with pointed loafers or comfortable leather flats',
      'Carry a sleek laptop bag or leather tote'
    ],
    items: [
      {
        id: 'item-8',
        name: 'Tailored Hourglass Wool Blazer',
        brand: 'Mugler Studio',
        retailer: 'SSENSE',
        price: 1450,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Fine virgin wool blend with structured padded shoulders and silk lining',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['36', '38', '40', '42']
      },
      {
        id: 'item-9',
        name: 'Pleated Wide-Leg Trousers',
        brand: 'Totême',
        retailer: 'Nordstrom',
        price: 620,
        image: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'High-waist flowing gabardine with deep front knife pleats',
        category: 'bottom',
        inStock: true,
        sizeAvailable: ['S', 'M', 'L']
      }
    ]
  },
  {
    id: 'look-4',
    title: 'Rainproof Street Parka',
    subtitle: 'Waterproof technical shell with comfortable urban layers',
    vibe: 'Modern Techwear',
    matchScore: 97,
    description: 'A stylish, weather-ready outfit with a waterproof parka coat designed for city walks and unpredictable rainy days.',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Streetwear', 'All-Weather', 'Outerwear'],
    occasion: 'Travel & Rainy City Days',
    colorPalette: ['#0B0D12', '#260058', '#FFADE3', '#F2C94C', '#D2BCFA'],
    stylingTips: [
      'Adjust the waist drawstrings for a snug, fitted silhouette',
      'Wear with waterproof ankle boots for all-day comfort'
    ],
    items: [
      {
        id: 'item-10',
        name: '3-in-1 Weatherproof Parka',
        brand: 'Sacai',
        retailer: 'StyleCue Exclusive',
        price: 1280,
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Triple-layer Gore-Tex membrane with taped internal seams',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['M', 'L', 'XL']
      }
    ]
  },
  {
    id: 'look-5',
    title: 'Cozy Cashmere & Wool Cape',
    subtitle: 'Soft cream knitwear with relaxed wool pants',
    vibe: 'Relaxed Comfort',
    matchScore: 99,
    description: 'Super soft, warm cashmere cape and cozy pants in neutral cream tones, great for weekend getaways and coffee dates.',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Casual', 'Comfort', 'Cashmere'],
    occasion: 'Weekend Brunch & Travel Getaway',
    colorPalette: ['#F5F5F0', '#D6C7B2', '#8C7A6B', '#1E1B18'],
    stylingTips: [
      'Drape the cape over your shoulders for instant cozy style',
      'Pair with warm leather boots and tortoiseshell sunglasses'
    ],
    items: [
      {
        id: 'item-11',
        name: '100% Cashmere Blanket Cape',
        brand: 'Loro Piana',
        retailer: 'Net-a-Porter',
        price: 2850,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Grade-A baby cashmere with fringed rolled edge detailing',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['One Size']
      },
      {
        id: 'item-12',
        name: 'Silk-Wool Relaxed Pants',
        brand: 'Khaite',
        retailer: 'SSENSE',
        price: 890,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: '70% merino wool, 30% Mulberry silk lightweight knit blend',
        category: 'bottom',
        inStock: true,
        sizeAvailable: ['S', 'M', 'L']
      }
    ]
  },
  {
    id: 'look-6',
    title: 'Classic Black-Tie Tuxedo',
    subtitle: 'Sartorial black smoking jacket with silk satin collar',
    vibe: 'Formal Black Tie',
    matchScore: 98,
    description: 'A timeless black tuxedo jacket with sleek satin lapels and black trousers for formal dinners, galas, and red carpet events.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1576188973994-49034ef8629b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Formal', 'Black Tie', 'Classic'],
    occasion: 'Red Carpet & Black-Tie Dinners',
    colorPalette: ['#0A0A0E', '#6B21A8', '#E5E7EB', '#F59E0B'],
    stylingTips: [
      'Wear with crisp black trousers and shiny leather dress shoes',
      'Add cufflinks or pearl drop accessories for extra elegance'
    ],
    items: [
      {
        id: 'item-13',
        name: 'Satin Collar Smoking Blazer',
        brand: 'Saint Laurent',
        retailer: 'FARFETCH',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1576188973994-49034ef8629b?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1576188973994-49034ef8629b?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Grain de poudre pure wool with lustrous duchess silk satin lapels',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['36', '38', '40']
      }
    ]
  },
  {
    id: 'look-7',
    title: 'Statement Gold Gala Dress',
    subtitle: 'Eye-catching sculpted gold bustier with fine pleats',
    vibe: 'Statement Evening',
    matchScore: 97,
    description: 'A showstopping dress with sculpted gold details and fine flowing pleats for special awards and gala celebrations.',
    imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Evening', 'Formal', 'Special Event'],
    occasion: 'Anniversary & Special Celebrations',
    colorPalette: ['#181024', '#D4AF37', '#E2E8F0', '#4C1D95'],
    stylingTips: [
      'Keep hairstyle sleek to highlight the neckline details',
      'Wear simple gold rings and strappy sandals'
    ],
    items: [
      {
        id: 'item-14',
        name: 'Gilded Bustier Long Dress',
        brand: 'Schiaparelli',
        retailer: 'StyleCue Exclusive',
        price: 6400,
        image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Hand-pleated silk chiffon with anatomical hammered gold plated breastplate',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['S', 'M']
      }
    ]
  },
  {
    id: 'look-8',
    title: 'Relaxed Weekend Shirt & Slacks',
    subtitle: 'Easy charcoal overshirt with clean slacks',
    vibe: 'Casual Weekend',
    matchScore: 95,
    description: 'An easy, good-looking everyday outfit featuring a soft charcoal overshirt, comfortable slacks, and a leather shoulder bag.',
    imageUrl: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Casual', 'Weekend', 'Comfort'],
    occasion: 'Brunch, Shopping & Weekend Walks',
    colorPalette: ['#1E1E24', '#B7A4D8', '#EAE6E1', '#000000'],
    stylingTips: [
      'Wear overshirt open with a plain white or gray t-shirt underneath',
      'Great with clean white leather sneakers'
    ],
    items: [
      {
        id: 'item-15',
        name: 'Charcoal Wool Overshirt',
        brand: 'Studio Nicholson',
        retailer: 'SSENSE',
        price: 495,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Boiled felted wool with horn button fastening and twin patch pockets',
        category: 'top',
        inStock: true,
        sizeAvailable: ['S', 'M', 'L', 'XL']
      }
    ]
  },
  {
    id: 'look-9',
    title: 'Minimalist Ivory Trench & Denim',
    subtitle: 'Classic clean tailored trench with straight-leg denim',
    vibe: 'Casual & Clean',
    matchScore: 98,
    description: 'A timeless transitional outfit featuring a relaxed ivory trench coat, clean white cotton t-shirt, and vintage wash denim jeans.',
    imageUrl: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Casual', 'Work', 'Everyday'],
    occasion: 'City Strolls & Coffee Meetings',
    colorPalette: ['#F5F5F0', '#B7A4D8', '#1C1E24', '#E2E8F0'],
    stylingTips: [
      'Roll the sleeves once to showcase minimalist bracelet stack',
      'Pairs seamlessly with neutral loafers or white leather trainers'
    ],
    items: [
      {
        id: 'item-16',
        name: 'Relaxed Belted Trench Coat',
        brand: 'Totême',
        retailer: 'Net-a-Porter',
        price: 980,
        image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Water-repellent heavy cotton gabardine with raglan sleeves',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['S', 'M', 'L']
      },
      {
        id: 'item-17',
        name: 'Straight-Leg Organic Jeans',
        brand: 'Khaite',
        retailer: 'SSENSE',
        price: 420,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: '100% Japanese selvedge non-stretch organic denim',
        category: 'bottom',
        inStock: true,
        sizeAvailable: ['26', '28', '30', '32']
      }
    ]
  },
  {
    id: 'look-10',
    title: 'Midnight Velvet Cocktail Suit',
    subtitle: 'Deep navy velvet blazer with silk lapel details',
    vibe: 'Classic Evening',
    matchScore: 99,
    description: 'Rich midnight velvet blazer paired with tailored tapered pants and crystal drop earrings for evening galas and dinner dates.',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Evening', 'Formal', 'Dinner'],
    occasion: 'Fine Dining & Gallery Openings',
    colorPalette: ['#0C1024', '#D4AF37', '#1E1430', '#E5E7EB'],
    stylingTips: [
      'Wear over a silk camisole or buttoned as a standalone jacket',
      'Accentuate with pointed metallic pumps'
    ],
    items: [
      {
        id: 'item-18',
        name: 'Midnight Velvet Tuxedo Blazer',
        brand: 'Tom Ford',
        retailer: 'FARFETCH',
        price: 2750,
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Deep pile cotton velvet with peak grosgrain lapels',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['38', '40', '42']
      }
    ]
  },
  {
    id: 'look-11',
    title: 'Oversized Bomber & Leather Trousers',
    subtitle: 'Matte black flight bomber with high-waist leather flare pants',
    vibe: 'Trendy Streetwear',
    matchScore: 97,
    description: 'High-contrast edgy street style pairing an oversized nylon bomber with soft leather trousers and chunky lug-sole boots.',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Streetwear', 'Edgy'],
    occasion: 'Concerts, Weekend Outings & Events',
    colorPalette: ['#0B0D12', '#2A1B4D', '#F2C94C', '#FFADE3'],
    stylingTips: [
      'Keep hair slicked back to let the collar and shoulder silhouette stand out',
      'Add a crossbody mini leather bag'
    ],
    items: [
      {
        id: 'item-19',
        name: 'Insulated Flight Bomber Jacket',
        brand: 'Sacai',
        retailer: 'SSENSE',
        price: 1150,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'High-density ballistic nylon with ribbed wool collar and orange lining',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['S', 'M', 'L']
      }
    ]
  },
  {
    id: 'look-12',
    title: 'Fine Gauge Ribbed Knit Dress',
    subtitle: 'Warm oatmeal ribbed midi dress with suede boots',
    vibe: 'Comfort & Warmth',
    matchScore: 98,
    description: 'Ultra-comfortable fine gauge ribbed knit dress designed for all-day comfort, paired with a luxurious double-faced wool coat.',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Comfort', 'Casual', 'Knitwear'],
    occasion: 'Travel, Weekend Brunch & Casual Dinners',
    colorPalette: ['#ECE5DF', '#8C7A6B', '#1E1B18', '#D6C7B2'],
    stylingTips: [
      'Pair with knee-high suede boots in chocolate brown or tan',
      'Cinch with a leather belt for enhanced waist definition'
    ],
    items: [
      {
        id: 'item-20',
        name: 'Ribbed Merino Midi Dress',
        brand: 'Loro Piana',
        retailer: 'Net-a-Porter',
        price: 1650,
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
        ],
        fabricNote: 'Extra-fine 18.5-micron Australian merino wool in seamless 2x2 rib',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['XS', 'S', 'M', 'L']
      }
    ]
  }
];

export const RUNWAY_SNAPSHOTS: RunwaySnapshot[] = [
  {
    id: 'runway-1',
    title: 'Milan Spring Fashion Show',
    designer: 'Atelier Valois',
    location: 'Milan, Italy',
    season: 'Spring / Summer 2026',
    image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800&q=80',
    category: 'Designer Look',
    palette: ['#1A102E', '#F2C94C', '#B7A4D8'],
    stylistNote: 'Clean proportions with relaxed high-waist pants.'
  },
  {
    id: 'runway-2',
    title: 'Paris Evening Showcase',
    designer: 'Maison Noir',
    location: 'Paris, France',
    season: 'Fall / Winter 2026',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    category: 'Silk Eveningwear',
    palette: ['#121414', '#D4AF37', '#38265A'],
    stylistNote: 'Smooth silk dress with a natural, flowing drape.'
  },
  {
    id: 'runway-3',
    title: 'Tokyo Streetwear Preview',
    designer: 'Sacai x StyleCue',
    location: 'Tokyo, Japan',
    season: 'Resort 2026',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80',
    category: 'City Jacket',
    palette: ['#0B0D12', '#260058', '#FFADE3'],
    stylistNote: 'Lightweight zip jacket built for both rain and sun.'
  },
  {
    id: 'runway-4',
    title: 'New York City Suit Preview',
    designer: 'Khaite Studio',
    location: 'New York, USA',
    season: 'Fall Tailoring',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
    category: 'Work Suit',
    palette: ['#1C1E24', '#4A4551', '#EBE2DC'],
    stylistNote: 'Structured modern blazer with soft shoulder line.'
  },
  {
    id: 'runway-5',
    title: 'Kyoto Soft Texture Collection',
    designer: 'Issey Miyake Archives',
    location: 'Kyoto, Japan',
    season: 'Capsule 2026',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    category: 'Pleated Wear',
    palette: ['#F5F5F0', '#D6C7B2', '#8C7A6B'],
    stylistNote: 'Soft pleated fabrics that comfortably fit all body types.'
  },
  {
    id: 'runway-6',
    title: 'London Evening Salon',
    designer: 'Alexander McQueen Atelier',
    location: 'London, UK',
    season: 'Winter Collection',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    category: 'Evening Jacket',
    palette: ['#0A0A0E', '#6B21A8', '#E5E7EB'],
    stylistNote: 'Classic black blazer with velvet collar and crystal buttons.'
  }
];

export const RETAILER_PARTNERS: RetailerPartner[] = [
  {
    id: 'ret-1',
    name: 'FARFETCH',
    logo: 'FARFETCH',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=600&q=80',
    category: 'Global Fashion Marketplace',
    integrationType: 'Live Store Inventory Connection',
    stockSyncSpeed: 'Updated instantly',
    inventoryCount: 'Over 1.2M items'
  },
  {
    id: 'ret-2',
    name: 'Net-a-Porter',
    logo: 'NET-A-PORTER',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80',
    category: 'Designer Clothing & Accessories',
    integrationType: 'New Arrivals & In-Stock Sync',
    stockSyncSpeed: 'Real-time updates',
    inventoryCount: 'Over 800k items'
  },
  {
    id: 'ret-3',
    name: 'SSENSE',
    logo: 'SSENSE',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80',
    category: 'Modern Streetwear & Designer Wear',
    integrationType: 'Direct Store Sync',
    stockSyncSpeed: 'Instant stock check',
    inventoryCount: 'Over 650k items'
  },
  {
    id: 'ret-4',
    name: 'Saks Fifth Avenue',
    logo: 'SAKS FIFTH AVENUE',
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=600&q=80',
    category: 'Luxury Department Store',
    integrationType: 'Store & Online Stock Feed',
    stockSyncSpeed: 'Fast automated check',
    inventoryCount: 'Over 950k items'
  },
  {
    id: 'ret-5',
    name: 'Nordstrom',
    logo: 'NORDSTROM',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80',
    category: 'Designer & Everyday Brands',
    integrationType: 'Local Size & Store Delivery',
    stockSyncSpeed: 'Fast stock check',
    inventoryCount: 'Over 1.4M items'
  },
  {
    id: 'ret-6',
    name: 'Matches Fashion',
    logo: 'MATCHES',
    image: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=600&q=80',
    category: 'Curated Boutique Brands',
    integrationType: 'Runway & Capsule Collection Sync',
    stockSyncSpeed: 'Real-time updates',
    inventoryCount: 'Over 450k items'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "StyleCue makes shopping online so effortless. The AI accurately understands what cuts and fabrics flatter my style, and I never waste time looking at items that don't fit.",
    author: "Dinithi Jayasinghe",
    title: "Fashion Columnist & Stylist",
    outletOrAvatar: "COLOMBO STYLE",
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    isPress: true
  },
  {
    id: 't2',
    quote: "I haven't had to spend frustrating hours searching malls in Colombo. In just a few seconds, StyleCue curates complete outfits for my business trips, and every single piece fits when it arrives.",
    author: "Kasun Perera",
    title: "Tech Founder & Entrepreneur",
    outletOrAvatar: "Client in Colombo 07",
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    isPress: false
  },
  {
    id: 't3',
    quote: "What I love most is that every recommended outfit is verified in stock in my exact size right now. You never get excited about a piece only to find out your size is sold out.",
    author: "Chamari Senanayake",
    title: "Lifestyle Editor & Designer",
    outletOrAvatar: "CEYLON TODAY",
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    isPress: true
  },
  {
    id: 't4',
    quote: "Our retail boutique returns dropped by over 40% because customers are getting precise size recommendations and complete matching outfits on the very first try.",
    author: "Nuwan Wickramasinghe",
    title: "Retail & Apparel Director",
    outletOrAvatar: "MAS & BRANDIX PARTNER",
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    isPress: true
  },
  {
    id: 't5',
    quote: "From lightweight linen shirts for tropical weather in Galle to sharp evening blazers for awards nights, the curated looks are exceptionally accurate and stylish.",
    author: "Shenuka Fernando",
    title: "Creative Director",
    outletOrAvatar: "Client in Battaramulla",
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    isPress: false
  },
  {
    id: 't6',
    quote: "Saved me at least 15 minutes every morning getting ready. The outfit coordination, styling notes, and color palette suggestions are pure genius.",
    author: "Rashmi Dissanayake",
    title: "Brand Strategist",
    outletOrAvatar: "Client in Kandy",
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    isPress: false
  }
];

export const STYLING_BENEFITS = [
  {
    id: 'b1',
    iconName: 'person_search',
    title: 'Outfits Made Just for You',
    description: 'Our smart AI learns what styles, colors, and cuts you love, so every recommendation feels natural and comfortable for you.',
    stat: '98%',
    statLabel: 'Outfit satisfaction rate',
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    details: 'The more you use it, the better it gets at finding pieces that match your taste, body type, and daily routine.'
  },
  {
    id: 'b2',
    iconName: 'inventory_2',
    title: 'In-Stock in Your Size',
    description: 'We connect directly to top online stores, making sure every item shown is available in your size right now.',
    stat: '4.8M+',
    statLabel: 'Items checked in real time',
    imageUrl: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80',
    details: 'Never feel let down by out-of-stock sizes. We check store inventories constantly across top brands.'
  },
  {
    id: 'b3',
    iconName: 'diamond',
    title: 'Wear Outfits with Confidence',
    description: 'Get clear, easy tips on how to pair tops, pants, jackets, shoes, and accessories together for any occasion.',
    stat: '10 mins',
    statLabel: 'Saved every morning getting ready',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    details: 'Helpful advice for work meetings, casual weekend dinners, parties, weddings, and travel.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Take a 1-Minute Style Quiz',
    subtitle: 'Tell us about your style and size',
    desc: 'Answer a few quick questions about your body shape, favorite colors, preferred aesthetics, and where you like to go.',
    badge: 'Quick & Easy',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'
  },
  {
    step: '02',
    title: 'We Search Top Clothing Stores',
    subtitle: 'Finding items in your exact size',
    desc: 'Our system instantly searches thousands of clothing items from trusted stores like FARFETCH, SSENSE, Nordstrom, and Net-a-Porter.',
    badge: 'Instant Search',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    step: '03',
    title: 'See Complete Outfits Put Together',
    subtitle: 'Styled for your specific events',
    desc: 'See complete outfits with matched jackets, tops, pants, shoes, and accessories, plus simple tips on how to wear them.',
    badge: 'Full Outfits',
    imageUrl: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80'
  },
  {
    step: '04',
    title: 'Shop Directly with Easy Delivery',
    subtitle: 'Buy your favorites in one click',
    desc: 'Order the items you love directly from the stores with fast shipping, hassle-free returns, and great customer support.',
    badge: 'Fast & Secure',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQ_ITEMS = [
  {
    q: "How does StyleCue know which size will fit me?",
    a: "We check the sizing guides and customer fit reviews from over 400 clothing brands. By using your basic measurements and fit preferences, we recommend the exact size that will fit you best."
  },
  {
    q: "Can I use clothes I already have in my closet?",
    a: "Yes! You can upload photos of your favorite shirts, jackets, or pants. Our AI will build fresh new outfits combining your owned clothes with new pieces."
  },
  {
    q: "Is StyleCue free to use?",
    a: "Yes, StyleCue is completely free to take style quizzes, explore curated outfit recommendations, and discover matching pieces in your exact size from verified official stores."
  },
  {
    q: "How do clothing stores and brands partner with StyleCue?",
    a: "Stores can easily connect their product catalogs with our system to show their in-stock clothes to shoppers looking for ready-to-wear outfits."
  }
];
