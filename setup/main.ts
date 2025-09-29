import { defineAppSetup } from '@slidev/types'
import BrandDecor from "../components/brand-decor.vue";

export default defineAppSetup(({ app }) => {
    app.component('BrandDecor', BrandDecor)
})
