<template>
  <div class="contain row no-margin-bottom">
    <div class="row contain no-margin-bottom">
      <div class="col s12 m2 valign-wrapper categories">
      <ul class="category-list">
        <li class="active">President</li>
        <li>Vice President</li>
        <li>Social Director</li>
        <li>Presidents Wife</li>
        <li>Sports Director</li>
        <li>General Secetary</li>
        <li>Ass. General Secetary</li>
      </ul>
    </div>
    <div class="col s12 m10 valign-wrapper personnel">
      
      <window-controls></window-controls>

      <div class="row rw">
        <div class="col s12 m4 person">
          <div class="hexagon">
            <div class="hexagon-inside">
              <div class="hexagon-image valign-wrapper center"
              style="background-image: url('img/profile.jpg')"></div>
            </div>
          </div>
          <div class="details center">
            <p><b>NAME: </b> Olowokere David Saint</p>
            <p><b>LEVEL: </b> 400L</p>
            <p>Changing d world 1 code at a time 😎</p>
          </div>
          <p class="center">
            <input type="radio" name="president" class="with-gap" id="vote1">
            <label for="vote1"></label>
          </p>
        </div>
        <div class="col s12 m4 person">
          <div class="hexagon">
            <div class="hexagon-inside">
              <div class="hexagon-image"
              style="background-image: url('img/profile2.jpg')" 
              ></div>
            </div>
          </div>
          <div class="details center">
            <p><b>NAME: </b> Eseyin Kayode Godwin</p>
            <p><b>LEVEL: </b> 400L</p>
            <p>Twitter's Discretion is adviced</p>
          </div>
          <p class="center">
            <input type="radio" name="president" class="with-gap" id="vote2">
            <label for="vote2"></label>
          </p>
        </div>
        <div class="col s12 m4 person">
          <div class="hexagon">
            <div class="hexagon-inside">
              <div class="hexagon-image"
              style="background-image: url('img/profile3.jpg')" 
              ></div>
            </div>
          </div>
          <div class="details center">
            <p><b>NAME: </b> Okafor Ezinne Lilian</p>
            <p><b>LEVEL: </b> 400L</p>
            <p>I'm a Student || Trying to find my why</p>
          </div>
          <p class="center">
            <input type="radio" name="president" class="with-gap" id="vote3">
            <label for="vote3"></label>
          </p>
        </div>
      </div>
      <div class="prevnext">
        <div class="overcont">
          <div class="prev">
            <router-link to="/" class="btn btn-large btn-flat waves-effect">
              <i class="material-icons">arrow_back</i>
            </router-link>
          </div>
          <div class="next">
            <button class="btn btn-large btn-flat waves-effect">
              <i class="material-icons">arrow_forward</i>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
	import WindowControls from './WindowControls/WindowControls';

export default {
  name: 'voting-page',
  components: { WindowControls },
};
</script>

<style>
	
  /* Voting pages */
  .rw {
    margin-bottom: 50px;
  }
  .categories {
    background-color: #1b1c2b;
    height: 100%;
  }
  .personnel {
    background-color: #ffffff;
    position: relative;
    padding-bottom: 60px;
  }
  @media only screen and (min-width: 600px){
    .personnel {
      height: 100%;
    }
  }
  .category-list {
    color: #9e9e9e;
    margin-right: auto;
    margin-left: auto;
  }
  .category-list li {
    padding: 10px 0;
    cursor: pointer;
  }
  .category-list li.active {
    color: #eeeeee;
    border-bottom: 1px dotted #880e4f;
  }
  .category-list li:not(.active):hover {
    color: #eeeeee;
  }
  .person p.center {
    margin:0;
  }
  .hexagon {
    margin-top: 20px;
    height: 200px;
    width: 400px;
    background: #1b1c2b;
    transform: rotate(120deg);
    overflow: hidden;
    visibility: hidden;
  }
  .hexagon-inside {
    width: 100%;
    height: 100%;
    background: #880e4f;
    transform: rotate(-60deg);
    overflow: hidden;
    visibility: hidden;
  }
  .hexagon-image {
    width: 100%;
    height: 100%;
    cursor: pointer;
    visibility: visible;
    transform: rotate(-60deg);
    background-position: center;
    background-size: 100% auto;
  }
  .details {
    padding: 10px 45px;
    font-family: 'Roboto-Regular';
  }
  .prevnext {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
  }
  .overcont {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .prev {
    position: absolute;
    left: 0;
  }
  .next {
    position: absolute;
    right: 0;
  }
  .prev button, .next button {
    width: 120px;
    height: 50px;
    line-height: 50px;
  }
</style>