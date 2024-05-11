  // core js

  (async () => {
	let watermarkName = "Selenite";
	let watermarkLink = "https://selenite.cc/";
	document.addEventListener("DOMContentLoaded", async () => {
		if(window.self.location.origin != window.top.location.origin) {
			let watermark = document.createElement("watermark");
			watermark.innerHTML = `Powered by<br>${watermarkName}`;
			let watermarkStyle = document.createElement("style");
			const myFont = new FontFace('Pacifico', 'url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2)');
			await myFont.load();
			document.fonts.add(myFont);
			watermarkStyle.innerHTML = `watermark {
				font-family: "Poppins", sans-serif;
				position: absolute;
				top: 5;
				left: 5;
				padding: 6px;
				border-radius: 5px;
				background-color: rgba(0,0,0,0.2);
				text-align: center;
				text-size: 24px;
				cursor: pointer;
				user-select: none;
			}`
			document.body.appendChild(watermark);
			document.body.appendChild(watermarkStyle);
			watermark.addEventListener("click", () => {
				location.href = watermarkLink;
			})
		}
	})
})();
