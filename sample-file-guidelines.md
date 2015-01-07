Samples Guidelines
===

Update: 2014-12-30

The following are guidelines for producing sample files to use and enjoy with the vA3C Viewer/vA3C Hacker


## Data formats

Generally, sample files should follow that latest Three.js JSON format as published on the [Three.js Wiki]( https://github.com/mrdoob/three.js/wiki )

Samples files should be tested using the [Three.js Editor]( http://mrdoob.github.io/three.js/editor/ ).

If the sample loads and displays correctly in the Three.js Editor and the vA3C viewer then most likely it's good to go.


## Data Types

Three.js JSON format supports three types of data: geometry, objects and scenes

* Use geometry if your model is contains vertex and face data and has no materials
* Use object if your model has geometry plus color, material and texture data
* Use scene if your object has the above plus lights and camera information

If you model contains numerous objects, the tendency is simply to export the data as a scene. 
This works reasonably well because Three.js is quite forgiving and when imported the data displays even if no camera or lights is included in the scene  
On the other hand, scenes created this way cause complications for add-on apps such as vA3C Hacker/Viewer (which are trying to be as simple as possible).
So, if you can, when you have multiple objects do add these to a single containing Three.js Object3D and then export that as the object.

 


## Model Parameters

Scale: at the scale they were produced  

* Note that the default box for the vA3C Viewer /va3C Hacker is 100 x 100 x 100 units
	* The units could be cm, inches, furlongs whatever
	* If you model is withinn these limits and is to be embedded with other models then it should display well in that box
* Supply guidance on what scale - other than 1:1 you would like the viewer to use

Origin

* At the bottom lower left corner of the project is nice
	* Especially if the model is to be inserted into another model
* At the bottom center of the project is also nice

Rotation

* Use the model's grid
* Supply guidance if not North/South


## Copyrights
* For project design: Name and contact information for the architect or designer. 
* For project models: Name and contact information for the modeler.


## License

* If not out of copyright, Creative Commons licence preferred

* MIT License for code preferred

## Description

A paragraph or two describing the special aspects or principles of the project in a text file would be nice

* Built to what codes and regs
* Provenance / references to precedents
* Where published


## BIM Considerations

* Link to ontology or categorization schema
* Links to spec
* Links to project management dates
* Links to codes


## Other Nice Things to Have

* Series of models that have a theme
	* Five is a nice number
* University class projects
* Examples from e-books













