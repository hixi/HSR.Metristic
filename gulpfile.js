'use strict';

let gulp = require('gulp'),
	nodemon = require('nodemon'),
	ts = require('gulp-typescript');


var CONFIGURATION = {
	sourceDirectory: __dirname+'/src',
	sourceDirectoryAssets: __dirname+'/src/assets',
	deploymentDirectory: __dirname+'/app',
	deploymentDirectoryAssets: __dirname+'/app/assets',
	tsLintConfig: {
		configuration: './tslint.json'
	}
};
var STATIC_FILES = [ 'js', 'html', 'png', 'jpg', 'svg', 'css' ].map(
	(format) => CONFIGURATION.sourceDirectory+'/**/*.'+format
);


var tsProject = ts.createProject('tsconfig.json');
gulp.task('typescript', function() {
	var reporter = ts.reporter.defaultReporter();
	var tsResult = tsProject.src().pipe(ts(tsProject(reporter)));
	return tsResult.js.pipe(gulp.dest(tsProject.config.compilerOptions.outDir));
});

gulp.task('tslint', function() {
	gulp.src([CONFIGURATION.sourceDirectory + '/**/*.ts'])
		.pipe(tslint(CONFIGURATION.tsLintConfig))
		.pipe(tslint.report());
});

gulp.task('watch', function() {
	gulp.watch(CONFIGURATION.sourceDirectory+'/**/*.ts', ['typescript']);
	gulp.watch(STATIC_FILES, ['deploy static']);
});

gulp.task('deploy', ['typescript', 'deploy static'], function() {});

gulp.task('serve', ['deploy', 'watch'], function() {
	nodemon({
		script: CONFIGURATION.deploymentDirectory+'/index.js',
		ext: 'js html'
	})
});

gulp.task('deploy static', [], function() {
	return gulp.src(STATIC_FILES, {
			base: CONFIGURATION.sourceDirectory
		})
		.pipe(gulp.dest(CONFIGURATION.deploymentDirectory));
});

gulp.task('default', ['serve']);