// Só funciona 1 componente por página
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: "src/img/aula/gif-07.webp",
          alt: "Função",

          
          html://html 
          `
            <p class="body1 purple-text"><b>Função</b></p>
            <br />
            <p>Agora, quero ver se você conhece bem os lipídios. Faça uma lista das funções dos lipídios no caderno. Nos próximos slides, discutiremos essas funções.</p>
            <br>
            <p>Dei uma dica, hein! <b>Funções.</b></p>
            
            `,
        },
        {
          id: 2,
          img: "src/img/aula/gif-08.webp",
          alt: "ENGORDAR",

          
          html://html 
          `
         
            <p>E a função é…. ENGORDAR!
            </p>
            <br>
            <p>Não, gente, para com isso!
            </p>
            <br>
            <p>Você sabe que o engordar tem a ver com uma função dos lipídios? Veremos a seguir.
            </p>
            
            `,
        },
        {
          id: 3,
          img: "src/img/aula/gif-09.webp",
          alt: "Energética",

          
          html://html 
          `
         
            <p>
            <span class="purple-text">Energética.</span>

            </p>
            <br>
            <p>
            Olha a função energética aqui novamente! Sim, os lipídios também são usados para gerar energia. Inclusive, eles fornecem 2x mais energia do que os carboidratos.

            </p>
            
            `,
        },
        {
          id: 4,
          img: "src/img/aula/static-06.jpg",
          alt: "Função",

          
          html://html 
          `
         
            <p>
            Respondendo à questão feita…


            </p>
            <br>
            <p>
            Há no nosso corpo um tecido chamado tecido adiposo, que se constitui de células que acumulam gordura. 

            </p>
            
            `,
        },
        {
          id: 5,
          img: "src/img/aula/static-07.jpg",
          alt: "Função",

          
          html://html 
          `
         
            <p>
            Quando consumimos muita gordura, nós a acumulamos como reserva energética nesse tecido, que acaba aumentando. Logo, engordamos.

            </p>
            
            `,
        },
        {
          id: 6,
          img: "src/img/aula/static-08.jpg",
          alt: "Isolamento térmico.",

          
          html://html 
          `
         
            <p class="purple-text">
            Isolamento térmico.

            </p>
            <br>
            <p>
            O tecido adiposo funciona como um isolante térmico, pois mantém a temperatura do corpo constante.

            </p>
            <p>
            É como se fosse uma bolsa térmica.

            </p>
            
            `,
        },
        {
          id: 7,
          img: "src/img/aula/static-07.jpg",
          alt: "sobrepeso",

          
          html://html 
          `
         
            <p>
            Esse é o motivo de pessoas em sobrepeso sentirem mais calor ao fazer atividade física, já que a temperatura interna se eleva rapidamente.

            </p>
            
            `,
        },
        {
          id: 8,
          img: "src/img/aula/static-09.jpeg",
          alt: "sobrepeso",

          
          html://html 
          `
          <p class="purple-text">
          Produção de hormônios.

          </p>
          <br>
            <p>
            Alguns hormônios, como a testosterona (hormônio masculino) e a progesterona (hormônio feminino) possuem lipídios em sua composição.

            </p>
            
            `,
        },
        {
          id: 9,
          img: "src/img/aula/static-10.jpg",
          alt: "Impermeabilização",

          
          html://html 
          `
          <p class="purple-text">
          Impermeabilização.


          </p>
          <br>
            <p>
            As ceras protegem as superfícies de frutos, por exemplo, para que eles não percam água.

            </p>
            <br>
            <p>
            Outro exemplo é o óleo que impermeabiliza penas de aves aquáticas, para que elas possam entrar na água.

            </p>
            
            `,
        },
        {
          id: 10,
          img: "src/img/aula/gif-09-1.webp",
          alt: "Impermeabilização",

          
          html://html 
          `
            <p>
            Transporte de vitaminas.

            </p>
            <br>
            <p>
            Algumas vitaminas não se misturam com a água. Logo, os lipídios transportam essas vitaminas.

            </p>
            
            `,
        },
      ],
      carousel: {
        class: "carousel-01",
        key: 0,
        elemento: null,
        qtdSlides: 0,
        ordem: 1,
        ordemAnterior: 99,
      },

      instances: null, // Declare instances as a reactive variable
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
        // this.qtdSlides = slide.parentNode.querySelectorAll(".carousel-item").length;

        // Lógica para saber o slide atual
        let search = slide.parentNode;
        let slideIndex = [...search.children].indexOf(slide);
        this.carousel.ordem = slideIndex;
        this.carousel.ordemAnterior = this.ordem - 1;

        // Se for o primeiro slide, não mostrar o botão anterior
        if (this.carousel.ordem == 1) {
          this.carousel.elemento.querySelector(".previous").style.display =
            "none";
        } else {
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
        }
      },
    });
    this.carousel.elemento.querySelector(".previous").style.display = "none";
  },

  //html
  template: `
    <!-- Carousel -->
    <div class="carousel carousel-slider center" :class="[carousel.class]">
    <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="previous flex--align-center card card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_left
          </span>
        </a>
        <a @click="next" class="next flex--align-center card ml-4 card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_right
          </span>
        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item card">
        <div class="row card-content">
        <div class="col s12 m6 img--round">
          <img :src="item.img" :alt="item.alt" class="img--round">
          </div>
          <div class="col s12 m6 left-align" v-html="item.html"></div>
        </div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
