import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
createApp(App).mount('#teste')

(function (){
    function desativarDragDrop () {
      document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
      document.addEventListener('drop', (evento) => evento.preventDefault(), false)
    }
    desativarDragDrop()
  }())