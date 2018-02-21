<template>
  <div class="contain row no-margin-bottom">
    <div class="col s12 m8 hide-on-small-only">
      <div class="row no-margin-bottom">
        <div class="col s10">
          <p class="header">Physics Department, University of Ibadan</p>
          <p class="content">
            Voting for your representatives just got easier and faster with Desktop and Web applications
          </p>
          <div style="width: 150px; margin: 0 0 40px 20px;">
            <img class="responsive-img" src="~@/assets/saintsweb.png">
          </div>
          <p class="foot">
            Desktop and Web Applications developed by SaintsWebnology
          </p>
        </div>
      </div>
    </div>
    <div class="col s12 m4" id="loginSection">
      
      <window-controls></window-controls>

      <p class="flow-text hide-on-med-and-up white-text">Physics Department, University of Ibadan.</p>
      <h4>Register or Login to vote</h4>
      <h5>Only those that paid dues are elligible to register</h5>
      <div class="row input-fields">
        <form class="col s12 no-padding">
          <div class="row">
            <div class="input-field">
              <input type="email" name="email" id="email" placeholder="email">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field">
              <input type="number" name="matric" id="matric" placeholder="1*****">
              <label for="matric">Matric Number</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field">
              <input type="password" name="password" id="password" placeholder="****************">
              <label for="password">Password</label>
            </div>
          </div>
        </form>
      </div>

      <div class="row">
        <div class="col s12 center">
          <router-link to="/vote/President" class="btn blue lighten-1 submit-btn waves-effect waves-light">Start Voting</router-link>
        </div>
      </div>

      <div class="row notregis">
        <div class="row">
          <div class="col s12 center">
            <p>Haven't registered?</p>
          </div>
        </div>
        <div class="row">
          <div class="col s12 center">
            <button class="btn btn-flat waves-effect waves-blue register-btn modal-trigger" data-target="registerModal">Register now</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal modal-fixed-footer" id="registerModal">
      <div class="modal-content">
        <h3>Register</h3>
        <p>Ensure you have paid your dues to register.</p>
        <div class="row">
          <div class="col s10 offset-s1">
            
            <div class="row no-margin-bottom">
              <div class="input-field">
                <input type="number" name="matricNumber" placeholder="178***">
                <label>Matric Number</label>
              </div>
            </div>

            <div class="row no-margin-bottom">
              <div class="input-field">
                <input type="text" name="regId" placeholder="ABC123">
                <label>Registration Id</label>
              </div>
            </div>

            <div class="row no-margin-bottom">
              <div class="input-field">
                <input type="email" name="email" placeholder="john.doe@example.com">
                <label>Email</label>
              </div>
            </div>

            <div class="row no-margin-bottom">
              <div class="input-field">
                <input type="password" name="password" placeholder="***********">
                <label>Password</label>
              </div>
            </div>
          </div>
        </div>
        <div class="loading valign-wrapper hide">
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a class="modal-action btn-flat waves-blue waves-effect">Submit</a>
      </div>
    </div>
  </div>
</template>

<script>
  import WindowControls from './WindowControls/WindowControls';

  export default {
    name: 'credentials-page',
    mounted() {
      /* eslint-disable no-undef */
      $('.modal').modal();
    },
    components: { WindowControls },
  };
</script>

<style scoped>
  #loginSection {
    background-color: #1b1c2b;
    padding: 40px 40px 40px 40px;
    border-radius: 8px 0 0 8px;
    height: 100%;
  }
  .input-fields {
    margin-top: 50px;
  }
  .submit-btn {
    font-size: 18px;
    font-family: 'Raleway';
    text-transform: capitalize;
    height: 52px;
    width: 281px;
    line-height: 52px;
  }
  .notregis {
    margin-top: 45px;
    color: #e0e0e0;
    font-size: 14px;
    font-family: 'Roboto-Light';
  }
  .register-btn {
    color: #9e9e9e;
    font-size: 18px;
    font-family: 'Raleway';
    text-transform: capitalize;
    height: 50px;
    width: 281px;
    line-height: 50px;
    background-color: transparent;
    border-radius: 25px;
    border: 1px solid #616161;
  }
  .register-btn:hover {
    background-color: transparent;
  }
  .waves-effect.waves-blue .waves-ripple {
    background-color: #bbdefb;
  }
  .btn:focus {
    background-color: #bbdefb;
  }
  .modal {
    width: 450px;
    max-height: 80%;
  }
  .loading {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    padding: 20px 5%;
  }
  .progress {
    background-color: #bbdefb;
  }
  .progress .indeterminate {
    background-color: #64b5f6;
  }
</style>