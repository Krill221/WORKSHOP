import { $theme } from "../../6_shared/theme";


export function toggleTheme() {
  $theme.set($theme.get() === 'light' ? 'dark' : 'light')
}
$theme.subscribe(theme => {
  console.log('theme changed', theme)
  console.log('document')
})