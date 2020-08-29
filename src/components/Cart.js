import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Image, Box } from "@quarkly/widgets";
const defaultProps = {
	"border-radius": "0px 20px 20px 0px",
	"background": "--color-myred",
	"padding": "10px 20PX 10px 20px",
	"margin": "0px 32px 0px 0px",
	"width": "190px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "16px/1.4 --fontFamily-googleOswald",
			"text-align": "right",
			"color": "#ffffff",
			"children": "Robin"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "16px --fontFamily-googleRubik",
			"color": "#ffffff",
			"text-align": "right",
			"children": <>
				The state in{" "}
				<br />
				the office{" "}
				<br />
				2019
			</>
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "flex-end",
			"justify-content": "space-between"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "90px",
			"height": "auto",
			"src": "https://st3.depositphotos.com/12985790/16784/i/450/depositphotos_167843272-stock-photo-businessman-in-formal-suit.jpg"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"color": "#ffffff",
			"font": "13px/1.4 --fontFamily-googleOswald",
			"children": "Guide"
		}
	}
};

const Cart = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Box {...override("box")}>
			<Image {...override("image")} />
			<Text {...override("text2")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(Cart, { ...Box,
	defaultProps,
	overrides
});
export default Cart;