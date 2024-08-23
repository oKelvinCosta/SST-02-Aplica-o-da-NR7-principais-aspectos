import {
  onMounted,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {
  setup() {
    onMounted(() => {
      console.log('questions');
    });

    // Verifica Questao
    const verificaQuestao = (event, questao) => {
      const gabaritoQuestoes = { q1: "a" };
      let selecionado = event.target.value;
      let correto = `
        <div class="question-result question-result__correto">
          <p class="body1 flex--align-center">  
            <span class="material-symbols-rounded mx-5">sentiment_very_satisfied</span>
           <b> Acertou!</b>
          </p>
        </div>
      `;
      let incorreto = `
        <div class="question-result question-result__incorreto">
          <p class="body1 flex--align-center">
             <span class="material-symbols-rounded mx-5">sentiment_very_dissatisfied</span>
            <b>Ops!</b>
          </p>
        </div>
      `;

      if (selecionado === gabaritoQuestoes[questao]) {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = correto;
      } else {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = incorreto;
      }
    };

    return { verificaQuestao };
  },

  template: //html
  `
    <!-- Question 1 -->
    <div class="question-radio" id="q1">
      <p class="body1 mt-2"><b>
      O exame mostrou que Charlie estava:

      </b>​</p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="a" />
          <span><b>a) </b>com deficiência de vitaminas.          </span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="b" />
          <span><b>b) </b>normal, sem nenhuma alteração.          </span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="c" />
          <span><b>c) </b>com falta de gordura no corpo.          </span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="c" />
          <span><b>d) </b>com problemas no coração.        </span>
        </label>
      </p>
      
      <div class="feedback"></div>
    </div>
  `,
};
