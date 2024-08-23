export default {
  name: "Hero",
  data() {
    return {
      showImg: false,
    };
  },
  mounted() {
    this.checkWidth();
    window.addEventListener("resize", this.checkWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkWidth);
  },
  methods: {
    checkWidth() {
      if (window.innerWidth <= 600) {
        this.showImg = true;
      }else{
        this.showImg = false;
      }
    }
  },

  
  template://html
  `
  <div class="blue-light-to-blue-deep-bg">
  <div id="hero" class="scrollspy">
    <div class="container">
      <div class="row">
        <div class="col l5 m6 s12">
          <div class="badge mb-32">Curso</div>
          <div class="display1 white-text" data-aos="fade-up">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <img
      v-if="showImg"
      class="mobile-hero"
      src="../../src/img/aula/Hero-s.webp"
      alt="Hero"
    />
  </div>
</div>
`,
};
