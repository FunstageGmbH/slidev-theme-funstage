import BrandDecor from "../../../components/brand-decor.vue"

export default ({ app }: any) => {
    // register component globally (optional)
    app.component('BrandDecor', BrandDecor)

    // mount a global singleton overlay
    // Slidev injects this component into the app root automatically
    // because this file is referenced by clientAppEnhanceFiles.
}
