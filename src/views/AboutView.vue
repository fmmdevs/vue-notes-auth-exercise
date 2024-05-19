<template>
  <div class="container">
    <h1>About this app</h1>

    <ul class="features flex">
      <p>Simple notes app builded in vue3, witch allows you to:
      </p>
      <li>
        Register Users
      </li>
      <li>
        Login Users
      </li>
      <li>
        Add Notes
      </li>
      <li>
        List Notes
      </li>
      <li>
        Delete Notes
      </li>
      <li>
        Update Notes
      </li>
    </ul>

    <ul class="credits">
      <h4>Credits</h4>

      <li><a href="https://www.youtube.com/watch?v=XkRi9_MS3ns&list=LL&index=3">Planteamiento del ejercicio</a></li>
      <li>
        <a href="https://github.com/JJRuizDeveloper/vue-example-server">Backend original</a>
      </li>
      <li><a href="https://campus-ademass.com/">Campus Ademass</a></li>
    </ul>
    <p>* Backend was provided in laravel, but I added code in the laravel app to be able to delete and update notes</p>

  </div>
</template>

<style lang="scss" scoped>
// .features {
//   width: 60%;
//   margin: auto;
//   text-align: left;
//   margin-bottom: 30px;
// }

// .credits {
//   text-align: left;
//   width: 60%;
//   margin: auto;
//   text-align: left;
// }
ul {
  list-style: none;
  text-align: center;
}

// .container {
//   @include theme(lightgreen)
// }</style>
