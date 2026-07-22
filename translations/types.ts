export type ProductTranslation = {
  category: "Agricultural" | "Veterinary";
  subCategory?: "Pesticides" | "Fertilizers";
  categoryLabel: string;
  subCategoryLabel?: string;
  shortDescription: string;

  effects?: string[];
  composition: string[]; //done
  analysis?: {
    organicMatter: string,
    organicCarbon: string,
    cnRatio: string,
    ph: string,
    nitrogen: string,
    phosphorus: string,
    potassium: string,
    calcium: string,
    magnesium: string,
    sulfur: string,
  };
  modeOfAction?: {
    paragraphs: string[];
    result: string;
  };
  benefits?: string[];
  targetPests?: {
    name: string;
    description: string;
  };

  usage?: string | {
    dripIrrigation: string;
    foliarApplication: string;
    floodIrrigation: string;
    seedlings: string;
    rootDipping: string;
    compostApplication: string;
  };
  dosage?: {
    vegetables: string;
    fieldCrops: string;
    fruitTrees: string;
    palmTrees: string;
    greenhouses: string;
    lawns: string;
  };
  applicationFrequency?: {
    vegetables: string,
    trees: string,
    fieldCrops: string,
    datePalms: string,
  };
  applicationMethod?: string[];
  compatibility?: string[];
  timing?: string[];
  physicalProperties: string[];
  stability: string;
  toxicity?: string[];
  safety?: string[];
  packaging: string;
  storage: string;
  regulatoryNotes: string[];
};