import type { ComponentProps } from "react";
import { cn } from "@/styles/utils";

export type HelloWorldProps = {
	//
} & Omit<ComponentProps<"div">, "children">;

export function HelloWorld({ className, ...props }: HelloWorldProps) {
	return (
		<div className={cn("", className)} {...props}>
			Hello, World!
		</div>
	);
}
