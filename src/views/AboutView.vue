<template>
  <div class="container">
    <h1>About this app</h1>
    <p>Simple notes app builded in vue3, witch allows you to:
    </p>
    <ul>
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
    <p>* Backend was provided in laravel, but I added code for delete and update notes</p>
    <h1>App : Vue3</h1>


  </div>
</template>

<style lang="scss" scoped>
ul {
  width: 40%;
  margin: auto;
  text-align: left;
  margin-bottom: 30px;
}

.container {
  @include theme(lightgreen)
}
</style>
