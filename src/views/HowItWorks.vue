<template>
  <div class="howitworks">
    <Tutorial></Tutorial>
    <div class="contentMore d-flex align-items-start flex-column pt-5 pl-lg-5 pl-md-5">
      <h2 class="mt-3">¿Cómo funciona Blockchain?</h2>
      <p class="pt-0 plsm">Para empezar haga scroll hacia abajo.</p>
    </div>
    <div class="d-flex justify-content-center">
      <div class="d-flex align-items-lg-start align-items-md-start flex-column pr-lg-3">
        <div class="step mt-3 pl-5 pt-2 mb-lg-5 mb-md-5 mb-sm-0 pb-lg-5 pb-md-5 pb-sm-0 fadeInLeft ad-1">
          <p><span class="purple number text-right">1.</span><br>
            Un usuario realiza una operación utilizando Blockchain, para este caso cargar o descentralizar un documento.
            A esta operación se le denomina transacción.
            Cada documento tiene una representación alfanumérica única de acuerdo a su contenido. A esto se le
            denomina “hash”.</p>
        </div>
        <div class="step mtsm2 o mt-5 pt-5 pl-5 fadeInLeft pb-5 ad-1 mb-5">
          <p><span class="green number text-right">3.</span><br>
            La cadena de bloques o Blockchain se compone de nodos, que son computadores ubicados en
            diferentes lugares del planeta, conectados a través de un protocolo que garantiza tener una copia de los
            datos en cada nodo, lo que permite la descentralización de la información.
          </p>
        </div>
        <div class="step mtsm4 mt-5 pt-5 pl-5 fadeInLeft ad-1 pb-5 mb-5">
          <p><span class="orangelight number text-right">5.</span><br>
            En la cadena de bloques es muy difícil eliminar o modificar información, pues para hacerlo la información se
            debe cambiar en el 51% de los nodos al mismo tiempo. Sin embargo en las redes públicas de Blockchain más
            conocidas la gran cantidad de nodos que la componen aseguran que lo que se registre en Blockchain no podrá
            ser eliminado.
          </p>
        </div>
        <div class="step mtsm  mt pt-5 pl-5 fadeInLeft ad-1">
          <p><span class="colorgreen number text-right">7.</span><br>
            En este kit el usuario subirá un documento que se registrará en IPFS el cual arrojará un hash único del
            documento. Este kit tomará ese hash y lo guardará en
            Blockchain y generará otro hash que identificará la transacción realizada por el kit. Tanto el documento como la
            transacción son descentralizados lo que asegura su autenticidad.
          </p>
        </div>
      </div>

      <div class="drawhowitworks d-flex align-items-start pt-5 mt-3">
        <svg class="draw align-self-center"x="0px" y="0" width="300px" height="1500px" viewBox="0 520 250 200" xml:space="preserve">
          <g>
            <g>
	<ellipse class="st8" cx="7.2" cy="12.6" rx="5" ry="5"/>
	<ellipse class="st8" cx="113.7" cy="41.1" rx="5" ry="5"/>
	<polyline class="st8" points="12.2,13 114.2,13 114.2,36 	"/>
</g>
<g>
	<path class="st8" d="M81.2,58.9V46.2H62.6c-1.2,0-2.2,1-2.2,2.2v43.3c0,1.2,1,2.2,2.2,2.2H94c1.2,0,2.2-1,2.2-2.2V61.1H83.5
		C82.2,61.1,81.2,60.1,81.2,58.9z M96.2,57.6v0.6H84.3v-12h0.6c0.6,0,1.2,0.2,1.6,0.7l9.1,9.1C95.9,56.4,96.2,57,96.2,57.6z"/>
	<g>
		<g>
			<g>
				<rect x="77.3" y="70.7" class="st8" width="1" height="9.9"/>
			</g>
			<g>
				<g>
					<polygon class="st8" points="81.9,74 81.2,74.7 77.8,71.1 74.5,74.7 73.7,74 77.8,69.6 					"/>
				</g>
			</g>
		</g>
	</g>
</g>
<g>
	<path class="st8" d="M137.6,75.6h-1v-5.9h-7v5.9h-1V63.3h1v5.5h7v-5.5h1V75.6z"/>
	<path class="st8" d="M147.5,72.2H142l-1.3,3.4h-1.1l4.6-12.3h1l4.6,12.3h-1.1L147.5,72.2z M142.3,71.3h4.9l-2.5-6.7L142.3,71.3z"/>
	<path class="st8" d="M158.6,72.6c0-0.7-0.2-1.2-0.7-1.6c-0.5-0.4-1.4-0.8-2.6-1.1c-1.3-0.4-2.2-0.7-2.8-1.2
		c-0.8-0.6-1.2-1.4-1.2-2.3c0-0.9,0.4-1.7,1.2-2.3c0.8-0.6,1.8-0.9,3-0.9c0.8,0,1.5,0.2,2.2,0.5c0.6,0.3,1.1,0.8,1.5,1.3
		c0.4,0.6,0.5,1.2,0.5,1.9h-1c0-0.8-0.3-1.5-0.9-2s-1.3-0.8-2.3-0.8c-0.9,0-1.7,0.2-2.2,0.6c-0.6,0.4-0.8,1-0.8,1.6
		c0,0.6,0.2,1.1,0.8,1.5c0.5,0.4,1.3,0.7,2.4,1s1.9,0.6,2.5,0.9c0.6,0.3,1,0.7,1.3,1.2c0.3,0.4,0.4,1,0.4,1.6c0,1-0.4,1.7-1.2,2.3
		c-0.8,0.6-1.8,0.9-3.1,0.9c-0.9,0-1.7-0.2-2.4-0.5c-0.7-0.3-1.3-0.7-1.6-1.3s-0.6-1.2-0.6-1.9h1c0,0.9,0.3,1.5,1,2
		c0.6,0.5,1.5,0.8,2.6,0.8c1,0,1.7-0.2,2.3-0.6C158.4,73.8,158.6,73.3,158.6,72.6z"/>
	<path class="st8" d="M171,75.6h-1v-5.9h-7v5.9h-1V63.3h1v5.5h7v-5.5h1V75.6z"/>
</g>
<g>
	<g>
		<rect x="108.8" y="66.9" class="st8" width="9.9" height="1"/>
	</g>
	<g>
		<rect x="108.8" y="72.1" class="st8" width="9.9" height="1"/>
	</g>
</g>
          </g>
          <g><ellipse transform="matrix(1.314360e-02 -0.9999 0.9999 1.314360e-02 69.8069 368.7729)" class="st9" cx="221.7" cy="149" rx="5" ry="5"/>
          <ellipse transform="matrix(1.314360e-02 -0.9999 0.9999 1.314360e-02 -7.295 234.6494)" class="st9" cx="115.2" cy="121" rx="5" ry="5"/>
          <polyline class="st9" points="216.7,149 114.7,149 114.7,126 	"/>
          <ellipse transform="matrix(1.314360e-02 -0.9999 0.9999 1.314360e-02 -81.2886 307.6768)" class="st9" cx="115.2" cy="195" rx="5" ry="5"/>
          <ellipse transform="matrix(1.314359e-02 -0.9999 0.9999 1.314359e-02 49.8078 388.5093)" class="st9" cx="221.7" cy="169" rx="5" ry="5"/>
          <polyline class="st9" points="216.7,169 114.7,169 114.7,190 	"/>
          <path class="st3" d="M116.3,211.2v-4.8h-7c-0.5,0-0.8,0.4-0.8,0.8v16.3c0,0.5,0.4,0.8,0.8,0.8H121c0.5,0,0.8-0.4,0.8-0.8V212h-4.8 C116.7,212,116.3,211.6,116.3,211.2z M121.9,210.7v0.2h-4.5v-4.5h0.2c0.2,0,0.4,0.1,0.6,0.2l3.4,3.4 C121.8,210.2,121.9,210.4,121.9,210.7z"/>
          <polygon class="st9" points="115.1,228 133.1,234 115.1,240 97.1,234 "/>
          <path class="st3" d="M116.5,237.2v-4.8h-7c-0.5,0-0.8,0.4-0.8,0.8v16.3c0,0.5,0.4,0.8,0.8,0.8h11.8c0.5,0,0.8-0.4,0.8-0.8V238h-4.8 C116.9,238,116.5,237.6,116.5,237.2z M122.1,236.7v0.2h-4.5v-4.5h0.2c0.2,0,0.4,0.1,0.6,0.2l3.4,3.4 C122,236.2,122.1,236.4,122.1,236.7z"/>
          <polygon class="st10" points="115.1,260 115.1,240 133.1,234 133.5,254 	"/>
          <polygon class="st10" points="115.1,260 115.1,240 97.1,234 96.8,254 	"/></g>
          <g><ellipse transform="matrix(0.9999 -1.314362e-02 1.314362e-02 0.9999 -3.9953 0.1213)" class="st11" cx="7.2" cy="304" rx="5" ry="5"/>
          <ellipse transform="matrix(0.9999 -1.314362e-02 1.314362e-02 0.9999 -3.6115 1.5186)" class="st11" cx="113.7" cy="275.5" rx="5" ry="5"/>
          <polyline class="st11" points="12.2,303.5 114.2,303.5 114.2,280.5 	"/>
            <g>
	<ellipse class="st12" cx="7.2" cy="323.6" rx="5" ry="5"/>
	<ellipse class="st12" cx="113.7" cy="352.1" rx="5" ry="5"/>
	<polyline class="st12" points="12.2,324 114.2,324 114.2,347 	"/>
</g>
<g>
	<ellipse class="st12" cx="7.2" cy="304" rx="5" ry="5"/>
	<ellipse class="st12" cx="113.7" cy="275.5" rx="5" ry="5"/>
	<polyline class="st12" points="12.2,303.5 114.2,303.5 114.2,280.5 	"/>
</g>
<path class="st12" d="M97.8,364.7H83.3c-0.8,0-1.5,0.7-1.5,1.7v11.1c0,0.9,0.7,1.7,1.5,1.7h5.8l-0.5,1.7h-2.2
	c-0.4,0-0.7,0.4-0.7,0.8s0.3,0.8,0.7,0.8h8.3c0.4,0,0.7-0.4,0.7-0.8s-0.3-0.8-0.7-0.8h-2.2l-0.5-1.7h5.8c0.8,0,1.5-0.7,1.5-1.7
	v-11.1C99.3,365.5,98.6,364.7,97.8,364.7z M97.3,376.9H83.7v-10h13.6V376.9z"/>
<path class="st12" d="M147.5,364.7H133c-0.8,0-1.5,0.7-1.5,1.7v11.1c0,0.9,0.7,1.7,1.5,1.7h5.8l-0.5,1.7h-2.2
	c-0.4,0-0.7,0.4-0.7,0.8s0.3,0.8,0.7,0.8h8.3c0.4,0,0.7-0.4,0.7-0.8s-0.3-0.8-0.7-0.8h-2.2l-0.5-1.7h5.8c0.8,0,1.5-0.7,1.5-1.7
	v-11.1C149,365.5,148.3,364.7,147.5,364.7z M147,376.9h-13.6v-10H147V376.9z"/>
<path class="st12" d="M147.5,410.2H133c-0.8,0-1.5,0.7-1.5,1.7v11.1c0,0.9,0.7,1.7,1.5,1.7h5.8l-0.5,1.7h-2.2
	c-0.4,0-0.7,0.4-0.7,0.8c0,0.5,0.3,0.8,0.7,0.8h8.3c0.4,0,0.7-0.4,0.7-0.8c0-0.5-0.3-0.8-0.7-0.8h-2.2l-0.5-1.7h5.8
	c0.8,0,1.5-0.7,1.5-1.7v-11.1C149,410.9,148.3,410.2,147.5,410.2z M147,422.4h-13.6v-10H147V422.4z"/>
<path class="st12" d="M92.8,410.2H78.2c-0.8,0-1.5,0.7-1.5,1.7v11.1c0,0.9,0.7,1.7,1.5,1.7H84l-0.5,1.7h-2.2c-0.4,0-0.7,0.4-0.7,0.8
	c0,0.5,0.3,0.8,0.7,0.8h8.3c0.4,0,0.7-0.4,0.7-0.8c0-0.5-0.3-0.8-0.7-0.8h-2.2l-0.5-1.7h5.8c0.8,0,1.5-0.7,1.5-1.7v-11.1
	C94.2,410.9,93.6,410.2,92.8,410.2z M92.3,422.4H78.7v-10h13.6V422.4z"/>
<path class="st12" d="M120.1,390.8h-14.6c-0.8,0-1.5,0.7-1.5,1.7v11.1c0,0.9,0.7,1.7,1.5,1.7h5.8l-0.5,1.7h-2.2
	c-0.4,0-0.7,0.4-0.7,0.8s0.3,0.8,0.7,0.8h8.3c0.4,0,0.7-0.4,0.7-0.8s-0.3-0.8-0.7-0.8h-2.2l-0.5-1.7h5.8c0.8,0,1.5-0.7,1.5-1.7
	v-11.1C121.5,391.5,120.9,390.8,120.1,390.8z M119.6,403H106v-10h13.6V403z"/>
<line class="st12" x1="104.1" y1="371.9" x2="126.9" y2="371.9"/>
<line class="st12" x1="131.5" y1="384.7" x2="124.1" y2="389.7"/>
<line class="st12" x1="140.2" y1="387.2" x2="140.2" y2="404.7"/>
<line class="st12" x1="101.7" y1="382.5" x2="106.9" y2="387.7"/>
<line class="st12" x1="124.4" y1="405.1" x2="129.5" y2="410.3"/>
<line class="st12" x1="103.5" y1="421" x2="125.4" y2="421"/>
<line class="st12" x1="94.2" y1="408.5" x2="98.7" y2="404.1"/>
<line class="st12" x1="86.7" y1="389.7" x2="86.7" y2="404.7"/>
          <ellipse transform="matrix(1.314362e-02 -0.9999 0.9999 1.314362e-02 -316.3588 326.4979)" class="st11" cx="7.2" cy="323.5" rx="5" ry="5"/>
          <ellipse transform="matrix(1.314362e-02 -0.9999 0.9999 1.314362e-02 -239.7561 461.1141)" class="st11" cx="113.7" cy="352" rx="5" ry="5"/>
          <polyline class="st11" points="12.2,324 114.2,324 114.2,347 	"/></g>
<g>
	<ellipse class="st0" cx="221.7" cy="481" rx="5" ry="5"/>
	<ellipse class="st0" cx="115.2" cy="453" rx="5" ry="5"/>
	<polyline class="st0" points="216.7,480.9 114.7,480.9 114.7,457.9 	"/>
</g>
<g>
	<ellipse class="st0" cx="115.2" cy="527" rx="5" ry="5"/>
	<ellipse class="st0" cx="221.7" cy="501" rx="5" ry="5"/>
	<polyline class="st0" points="216.7,500.9 114.7,500.9 114.7,521.9 	"/>
</g>
<g>
	<polygon class="st0" points="114.7,597.9 132.7,603.9 114.7,609.9 96.7,603.9 	"/>
	<g>
		<polygon class="st0" points="114.7,629.9 114.7,609.9 132.7,603.9 133.1,623.9 		"/>
		<polygon class="st0" points="114.7,629.9 114.7,609.9 96.7,603.9 96.4,623.9 		"/>
	</g>
	<polygon class="st0" points="114.7,577.9 132.7,583.9 114.7,589.9 96.7,583.9 	"/>
	<g>
		<polygon class="st0" points="114.7,609.9 114.7,589.9 132.7,583.9 133.1,603.9 		"/>
		<polygon class="st0" points="114.7,609.9 114.7,589.9 96.7,583.9 96.4,603.9 		"/>
	</g>
	<polygon class="st0" points="114.7,543.9 132.7,549.9 114.7,555.9 96.7,549.9 	"/>
	<g>
		<polygon class="st0" points="114.7,575.9 114.7,555.9 132.7,549.9 133.1,569.9 		"/>
		<polygon class="st0" points="114.7,575.9 114.7,555.9 96.7,549.9 96.4,569.9 		"/>
	</g>
</g>


          <g>
	<ellipse class="st13" cx="6.1" cy="692.7" rx="5" ry="5"/>
	<ellipse class="st13" cx="112.6" cy="721.2" rx="5" ry="5"/>
	<polyline class="st13" points="11.1,693.1 113.1,693.1 113.1,716.1 	"/>
</g>
<g>
	<ellipse class="st13" cx="6.1" cy="673.1" rx="5" ry="5"/>
	<ellipse class="st13" cx="112.6" cy="644.6" rx="5" ry="5"/>
	<polyline class="st13" points="11.1,672.6 113.1,672.6 113.1,649.6 	"/>
</g>

<g>
	<path class="st13" d="M113.7,735.7c-4.5,0-8.2,3.7-8.2,8.2v4.8h-1.1c-1.5,0-2.8,1.2-2.8,2.8v13.3c0,1.5,1.2,2.8,2.8,2.8h18.7
		c1.5,0,2.8-1.2,2.8-2.8v-13.3c0-1.5-1.2-2.8-2.8-2.8H122v-4.8C121.9,739.4,118.3,735.7,113.7,735.7z M106.6,743.9
		c0-3.9,3.2-7.1,7.1-7.1s7.1,3.2,7.1,7.1v4.8h-14.2V743.9z M123.1,749.8c0.9,0,1.7,0.7,1.7,1.7v13.3c0,0.9-0.7,1.7-1.7,1.7h-18.7
		c-0.9,0-1.7-0.7-1.7-1.7v-13.3c0-0.9,0.7-1.7,1.7-1.7h1.7h15.3H123.1z"/>
	<path class="st13" d="M113.7,752.6c-1.9,0-3.4,1.5-3.4,3.4c0,1.2,0.6,2.3,1.6,2.9v2.8c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-2.8
		c1-0.6,1.6-1.7,1.6-2.9C117.2,754.1,115.6,752.6,113.7,752.6z M114.7,758.1c-0.2,0.1-0.3,0.3-0.3,0.5v3.1c0,0.4-0.3,0.7-0.7,0.7
		c-0.4,0-0.7-0.3-0.7-0.7v-3.1c0-0.2-0.1-0.4-0.3-0.5c-0.8-0.4-1.3-1.2-1.3-2.1c0-1.3,1-2.3,2.3-2.3s2.3,1,2.3,2.3
		C116,756.9,115.5,757.7,114.7,758.1z"/>
</g>

          <g>

          <polyline class="st15" points="216.7,872 114.7,872 114.7,893 	"/>
          <polygon class="st15" points="114.7,954 132.7,960 114.7,966 96.7,960 	"/>
          <polygon class="st15" points="114.7,986 114.7,966 132.7,960 133.1,980 		"/>
          <polygon class="st15" points="114.7,986 114.7,966 96.7,960 96.4,980 		"/>
          <polygon class="st15" points="114.7,934 132.7,940 114.7,946 96.7,940 	"/>
          <polygon class="st15" points="114.7,966 114.7,946 132.7,940 133.1,960 		"/>
          <polygon class="st15" points="114.7,966 114.7,946 96.7,940 96.4,960 		"/>
          <polygon class="st15" points="114.7,914 132.7,920 114.7,926 96.7,920 	"/>
          <polygon class="st15" points="114.7,946 114.7,926 132.7,920 133.1,940 		"/>
          <polygon class="st15" points="114.7,946 114.7,926 96.7,920 96.4,940 		"/>
          <ellipse transform="matrix(1.314360e-02 -0.9999 0.9999 1.314360e-02 -784.2278 1001.4368)" class="st15" cx="115.2" cy="898" rx="5" ry="5"/>
          <ellipse transform="matrix(1.314359e-02 -0.9999 0.9999 1.314359e-02 -653.1314 1082.2694)" class="st15" cx="221.7" cy="872" rx="5" ry="5"/>
          </g>
          <g><ellipse transform="matrix(1.314362e-02 -0.9999 0.9999 1.314362e-02 -1042.296 1042.9557)" class="st16" cx="7.2" cy="1049.5" rx="5" ry="5"/>
          <ellipse transform="matrix(1.314362e-02 -0.9999 0.9999 1.314362e-02 -965.6934 1177.5719)" class="st16" cx="113.7" cy="1078" rx="5" ry="5"/>
          <polyline class="st16" points="12.2,1050 114.2,1050 114.2,1073 	"/>
          <ellipse transform="matrix(0.9999 -1.314362e-02 1.314362e-02 0.9999 -13.5376 0.184)" class="st16" cx="7.2" cy="1030" rx="5" ry="5"/>
          <ellipse transform="matrix(0.9999 -1.314362e-02 1.314362e-02 0.9999 -13.1538 1.5813)" class="st16" cx="113.7" cy="1001.5" rx="5" ry="5"/>
          <polyline class="st16" points="12.2,1029.5 114.2,1029.5 114.2,1006.5 	"/>
          <path class="st5" d="M113.7,1095.3c-4.5,0-8.2,3.7-8.2,8.2v4.8h-1.1c-1.5,0-2.8,1.2-2.8,2.8v13.3c0,1.5,1.2,2.8,2.8,2.8h18.7 c1.5,0,2.8-1.2,2.8-2.8v-13.3c0-1.5-1.2-2.8-2.8-2.8h-1.1v-4.8C121.9,1099,118.3,1095.3,113.7,1095.3z M106.6,1103.5 c0-3.9,3.2-7.1,7.1-7.1c3.9,0,7.1,3.2,7.1,7.1v4.8h-14.2V1103.5z M123.1,1109.4c0.9,0,1.7,0.7,1.7,1.7v13.3c0,0.9-0.7,1.7-1.7,1.7 h-18.7c-0.9,0-1.7-0.7-1.7-1.7v-13.3c0-0.9,0.7-1.7,1.7-1.7h1.7h15.3H123.1z"/>
          <path class="st5" d="M113.7,1112.2c-1.9,0-3.4,1.5-3.4,3.4c0,1.2,0.6,2.3,1.6,2.9v2.8c0,1,0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8 v-2.8c1-0.6,1.6-1.7,1.6-2.9C117.2,1113.7,115.6,1112.2,113.7,1112.2z M114.7,1117.7c-0.2,0.1-0.3,0.3-0.3,0.5v3.1 c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7v-3.1c0-0.2-0.1-0.4-0.3-0.5c-0.8-0.4-1.3-1.2-1.3-2.1c0-1.3,1-2.3,2.3-2.3 c1.3,0,2.3,1,2.3,2.3C116,1116.5,115.5,1117.3,114.7,1117.7z"/>
          </g>
        </svg>
      </div>
      <div class="d-flex align-items-start flex-column pl-5">
        <div class="stepright mtsm6 mt-2 pt-3 pr-5 fadeInRight ad-1">
          <p class="text-left"><span class="color_lightgreen number text-left">2.</span><br>
            Blockchain traduce cadena de bloques y un bloque es un conjunto de transacciones que son confirmadas cada
            cierto tiempo. Cada bloque se encuentra relacionado con el anterior y con el posterior a través de hashes.
          </p>
        </div>
        <div class="stepright mtsm3 mt-2 pr-5 pt-3 pb-5 fadeInRight ad-1 mb-5">
          <p class="text-left"><span class="coloryellow number text-left">4.</span><br>
            No es posible que un usuario modifique información almacenada en la cadena de bloques, sin embargo puede
            registrar un cambio de la misma, generando una trazabilidad de los cambios realizados.
          </p>
        </div>
        <div class="stepright mtsm5  mt-4 pr-5  fadeInRight ad-1">
          <p class="text-left"><span class="orange number text-left">¿Cómo funciona este kit?</span><br>
            Este Kit utiliza IPFS que es un sistema para descentralizar archivos. Similar a un Dropbox descentralizado. El proceso de
            registro de documentos en IPFS es similar al realizado en Blockchain explicado anteriormente, que asegura
            que los documentos no sean modificados.
          </p>
        </div>
      </div>
    </div>
    <div class="row download">
      <div>
        <Tutorial></Tutorial>
      </div>
    </div>
  </div>

</template>

<script>
  import Tutorial from '../components/common/Tutorial'

  export default {
    name: "HowItWorks",
    components: {
      Tutorial
    }
  }
</script>
