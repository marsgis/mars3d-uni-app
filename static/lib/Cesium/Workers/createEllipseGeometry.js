define(["./Matrix2-1509208a","./defaultValue-69ee94f4","./EllipseGeometry-eeb1db07","./RuntimeError-ac440aa5","./ComponentDatatype-a9820060","./WebGLConstants-f63312fc","./GeometryOffsetAttribute-4d39b441","./Transforms-bf323bcf","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./EllipseGeometryLibrary-eedf4d0b","./GeometryAttribute-71155085","./GeometryAttributes-1b4134a9","./GeometryInstance-86b030a6","./GeometryPipeline-b15e7fd0","./AttributeCompression-7a823eb1","./EncodedCartesian3-ee8e4156","./IndexDatatype-1cbc8622","./IntersectionTests-f15438d8","./Plane-e3daa19b","./VertexFormat-e68722dd"],(function(e,t,r,n,a,o,i,s,l,b,c,d,f,m,p,u,y,G,E,C,_){"use strict";return function(n,a){return t.defined(a)&&(n=r.EllipseGeometry.unpack(n,a)),n._center=e.Cartesian3.clone(n._center),n._ellipsoid=e.Ellipsoid.clone(n._ellipsoid),r.EllipseGeometry.createGeometry(n)}}));