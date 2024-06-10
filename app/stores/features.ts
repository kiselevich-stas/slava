import { defineStore } from 'pinia'
enum ModelName {
  Figaro = 'Figaro',
}
export interface Feature {
  model_name?: string;
  description: string;
  image: string;
  image_alt? : string;
  sorting? : number;
}

interface UniqueFeaturesState {
  blockHeading: string;
  assetsDomain: string;
  features: Feature[];
  loading: boolean;
  error: string | null | any;
}

export const useUniqueFeaturesStore = defineStore({
  id: 'uniqueFeatures',
  state: (): UniqueFeaturesState => ({
    blockHeading: '',
    assetsDomain: '',
    features: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchUniqueFeatures (this: any) {
      try {
        const config = useRuntimeConfig()
        this.loading = true
        const response = await fetch(String(config.public.apiBase), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({})
        })
        const data = await response.json()
        this.blockHeading = data.block_heading
        this.assetsDomain = data.assets_domain
        this.features = data.features.filter(
          (feature: Feature) => feature.model_name === ModelName.Figaro && feature.description && feature.image
        )
        this.loading = false
      } catch (error) {
        this.loading = false
        this.error = (error as unknown as Error).message || 'Failed to fetch data'
      }
    },

    addFeature (this: any, feature: Feature) {
      this.features.splice(1, 0, feature)
    }
  },
  getters: {
    featuresRows: (state): Feature[][] => {
      const rows: Feature[][] = []
      const itemsPerRow = 3
      for (let i = 0; i < state.features.length; i += itemsPerRow) {
        rows.push(state.features.slice(i, i + itemsPerRow))
      }
      return rows
    }
  }
})
