
//	var loadFileSTL = function() {};
	var beebop;

	browseNasaStlModels ( location.hash );


	function browseNasaStlModels ( parameters ) {

//		displayMarkdown ( '../../../nasa-samples/readme.md', info );

		if ( !scene || parameters.indexOf( '#new=true' ) > -1 ) { 

			location.hash = '#load-file-html.js#./templates/template-lights-shadows.html';

			callbackIframe = function() {

//				loadFileSTL( parameters );

				VH.loadScript( 'http://mrdoob.github.io/three.js/examples/js/loaders/STLLoader.js', callbackLoadSTL ( parameters ) );
//				VH.loadScript( 'load-file-stl.js', callbackLoadFileSTL( parameters ) );
			}

		} else {

				loadFileSTL( parameters );
//			VH.loadScript( 'http://mrdoob.github.io/three.js/examples/js/loaders/STLLoader.js', callbackLoadSTL ( parameters ) );
//				VH.loadScript( 'load-file-stl.js', callbackLoadFileSTL( parameters ) );
		}

console.log( 'viewNasaStlModels' );

	}

	function callbackLoadSTL ( parameters ) {

		callbackIframe = callbackIframeDefault;

//		location.hash = '#load-file-stl.js' + parameters;
//		VH.loadScript( 'load-file-stl.js', callbackLoadFileSTL( parameters ) );

		loadFileSTL( parameters );

console.log( 'callbackLoadSTL', parameters, location.hash );

	}

	function callbackLoadFileSTL( parameters ) {

		if ( !parameters ) return;
		parameters = parameters.replace( '#browse-nasa-stl-models.js', '' );

		beebop = parameters = '#load-file-stl.js' + parameters;

		loadFileSTL( parameters );

console.log( 'callbackLoadFileSTLvvvv', parameters, location.hash );

	}
