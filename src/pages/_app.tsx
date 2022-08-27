import '../styles/globals.css';
import '../styles/tailwind.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
	const url = process.env.PUBLIC_URL;
	return (
		<>
			<DefaultSeo
				defaultTitle="Ansh Goyal"
				titleTemplate="Ansh Goyal • %s"
				description="Ansh Goyal is a second-year Computer Science and Engineering undergraduate at Birla Institute of Technology and Science, Pilani."
				openGraph={{
					type: 'website',
					locale: 'en_IN',
					url: url,
					site_name: 'Ansh Goyal',
					title: 'Ansh Goyal',
					description:
						'Ansh Goyal is a 2nd year undergraduate student majoring in CSE at BITS Pilani.'
				}}
				twitter={{
					handle: '@anshgoyal31',
					cardType: 'summary_large_image'
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
