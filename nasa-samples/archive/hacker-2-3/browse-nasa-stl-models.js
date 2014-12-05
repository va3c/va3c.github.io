
	browseNasaStlModels ( location.hash );

	function browseNasaStlModels ( parameters ) {

		VH.displayMarkdown ( './readme.md', menuLeft );

		location.hash = '';

		if ( !scene || parameters.indexOf( '#new=true' ) > -1 ) { 

			loadFileHTMLByURL( '#../viewer/va3c-hacker/r2-3dev/load-file-html-by-url.js#./templates/template-lights-shadows.html#displayInfo#' );

			callbackIframe = function() {

				VH.loadScript( 'http://mrdoob.github.io/three.js/examples/js/loaders/STLLoader.js', callbackLoadSTL ( parameters ) );

			};

		} else {

			VH.loadScript( 'http://mrdoob.github.io/three.js/examples/js/loaders/STLLoader.js', callbackLoadSTL ( parameters ) );

		}

console.log( 'viewNasaStlModels' );

	}

	function callbackLoadSTL ( parameters ) {

		callbackIframe = callbackIframeDefault;

		loadFileSTLByURL( parameters );

console.log( 'callbackLoadSTL', parameters, location.hash );

	}

