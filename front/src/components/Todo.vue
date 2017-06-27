<template>
  <div class="todo">
    <h1>{{ msg }}</h1>
    <p>
      Полдела сделано :)
    <h2>Дано:</h2>
    <p>
      Есть куча json-ов - <a href="https://github.com/odota/dotaconstants">https://github.com/odota/dotaconstants</a>, из них нужен build/heroes.json
    <p>
      Есть api с которым нужно работать - <a href="https://docs.opendota.com/">https://docs.opendota.com/</a>
    <h2>Что надо:</h2>
    <img src="/static/i/demo.png">
    <p>
      Нужно сделать небольшой прототип ленты про-игр в Dota 2.
    <ul>
      <li>
        «Прототип» означает, что вы не потратите на это слишком много времени.<br>
        Сами решайте, что надо сделать обязательно, а что можно и выкинуть.<br>
        Дизайн, например, не важен. Кроссбраузерность -  тоже. Ну, в разумных пределах, конечно.<br>
        Комментарии в стиле "если бы я потратил на это больше времени, то сделал ещё то/сделал это по-другому и т. д." приветствуются.
      </li>
      <li>На картинке - пример. "Карточка" матча должна содержать название двух команд, 10 героев картинками, указание на победителя.</li>
      <li>Сами игры берутся из api, /proMatches</li>
      <li>Ссылку на картинку героя можно получить как 'https://api.opendota.com' + hero.img (см. json), например: <img src="https://api.opendota.com/apps/dota2/images/heroes/antimage_full.png?" alt=""></li>
    </ul>

    <p>Решение должно использовать:</p>
    <ul>
      <li>Vue.js</li>
      <li>Bootstrap либо свою вёрстку</li>
      <li>По желанию - <a href="http://vuejs-templates.github.io/webpack/pre-processors.html">SASS, LESS, PostCSS?</a></li>
    </ul>


    <h2>Самый быстрый гайд по Dota 2:</h2>
    <ul>
      <li>В каждом матче участвуют 2 команды по 5 человек, каждый из которых играет за одного героя</li>
      <li>Команды называются radiant (зелёные) и dire (красные)</li>
      <li>Все герои в матче - разные</li>
      <li>В api подробной информации о матче есть массив players. player_slot >= 128 означает что этот игрок - в команде dire; hero_id есть там же.</li>
    </ul>

    <h2>Ещё инфа</h2>
    <p>
      Dev-server прокидывает запросы на /api/* на backend, например <a href="/api/test" target=_blank>/api/test</a>
    <p>
      По вопросам пишите в лс на моём круге или на gmail@uzere.name

    
    <h2>Ссылки по Vue.js от шаблона, пусть тут лежат</h2>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      msg: 'Оно работает!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
  width: 970px;
  margin: 0 auto;
}

.todo img {
  margin: 0 auto;
  display: block;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
