
	browseNasaStlModels ( location.hash );

	function browseNasaStlModels ( parameters ) {

//		displayMarkdown ( '../../../nasa-samples/readme.md', info );

		if ( !scene || parameters.indexOf( '#new=true' ) > -1 ) { 

			location.hash = '#load-file-html.js#./templates/template-lights-shadows.html#displayInfo#';

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

		loadFileSTL( parameters );

console.log( 'callbackLoadSTL', parameters, location.hash );

	}

