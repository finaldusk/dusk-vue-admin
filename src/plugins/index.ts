import { App } from 'vue'
import installElementPlus from './element'
import svgIcon from '@/components/svgIcon'

export default (app: App): void => {
  installElementPlus(app)
  svgIcon(app)
}
