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