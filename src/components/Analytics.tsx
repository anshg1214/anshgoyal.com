import Image from 'next/image';
import Script from 'next/script';

const Analytics = () => {
	return (
		<>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-L7ZDQ5H1TJ" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-L7ZDQ5H1TJ")`}
			</Script>
			<script
				async
				defer
				data-collect-dnt="true"
				src="https://sa.anshgoyal.com/latest.js"
			></script>
			<noscript>
				<Image
					height={1}
					width={1}
					src="https://sa.anshgoyal.com/noscript.gif"
					alt=""
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</noscript>
		</>
	);
};

export default Analytics;
