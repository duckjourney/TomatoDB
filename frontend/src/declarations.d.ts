declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  readonly VITE_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export type food = {
  'Food description': string;
  'Category description': string;
  'Energy (kcal)': number;
  'Protein (g)': number;
  'Carbohydrate (g)': number;
  'Fiber, total dietary (g)': number;
  'Total Fat (g)': number;
};