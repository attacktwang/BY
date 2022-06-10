import { createApp } from 'vue'
import './app.scss'
import {
  Grid,
  GridItem,
  Icon,
  Button,
  Progress,
  Cell,
  Tabs,
  TabPane,
  SearchBar,
  Checkbox,
  CheckboxGroup
} from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/style.css'
const App = createApp({
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Grid)
  .use(GridItem)
  .use(Icon)
  .use(Button)
  .use(Progress)
  .use(Cell)
  .use(Tabs)
  .use(TabPane)
  .use(SearchBar)
  .use(Checkbox)
  .use(CheckboxGroup)
export default App
