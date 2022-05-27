define(["./AxisAlignedBoundingBox-ef345290","./Transforms-bf323bcf","./Matrix2-1509208a","./defaultValue-69ee94f4","./TerrainEncoding-341cc7d2","./ComponentDatatype-a9820060","./OrientedBoundingBox-fa9056b2","./RuntimeError-ac440aa5","./WebMercatorProjection-2d827489","./createTaskProcessorWorker","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./AttributeCompression-7a823eb1","./WebGLConstants-f63312fc","./EllipsoidTangentPlane-330be9cc","./IntersectionTests-f15438d8","./Plane-e3daa19b"],(function(t,e,n,i,o,a,r,s,c,u,h,l,d,g,m,p,f){"use strict";const I=Uint16Array.BYTES_PER_ELEMENT,E=Int32Array.BYTES_PER_ELEMENT,T=Uint32Array.BYTES_PER_ELEMENT,C=Float32Array.BYTES_PER_ELEMENT,M=Float64Array.BYTES_PER_ELEMENT;function x(t,e,n){n=i.defaultValue(n,a.CesiumMath);const o=t.length;for(let i=0;i<o;++i)if(n.equalsEpsilon(t[i],e,a.CesiumMath.EPSILON12))return i;return-1}const N=new n.Cartographic,b=new n.Cartesian3,S=new n.Cartesian3,w=new n.Cartesian3,B=new n.Matrix4;function P(t,e,o,r,s,c,u,h,l,d,g){const m=h.length;for(let p=0;p<m;++p){const f=h[p],I=f.cartographic,E=f.index,T=t.length,C=I.longitude;let M=I.latitude;M=a.CesiumMath.clamp(M,-a.CesiumMath.PI_OVER_TWO,a.CesiumMath.PI_OVER_TWO);const x=I.height-u.skirtHeight;u.hMin=Math.min(u.hMin,x),n.Cartographic.fromRadians(C,M,x,N),d&&(N.longitude+=l),d?p===m-1?N.latitude+=g:0===p&&(N.latitude-=g):N.latitude+=l;const S=u.ellipsoid.cartographicToCartesian(N);t.push(S),e.push(x),o.push(n.Cartesian2.clone(o[E])),r.length>0&&r.push(r[E]),s.length>0&&s.push(s[E]),n.Matrix4.multiplyByPoint(u.toENU,S,b);const w=u.minimum,B=u.maximum;n.Cartesian3.minimumByComponent(b,w,w),n.Cartesian3.maximumByComponent(b,B,B);const P=u.lastBorderPoint;if(i.defined(P)){const t=P.index;c.push(t,T-1,T,T,E,t)}u.lastBorderPoint=f}}return u((function(u,h){u.ellipsoid=n.Ellipsoid.clone(u.ellipsoid),u.rectangle=n.Rectangle.clone(u.rectangle);const l=function(u,h,l,d,g,m,p,f,A,y,R){let _,W,v,F,O,V;i.defined(d)?(_=d.west,W=d.south,v=d.east,F=d.north,O=d.width,V=d.height):(_=a.CesiumMath.toRadians(g.west),W=a.CesiumMath.toRadians(g.south),v=a.CesiumMath.toRadians(g.east),F=a.CesiumMath.toRadians(g.north),O=a.CesiumMath.toRadians(d.width),V=a.CesiumMath.toRadians(d.height));const Y=[W,F],H=[_,v],U=e.Transforms.eastNorthUpToFixedFrame(h,l),k=n.Matrix4.inverseTransformation(U,B);let L,j;A&&(L=c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(W),j=1/(c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(F)-L));const D=1!==m,G=new DataView(u);let z=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;const J=S;J.x=Number.POSITIVE_INFINITY,J.y=Number.POSITIVE_INFINITY,J.z=Number.POSITIVE_INFINITY;const K=w;K.x=Number.NEGATIVE_INFINITY,K.y=Number.NEGATIVE_INFINITY,K.z=Number.NEGATIVE_INFINITY;let Q,X,Z=0,$=0,tt=0;for(X=0;X<4;++X){let t=Z;Q=G.getUint32(t,!0),t+=T;const e=a.CesiumMath.toRadians(180*G.getFloat64(t,!0));t+=M,-1===x(H,e)&&H.push(e);const n=a.CesiumMath.toRadians(180*G.getFloat64(t,!0));t+=M,-1===x(Y,n)&&Y.push(n),t+=2*M;let i=G.getInt32(t,!0);t+=E,$+=i,i=G.getInt32(t,!0),tt+=3*i,Z+=Q+T}const et=[],nt=[],it=new Array($),ot=new Array($),at=new Array($),rt=A?new Array($):[],st=D?new Array($):[],ct=new Array(tt),ut=[],ht=[],lt=[],dt=[];let gt=0,mt=0;for(Z=0,X=0;X<4;++X){Q=G.getUint32(Z,!0),Z+=T;const t=Z,e=a.CesiumMath.toRadians(180*G.getFloat64(Z,!0));Z+=M;const i=a.CesiumMath.toRadians(180*G.getFloat64(Z,!0));Z+=M;const o=a.CesiumMath.toRadians(180*G.getFloat64(Z,!0)),r=.5*o;Z+=M;const u=a.CesiumMath.toRadians(180*G.getFloat64(Z,!0)),h=.5*u;Z+=M;const d=G.getInt32(Z,!0);Z+=E;const g=G.getInt32(Z,!0);Z+=E,Z+=E;const m=new Array(d);for(let t=0;t<d;++t){const s=e+G.getUint8(Z++)*o;N.longitude=s;const d=i+G.getUint8(Z++)*u;N.latitude=d;let g=G.getFloat32(Z,!0);if(Z+=C,0!==g&&g<R&&(g*=-Math.pow(2,y)),g*=6371010,N.height=g,-1!==x(H,s)||-1!==x(Y,d)){const e=x(et,N,n.Cartographic);if(-1!==e){m[t]=nt[e];continue}et.push(n.Cartographic.clone(N)),nt.push(gt)}m[t]=gt,Math.abs(s-_)<r?ut.push({index:gt,cartographic:n.Cartographic.clone(N)}):Math.abs(s-v)<r?lt.push({index:gt,cartographic:n.Cartographic.clone(N)}):Math.abs(d-W)<h?ht.push({index:gt,cartographic:n.Cartographic.clone(N)}):Math.abs(d-F)<h&&dt.push({index:gt,cartographic:n.Cartographic.clone(N)}),z=Math.min(g,z),q=Math.max(g,q),at[gt]=g;const p=l.cartographicToCartesian(N);if(it[gt]=p,A&&(rt[gt]=(c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(d)-L)*j),D){const t=l.geodeticSurfaceNormal(p);st[gt]=t}n.Matrix4.multiplyByPoint(k,p,b),n.Cartesian3.minimumByComponent(b,J,J),n.Cartesian3.maximumByComponent(b,K,K);let f=(s-_)/(v-_);f=a.CesiumMath.clamp(f,0,1);let I=(d-W)/(F-W);I=a.CesiumMath.clamp(I,0,1),ot[gt]=new n.Cartesian2(f,I),++gt}const p=3*g;for(let t=0;t<p;++t,++mt)ct[mt]=m[G.getUint16(Z,!0)],Z+=I;if(Q!==Z-t)throw new s.RuntimeError("Invalid terrain tile.")}it.length=gt,ot.length=gt,at.length=gt,A&&(rt.length=gt);D&&(st.length=gt);const pt=gt,ft=mt,It={hMin:z,lastBorderPoint:void 0,skirtHeight:f,toENU:k,ellipsoid:l,minimum:J,maximum:K};ut.sort((function(t,e){return e.cartographic.latitude-t.cartographic.latitude})),ht.sort((function(t,e){return t.cartographic.longitude-e.cartographic.longitude})),lt.sort((function(t,e){return t.cartographic.latitude-e.cartographic.latitude})),dt.sort((function(t,e){return e.cartographic.longitude-t.cartographic.longitude}));const Et=1e-5;if(P(it,at,ot,rt,st,ct,It,ut,-Et*O,!0,-Et*V),P(it,at,ot,rt,st,ct,It,ht,-Et*V,!1),P(it,at,ot,rt,st,ct,It,lt,Et*O,!0,Et*V),P(it,at,ot,rt,st,ct,It,dt,Et*V,!1),ut.length>0&&dt.length>0){const t=ut[0].index,e=pt,n=dt[dt.length-1].index,i=it.length-1;ct.push(n,i,e,e,t,n)}$=it.length;const Tt=e.BoundingSphere.fromPoints(it);let Ct;i.defined(d)&&(Ct=r.OrientedBoundingBox.fromRectangle(d,z,q,l));const Mt=new o.EllipsoidalOccluder(l).computeHorizonCullingPointPossiblyUnderEllipsoid(h,it,z),xt=new t.AxisAlignedBoundingBox(J,K,h),Nt=new o.TerrainEncoding(h,xt,It.hMin,q,U,!1,A,D,m,p),bt=new Float32Array($*Nt.stride);let St=0;for(let t=0;t<$;++t)St=Nt.encode(bt,St,it[t],ot[t],at[t],void 0,rt[t],st[t]);const wt=ut.map((function(t){return t.index})).reverse(),Bt=ht.map((function(t){return t.index})).reverse(),Pt=lt.map((function(t){return t.index})).reverse(),At=dt.map((function(t){return t.index})).reverse();return Bt.unshift(Pt[Pt.length-1]),Bt.push(wt[0]),At.unshift(wt[wt.length-1]),At.push(Pt[0]),{vertices:bt,indices:new Uint16Array(ct),maximumHeight:q,minimumHeight:z,encoding:Nt,boundingSphere3D:Tt,orientedBoundingBox:Ct,occludeePointInScaledSpace:Mt,vertexCountWithoutSkirts:pt,indexCountWithoutSkirts:ft,westIndicesSouthToNorth:wt,southIndicesEastToWest:Bt,eastIndicesNorthToSouth:Pt,northIndicesWestToEast:At}}(u.buffer,u.relativeToCenter,u.ellipsoid,u.rectangle,u.nativeRectangle,u.exaggeration,u.exaggerationRelativeHeight,u.skirtHeight,u.includeWebMercatorT,u.negativeAltitudeExponentBias,u.negativeElevationThreshold),d=l.vertices;h.push(d.buffer);const g=l.indices;return h.push(g.buffer),{vertices:d.buffer,indices:g.buffer,numberOfAttributes:l.encoding.stride,minimumHeight:l.minimumHeight,maximumHeight:l.maximumHeight,boundingSphere3D:l.boundingSphere3D,orientedBoundingBox:l.orientedBoundingBox,occludeePointInScaledSpace:l.occludeePointInScaledSpace,encoding:l.encoding,vertexCountWithoutSkirts:l.vertexCountWithoutSkirts,indexCountWithoutSkirts:l.indexCountWithoutSkirts,westIndicesSouthToNorth:l.westIndicesSouthToNorth,southIndicesEastToWest:l.southIndicesEastToWest,eastIndicesNorthToSouth:l.eastIndicesNorthToSouth,northIndicesWestToEast:l.northIndicesWestToEast}}))}));