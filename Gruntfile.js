
module.exports = function(grunt) {
  // Do grunt-related things in here
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	
	grunt.initConfig({
	  sass: {                              // Task 
	    dist: {                            // Target 
	      options: {                       // Target options 
	        style: 'expanded'
	      },
	      files: {                         // Dictionary of files 
	        'css/bootstrap.css': 'stylesheets/_bootstrap.scss'      // 'destination': 'source' 
	       
	      }
	    }
	  }
	});
 
	grunt.loadNpmTasks('grunt-contrib-sass');
 
	grunt.registerTask('default', ['sass']);
	
};