import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize";
const customJS = `
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(66845680, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
`; // Put your HTML here:

const customHtml = `
<noscript><div><img src="https://mc.yandex.ru/watch/66845680" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		const script = document.createElement("script");
		script.innerHTML = customJS;
		ref.current.innerHTML = customHtml;
		ref.current.appendChild(script);
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "YaMetrika",
	normalize: true,
	mixins: true
});