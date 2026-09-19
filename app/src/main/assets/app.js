const ICONS={
 home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
 equipment:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17h16v3H4zM6 14h7l2-5h3l2 5v2H6zM8 7h5v5H8z"/></svg>',
 warning:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20z"/><path class="cut" d="M11 9h2v6h-2zm0 8h2v2h-2z"/></svg>',
 search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>',
 gear:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>'
};
const icon=(name)=>'<span class="ui-icon">'+(ICONS[name]||ICONS.gear)+'</span>';
const TYPES={
 'Camiones':['Mercedes-Benz','Volvo'],
 'Excavadoras':['Caterpillar','Volvo','Hitachi','Develon','Komatsu'],
 'Bulldozers':['Caterpillar','Komatsu'],
 'Motoniveladoras':['Caterpillar','John Deere','Komatsu']
};
const MODELS={
 'Mercedes-Benz':['Actros','Actros L','Actros F','Arocs','Atego','Axor','Econic','Unimog'],
 'Volvo':['Seleccionar familia/modelo'],
 'Caterpillar':['Seleccionar modelo exacto'],
 'Komatsu':['Seleccionar modelo exacto'],
 'Hitachi':['Seleccionar modelo exacto'],
 'Develon':['Seleccionar modelo exacto'],
 'John Deere':['Seleccionar modelo exacto']
};
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
const SAFE_GUIDES={
 'Motor y mecánica':[
  ['Antes de intervenir','Estacionar de forma segura, aplicar freno de estacionamiento y seguir el procedimiento del fabricante.'],
  ['Motor caliente','No abrir circuitos presurizados de refrigeración con el motor caliente.'],
  ['Fuga o alarma crítica','Detener la operación cuando exista riesgo de daño, incendio o pérdida importante de fluido y reportar a mantenimiento.']
 ],
 'Electricidad / electrónica':[
  ['Antes de desconectar','Identificar el circuito y seguir el procedimiento de aislamiento indicado para el vehículo.'],
  ['Conectores','Inspección visual de humedad, corrosión, terminales flojos o daño físico sin puentear protecciones.'],
  ['Diagnóstico','No sustituir fusibles por valores distintos ni puentear sensores para mantener la máquina operativa.']
 ],
 'Mantenimiento':[
  ['Identificación','Confirmar modelo, serie/VIN y configuración antes de aplicar capacidades o intervalos.'],
  ['Fluidos','Usar únicamente especificaciones aprobadas para la variante confirmada.'],
  ['Registro','Registrar hallazgos y anomalías para mantenimiento antes de devolver el equipo a servicio.']
 ]
};
const SYSTEMS=[
 ['Información general','Identificación, configuración y datos de referencia'],
 ['Códigos de falla','Buscar por código y sistema; sin interpretar códigos no verificados'],
 ['Motor y mecánica','Motor, refrigeración, admisión y componentes mecánicos'],
 ['Electricidad / electrónica','Sensores, alimentación, módulos y circuitos'],
 ['Hidráulica','Sistemas, funciones y orientación segura'],
 ['Mantenimiento','Intervalos y tareas cuando estén confirmados'],
 ['Símbolos y alertas','Indicadores y advertencias del equipo'],
 ['Documentación','Fuentes y referencias técnicas disponibles']
];
const SYMBOLS=[
 ['Presión de aceite del motor','Alerta relacionada con lubricación. Si permanece activa, aplica el procedimiento seguro del fabricante/faena.'],
 ['Temperatura de refrigerante','Indica temperatura elevada del sistema. No abras componentes calientes o presurizados.'],
 ['Sistema de carga / batería','Indica una condición del sistema eléctrico de carga. Registra alertas y códigos.'],
 ['Temperatura de aceite hidráulico','Puede indicar temperatura elevada del sistema hidráulico. Reduce exigencia y sigue el procedimiento aplicable.'],
 ['Falla de motor / electrónica','Registra el código completo y confirma marca, modelo y configuración antes de diagnosticar.']
];
const CHECKS=['Inspección visual alrededor del equipo','Fugas de aceite, combustible, refrigerante o fluido hidráulico','Nivel de aceite del motor','Nivel de refrigerante según procedimiento seguro','Nivel de combustible','Nivel de aceite hidráulico','Mangueras, cañerías y conexiones','Pasadores, seguros y articulaciones','Orugas, neumáticos y rodado','Luces, balizas y alarma de retroceso','Bocina','Extintor y elementos de emergencia','Cinturón de seguridad','Espejos, cámaras y visibilidad','Tablero sin alarmas críticas al arranque'];
const screen=document.getElementById('screen'),drawer=document.getElementById('drawer'),backBtn=document.getElementById('backBtn');
let stack=[],state={type:null,brand:null,model:null};
try{let savedState=JSON.parse(localStorage.getItem('gravikEquipment')||'null');if(savedState)state={...state,...savedState}}catch(e){}
const saveEquipment=()=>localStorage.setItem('gravikEquipment',JSON.stringify(state));
const EQUIP_LABEL=()=>[state.type,state.brand,state.model].filter(Boolean).join(' · ');
const clearEquipment=()=>{state={type:null,brand:null,model:null};localStorage.removeItem('gravikEquipment')};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const head=(t,p='',crumb='')=>`${crumb?'<div class="crumbs">'+crumb+'</div>':''}<div class="section-title"><h1>${t}</h1><p>${p}</p></div>`;
const safety=()=>'<div class="notice danger"><b>Seguridad primero.</b> GRAVIK orienta al operador y no reemplaza el manual oficial, los procedimientos de faena ni personal técnico autorizado.</div>';
const sourceRule=()=>'<div class="notice verified"><b>Regla GRAVIK:</b> torques, presiones, capacidades, códigos, intervalos y procedimientos específicos solo se mostrarán como confirmados cuando correspondan al fabricante, modelo/configuración y una fuente técnica verificable.</div>';
function card(route,ico,t,s,feature=''){return `<button class="card ${feature}" data-go="${route}"><span class="ico">${ico}</span><b>${t}</b><small>${s}</small></button>`}
function list(route,badge,t,s){return `<button class="list-card" data-go="${route}"><span class="badge">${badge}</span><span class="grow"><b>${t}</b><small>${s}</small></span><span class="chev">›</span></button>`}
function bind(){document.querySelectorAll('[data-go]').forEach(x=>x.onclick=()=>navigate(x.dataset.go));}
function setNav(route){document.querySelectorAll('.bottom-nav [data-route]').forEach(b=>b.classList.toggle('active',b.dataset.route===route));}
function navigate(route,push=true){if(push&&currentRoute)stack.push(currentRoute);currentRoute=route;render(route);backBtn.classList.toggle('hidden',stack.length===0);setNav(route);screen.focus({preventScroll:true});scrollTo(0,0)}
let currentRoute='inicio';
function render(route){
 if(route==='inicio'){screen.innerHTML=`<section class="hero"><div><div class="eyebrow">CONOCIMIENTO QUE MUEVE GIGANTES</div><h1>Tu apoyo técnico en terreno</h1><p>Información clara, navegación rápida y orientación segura para operadores de maquinaria pesada.</p><div class="search"><input id="globalSearch" placeholder="Buscar marca, equipo o sistema..."><button class="primary" id="searchBtn">Buscar</button></div></div></section><div class="status">● Disponible sin conexión <span>V2 en desarrollo</span></div><section class="grid">${card('equipos','▣','Equipos','Tipos, marcas y modelos')}${card('simbolos','${icon('warning')}','Símbolos','Alertas e indicadores')}${card('mecanica','⚙','Mecánica','Sistemas principales')}${card('diagnostico','${icon('search')}','Diagnóstico','Orientación paso a paso')}${card('checklist','✓','Checklist','Inspección preoperacional')}${card('nelson','✦','Nelson Responde','Asistente técnico GRAVIK','feature')}</section>`;bind();document.getElementById('searchBtn').onclick=search;document.getElementById('globalSearch').onkeydown=e=>{if(e.key==='Enter')search()};return}
 if(route==='equipos'){screen.innerHTML=head('Equipos','Primero elige el tipo de maquinaria.')+(state.model?'<div class="notice verified"><b>Equipo actual:</b> '+esc(EQUIP_LABEL())+'<br><button class="chip" id="clearEquipment" style="margin-top:9px">Cambiar equipo</button></div>':'')+Object.entries(TYPES).map(([t,b])=>list('type:'+encodeURIComponent(t),'▣',t,b.length+' marcas iniciales')).join('')+sourceRule();bind();let ce=document.getElementById('clearEquipment');if(ce)ce.onclick=()=>{clearEquipment();render('equipos')};return}
 if(route.startsWith('type:')){state.type=decodeURIComponent(route.slice(5));state.brand=null;state.model=null;saveEquipment();screen.innerHTML=head(state.type,'Selecciona el fabricante.','Equipos <span>›</span> '+esc(state.type))+TYPES[state.type].map(b=>list('brand:'+encodeURIComponent(b),b[0],b,'Abrir biblioteca de '+b)).join('')+sourceRule();bind();return}
 if(route.startsWith('brand:')){state.brand=decodeURIComponent(route.slice(6));state.model=null;if(!state.type){state.type=Object.keys(TYPES).find(t=>TYPES[t].includes(state.brand))||'Equipo';}saveEquipment();let models=MODELS[state.brand]||['Seleccionar modelo exacto'];screen.innerHTML=head(state.brand,'Biblioteca organizada por modelo.','Equipos › '+esc(state.type||'')+' <span>›</span> '+esc(state.brand))+models.map(m=>list('model:'+encodeURIComponent(m),'M',m,'Abrir información por sistemas')).join('')+sourceRule();bind();return}
 if(route.startsWith('model:')){state.model=decodeURIComponent(route.slice(6));if(!state.brand){state.brand=Object.keys(MODELS).find(b=>(MODELS[b]||[]).includes(state.model))||'Marca';}if(!state.type){state.type=Object.keys(TYPES).find(t=>TYPES[t].includes(state.brand))||'Equipo';}saveEquipment();screen.innerHTML=head(state.model,'Selecciona el área técnica que necesitas.',''+esc(state.brand||'Marca')+' <span>›</span> '+esc(state.model))+SYSTEMS.map((s,i)=>list('system:'+i,'0'+(i+1),s[0],s[1])).join('')+sourceRule();bind();return}
 if(route.startsWith('system:')){if(!state.model){screen.innerHTML=head('Selecciona un equipo','Para abrir un sistema técnico primero identifica tipo, marca y modelo.')+'<button class="primary" id="goEquip" style="width:100%">Ir a Equipos</button>'+sourceRule();document.getElementById('goEquip').onclick=()=>navigate('equipos');return}let idx=Number(route.slice(7)),s=SYSTEMS[idx]||SYSTEMS[0];
 if([2,3,5].includes(idx)){let title=s[0],items=((TECHSYSTEMS[(state.brand||'')+'|'+(state.model||'')]||{})[title]||[]);screen.innerHTML=head(title,s[1],esc(state.brand||'Marca')+' › '+esc(state.model||'Modelo')+' <span>›</span> '+esc(title))+'<div class="notice"><b>Identificación obligatoria para valores específicos.</b><br>GRAVIK organiza el sistema sin inventar torques, presiones, capacidades, intervalos ni procedimientos.</div>'+(items.length?items.map(x=>'<button class="list-card tech-item" data-tech="'+esc(x)+'"><span class="badge">SYS</span><span class="grow"><b>'+x+'</b><small>Abrir ficha del subsistema</small></span><span class="chev">›</span></button>').join(''):'<div class="notice">Estructura preparada. Aún no hay contenido específico verificado para esta combinación.</div>')+sourceRule()+safety();document.querySelectorAll('.tech-item').forEach(b=>b.onclick=()=>{let guides=SAFE_GUIDES[title]||[];screen.innerHTML=head(b.dataset.tech,title,esc(state.brand||'Marca')+' › '+esc(state.model||'Modelo')+' <span>›</span> '+esc(title)+' › '+esc(b.dataset.tech))+'<div class="notice verified"><b>Ficha de subsistema.</b><br>Orientación segura separada de especificaciones del fabricante.</div>'+guides.map(g=>'<div class="list-card"><span class="badge">✓</span><span class="grow"><b>'+g[0]+'</b><small>'+g[1]+'</small></span></div>').join('')+'<div class="notice"><b>Especificaciones del fabricante</b><br>Solo se mostrarán cuando estén vinculadas a una fuente aplicable al vehículo identificado.</div>'+sourceRule()+safety();scrollTo(0,0)});return}
 if(idx===7){let docs=DOCREFS[(state.brand||'')+'|'+(state.model||'')]||[];screen.innerHTML=head('Documentación','Referencias oficiales asociadas a la serie del vehículo.',''+esc(state.brand||'Marca')+' › '+esc(state.model||'Modelo')+' <span>›</span> Documentación')+'<div class="notice verified"><b>Fuente primaria:</b> Mercedes-Benz Trucks Service Information. Parte de la información profesional de taller requiere acceso autorizado al portal.</div>'+(docs.length?docs.map(d=>'<div class="list-card"><span class="badge">DOC</span><span class="grow"><b>'+d[0]+'</b><small>'+d[1]+'</small><small>Documento WIS: '+d[2]+'</small></span></div>').join(''):'<div class="notice">Aún no se ha asociado una referencia oficial específica a este modelo.</div>')+sourceRule()+safety();return}
 if(idx===1){screen.innerHTML=head('Códigos de falla','Identifica primero el código completo y el sistema.',''+esc(state.brand||'Marca')+' › '+esc(state.model||'Modelo')+' <span>›</span> Códigos de falla')+'<div class="notice"><b>Identificación antes de interpretar.</b><br>Escribe el código exactamente como aparece en el tablero o herramienta de diagnóstico. No se asignará un significado hasta que exista una referencia verificable para este modelo/configuración.</div><input id="faultCode" class="field" placeholder="Ej.: código completo tal como aparece"><select id="faultSystem" class="field"><option value="">Sistema (si se conoce)</option><option>Motor</option><option>Transmisión</option><option>Frenos / EBS</option><option>Postratamiento / SCR</option><option>Electricidad / electrónica</option></select><button id="faultLookup" class="primary" style="width:100%;margin-top:10px">Verificar código</button><div id="faultResult"></div>'+sourceRule()+safety();document.getElementById('faultLookup').onclick=()=>{let code=document.getElementById('faultCode').value.trim();document.getElementById('faultResult').innerHTML=!code?'<div class="notice">Ingresa el código completo.</div>':'<div class="notice verified"><b>Código registrado: '+esc(code)+'</b><br>La estructura de consulta ya está lista. Si el código no existe todavía en la base técnica verificada, GRAVIK no inventará su significado.</div>'};return}
 if(idx===0){let rows=VERIFIED[(state.brand||'')+'|'+(state.model||'')]||[];screen.innerHTML=head('Información general','Datos identificados y respaldados para esta familia.',''+esc(state.brand||'Marca')+' › '+esc(state.model||'Modelo')+' <span>›</span> Información general')+(rows.length?'<div class="notice verified"><b>Datos con fuente oficial.</b> Los valores que dependen de variante siguen marcados como tales.</div>'+rows.map(r=>'<div class="list-card"><span class="badge">✓</span><span class="grow"><b>'+r[0]+'</b><small>'+r[1]+'</small><small>Fuente: '+r[2]+'</small></span></div>').join(''):'<div class="notice">Todavía no hay especificaciones cargadas para esta combinación. GRAVIK no completará espacios con datos supuestos.</div>')+sourceRule()+safety();return}
screen.innerHTML=head(s[0],s[1],esc(state.brand||'Marca')+' › '+esc(state.model||'Modelo')+' <span>›</span> '+s[0])+`<div class="notice"><b>Ficha técnica preparada para contenido verificado.</b><br>Esta V2 no rellenará esta sección con datos supuestos. Cuando una especificación dependa de variante, motor, serie/VIN o configuración, GRAVIK solicitará esa identificación antes de mostrarla.</div>`+sourceRule()+safety();return}
 if(route==='simbolos'){screen.innerHTML=head('Símbolos','Cada alerta abre su propia ficha, sin amontonar información.')+SYMBOLS.map((s,i)=>list('symbol:'+i,'${icon('warning')}',s[0],'Abrir explicación')).join('')+safety();bind();return}
 if(route.startsWith('symbol:')){let s=SYMBOLS[Number(route.slice(7))];screen.innerHTML=head(s[0],'Ficha de orientación general.','Símbolos <span>›</span> '+s[0])+`<div class="list-card"><span class="badge">!</span><span class="grow"><b>Qué significa</b><small>${s[1]}</small></span></div>`+sourceRule()+safety();return}
 if(route==='mecanica'){screen.innerHTML=head('Mecánica','Selecciona un sistema para entrar a su pantalla.')+['Motor diésel','Sistema hidráulico','Sistema eléctrico / electrónico','Transmisión','Tren de rodaje','Refrigeración'].map((x,i)=>list('mechanic:'+i,'⚙',x,'Abrir módulo')).join('')+safety();bind();return}
 if(route.startsWith('mechanic:')){let a=['Motor diésel','Sistema hidráulico','Sistema eléctrico / electrónico','Transmisión','Tren de rodaje','Refrigeración'],x=a[Number(route.slice(9))];screen.innerHTML=head(x,'Orientación organizada por sistema.','Mecánica <span>›</span> '+x)+sourceRule()+safety();return}
 if(route==='diagnostico'){screen.innerHTML=head('Diagnóstico guiado','Identifica el equipo y el síntoma antes de revisar causas.')+`<select id="diagType" class="field"><option value="">Tipo de maquinaria</option>${Object.keys(TYPES).map(x=>'<option '+(state.type===x?'selected':'')+'>'+x+'</option>').join('')}</select><input id="diagBrand" class="field" placeholder="Marca" value="${esc(state.brand||'')}"><input id="diagModel" class="field" placeholder="Modelo / serie" value="${esc(state.model||'')}"><input id="diagCode" class="field" placeholder="Código o alarma exacta (si existe)"><select id="symptom" class="field"><option>Pérdida de fuerza</option><option>Temperatura alta</option><option>Movimientos hidráulicos lentos</option><option>No arranca</option><option>Humo anormal</option></select><button class="primary" id="startDiag" style="width:100%;margin-top:10px">Iniciar diagnóstico seguro</button><div id="diagResult"></div>`+safety();document.getElementById('startDiag').onclick=()=>{let t=document.getElementById('diagType').value,brand=document.getElementById('diagBrand').value.trim(),model=document.getElementById('diagModel').value.trim(),sym=document.getElementById('symptom').value,code=document.getElementById('diagCode').value.trim();if(t&&brand&&model){state.type=t;state.brand=brand;state.model=model;saveEquipment()}document.getElementById('diagResult').innerHTML=(!t||!brand||!model)?'<div class="notice"><b>Falta identificar el equipo.</b><br>Ingresa tipo, marca y modelo/serie.</div>':'<div class="notice verified"><b>Equipo:</b> '+esc(t)+' · '+esc(brand)+' · '+esc(model)+'<br><b>Síntoma:</b> '+esc(sym)+(code?'<br><b>Código/alarma:</b> '+esc(code):'')+'</div><div class="list-card"><span class="badge">1</span><span class="grow"><b>Registrar la condición</b><small>Anota cuándo aparece, carga de trabajo y alarmas activas.</small></span></div><div class="list-card"><span class="badge">2</span><span class="grow"><b>Comprobaciones del operador</b><small>Realiza solo inspecciones autorizadas y conserva los códigos antes de borrarlos.</small></span></div><div class="notice danger"><b>Detén la operación</b><br>Ante alarma crítica, sobretemperatura severa, incendio/humo, pérdida importante de fluido o cualquier condición insegura, aplica el procedimiento de faena y reporta a mantenimiento.</div>'+sourceRule()};return}
 if(route==='checklist'){let saved=JSON.parse(localStorage.getItem('gravikChecklist')||'[]');screen.innerHTML=head('Checklist preoperacional','Tu avance queda guardado en este dispositivo.')+`<div class="progress"><i id="bar"></i></div><div id="progressText" class="sub"></div>`+CHECKS.map((x,i)=>`<label class="check"><input type="checkbox" data-check="${i}" ${saved.includes(i)?'checked':''}><span>${x}</span></label>`).join('')+`<button class="chip" id="resetCheck">Reiniciar checklist</button>`;const update=()=>{let done=[...document.querySelectorAll('[data-check]:checked')].map(x=>+x.dataset.check);localStorage.setItem('gravikChecklist',JSON.stringify(done));document.getElementById('bar').style.width=(done.length/CHECKS.length*100)+'%';document.getElementById('progressText').textContent=done.length+' de '+CHECKS.length+' puntos revisados';};document.querySelectorAll('[data-check]').forEach(x=>x.onchange=update);document.getElementById('resetCheck').onclick=()=>{localStorage.removeItem('gravikChecklist');document.querySelectorAll('[data-check]').forEach(x=>x.checked=false);update()};update();return}
 if(route==='nelson'){screen.innerHTML=head('Nelson Responde','Asistente técnico de GRAVIK OPERADOR ⚙')+'<div class="notice verified"><b>Equipo actual:</b> '+esc(state.type||'Sin seleccionar')+' · '+esc(state.brand||'Sin marca')+' · '+esc(state.model||'Sin modelo')+'</div><section class="nelson-hero"><div class="nelson-mark">NR</div><div><b>Nelson Responde</b><small>En terreno contigo</small></div></section>'+`<div class="notice"><b>Modo V2:</b> la consulta se estructura antes de responder para evitar mezclar marcas, modelos o especificaciones.</div><select id="nrType" class="field"><option value="">Tipo de maquinaria</option>${Object.keys(TYPES).map(x=>'<option '+(state.type===x?'selected':'')+'>'+x+'</option>').join('')}</select><input id="nrBrand" class="field" placeholder="Marca" value="${esc(state.brand||'')}"><input id="nrModel" class="field" placeholder="Modelo / serie si corresponde" value="${esc(state.model||'')}"><textarea id="nrQuestion" placeholder="Código, alarma, síntoma o consulta técnica..."></textarea><button class="primary" id="askNelson" style="width:100%">Preguntar a Nelson</button><div id="nrAnswer" class="answer"></div>`+sourceRule()+safety();document.getElementById('askNelson').onclick=()=>{let q=document.getElementById('nrQuestion').value.trim(),m=document.getElementById('nrModel').value.trim(),b=document.getElementById('nrBrand').value.trim(),t=document.getElementById('nrType').value;document.getElementById('nrAnswer').innerHTML=!q?'<div class="notice">Escribe el síntoma, código o consulta.</div>':(!t||!b||!m)?'<div class="notice"><b>Nelson Responde:</b> necesito tipo de maquinaria, marca y modelo/serie antes de darte información específica. Así evitamos aplicar datos de otra configuración.</div>':'<div class="notice verified"><b>Consulta preparada.</b> La V2 ya conserva la identificación del equipo antes de entrar a información técnica. La base técnica se incorporará únicamente con fuentes verificadas.</div>'};return}
 if(route==='acerca'){screen.innerHTML=head('Acerca de GRAVIK','Conocimiento que mueve gigantes.')+`<div class="list-card"><span class="badge">G</span><span class="grow"><b>GRAVIK OPERADOR ⚙</b><small>V2 en desarrollo. Aplicación independiente de apoyo para operadores de maquinaria pesada.</small></span></div>`+sourceRule();return}
}
function search(){let q=document.getElementById('globalSearch').value.trim().toLowerCase();if(!q)return;let found=[];Object.entries(TYPES).forEach(([t,bs])=>{if(t.toLowerCase().includes(q))found.push(['type:'+encodeURIComponent(t),'▣',t,'Tipo de maquinaria']);bs.forEach(b=>{if((t+' '+b).toLowerCase().includes(q))found.push(['brand:'+encodeURIComponent(b),b[0],b,t]);(MODELS[b]||[]).forEach(m=>{if((b+' '+m).toLowerCase().includes(q))found.push(['model:'+encodeURIComponent(m),'M',m,b])})})});SYSTEMS.forEach((s,i)=>{if((s[0]+' '+s[1]).toLowerCase().includes(q))found.push(['system:'+i,'SYS',s[0],'Sistema técnico'])});screen.innerHTML=head('Resultados',found.length+' coincidencia(s) para “'+esc(q)+'”')+(found.length?found.slice(0,30).map(x=>list(x[0],x[1],x[2],x[3])).join(''):'<div class="notice">No encontré coincidencias en la biblioteca local actual. Prueba con marca, modelo o sistema.</div>');bind()}
document.querySelectorAll('[data-route]').forEach(e=>e.onclick=()=>{if(drawer.open)drawer.close();stack=[];navigate(e.dataset.route,false)});
document.getElementById('menuBtn').onclick=()=>drawer.showModal();document.getElementById('closeDrawer').onclick=()=>drawer.close();document.getElementById('homeBtn').onclick=()=>{stack=[];navigate('inicio',false)};backBtn.onclick=()=>goBack();function goBack(){let r=stack.pop()||'inicio';currentRoute=r;render(r);backBtn.classList.toggle('hidden',stack.length===0);setNav(r);scrollTo(0,0)};window.addEventListener('popstate',()=>goBack());
render('inicio');setNav('inicio');