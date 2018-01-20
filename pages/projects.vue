<template>
  <div class="container-fluid">
    <div class="row mb-5">
      <div class="col-12 align-self-center meComponent">
        <div class="text-center"><img src="images/me.jpg" alt="A Picture of me, Nicholas Perez" class="img-thumbnail profile-image">
          <h2 class="text-center">Nicholas Perez</h2>
          <p class="lead">Software Developer &amp; Technologist</p>
          <p>To create software that makes people wonder how they ever lived without it, is my goal.</p>
          <a href="https://github.com/nperez0111" aria-label="Github Profile Link"><span class='fa fa-github github'></span></a>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <ul class="nav nav-tabs center nav-fill mb-5" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" href="#websites" role="tab" data-toggle="tab">Websites</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#webapps" role="tab" data-toggle="tab">Web Apps</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#npm" role="tab" data-toggle="tab">NPM Modules</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scripts" role="tab" data-toggle="tab">Scripts &amp; Utilities</a>
        </li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane fade active show" id="websites">
          <Browser :pages="pages"></Browser>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="webapps">
          <Browser :pages="apps"></Browser>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="npm">
          <Lister :items="npm"></Lister>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="scripts">
          <Lister :items="script"></Lister>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="row">
        <div class="col">
          <h5>Made by Nick the Sick</h5>
        </div>
        <div class="col"><a href="mailto:nick@nickthesick.com"><span class="fa fa-envelope"></span> Nick@NickTheSick.com</a></div>
        <div class="col"><a href="tel:3052828358"><span class="fa fa-phone"></span> (305)-282-8358</a></div>
        <div class="col"><a href="https://github.com/nperez0111"><span class="fa fa-github"></span> My GitHub</a></div>
        <div class="col"><a href="https://www.linkedin.com/in/nicholas-perez-215262124"><span class="fa fa-linkedin"></span> My LinkedIn</a></div>
      </div>
    </div>
  </div>
</template>
<script>
import Lister from '../components/Lister'
import Browser from '../components/Browser'
import {
  npm,
  apps,
  pages,
  script
} from '../assets/text'
export default {
  data() {
      return {
        npm,
        apps,
        pages,
        script
      }
    },
    components: {
      Lister,
      Browser
    }
}
</script>
