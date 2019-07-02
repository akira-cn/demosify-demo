import * as Babel from '@babel/standalone';

export default async () => {
  const [htmlCode, jsCode, cssCode] = await Promise.all([
    import(/* webpackChunkName: "demo-demo4" */ '!raw-loader!./index.html'),
    import(/* webpackChunkName: "demo-demo4" */ '!raw-loader!./script.js'),
    import(/* webpackChunkName: "demo-demo4" */ '!raw-loader!./style.css'),
  ]);

  return {
    javascript: {
      code: jsCode,
      transformer: 'typescript',
      transform(code) {
        const _code = Babel.transform(code, { 
          presets: ['es2015'],
          plugins: ['transform-typescript'],
        }).code;
        return _code;
      },
      visible: true,
    },
    html: {
      code: htmlCode,
      transformer: 'html',
      visible: true,
    },
    css: {
      code: cssCode,
      transformer: 'css',
    },
    foldBoxes: ['html'],
    packages: {
      js: [

      ],
      css: [],
    }
  }
}