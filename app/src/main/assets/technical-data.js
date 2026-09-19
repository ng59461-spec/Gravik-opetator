/* GRAVIK technical data. Keep manufacturer-specific facts isolated and source-traceable. */
const VERIFIED={
 'Mercedes-Benz|Actros':[
  ['Familia de motor','OM 471 (según versión/configuración)','Fuente oficial Mercedes-Benz Trucks'],
  ['Cilindrada OM 471','12,8 L','Ficha técnica oficial del Nuevo Actros'],
  ['Arquitectura OM 471','6 cilindros en línea','Ficha técnica oficial del Nuevo Actros'],
  ['Potencias OM 471','310–390 kW (421–530 CV), según versión','Ficha técnica oficial del Nuevo Actros'],
  ['Par máx. OM 471','2100–2600 Nm, según versión','Ficha técnica oficial del Nuevo Actros']
 ],
 'Mercedes-Benz|Actros L':[
  ['OM 471','3.ª generación disponible; la configuración exacta depende del vehículo','Mercedes-Benz Trucks'],
  ['OM 473','15,6 L · 6 cilindros · 380 kW · 2.600 Nm en configuración publicada','Mercedes-Benz Trucks Argentina'],
  ['Cabina L GigaSpace','2.500 mm ancho exterior · 2.300 mm largo','Mercedes-Benz Trucks'],
  ['GigaSpace: altura interior','2.130 mm entre asientos · 2.050 mm delante de asientos','Mercedes-Benz Trucks'],
  ['Serie / documentación PTI','Actros 963 · la generación/código de equipo define el documento aplicable','Mercedes-Benz Trucks Service Information'],
  ['Cabina L BigSpace','2.500 mm ancho exterior · 2.300 mm largo','Mercedes-Benz Trucks'],
  ['BigSpace: altura interior','1.990 mm entre asientos · 1.910 mm delante de asientos','Mercedes-Benz Trucks'],
  ['Acceso de reparación y mantenimiento','XENTRY Truck WIS / Service Information Portal; contenido profesional puede requerir acceso','Mercedes-Benz Trucks Service Information']
 ]
};
const DOCREFS={
 'Mercedes-Benz|Actros':[
  ['PTI Actros generación 5','Serie 963 con código V2B/V2F','AD00.00-W-0001F'],
  ['PTI Actros generación 1','Serie 963 con código V2A, excepto V2B','AD00.00-W-0001H']
 ],
 'Mercedes-Benz|Arocs':[
  ['PTI Arocs generación 5','Serie 964 V2J / 946 V3L','AD00.00-W-0001FA'],
  ['PTI Arocs generación 1','Serie 964 V3K, excepto V2J','AD00.00-W-0001HA']
 ],
 'Mercedes-Benz|Atego':[['PTI Atego','Serie 967','AD00.00-W-0001NA']],
 'Mercedes-Benz|Econic':[['PTI Econic','Serie 956','AD00.00-W-0001NE']],
 'Mercedes-Benz|Unimog':[['PTI Unimog','Serie 405','AD00.00-G-0001UG'],['PTI Unimog','Serie 437','AD00.00-G-0001UH']]
};
const TECHSYSTEMS={
 'Mercedes-Benz|Actros':{
  'Motor y mecánica':['OM 471','Refrigeración','Lubricación','Admisión y escape'],
  'Electricidad / electrónica':['Red de a bordo','Sensores y actuadores','Baterías y carga','Unidades de control'],
  'Mantenimiento':['Identificación por serie/VIN','Fluidos y especificaciones','Inspección preoperacional','Intervalos según configuración']
 },
 'Mercedes-Benz|Actros L':{
  'Motor y mecánica':['OM 471 / OM 473 según configuración','Refrigeración','Lubricación','Admisión y escape'],
  'Electricidad / electrónica':['Red de a bordo','Sensores y actuadores','Baterías y carga','Unidades de control'],
  'Mantenimiento':['Identificación por serie/VIN','Fluidos y especificaciones','Inspección preoperacional','Intervalos según configuración']
 }
};
