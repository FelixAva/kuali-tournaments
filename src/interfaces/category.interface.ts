export interface Category {
  id: number;
  name: string;

  categorySettings: CategorySettings;
}

interface CategorySettings {
  ageRange: {
    min: number;
    max: number;
  }
  gender: 'male' | 'female' | 'mixed';
}
