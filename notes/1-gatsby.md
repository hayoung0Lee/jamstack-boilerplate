# Gatsby 로 만드는 사이트

1. gatsby-cli 설치: [npm docs](https://www.npmjs.com/package/gatsby-cli)
   - gatsby project 를 생성하는 등을 돕는 패키지
       ```
       // yarn 으로 
       yarn add global gatsby-cli

       // npm 으로
       npm install -g gatsby-cli

       // volta를 통해서 관리하는 경우
       volta install gatsby-cli
       ```

   - 사용예
       ```
       gatsby new [<site-name> [<starter-url>]]

       // project 생성
       gatsby new jamstack-boilerplate
       cd jamstack-boilerplate
       gatsby develop
       ```


2. TypeScript 사용 설정
   - default로 typescript를 지원한다.
   - 아래는 gatsby-cli로 새로운 프로젝트를 생성하면 볼 수 있는 typescript 관련 정보이다. 
   - 그런데 요상하게도 typescript에서 error가 생겨도 컴파일을 해준다
  
   ```
   This means that you can create and write .ts/.tsx files for your pages, components etc. Please note that the gatsby-*.js files (like gatsby-node.js) currently don't support TypeScript yet.

   For type checking you'll want to install typescript via npm and run tsc --init to create a .tsconfig file.
   ```

   시키는대로 typescript를 설치하고 tsc --init을 실행한다. 

   ```
   npm install -D typescript
   ```

   이후 pakcage.json에서 script를 추가한다. 

   ```json
   "scripts": {
       "build": "gatsby build",
       "develop": "gatsby develop",
       "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
       "start": "npm run develop",
       "serve": "gatsby serve",
       "clean": "gatsby clean",
       "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1",
       "tsc": "tsc" // 이 부분 추가
   },
   ```

   이후 terminal에서 아래의 명령어로 init을 해서 tsconfig.json 파일을 생성한다. 

   ```
   npm run tsc -- --init 

   // 또는 아래의 방법
   ./node_modules/.bin/tsc --init
   ```

   - [gatsby typescript document](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/)
     - [typescipt 예제](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-typescript)
     - [typescript plugin 관련 내용](https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/)
       - `gatsby-plugin-typescript`는 default로 추가 되어있는데 customizing 할때  `gatsby-config.js`를 통해서 customizing 할 수 있다. 
  
   - [영상 자료: how to use gatsby with typescript](https://www.youtube.com/watch?v=Mf8eqNrcZDw&ab_channel=ProgressiveDev)  
        ```
        npm install npm-run-all
        ```

        - package.json의 scripts 수정: `npm run develop` 실행
            ```json
            "develop:gatsby": "gatsby develop",
            "develop:type-check": "tsc --watch",
            "develop": "npm-run-all --parallel develop:gatsby develop:type-check",
            ```

3. volta 로 node/npm 버전 고정
   - [docs](https://docs.volta.sh/guide/)
   - 아직 사용법이 완벽하진 않지만, nvm 처럼 node버전을 관리해주는데 npm, yarn의 버전도 모두 관리 가능하다
   - Rust 기반이라 엄청나게 빠르다.
     
   ```
   volta pin node npm
   ```

4. [Intro to Gatsby](https://jlengstorf.github.io/presentations/workshop-gatsby-mdx-blog/#/)
   - [course repository](https://github.com/frontendmasters/gatsby-intro)
   - [mdx](https://mdxjs.com/)
   - why Gatsby?(What are the challenges of modern web development)
     - 시작이 넘 어렵다. 배울게 넘많고 뭐가 뭔지 알기가 어렵다.
     - 데이터를 관리하는 방법이 발전중이다. 이전에는 그냥 DB 정도 읽는거였다면 이제는 오만군데에서 다온다
     - Getting is right is hard: 하나만 해도 평생해도 못하는데 작은 팀에서 다해야하면 ㄹㅇ 망한거.
     - _Gatsby를 통해서 바로 시작한다. 그리고 근본적으로 Gatsby는 React와 GraphQL만 이용중이다. 그래서 다 되면 Netlify에 올리기만 하면 그만_ (Netlify는 Github을 지켜보다가 변경이 있으면 알아서 배포해주는 서비스)
     - _Gatsby is a progressive Web App Generator designed to make the right thing the easy thing_

5. [styled-components 설치](https://www.gatsbyjs.com/docs/how-to/styling/styled-components/)

6. Sample Layout: https://smartstore.naver.com/drj_gomtang/products/4856718842?

7. How to Build Multilingual Sites with Gatsby: [here](https://www.gatsbyjs.com/blog/2020-02-19-how-to-build-multilingual-sites-with-gatsby/)
    - plugin 을 통해서 react-intl 또는 i18next를 사용하는 것을 도와주는 것: [here](https://www.gatsbyjs.com/docs/how-to/adding-common-features/localization-i18n/)