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
				additionalLinkTags={[
					{
						rel: 'icon',
						type: 'image/png',
						sizes: '16x16',
						href: '/favicon-16x16.png'
					},
					{
						rel: 'icon',
						type: 'image/png',
						sizes: '32x32',
						href: '/favicon-32x32.png'
					},
					{
						rel: 'apple-touch-icon',
						sizes: '180x180',
						href: '/apple-touch-icon.png'
					},
					{
						rel: 'manifest',
						href: '/site.webmanifest'
					}
				]}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
