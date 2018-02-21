<template>
  <div class="window-controls right row no-margin-bottom hide-on-small-only">
    <div class="col s4 center window-minimize" @click="minimize">
      <i class="material-icons">remove</i>
    </div>
    <div class="col s4 center window-maximize" @click="maximize">
      <i class="material-icons">{{ maxim }}</i>
    </div><!-- System Update Alt -->
    <div class="col s4 center window-close" @click="close">
      <i class="material-icons">close</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'window-controls',
    data() {
      return {
        maxim: 'settings_overscan',
      };
    },
    methods: {
      minimize() {
        this.$electron.remote.getCurrentWindow().minimize();
      },
      maximize() {
        if (this.$electron.remote.getCurrentWindow().isMaximized()) {
          this.maxim = 'settings_overscan';
          this.$electron.remote.getCurrentWindow().unmaximize();
        } else {
          this.maxim = 'system_update_alt';
          this.$electron.remote.getCurrentWindow().maximize();
        }
      },
      close() {
        this.$electron.remote.getCurrentWindow().close();
      },
    },
  };
</script>

<style scoped>
  .window-controls {
    position: absolute;
    width: 80px;
    height: 30px;
    top: 0;
    right: 3px;
    color: #909090;
  }
  .window-close, .window-minimize, .window-maximize {
    cursor: pointer;
    height: 20px;
    padding: 0 !important;
  }
  .window-close i.material-icons, .window-minimize i.material-icons, .window-maximize i.material-icons {
    font-size: 18px !important;
  }
  .window-close:hover {
    background-color: #e53935;
    color: #ffffff;
  }
  .window-minimize:hover, .window-maximize:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>