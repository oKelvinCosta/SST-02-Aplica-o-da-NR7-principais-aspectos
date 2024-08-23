// Só funciona 1 componente por página
export default {
  name: "CarouselSst",
  data() {
    return {
      carousel: {
        class: "carousel-sst",
        key: 0,
        elemento: null,
        qtdSlides: 0,
        ordem: 1,
        ordemAnterior: 99,
      },
      instances: null, // Declare instances as a reactive variable
      items: [
        {
          id: 1,
          img: "src/img/aula/slide-01.jpg",
          alt: "PCMSO",

          
          html://html 
          `
          <h1>PCMSO & Gestão de Saúde</h1>
            <p>
            O PCMSO, ou Programa de Controle Médico de Saúde Ocupacional, é parte integrante do conjunto de iniciativas da empresa em saúde do trabalhador.
            </p>
            <p>
            No PCMSO estão descritos os riscos ocupacionais de cada função ou cargo que existe na empresa. Nele é explicado como a empresa deve atuar de forma preventiva no campo da saúde para proteger os trabalhadores desses riscos.
            </p>
            
            `,
        },
        {
          id: 2,
          img: "src/img/aula/slide-02.jpg",
          alt: "PCMSO",

          
          html://html 
          `
         <p>
         Através da realização sistemática de exames ocupacionais, é possível verificar se as medidas de segurança no trabalho estão sendo eficazes para preservar a saúde do trabalhador.

         </p>
         <p>
         Os exames ocupacionais são: admissional, periódico, mudança de risco, retorno ao trabalho, demissional.

         </p>
            
            `,
        },
        {
          id: 3,
          img: "src/img/aula/slide-03.jpg",
          alt: "PCMSO",

          
          html://html 
          `
          <p>
          Durante os exames ocupacionais, além de exames complementares, o médico analisa de forma direcionada a saúde do trabalhador em relação aos riscos ocupacionais de sua atividade no trabalho.

          </p>
          <p>
          Nem todas as atividades precisam realizar exames complementares; depende do risco ocupacional ao qual o trabalhador está exposto.

          </p>
            `,
        },
        {
          id: 4,
          img: "src/img/aula/slide-04.jpg",
          alt: "PCMSO",

          
          html://html 
          `
          <p>
          Além dos exames ocupacionais, o PCMSO prevê outras ações, como a vigilância da saúde ocupacional dos trabalhadores.

          </p>
          <p>
          A vigilância da saúde ocupacional é a busca de sinais e sintomas de possíveis doenças ocupacionais na população de trabalhadores, de acordo com o risco ocupacional.

          </p>
            `,
        },
        {
          id: 5,
          img: "src/img/aula/slide-05.jpg",
          alt: "PCMSO",

          
          html://html 
          `
          <p>
          De acordo com a NR 7, ela deve ser feita de duas formas: vigilância passiva e vigilância ativa.
          </p>
          <p>
          A vigilância passiva é feita através da procura do serviço médico pelo trabalhador, sempre que perceba alguma alteração em sua saúde que acredita poder estar relacionada com sua atividade no trabalho.
          </p>
            `,
        },
        {
          id: 6,
          img: "src/img/aula/slide-06.jpg",
          alt: "PCMSO",

          
          html://html 
          `
          <p>
          A vigilância ativa é a coleta de sinais e sintomas, através dos exames médicos dirigidos, de possíveis doenças relacionadas aos riscos ocupacionais, ou por meio de questionários de saúde e segurança.
</p>
          <p>
          Todas essas ações, exames ocupacionais e de vigilância da saúde ocupacional, geram dados sobre a população de trabalhadores que são objeto de análise pelo serviço médico e que permitem a conclusão sobre a eficácia das medidas de segurança no trabalho.</p>
            `,
        },
      ],
    };
  },
  methods: {
    next() {
      this.carousel.elemento.querySelector(".previous").style.display = "flex";
      this.instances[this.carousel.key].next(); // Access the first carousel instance
    },
    previous() {
      this.instances[this.carousel.key].prev();
    },
  },
  mounted() {
    this.carousel.elemento = document.querySelector("." + this.carousel.class);

    let elems = document.querySelectorAll(".carousel." + this.carousel.class);
    this.instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      shift: 20,
      numVisible: 1,
      onCycleTo: (slide) => {
        this.carousel.qtdSlides = slide.parentNode.querySelectorAll(".carousel-item").length;

        // Lógica para saber o slide atual
        let search = slide.parentNode;
        let slideIndex = [...search.children].indexOf(slide);
        this.carousel.ordem = slideIndex;
        this.carousel.ordemAnterior = this.ordem - 1;
       


        // Se for o primeiro slide, não mostrar o botão anterior
        if (this.carousel.ordem == 1) {
          this.carousel.elemento.querySelector(".previous").style.display =
            "none";
            this.carousel.elemento.querySelector(".next").style.display =
            "flex";
        } else if (this.carousel.qtdSlides == this.carousel.ordem){
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
          this.carousel.elemento.querySelector(".next").style.display =
          "none";
        }else {
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
            this.carousel.elemento.querySelector(".next").style.display =
            "flex";
        }
      },
    });
    this.carousel.elemento.querySelector(".previous").style.display = "none";
  },

  
  template: //html  
  `
    <!-- Carousel -->
    <div class="carousel carousel-slider center" :class="[carousel.class]">
    <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="previous flex--align-center card to-left">
          <span class="material-symbols-rounded">
            chevron_left
          </span>
        </a>
        <a @click="next" class="next flex--align-center card to-right">
          <span class="material-symbols-rounded">
            chevron_right
          </span>
        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item  white-text center-align">
        <img :src="item.img" :alt="item.alt" loading="lazy">
        <div class="gradient"></div>
        <div class="text center-align" v-html="item.html"></div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
