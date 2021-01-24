# vue-firebase

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 실습
- 기본 Vue CLI로 프론트 서버 구축 및 실행
```command
npm i @vue/cli
vue create .
npm run serve
```
- vuetify 설치
```command
vue add vuetify
```
- Choose a preset: Configure
- Select icon font: Material Design Icons 

### 확장 프로그램
- Vetur
- ESLint
- Git History
- indent-rainbow
- Auto Close Tag
- Auto Complete Tag
- Auto Rename Tag

#### EsLint 관련 세팅
```Json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
    
```

### 파이어베이스 설정

- Realtime Database
  - 기본 GCP 리소스 위치: asia-northeast3 (서울)
  - 지원 이메일: heroyooi1018@gmail.com
  - 인증 사용 설정: 이메일/비밀번호, Google

```command
npm i -g firebase-tools
firebase login
```
```command
firebase init
```
- 파이어 베이스 초기화
  - Database, Firestore, Functions, Hosting, Storage, Emulators
  - Use an existing project
  - What do you want to use as your public directory? dist

```command
npm i firebase
```

### 듣던 강의
[Vue와 Firebase로 나만의 사이트 만들기 11](https://www.youtube.com/watch?v=wzYuEzyAcco&list=PLjpTKic1SLZsWckh_DZ6tYH17MM6hBAc7&index=17)
[Vuetify | IE11 & Safari 9 support](https://v2.vuetifyjs.com/ko/getting-started/browser-support)