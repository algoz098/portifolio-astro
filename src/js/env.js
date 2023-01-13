
const json = {
  formattedName: 'Artur Sena\'s Portifolio',
  data: {
    github: {
      list: [
        {
          url: 'https://github.com/algoz098/vue-player',
          name: 'vue-player',
          acronyms: 'VP',
          descriptionUrl: 'https://raw.githubusercontent.com/algoz098/vue-player/master/README.md'
        },
        {
          url: 'https://github.com/algoz098/vue-audio-recorder',
          name: 'vue-audio-recorder',
          acronyms: 'VAR',
          descriptionUrl: 'https://raw.githubusercontent.com/algoz098/vue-audio-recorder/master/README.md'
        },
        {
          url: 'https://github.com/algoz098/portifolio-astro',
          name: 'portifolio-astro',
          acronyms: 'Portifolio/Astro',
          descriptionUrl: 'https://raw.githubusercontent.com/algoz098/portifolio-astro/master/README.md'
        },
        {
          url: 'https://github.com/algoz098/ssg-generator-vite',
          name: 'ssg-generator-vite',
          acronyms: 'SSG',
          descriptionUrl: 'https://raw.githubusercontent.com/algoz098/ssg-generator-vite/master/README.md'
        },
        {
          url: 'https://github.com/algoz098/cli-helper',
          name: 'cli-helper',
          acronyms: 'CLI',
          description: {
            ptbr: 'Um pequeno ajudante para executar longas tarefas atravez da linha de comando, como importar dados, mastigar listas e outras.',
            en: 'A little helper to execute long tasks through command line, like import data, crunch list and more.'
          }
        },
        {
          url: 'https://github.com/algoz098/vue-native-dialog',
          name: 'vue-native-dialog',
          descriptionUrl: 'https://raw.githubusercontent.com/algoz098/vue-native-dialog/master/README.md',
          acronyms: 'VND',
        },
      ]
    },
    companies: {
      list: [
        {
          title: 'Pinterest',
          description: {
            ptbr: 'Junto da equipe de Performace Web, trabalhei para estruturar testes de qualidade e velocidade nos commits feito por outros desenvolvedores usando tecnologias como Lighthouse, NodeJS e BuildKite.',
            en: 'Together with the Performance Web, worked to structure quality and speed tests on the commits done by other developers using technologies like Lighthouse, NodeJS and BuildKite'
          },
          url: 'https://pinterest.com'
        },
        {
          title: 'GeekHive',
          description: {
            ptbr: 'Criando components em javascript puro e SASS (CSS) para uma pagina. Alem, tambem adicionei recursos em VueJS para uma plataforma de logistica farmaceutica ',
            en: 'Worked in plain javascript and SASS (CSS) components for a website. Also added new features in VueJS for a pharmaceutical logistic platform'
          },
          url: 'https://geekhive.com'
        },
        {
          title: 'IONARY DEV LLC',
          description: {
            ptbr: 'Criado bibliotecas, interfaces em VueJS, integrações com o backend em FeathersJS (NodeJS). Criar e manter tests feitos em WDIO',
            en: 'Created VueJS library, interfaces and integration with FeatherJS in the backend. Create and maintain test suite with WDIO.'
          },
          url: 'https://ionary.dev'
        },
        {
          title: 'Platform Purple',
          description: {
            ptbr: 'Criar, manter e ajudar no desenvolvimento the projetos internos para trans e comercio em modelo SaaS de videos e transmissão que a compania gerencia, alem de desenvolver as mesmas ferramentas para outras empresas como Discovery Education',
            en: 'Create, maintain, and help develop the internal project for video streaming and SaaS ecommerce for video and streaming the company owns, as develop for other company\'s clients like Discovery Education'
          },
          url: 'https://platformpurple.com/'
        },
        {
          title: 'RhizaTech',
          description: {
            ptbr: 'Criar temas usando JQuery e VueJS baseado em Mock feitos em photoshop e baseado nas instruções do cliente. Criado o frontend de uma plataforma para EaD com uma interface que imita a de rede social.',
            en: 'Create templates using JQUERY and VueJS based on Mock on photoshop and any other instruction the client asks. Created a platform\'s frontend for home school with a social network like interface.'
          },
        },
      ]
    }
  }
}

export let env = null;

function request () {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      env = json
      resolve(json)

    }, 0)
  })
}

export default request
