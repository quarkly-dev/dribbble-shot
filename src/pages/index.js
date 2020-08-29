import React from "react";
import theme from "theme";
import { Theme, Box, Text, Button, Icon, Strong, Image } from "@quarkly/widgets";
import { StackItem, Override, Menu, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { MdCardGiftcard, MdCardMembership, MdFingerprint, MdSubtitles, MdLockOutline, MdQueuePlayNext, MdDeleteForever, MdBugReport, MdInvertColors, MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Components.YaMetrika />
		<Section background="--color-indigo">
			<Box height="30px" />
			<Box />
			<Section background="--color-light" height="54px">
				<Stack>
					{"    "}
					<StackItem width="50%" display="flex">
						{"        "}
						<Text
							font="italic 900 26px/2 --fontFamily-googleOswald"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--myred"
							letter-spacing="0.3px"
						>
							Robin
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="50%" display="flex">
						<Override slot="StackItemContent" align-items="flex-end" justify-content="flex-end" />
						<Box display="flex" align-items="flex-end" justify-content="center">
							<Menu display="flex" padding="14px 6px 14px 6px" align-items="center" justify-content="center">
								<Override slot="item-index" display="none" />
								<Override slot="item-404" display="none" />
								<Override slot="item" font="16px --fontFamily-googleRubik" text-transform="uppercase" padding="3px 12px 6px 12px" />
								<Override
									slot="link"
									text-decoration-line="initial"
									font="500 13px Rubik, sans-serif"
									color="#007cdf"
									padding="3px 1px 1px 1px"
								/>
								<Override slot="link-registration" color="#000000">
									Registration
								</Override>
								<Override slot="link-login" text-decoration-line="underline" color="--myCyan">
									Login
								</Override>
							</Menu>
							<Button background="--color-myred" padding="30px 24px 30px 24px" border-radius="30px" font="13px/0 --fontFamily-googleRubik">
								Request Demo
							</Button>
						</Box>
						{"            "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Section background="url(https://www.topdom.ru/uploaded/article/bedroom-light-furniture/10.jpg) -751% -184% no-repeat,--color-light">
				<Stack>
					{"    "}
					<StackItem width="65%" display="flex">
						<Override slot="StackItemContent" width="65%" />
						<Box
							display="flex"
							align-items="center"
							justify-content="flex-start"
							position="relative"
							left="-100PX"
						>
							<Components.Cart width="190px">
								<Override slot="image" height="130px" />
							</Components.Cart>
							<Components.Cart margin="0px 32px 0px 0px" background="--color-myCyan">
								<Override slot="image" height="130px" src="https://modelnyeagentstva.com/sites/default/files/modelnoe-agentstvo/3-5/1f4bb929c3fd.jpg" />
							</Components.Cart>
							<Components.Cart background="--color-secondary">
								<Override slot="image" src="https://otvet.imgsmail.ru/download/b34094d5f6a16fdd55a39a3cc58517d1_i-16.jpg" height="130px" />
							</Components.Cart>
						</Box>
						{"        "}{"    "}
					</StackItem>
					{"    "}
					<StackItem width="35%" display="flex" flex-direction="column">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Text
							font="bold 13px/1.3 --fontFamily-googleRubik"
							margin="0px 0px 27px 0px"
							display="block"
							letter-spacing="1px"
							color="--myred"
							width="180px"
						>
							ICONS
						</Text>
						<Stack>
							{"    "}
							<StackItem
								width="100%"
								display="flex"
								height="65px"
								align-items="center"
								justify-content="flex-start"
								border-width="1px 0px"
								border-style="solid"
								border-color="--color-light"
							>
								{"        "}
								<Icon
									category="md"
									icon={MdCardGiftcard}
									width="36px"
									height="36px"
									padding="5px 10px"
									font="36px sans-serif"
								/>
								<Icon
									category="md"
									icon={MdCardMembership}
									width="36px"
									height="36px"
									padding="5px 10px"
									font="36px sans-serif"
								/>
								<Icon
									category="md"
									icon={MdFingerprint}
									width="36px"
									height="36px"
									padding="5px 10px"
									font="36px sans-serif"
								/>
								<Icon
									category="md"
									icon={MdSubtitles}
									width="36px"
									height="36px"
									padding="5px 10px"
									font="36px sans-serif"
								/>
								<Icon
									category="md"
									icon={MdLockOutline}
									width="36px"
									height="36px"
									padding="5px 10px"
									font="36px sans-serif"
								/>
								{"    "}
							</StackItem>
							<StackItem
								width="100%"
								display="flex"
								height="65px"
								align-items="center"
								justify-content="flex-start"
								border-width="1px 0px"
								border-style="solid"
								border-color="--color-light"
							>
								{"        "}
								<Icon
									category="md"
									icon={MdQueuePlayNext}
									width="36px"
									height="36px"
									padding="5px 10px"
									font="36px sans-serif"
								/>
								<Icon
									category="md"
									icon={MdDeleteForever}
									width="36px"
									height="36px"
									padding="5px 10px"
									font="36px sans-serif"
								/>
								<Icon
									category="md"
									icon={MdBugReport}
									width="36px"
									height="36px"
									padding="5px 10px"
									font="36px sans-serif"
								/>
								<Icon
									category="md"
									icon={MdInvertColors}
									width="36px"
									height="36px"
									padding="5px 10px"
									font="36px sans-serif"
								/>
								<Icon
									category="md"
									icon={MdFace}
									width="36px"
									height="36px"
									padding="5px 10px"
									font="36px sans-serif"
								/>
								{"    "}
							</StackItem>
							{"    "}
						</Stack>
						{"    "}
					</StackItem>
				</Stack>
				<Box>
					<Text font="700 13px --fontFamily-googleRubik" color="--myred" text-transform="uppercase">
						TyperFace
					</Text>
				</Box>
				<Stack>
					{"    "}
					<StackItem width="63%" display="flex">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Text font="normal 900 64px/0.7 --fontFamily-googleCrimsonText" margin="0px 0px 0px 0px" display="inline-block">
							The future of the
						</Text>
						<Text font="normal 900 64px/0.7 --fontFamily-googleCrimsonText" margin="0px 0px 0px 0px" display="inline-block">
							office is called
						</Text>
						<Text font="normal 900 64px/0.7 --fontFamily-googleCrimsonText" margin="0px 0px 0px 0px" display="inline-block">
							Robin.
						</Text>
					</StackItem>
					{"    "}
					<Stack
						width="33%"
						background="--color-light"
						padding="10px 20px 0px 20px"
						border-radius="20px"
						height="236px"
						position="relative"
						top="-93px"
						right="-9%"
						flex-direction="column"
					>
						{"    "}
						<StackItem width="65%" display="flex">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text font="600 16px/1.5 --fontFamily-googleRubik" margin="0px 0px 5px 0px" display="inline-block">
								Whiskey Room
							</Text>
							<Text font="13px/1 --fontFamily-googleRubik" margin="0px 0px 0px 0px" display="inline-block" color="#7a7a7a">
								11 Farnsworth, Floor 2
							</Text>
							<Text />
							{"    "}
						</StackItem>
						<Text color="--myCyan" font="14px/1.2 --fontFamily-googleRubik">
							<Strong margin="0px 0px 0px 10px">
								Avalible for h1
							</Strong>
						</Text>
						<Box display="flex" align-items="center" margin="0px 0px 0px 9px">
							<Button border-radius="20px" background="--color-myCyan">
								Book now
							</Button>
							<Text padding="0px 0px 0px 20px" font="600 16px --fontFamily-googleRubik">
								Book later
							</Text>
						</Box>
						{"    "}
						<Image width="74px" height="74px" src="https://www.topdom.ru/uploaded/article/bedroom-light-furniture/10.jpg" border-radius="10px" />
					</Stack>
				</Stack>
			</Section>
			<Box />
			<Box />
			<Box />
		</Section>
		<Components.EmbedHTML />
	</Theme>;
});