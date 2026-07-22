import { ProductTranslation } from "../types";

const productsPage = {
  hero: {
    title: "Our Products",
    description:
      "We offer a comprehensive range of advanced agricultural and veterinary solutions, developed using the latest technologies to provide effective and safe products that promote sustainability while protecting the health of people, animals, and the environment.",
  },
  categories: {
    agricultural: "Agricultural Products",
    veterinary: "Veterinary Products",
  },
  subCategories: {
    all: "All Products",
    pesticides: "Pesticides",
    fertilizers: "Fertilizers",
  },
};

export default productsPage;

export type ProductsTranslations = Record<string, ProductTranslation>;

export const products: ProductsTranslations = {

  biovigor1: {
    category: "Agricultural",
    subCategory: "Pesticides",
    categoryLabel: "Agricultural",
    subCategoryLabel: "Pesticides",
    shortDescription:
      "A triple-action organic pesticide powered by 'Amino Acid and Organic Carboxylate Conjugation' technology with active ingredients, targeting mites, aphids, thrips, and whitefly.",

    effects: [
      "A solvent and emulsifier that breaks down the waxy layer of insects (mites, aphids, thrips, and whitefly).",
      "Acids that cause burns.",
      "Oils that destroy the respiratory and nervous systems and cause suffocation.",
      "Reproductive inhibition of insects, eliminating 85% of eggs.",
      "Knockdown rate exceeding 90%.",
    ],

    composition: [
      "Short-chain, monobasic organic carboxylic acids with strong contact action on insects (burning – respiratory disruption).",
      "Short and medium-chain fatty acids acting as solvents that break the insect's waxy layer.",
      "Phenolic acid, an enzyme inhibitor and deactivator.",
      "Hydroxides that dissolve fats, are insecticidal, and act with amino acids as solvents to break the waxy layer, destroy the cuticle (water loss leading to dehydration and death), and cause direct killing.",
      "Active ingredients: Azadirachtin, Parthenolide, and Pyrethrins sourced from neem oil, pine, and chrysanthemum extracts.",
      "Antioxidant to preserve active ingredients such as capsaicin, allicin, and azadirachtin, and prevent salt precipitation.",
      "Natural stickers and spreaders that increase pesticide penetration and efficacy.",
      "Highly penetrative substances to reach the most difficult places to access insects, ensuring the highest efficiency and effect rate of the pesticide.",
      "Preservatives and stabilizers to prevent component separation and ensure consistent efficacy with each use, using Nano-emulsion optimization technology for the longest possible shelf life under recommended storage conditions.",
    ],

    modeOfAction: {
      paragraphs: [
        `Undissociated short-chain weak organic carboxylic acids penetrate the cell, disrupt enzymes, and lead to insect death. They also destroy the cell membrane. Subsequently, fatty acids with hydroxides break the waxy membrane and dissolve the insect's cuticle (water loss leading to death).`,
        `The role of the active ingredients follows to inhibit reproduction, destroy the nervous system, and eliminate remaining insects. This system acts on all insect stages, achieving a kill rate exceeding 90% and eliminating over 80% of eggs.`,
      ],
      result: `Resistance to the pesticide by target pests is nearly nonexistent, and acquiring immunity against BioVigor is difficult due to the multiple killing mechanisms provided by the Multi-Mode Action system, achieving over 90% kill and over 80% egg destruction.`,
    },

    targetPests: {
      name: "Mites, Aphids, Whitefly, Thrips",
      description:
        "Resistance of these pests to BioVigor is nearly nonexistent due to the multiple killing mechanisms.",
    },

    usage: "For foliar spray at doses of 0.2% – 0.5% per 100 liters of water.",

    physicalProperties: [
      "Viscosity below medium (less than 1000 centipoise at 21°C).",
      "Density: 1.2.",
      "Surface tension less than 35 dyne/cm.",
      "pH: 5.5.",
      "Homogeneous, with no sediment or layers, remaining stable for 24 hours after dilution with water.",
      "High foam after mixing, reaching 2 cm one minute after mixing.",
      "Sedimentation less than 2%, redisperses after shaking the container (shaking before use is recommended).",
      "Stable under standard recommended storage conditions.",
    ],

    stability:
      "Stable in formulation. Easy and quick to mix with achieved and consistent results when used correctly.",

    toxicity: [
      "The product is very slightly toxic and is classified under Category U. It has no residual effect, and the pre-harvest interval does not exceed 6 hours (0 days), allowing application on the day of harvest.",
      "Highly toxic to insects, slightly toxic to arachnids, and very safe for bees after drying or at least 6 hours after application.",
      "Degrades very rapidly when exposed to light and air.",
    ],

    safety: [
      "Very safe and does not require safety measures after dilution.",
      "Causes eye irritation; therefore, eyes should be washed thoroughly with plenty of water in case of direct exposure.",
    ],

    packaging: "Available in 0.5 L, 1 L, and 5 L packing.",

    storage: "Store away from direct sunlight at room temperature.",

    regulatoryNotes: [
      "Spray the pesticide in the early morning or before sunset, avoiding application during high temperatures.",
      "Follow the doses and recommendations provided in the technical bulletin and commercial label.",
      "It is highly recommended to use the pesticide with our potassium soap, as it is designed to work synergistically with BioVigor for the best results.",
    ],
},

biovigorPlus: {
  category: "Agricultural",
  subCategory: "Pesticides",
  categoryLabel: "Agricultural",
  subCategoryLabel: "Pesticides",
  shortDescription:
    "A triple-action organic pesticide powered by 'Amino Acid and Organic Carboxylate Conjugation' technology, targeting nematodes, Tuta absoluta, fungal diseases, and root rots.",

  effects: [
    "Short-chain organic acids that burn and choke worms and act as antifungals.",
    "A solvent and emulsifier that breaks the insect's waxy layer.",
    "Organic active ingredients against root rots and fungi such as allicin, capsaicin, and sodium acetate salts.",
    "Oils that destroy the respiratory and nervous systems and cause suffocation.",
    "Inhibition of insect reproduction and regeneration of damaged roots.",
    "Substances that strengthen the plant's immune system to resist rots and fungi, especially on fruit trees.",
  ],

  composition: [
    "Short-chain, monobasic organic carboxylic acids with strong contact action on insects (burning – respiratory disruption) and direct effect on fungi.",
    "Short and medium-chain fatty acids acting as solvents against soft-bodied insects.",
    "Phenolic acid, an enzyme inhibitor and deactivator.",
    "Hydroxides that dissolve fats, are lethal to worms, and act with fatty acids as solvents to break the waxy layer, destroy the cuticle (water loss leading to dehydration and death), and cause direct killing.",
    "Active ingredients: Allicin, Capsaicin, and Pyrethrins sourced from garlic, hot pepper, and chrysanthemum oil extracts.",
    "Antioxidant to preserve active ingredients such as capsaicin, allicin, and azadirachtin, and prevent salt precipitation.",
    "Natural stickers and spreaders that increase pesticide penetration and efficacy, especially on trees.",
    "Highly penetrative substances to reach the most difficult places to access worms, ensuring the highest efficiency rate.",
    "Preservatives and stabilizers to prevent component separation and ensure consistent efficacy with each use, using Nano-emulsion optimization technology for the longest possible shelf life under recommended storage conditions.",
  ],

  modeOfAction: {
    paragraphs: [
      `Undissociated short-chain weak organic carboxylic acids penetrate the cell, disrupt enzymes, lead to insect and worm death, and penetrate fungi to eliminate them. They also destroy the cell membrane. Fatty acids with hydroxides then destroy cells, especially in soft-bodied insects and worms.`,
      `The role of the active ingredients follows to eliminate most of the most difficult fungal diseases and root rots.`,
    ],
    result: `Resistance to the pesticide by target pests is nearly nonexistent, and acquiring immunity against BioVigor is difficult due to the multiple killing mechanisms, thanks to the Multi-Mode Action system, achieving over 90% kill and over 80% egg destruction.`,
  },

  targetPests: {
    name: "General fungicide (Powdery Mildew, Downy Mildew, Botrytis and rust), Root Rot (Fusarium, Verticillium, Rhizoctonia solani and Phytophthora), Nematodes (Meloidogyne spp., Pratylenchus spp., and Tylenchulus), and Tuta absoluta.",
    description:
      "Resistance of these pests to the pesticide is nearly nonexistent due to the multiple killing mechanisms.",
  },

  usage:
    "For foliar spray and soil irrigation at doses of 0.2% – 0.5% per 100 liters of water; the same doses apply for irrigation.",

  physicalProperties: [
    "Viscosity below medium (less than 1000 centipoise at 21°C).",
    "Density: 1.2.",
    "Surface tension less than 35 dyne/cm.",
    "pH: 5.5.",
    "Homogeneous, with no sediment or layers, remaining stable for 24 hours after dilution with water.",
    "High foam after mixing, reaching 2 cm one minute after mixing.",
    "Sedimentation less than 2%, redisperses after shaking the container (shaking before use is recommended).",
    "Stable under standard recommended storage conditions.",
  ],

  stability:
    "Stable in formulation. Easy and quick to mix with achieved and consistent results when used correctly.",

  toxicity: [
    "The product is very slightly toxic and is classified under Category U. It has no residual effect, and the pre-harvest interval does not exceed 6 hours (0 days), allowing application on the day of harvest.",
    "Highly toxic to insects, slightly toxic to arachnids, and very safe for bees after drying or at least 6 hours after application.",
    "Degrades very rapidly when exposed to light and air.",
  ],

  safety: [
    "Very safe and does not require safety measures after dilution.",
    "Causes eye irritation; therefore, eyes should be washed thoroughly with plenty of water in case of direct exposure.",
  ],

  packaging: "Available in 0.5 L, 1 L, and 5 L packing.",

  storage: "Store away from direct sunlight at room temperature.",

  regulatoryNotes: [
    "Spray the pesticide in the early morning or before sunset, avoiding application during high temperatures.",
    "Follow the doses and recommendations provided in the technical bulletin and commercial label.",
    "It is highly recommended to use the pesticide with our potassium soap, as it is designed to work synergistically with BioVigor for the best results.",
  ],
},

biovigorMax: {
  category: "Agricultural",
  subCategory: "Pesticides",
  categoryLabel: "Agricultural",
  subCategoryLabel: "Pesticides",
  shortDescription:
    "A triple-action organic pesticide powered by 'Amino Acid and Organic Carboxylate Conjugation' technology, targeting Red Palm Weevil, Dubas bug, date palm spathe borer, Parlatoria blanchardii, and cottony fungal growths.",

  effects: [
    "Short-chain organic carboxylic acids that burn and kill insects and act as antifungals.",
    "A solvent and emulsifier that breaks the insect's waxy layer.",
    "Organic active ingredients against scale insects, Red Palm Weevil, Dubas bug, and date palm spathe borer.",
    "Oils that destroy the respiratory and nervous systems and cause suffocation.",
    "Reproductive inhibition and egg destruction exceeding 80%.",
    "Substances that strengthen the plant's immune system to resist rots and cottony fungal growths.",
    "Knockdown rate exceeding 90%.",
  ],

  composition: [
    "Short-chain, monobasic organic carboxylic acids with strong contact action on insects (burning – respiratory disruption) and direct effect on fungi.",
    "Short and medium-chain fatty acids acting as solvents against scale insects (white and soft) to break the waxy layer, destroy the cuticle (water loss leading to dehydration and death), and cause direct killing.",
    "Phenolic acid, an enzyme inhibitor and deactivator.",
    "Hydroxides that dissolve fats, are insecticidal, and act with fatty acids as solvents.",
    "Active ingredients from Allicin, Capsaicin, and Pyrethrins, sourced from garlic, hot pepper, and chrysanthemum oil extracts.",
    "Antioxidant to preserve active ingredients such as capsaicin, allicin, and azadirachtin, and prevent salt precipitation.",
    "Natural stickers and spreaders that increase pesticide penetration and efficacy, especially on trees.",
    "Highly penetrative substances to reach the most difficult places to access worms, ensuring the highest efficiency rate.",
    "Preservatives and stabilizers to prevent component separation and ensure consistent efficacy with each use, using Nano-emulsion optimization technology for the longest possible shelf life under recommended storage conditions.",
  ],

  modeOfAction: {
    paragraphs: [
      `Undissociated short-chain weak organic carboxylic acids penetrate the cell, disrupt enzymes, lead to insect death, and destroy the cell membrane. Subsequently, fatty acids with hydroxides break the waxy membrane and dissolve the insect's cuticle (water loss leading to death), resulting in rapid knockdown and swift penetration of cottony fungal growths and root rots.`,
      `The active ingredients then inhibit reproduction, destroy the nervous system, and eliminate remaining insects. This system acts on all insect stages, achieving a knockdown rate exceeding 90% and eliminating over 80% of eggs.`,
    ],
    result: `Resistance to the pesticide by target pests is nearly nonexistent, and acquiring immunity against BioVigor is difficult due to the multiple killing mechanisms, thanks to the Multi-Mode Action system, achieving over 90% kill and over 80% egg destruction.`,
  },

  targetPests: {
    name: "Red Palm Weevil (Rhynchophorus ferrugineus), Dubas bug (Ommatissus lybicus), date palm spathe borer (Oryctes elegans and Pseudphilus testaceus), Parlatoria blanchardii, and cottony fungal growths.",
    description:
      "Resistance of these pests to the pesticide is nearly nonexistent due to the multiple killing mechanisms.",
  },

  usage:
    "For foliar spray and soil irrigation at doses of 0.2% – 0.5% per 100 liters of water; the same doses apply for irrigation.",

  physicalProperties: [
    "Viscosity below medium (less than 1000 centipoise at 21°C).",
    "Density: 1.2.",
    "Surface tension less than 35 dyne/cm.",
    "pH: 5.5.",
    "Homogeneous, with no sediment or layers, remaining stable for 24 hours after dilution with water.",
    "High foam after mixing, reaching 2 cm one minute after mixing.",
    "Sedimentation less than 2%, redisperses after shaking the container (shaking before use is recommended).",
    "Stable under standard recommended storage conditions.",
  ],

  stability:
    "Stable in formulation. Easy and quick to mix with achieved and consistent results when used correctly.",

  toxicity: [
    "The product is very slightly toxic and is classified under Category U. It has no residual effect, and the pre-harvest interval does not exceed 6 hours (0 days), allowing application on the day of harvest.",
    "Highly toxic to insects, slightly toxic to arachnids, and very safe for bees after drying or at least 6 hours after application.",
    "Degrades very rapidly when exposed to light and air.",
  ],

  safety: [
    "Very safe and does not require safety measures after dilution.",
    "Causes eye irritation; therefore, eyes should be washed thoroughly with plenty of water in case of direct exposure.",
  ],

  packaging: "Available in 0.5 L, 1 L, and 5 L packing.",

  storage: "Store away from direct sunlight at room temperature.",

  regulatoryNotes: [
    "Spray the pesticide in the early morning or before sunset, avoiding application during high temperatures.",
    "Follow the doses and recommendations provided in the technical bulletin and commercial label.",
    "It is highly recommended to use the pesticide with our potassium soap, as it is designed to work synergistically with BioVigor for the best results.",
  ],
},

biovigorScorch: {
  category: "Agricultural",
  subCategory: "Pesticides",
  categoryLabel: "Agricultural",
  subCategoryLabel: "Pesticides",
  shortDescription:
    "A non-selective bioherbicide powered by advanced conjugation technology, formulated from biodegradable plant-based compounds to effectively eliminate weeds while improving soil health.",

  effects: [
    "Eco-friendly and biodegradable without leaving harmful environmental residues.",
    "Safe for humans and animals compared to conventional chemical herbicides.",
    "Suitable for a wide range of crops, lawns, and gardens.",
    "Highly effective in eliminating weeds and reducing competition for water and nutrients.",
    "Safe for use in greenhouses and under various climatic conditions.",
    "Leaves no stains or residues on spraying equipment.",
    "Improves soil fertility, structure, and water and nutrient retention.",
    "Adjusts soil pH and enhances soil physical and chemical properties, especially when used with our Agricultural Potassium Soap.",
  ],

  composition: [
    "Sodium Acetate: Acts as a fungicide, bactericide, and powerful herbicide at high concentrations while improving fertilizer absorption, reducing fertilizer consumption, adjusting soil pH, and enhancing nutrient availability.",
    "Fatty Acid Salts & Carboxylic Acid Group: Plant-based saturated fatty acids such as lauric and oleic acids. Carboxylic acids act as plant solvents, destroy roots, reduce soil alkalinity, and improve soil fertility.",
    "Phosphoric and Nitric Acid Salts: Kill weeds immediately upon contact, causing root death and complete drying of the weed. Present in concentrated form and should be handled with care.",
    "Natural oils that inhibit and delay weed regrowth for long periods, even under favorable germination conditions.",
  ],

  modeOfAction: {
    paragraphs: [
      `Short-chain, non-ionized weak organic carboxylic acids are formulated to burn any weed, making BioVigor Scorch a non-selective herbicide. These acids also leach salinity, treat soil calcification, and significantly reduce soil alkalinity.`,
      `Natural oils such as lemon, peppermint, and pine inhibit weed growth and make regrowth difficult for an extended period of more than 40 days.`,
    ],
    result:
      "Provides rapid weed control while improving soil quality through salinity reduction, pH adjustment, and long-lasting suppression of weed regrowth.",
  },

  targetPests: {
    name: "Non-selective Bio-Herbicide",
    description:
      "Controls a broad spectrum of weeds regardless of species.",
  },

  usage:
    "For direct spraying on weeds to be eradicated at a rate of 2 liters per 100 liters of water.",

  physicalProperties: [
    "Viscosity below average (less than 1000 centipoise at 21°C).",
    "Density: 1.6.",
    "Surface tension: less than 35 dyne/cm.",
    "pH: 3.5.",
    "Homogeneous, with no sediment or layers; remains stable for 24 hours after dilution with water.",
    "Foam below average after mixing, reaching 0.5 cm one minute after mixing.",
    "Sedimentation less than 2%; redisperses after shaking the container (shaking before use is recommended).",
    "Stable under proper storage conditions.",
  ],

  stability:
    "Stable in formulation, easy and quick to mix, with proven and consistent results when used correctly.",

  toxicity: [
    "The product is very slightly toxic and classified under Category U; therefore, it has no residual effect.",
    "Degrades very rapidly when exposed to light and air.",
  ],

  safety: [
    "Corrosive substance; protective clothing and gloves must be used during handling.",
    "Causes eye irritation; rinse eyes thoroughly with plenty of water in case of direct exposure.",
  ],

  packaging: "Available in 5-liter and 20-liter packages.",

  storage: "Store away from direct sunlight at room temperature.",

  regulatoryNotes: [
    "Follow the dosages and recommendations stated in the technical datasheet and commercial label.",
    "Strongly recommended for use in alkaline and calcareous soils.",
  ],
},

biovigorMicrofeed: {
  category: "Agricultural",
  subCategory: "Fertilizers",
  categoryLabel: "Agricultural",
  subCategoryLabel: "Fertilizers",
  shortDescription:
    "A highly efficient professional microbial nutrient designed to support the growth and long-term sustainability of beneficial microbial communities in the soil.",

  effects: [
    "Feeds beneficial bacteria.",
    "Feeds beneficial fungi.",
    "Supports enzyme production.",
    "Increases the rate of microbial multiplication.",
    "Maintains biological activity for longer periods.",
  ],

  composition: [
    "Organic carbon.",
    "Natural sugars.",
    "Amino acids.",
    "Vitamins.",
  ],

  benefits: [
    "Increases the stability of the microbial community.",
    "Improves rhizosphere activity.",
    "Enhances the decomposition of organic residues.",
    "Improves the plant’s ability to absorb nutrients and promotes the breakdown and transformation of soil nutrients into more readily available forms.",
    "Enhances the efficiency of microorganisms responsible for biological nitrogen capture and nutrient mobilization.",
  ],

  usage: {
    dripIrrigation: "20–40 L/ha, or 8–16 L/feddan, or 2–4 L/dunum.",
    foliarApplication: "Vegetables: 2–4 mL/L (200–400 mL per 100 L); Trees: 3–5 mL/L; Date palms: 5 mL/L.",
    floodIrrigation: "20–30 L/feddan.",
    seedlings: "100–200 mL around each seedling.",
    rootDipping: "Dilute 1:10 and soak for 15–30 minutes.",
    compostApplication: "10–20 L per ton of compost to stimulate microbial activity.",
  },

  applicationFrequency: {
    vegetables: "every 10–14 days.",
    trees: "every 20 days.",
    fieldCrops: "3–5 applications per season.",
    datePalms: "4–6 applications annually.",
  },

  physicalProperties: [
    "Color: Dark brown.",
    "Odor: Fresh earthy forest-soil odor, with no putrefactive smell.",
    "Consistency: Homogeneous liquid.",
    "Viscosity: Low to medium (70 cP).",
    "Density: 1.02 g/mL.",
    "pH: 6.3–7.2.",
    "EC: 3 dS/m.",
    "Total Dissolved Solids (TDS): 20 g/L.",
    "Organic Matter: High.",
    "Humic and Fulvic Acids: High.",
    "Free from Large Sediments: Yes.",
    "Particle Size: Less than 150 microns.",
    "Filterability: Excellent, up to 120 Mesh.",
    "Water Solubility: 100%.",
  ],

  stability: "Stable formulation, easy and quick to mix, with consistent and reliable results when used correctly.",

  safety: [
    "Very safe and does not require special safety measures after dilution.",
    "May cause eye irritation. In case of direct eye contact, rinse thoroughly with an adequate amount of water.",
  ],

  packaging: "Available in 1 L, 5 L, and 20 L packs.",

  storage: "Store away from direct sunlight at room temperature.",

  regulatoryNotes: [
    "Apply in the early morning or before sunset and avoid application during high temperatures.",
    "Follow the dosages and recommendations stated in the technical data sheet and product label.",
  ]
},

biovigorOrganicMatrix: {
  category: "Agricultural",
  subCategory: "Fertilizers",
  categoryLabel: "Agricultural",
  subCategoryLabel: "Fertilizers",
  shortDescription:
    "Professional compost and organic fertilizer designed to rebuild soil, support the growth and sustainability of beneficial microbial communities, and naturally replenish lost nutrients.",

  composition: [
    "High-quality mature compost.",
    "Natural humic and fulvic substances.",
    "Fine biochar.",
    "Natural nutrient-bearing minerals.",
    "Stable organic carbon.",
    "Microbial activity stimulants.",
  ],

  analysis: {
    organicMatter: "60%",
    organicCarbon: "35%",
    cnRatio: "15:1",
    ph: "7",
    nitrogen: "2%",
    phosphorus: "2%",
    potassium: "2%",
    calcium: "1%",
    magnesium: "0.3%",
    sulfur: "0.3%",
  },

  benefits: [
    "Improves soil friability and reduces compaction.",
    "Improves aeration in the root zone.",
    "Improves root proliferation and faster growth.",
    "Increases soil water-holding capacity and improves drought tolerance.",
    "Improves cohesion of sandy soils and increases organic matter.",
    "Retains nutrients within the soil, stimulates microbial life, and improves nutrient cycling.",
  ],

  dosage: {
    vegetables: "Before planting: 8 tons/ha (2–4 tons/feddan), in poor soils: up to 15 tons/ha.",
    fieldCrops: "5 tons/ha (1.2–3.2 tons/feddan).",
    fruitTrees: "Young: 7 kg, Medium: 22 kg, Large: 40 kg per tree.",
    palmTrees: "Young: 15 kg, Fruit-bearing: 45 kg, Large (sandy soils): up to 80 kg per palm.",
    greenhouses: "12 tons/ha (5 tons/feddan) before each cropping cycle.",
    lawns: "4 kg/m² before planting, followed by a light annual maintenance layer.",
  },

  applicationMethod: [
    "Spreading the compost evenly.",
    "Incorporating it into the top 15–25 cm of soil.",
    "Irrigating immediately after application.",
    "For trees: apply within the root-spread area (drip line) and cover with a thin layer of soil or mulch.",
  ],

  timing: [
    "2–4 weeks before planting.",
    "During land preparation.",
    "After pruning trees.",
    "After harvest to rebuild soil fertility.",
    "At the beginning of the growing season.",
  ],

  compatibility: [
    "Humic and fulvic acids, microbial inoculants, rock phosphate, agricultural gypsum, ground basalt, agricultural sulfur, biochar.",
    "Avoid direct mixing with quicklime, strong disinfectants, or broad-spectrum pesticides that may adversely affect microorganisms.",
  ],

  physicalProperties: [
    "Color: Dark brown to black.",
    "Odor: Earthy forest-soil odor, no ammonia or putrefactive smell.",
    "Texture: Loose, granular, homogeneous.",
    "Particle Size: 3–6 mm.",
    "Moisture: 25%.",
    "Bulk Density: 0.55 ton/m³.",
    "Porosity: High (>50%).",
    "Water-Holding Capacity: 150% of dry weight.",
    "Impurities: Less than 0.5%.",
  ],

  stability: "Stable formulation, easy and quick to mix, with consistent and reliable results when used correctly.",

  packaging: "Available in 20 kg, 25 kg, 50 kg, 100 kg, and 500 kg packs.",

  storage: "Store in a shaded, well-ventilated place.",

  regulatoryNotes: [
    "Follow the dosages and recommendations stated in the technical data sheet and product label.",
  ]
},

biovigorSoilActivator: {
  category: "Agricultural",
  subCategory: "Fertilizers",
  categoryLabel: "Agricultural",
  subCategoryLabel: "Fertilizers",
  shortDescription:
    "A biological soil activator designed to stimulate the natural activity of microorganisms, create an active rhizosphere environment, and enhance root growth and nutrient uptake efficiency.",

  effects: [
    "Activates beneficial bacteria and fungi.",
    "Stimulates the production of natural enzymes.",
    "Increases the activity of organic matter decomposition.",
    "Improves soil structure.",
    "Enhances nutrient uptake efficiency.",
  ],

  benefits: [
    "Increases microbial activity.",
    "Improves root growth.",
    "Increases nutrient solubilization.",
    "Improves soil water-holding capacity.",
    "Activates the natural nutrient cycle.",
  ],

  composition: [
    "Organic carbon sources.",
    "Humic acids and amino acids.",
    "Plant extracts.",
    "Metabolic stimulants.",
    "Micronutrients for beneficial microorganisms.",
  ],

  usage: {
    dripIrrigation: "20–40 L/ha, or 8–16 L/feddan, or 2–4 L/dunum.",
    foliarApplication: "Vegetables: 2–4 mL/L (200–400 mL per 100 L); Trees: 3–5 mL/L; Date palms: 5 mL/L.",
    floodIrrigation: "20–30 L/feddan.",
    seedlings: "100–200 mL around each seedling.",
    rootDipping: "Dilute 1:10 and soak for 15–30 minutes.",
    compostApplication: "10–20 L per ton of compost to stimulate microbial activity.",
  },

  applicationFrequency: {
    vegetables: "every 10–14 days.",
    trees: "every 20 days.",
    fieldCrops: "3–5 applications per season.",
    datePalms: "4–6 applications annually.",
  },

  physicalProperties: [
    "Color: Dark brown.",
    "Odor: Fresh earthy forest-soil odor, with no putrefactive smell.",
    "Consistency: Homogeneous liquid.",
    "Viscosity: Low to medium (70 cP).",
    "Density: 1.02 g/mL.",
    "pH: 6.3–7.2.",
    "EC: 3 dS/m.",
    "Total Dissolved Solids (TDS): 20 g/L.",
    "Free from Large Sediments: Yes.",
    "Particle Size: Less than 150 microns.",
    "Filterability: Excellent, up to 120 Mesh.",
    "Water Solubility: 100%.",
  ],

  stability: "Stable formulation, easy and quick to mix, with consistent and reliable results when used correctly.",

  safety: [
    "Very safe and does not require special safety measures after dilution.",
    "May cause eye irritation. In case of direct eye contact, rinse thoroughly with an adequate amount of water.",
  ],

  packaging: "Available in 1 L, 5 L, and 20 L packs.",

  storage: "Store away from direct sunlight at room temperature.",

  regulatoryNotes: [
    "Apply in the early morning or before sunset and avoid application during high temperatures.",
    "Follow the dosages and recommendations stated in the technical data sheet and product label.",
  ]
},

biovigorVet1: {
  category: "Veterinary",
  categoryLabel: "Veterinary",
  shortDescription:
    "Natural veterinary protection targeting mites, skin parasites, dermatophytic fungi, and fungi affecting feed, designed for camels, sheep, cattle, and goats.",

  effects: [
    "Solvent and emulsifier that disrupts the waxy layer of insects, fungi, and parasites.",
    "Acids penetrate and cause corrosive damage.",
    "Oils disrupt the respiratory and nervous systems and cause suffocation.",
    "Targets fungi and external parasites associated with skin diseases.",
    "Mortality rate above 90%.",
  ],

  composition: [
    "Short-chain monocarboxylic organic acids with strong contact action against insects (corrosive effect and respiratory disruption).",
    "Short- and medium-chain fatty acids that act as solvents and disrupt the insect’s waxy layer, such as capric acid (C10).",
    "A phenolic acid that inhibits and disrupts enzymes.",
    "Hydroxides that dissolve fats and act as insecticidal agents; together with amino acids, they function as solvents that disrupt the waxy layer, damage the cuticle, and cause direct mortality.",
    "Active ingredients: azadirachtin, parthenolide, pyrethrin, thymol, and carvacrol.",
    "Antioxidants to preserve active ingredients such as capsaicin, allicin, and azadirachtin, and to prevent salt precipitation.",
    "Natural adhesive and spreading agents that increase penetration and pesticide efficiency.",
    "Highly penetrating substances that reach difficult areas and pests, thereby ensuring maximum pesticide efficiency and effect.",
    "Preservatives and stabilizers to prevent phase separation and stabilize the components, ensuring consistent efficacy with every use through Nano-emulsion optimization technology for the longest possible shelf life under recommended storage conditions.",
  ],

  modeOfAction: {
    paragraphs: [
      "Non-ionized, weak, short-chain organic carboxylic acids penetrate cells, disrupt enzymes, and lead to insect death. They also damage the cell membrane. Medium-chain fatty acids, together with hydroxides, then disrupt the waxy membrane and dissolve the insect cuticle.",
      "The active ingredients then inhibit reproduction, disrupt the nervous system, and eliminate remaining insects. This system acts against all insect life stages and achieves a mortality rate above 90%."
    ],
    result: "The result is near-zero resistance among targeted pests and difficulty in developing resistance to BioVigor due to its multiple mechanisms of action. Through the Multi-Mode Action system, mortality exceeds 90%, while egg destruction and damage exceed 80%.",
  },

  targetPests: {
    name: "Mites, skin parasites, dermatophytic fungi, and fungi affecting feed",
    description: "Targets camel mange, wound flies, ringworm, sheep mange, cattle flies, and goat mange; resistance is nearly negligible due to multiple mechanisms of action.",
  },

  usage: "Dilute at a rate of 0.5%–0.8% per 100 liters of water.",

  physicalProperties: [
    "Low-to-medium viscosity (less than 1,000 cP at 21°C).",
    "Density: 1.2",
    "Surface tension: less than 35 dynes/cm.",
    "pH: 5.5",
    "Homogeneous, with no sediment or layers; remains stable for 24 hours after dilution with water.",
    "Moderate foam after mixing, reaching 0.5 cm one minute after mixing.",
    "Sedimentation below 2%; re-disperses after shaking the container (therefore, shake well before use).",
    "Stable under standard recommended storage conditions.",
  ],

  stability: "Stable formulation, easy and quick to mix, with consistent and reliable results when used correctly.",

  toxicity: [
    "The product has very low toxicity and is classified as Category U; it has no residual effect, and the pre-harvest interval does not exceed 6 hours (0 days), allowing meat or milk to be used on the same day.",
    "Highly toxic to insects and low in toxicity to mammals; very safe for bees after drying or at least 6 hours after application.",
    "Degrades very rapidly when exposed to light and air.",
  ],

  safety: [
    "Very safe and does not require special safety measures after dilution.",
    "May cause eye irritation; in case of direct eye contact, rinse thoroughly with an adequate amount of water.",
  ],

  packaging: "Available in 0.25 L, 0.5 L, 1 L, and 5 L packs.",

  storage: "Store away from direct sunlight at room temperature.",

  regulatoryNotes: [
    "Follow the dosages and recommendations stated in the technical data sheet and product label.",
  ]
},

biovigorVetPlus:{
  category: "Veterinary",
  categoryLabel: "Veterinary",
  shortDescription:
    "Natural veterinary protection targeting ticks, lice, nasal bot flies, mites, skin parasites, dermatophytic fungi, and fungi affecting feed.",

  effects: [
    "Solvent and emulsifier that disrupts the waxy layer of insects, fungi, and parasites.",
    "Acids penetrate and cause corrosive damage.",
    "Oils disrupt the respiratory and nervous systems and cause suffocation.",
    "Targets fungi and external parasites associated with skin diseases.",
    "Mortality rate above 90%.",
  ],

  composition: [
    "Short-chain monocarboxylic organic acids with strong contact action against insects (corrosive effect and respiratory disruption).",
    "Short- and medium-chain fatty acids that act as solvents and disrupt the insect’s waxy layer, such as capric acid (C10).",
    "A phenolic acid that inhibits and disrupts enzymes.",
    "Hydroxides that dissolve fats and act as insecticidal agents; together with amino acids, they function as solvents that disrupt the waxy layer, damage the cuticle, and cause direct mortality.",
    "Active ingredients: azadirachtin, parthenolide, pyrethrin, thymol, and carvacrol.",
    "Antioxidants to preserve active ingredients such as capsaicin, allicin, and azadirachtin, and to prevent salt precipitation.",
    "Natural adhesive and spreading agents that increase penetration and pesticide efficiency.",
    "Highly penetrating substances that reach difficult areas and pests, thereby ensuring maximum pesticide efficiency and effect.",
    "Preservatives and stabilizers to prevent phase separation and stabilize the components, ensuring consistent efficacy with every use through Nano-emulsion optimization technology for the longest possible shelf life under recommended storage conditions.",
  ],

  modeOfAction: {
    paragraphs: [
      "Non-ionized, weak, short-chain organic carboxylic acids penetrate cells, disrupt enzymes, and lead to insect death. They also damage the cell membrane. Medium-chain fatty acids, together with hydroxides, then disrupt the waxy membrane and dissolve the insect cuticle.",
      "The active ingredients then inhibit reproduction, disrupt the nervous system, and eliminate remaining insects. This system acts against all insect life stages and achieves a mortality rate above 90%."
    ],
    result: "The result is near-zero resistance among targeted pests and difficulty in developing resistance to BioVigor due to its multiple mechanisms of action. Through the Multi-Mode Action system, mortality exceeds 90%, while egg destruction and damage exceed 80%.",
  },

  targetPests: {
    name: "Ticks, lice, nasal bot flies, mites, skin parasites, dermatophytic fungi, and fungi affecting feed",
    description: "Targets ticks, mange, wound flies, lice, ringworm, and cattle flies across camels, sheep, cattle, and goats; resistance is nearly negligible due to multiple mechanisms of action.",
  },

  usage: "Dilute at a rate of 0.5%–0.8% per 100 liters of water.",

  physicalProperties: [
    "Low-to-medium viscosity (less than 1,000 cP at 21°C).",
    "Density: 1.2",
    "Surface tension: less than 35 dynes/cm.",
    "pH: 5.5",
    "Homogeneous, with no sediment or layers; remains stable for 24 hours after dilution with water.",
    "Moderate foam after mixing, reaching 0.5 cm one minute after mixing.",
    "Sedimentation below 2%; re-disperses after shaking the container (shake well before use).",
    "Stable under standard recommended storage conditions.",
  ],

  stability: "Stable formulation, easy and quick to mix, with consistent and reliable results when used correctly.",

  toxicity: [
    "The product has very low toxicity and is classified as Category U; it has no residual effect, and the pre-harvest interval does not exceed 6 hours (0 days), allowing meat or milk to be used on the same day.",
    "Highly toxic to insects and low in toxicity to mammals; very safe for bees after drying or at least 6 hours after application.",
    "Degrades very rapidly when exposed to light and air.",
  ],

  safety: [
    "Very safe and does not require special safety measures after dilution.",
    "May cause eye irritation; in case of direct eye contact, rinse thoroughly with an adequate amount of water.",
  ],

  packaging: "Available in 0.25 L, 0.5 L, 1 L, and 5 L packs.",

  storage: "Store away from direct sunlight at room temperature.",

  regulatoryNotes: [
    "Follow the dosages and recommendations stated in the technical data sheet and product label.",
  ]
},

};