// Se necesitan 3 cosas para hacer una acnimacion
 // Scene + Camera + Renderer
 const scene = new THREE.Scene()
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
 const renderer = new THREE.WebGLRenderer({ antialias: true})
 
 renderer.setSize( window.innerWidth, window.innerHeight )
 // sets renderer background color
 renderer.setClearColor("#B2B9BF")
 document.body.appendChild( renderer.domElement )
 camera.position.z = 4
 
 // resize canvas on resize window
 window.addEventListener( 'resize', () => {
     let width = window.innerWidth
     let height = window.innerHeight
     renderer.setSize( width, height )
     camera.aspect = width / height
     camera.updateProjectionMatrix()
 })

 // basic cube
 var geometry = new THREE.BoxGeometry( 2, 2, 2,2,2,2)
 var material = new THREE.MeshStandardMaterial( { color: 0x1CEE36, wireframe: true, transparent: true })
 var cube = new THREE.Mesh ( geometry, material )
 scene.add( cube )
 
 // wireframe cube
 var geometry = new THREE.BoxGeometry( 3, 3, 3,)
 var material = new THREE.MeshBasicMaterial( {
     color: "#ffffff", wireframe: true, transparent: true
 })
 var wireframeCube = new THREE.Mesh ( geometry, material )
 scene.add( wireframeCube )

 //midlewfcube
 var geometry = new THREE.SphereGeometry( .5, 15, 16, 0, 6.2,3.1,6.2)
 var material = new THREE.MeshBasicMaterial( { color: "#DF5858",wireframe:true, transparent:true })
 var midlewfcube = new THREE.Mesh ( geometry, material )
 scene.add( midlewfcube )
 
 // ambient light
 var ambientLight = new THREE.AmbientLight ( 0xD70000, 0.2)
 scene.add( ambientLight )
 
 // point light
 var pointLight = new THREE.PointLight( 0xffffff, 1 );
 pointLight.position.set( 25, 50, 25 );
 scene.add( pointLight );
 
 
 function animate() {
     requestAnimationFrame( animate )
     cube.rotation.x += 0.03;
     cube.rotation.y += 0.03;
     wireframeCube.rotation.x -= 0.01;
     wireframeCube.rotation.y -= 0.01;
     midlewfcube.rotation.x -= 0.02;
     midlewfcube.rotation.y -= 0.02;
     renderer.render( scene, camera )
 }
 animate()