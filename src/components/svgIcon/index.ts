import { App } from 'vue'
import SvgIcon from './svgIcon.vue' // svg component

const req = require.context('../../assets/svg', false, /\.svg$/)
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext)
requireAll(req)

export default (app: App): void => {
  app.component('svg-icon', SvgIcon)
}
