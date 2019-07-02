export default async () => {
  const [htmlCode, jsCode, cssCode] = await Promise.all([
    import(/* webpackChunkName: "demo-demo2" */ '!raw-loader!../assets/index.html'),
    import(/* webpackChunkName: "demo-demo2" */ '!raw-loader!./script.js'),
    import(/* webpackChunkName: "demo-demo2" */ '!raw-loader!../assets/style.css'),
  ]);

  return {
    javascript: {
      code: jsCode,
      transformer: 'javascript',
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
        '//lib.baomitu.com/dat-gui/0.7.2/dat.gui.min.js',
        '//lib.baomitu.com/babel-polyfill/7.0.0-beta.44/polyfill.min.js',
      ],
      css: [],
    }
  }
}