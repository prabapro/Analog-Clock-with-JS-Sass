# Sass Boiler Plate with Gulp

### Included Gulp Tasks
* Compile .scss & .js
* Compress as *.min.css & *.min.js
* Image optimization

### Getting started
1. Install gulp globally (if you don't have already)\
```sudo npm install gulp-cli -g```

1. Initialize Node Packages\
```npm init```

1. Install Gulp locally to the project directory\
```npm install gulp -D```

1. Install plugins\
```npm install node-sass gulp-sass gulp-autoprefixer gulp-sourcemaps gulp-imagemin gulp-rename gulp-terser --save-dev```

1. Create your markup files (HTML) in ```dist\``` directory

### How to run
1. Run ```gulp``` to start watching CSS & JS
1. Run ```gulp image``` to optimize images


#### Tree

```
├── dist
│   ├── css
│   │   ├── app.min.css
│   │   └── app.min.css.map
│   ├── images
│   │   └── sarah-dorweiler-357717-unsplash.jpg
│   ├── index.html
│   └── js
│       ├── jquery.min.js
│       └── script.min.js
├── gulpfile.js
├── js
│   ├── jquery.js
│   └── script.js
└── scss
    ├── _0_functions.scss
    ├── _0_mixins.scss
    ├── _0_variables.scss
    ├── _1_main.scss
    ├── _1_typography.scss
    ├── _2_layout_footer.scss
    ├── _2_layout_forms.scss
    ├── _2_layout_grid.scss
    ├── _2_layout_header.scss
    ├── _2_layout_navigation.scss
    ├── _2_layout_sidebar.scss
    ├── _3_components.scss
    ├── _4_pages_contact.scss
    ├── _4_pages_home.scss
    ├── _5_responsive.scss
    ├── _vendors_bootstrap.scss
    ├── _vendors_jquery.scss
    ├── _vendors_reset.scss
    └── app.scss
```

**Sample image at** ```/dist/images/```:\
Photo by [Sarah Dorweiler](https://unsplash.com/photos/Sy8dsVyiPgs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText "(target|_blank)") on Unsplash - Thanks Sarah ♥️
