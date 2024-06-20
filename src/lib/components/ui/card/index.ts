import { type VariantProps, tv } from "tailwind-variants";


import Root from "./card.svelte";
import Content from "./card-content.svelte";
import Actions from "./card-actions.svelte";
import Title from "./card-title.svelte";
import type { Button as ButtonPrimitive } from 'bits-ui/dist/bits';


const cardVariants = tv({
	base: "card",
	variants: {
		variant: {
			default: "card-normal",
			compact: "card-compact",
			sideImage: "card-side"
		},
		size: {
			default: "w-96",
			// TODO: add size variants (?)
			sm: "",
			lg: "",
		},
	},
	// Non mi tornano le defaultVariants, a cosa servono??
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

type Variant = VariantProps<typeof cardVariants>["variant"];
type Size = VariantProps<typeof cardVariants>["size"];

// Mi sta passando la voglia dopo aver approfondito come vengono tipizzate le primitive usando TS ☠ ☠ ☠
// TODO: crea CardPrimitive a partire da ButtonPrimitive
type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};


export {
	Root,
	Content,
	Actions,
	Title,
	type Props,
	//
	Root as Card,
	Content as CardContent,
	Actions as CardActions,
	Title as CardTitle,
	type Props as ButtonProps,
	cardVariants,
};

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
